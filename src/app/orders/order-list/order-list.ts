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
  selector: 'app-order-list',

  imports: [
    CurrencyPipe,
    DatePipe,
    RouterLink,
    Navbar,
  ],

  templateUrl: './order-list.html',
  styleUrl: './order-list.css',
})
export class OrderList implements OnInit {
  private readonly orderApi =
    inject(OrderApi);

  protected readonly orders =
    signal<CustomerOrder[]>([]);

  protected readonly isLoading =
    signal(true);

  protected readonly errorMessage =
    signal('');

  protected readonly page =
    signal(1);

  protected readonly totalCount =
    signal(0);

  protected readonly totalPages =
    signal(0);

  protected readonly pageSize = 20;

  ngOnInit(): void {
    this.loadOrders();
  }

  protected loadOrders(
    page = 1,
  ): void {
    if (page < 1) {
      return;
    }

    this.isLoading.set(true);
    this.errorMessage.set('');

    this.orderApi
      .getOrders(
        page,
        this.pageSize,
      )
      .pipe(
        finalize(() => {
          this.isLoading.set(false);
        }),
      )
      .subscribe({
        next: (response) => {
          this.orders.set(
            response.items,
          );

          this.page.set(
            response.page,
          );

          this.totalCount.set(
            response.totalCount,
          );

          this.totalPages.set(
            Math.ceil(
              response.totalCount /
                response.pageSize,
            ),
          );
        },

        error: (
          error: HttpErrorResponse,
        ) => {
          this.errorMessage.set(
            this.readError(error),
          );
        },
      });
  }

  protected itemCount(
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
        'Sign in to view your orders.'
      );
    }

    if (error.status === 403) {
      return (
        'Your account cannot access orders.'
      );
    }

    return (
      'Could not load your orders.'
    );
  }
}