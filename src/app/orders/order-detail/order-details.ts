import {
  CurrencyPipe,
  DatePipe,
} from '@angular/common';

import {
  HttpErrorResponse,
} from '@angular/common/http';

import {
  Component,
  inject,
  OnInit,
  signal,
} from '@angular/core';

import {
  ActivatedRoute,
  RouterLink,
} from '@angular/router';

import {
  finalize,
} from 'rxjs';

import {
  Navbar,
} from '../../shared/navbar/navbar';

import {
  OrderApi,
} from '../order-api';

import {
  CustomerOrder,
} from '../order.models';

@Component({
  selector: 'app-order-details',

  imports: [
    CurrencyPipe,
    DatePipe,
    RouterLink,
    Navbar,
  ],

  templateUrl: './order-details.html',
  styleUrl: './order-details.css',
})
export class OrderDetails
  implements OnInit {

  private readonly orderApi =
    inject(OrderApi);

  private readonly route =
    inject(ActivatedRoute);

  protected readonly order =
    signal<CustomerOrder | null>(null);

  protected readonly isLoading =
    signal(true);

  protected readonly isCancelling =
    signal(false);

  protected readonly errorMessage =
    signal('');

  protected readonly successMessage =
    signal('');

  ngOnInit(): void {
    const orderId =
      this.route.snapshot.paramMap
        .get('orderId');

    if (!orderId) {
      this.errorMessage.set(
        'Order ID is missing.',
      );

      this.isLoading.set(false);

      return;
    }

    this.loadOrder(orderId);
  }

  protected loadOrder(
    orderId: string,
  ): void {
    this.isLoading.set(true);
    this.errorMessage.set('');

    this.orderApi
      .getOrder(orderId)
      .pipe(
        finalize(() => {
          this.isLoading.set(false);
        }),
      )
      .subscribe({
        next: (order) => {
          this.order.set(order);
        },

        error: (
          error: HttpErrorResponse,
        ) => {
          this.errorMessage.set(
            this.readError(
              error,
              'Could not load this order.',
            ),
          );
        },
      });
  }

  protected canCancel(): boolean {
    return (
      this.order()?.status ===
      'PendingPayment'
    );
  }

  protected cancelOrder(): void {
    const currentOrder =
      this.order();

    if (
      !currentOrder ||
      !this.canCancel()
    ) {
      return;
    }

    const confirmed =
      globalThis.confirm(
        `Cancel order ${currentOrder.orderNumber}?`,
      );

    if (!confirmed) {
      return;
    }

    this.isCancelling.set(true);

    this.errorMessage.set('');
    this.successMessage.set('');

    this.orderApi
      .cancelOrder(
        currentOrder.orderId,
      )
      .pipe(
        finalize(() => {
          this.isCancelling.set(false);
        }),
      )
      .subscribe({
        next: (updatedOrder) => {
          this.order.set(
            updatedOrder,
          );

          if (
            updatedOrder.status ===
            'Cancelled'
          ) {
            this.successMessage.set(
              'Order cancelled successfully.',
            );
          } else if (
            updatedOrder.status ===
            'Expired'
          ) {
            this.successMessage.set(
              'This order had already expired.',
            );
          }
        },

        error: (
          error: HttpErrorResponse,
        ) => {
          this.errorMessage.set(
            this.readError(
              error,
              'Could not cancel this order.',
            ),
          );
        },
      });
  }

  protected totalQuantity(
    order: CustomerOrder,
  ): number {
    return order.items.reduce(
      (total, item) =>
        total + item.quantity,
      0,
    );
  }

  private readError(
    error: HttpErrorResponse,
    fallback: string,
  ): string {
    const detail =
      error.error?.detail;

    if (
      typeof detail === 'string' &&
      detail.trim()
    ) {
      return detail;
    }

    if (error.status === 0) {
      return (
        'Cannot reach the orders API.'
      );
    }

    if (error.status === 401) {
      return (
        'Sign in to access this order.'
      );
    }

    if (error.status === 403) {
      return (
        'Your account cannot access orders.'
      );
    }

    if (error.status === 404) {
      return (
        'This order could not be found.'
      );
    }

    if (error.status === 409) {
      return (
        'The order state changed. Refresh and try again.'
      );
    }

    return fallback;
  }
}