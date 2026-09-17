import {
  CurrencyPipe,
  DatePipe,
} from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import {
  Component,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { finalize } from 'rxjs';

import { SellerApi } from '../seller-api';
import { SellerContext } from '../seller-context';
import { getSellerError } from '../seller-error';
import {
  SellerOrder,
  ShippingAddress,
} from '../seller.models';

@Component({
  selector: 'app-seller-orders',
  imports: [
    CurrencyPipe,
    DatePipe,
  ],
  templateUrl: './seller-orders.html',
  styleUrl: './seller-orders.css',
})
export class SellerOrders implements OnInit {
  private readonly sellerApi = inject(SellerApi);

  protected readonly sellerContext =
    inject(SellerContext);

  protected readonly orders =
    signal<SellerOrder[]>([]);

  protected readonly page = signal(1);
  protected readonly totalCount = signal(0);
  protected readonly pageSize = 20;

  protected readonly isLoading = signal(false);
  protected readonly busyOrderId =
    signal<string | null>(null);

  protected readonly errorMessage = signal('');
  protected readonly successMessage = signal('');

  ngOnInit(): void {
    this.loadOrders();
  }

  private get sellerId(): string {
    const sellerId =
      this.sellerContext.selected()?.sellerId;

    if (!sellerId) {
      throw new Error('No seller is selected.');
    }

    return sellerId;
  }

  protected loadOrders(page = 1): void {
    if (page < 1) {
      return;
    }

    this.isLoading.set(true);
    this.errorMessage.set('');

    this.sellerApi
      .getOrders(
        this.sellerId,
        page,
        this.pageSize,
      )
      .pipe(
        finalize(() => this.isLoading.set(false)),
      )
      .subscribe({
        next: (response) => {
          this.orders.set(response.items);
          this.page.set(response.page);
          this.totalCount.set(response.totalCount);
        },
        error: (error: HttpErrorResponse) => {
          this.errorMessage.set(
            getSellerError(
              error,
              'Could not load orders.',
            ),
          );
        },
      });
  }

  protected hasNextPage(): boolean {
    return (
      this.page() * this.pageSize <
      this.totalCount()
    );
  }

  protected canShip(order: SellerOrder): boolean {
    return (
      (
        order.status === 'Paid' ||
        order.status === 'PartiallyShipped'
      ) &&
      order.items.some(
        (item) => item.shippedAtUtc === null,
      )
    );
  }

  protected ship(order: SellerOrder): void {
    if (
      !this.canShip(order) ||
      !window.confirm(
        'Ship all unshipped items in this order?',
      )
    ) {
      return;
    }

    this.busyOrderId.set(order.orderId);
    this.errorMessage.set('');
    this.successMessage.set('');

    this.sellerApi
      .shipOrder(this.sellerId, order.orderId)
      .pipe(
        finalize(() =>
          this.busyOrderId.set(null),
        ),
      )
      .subscribe({
        next: (updated) => {
          this.orders.update((orders) =>
            orders.map((current) =>
              current.orderId === updated.orderId
                ? updated
                : current,
            ),
          );

          this.successMessage.set(
            'Order items shipped.',
          );
        },
        error: (error: HttpErrorResponse) => {
          this.errorMessage.set(
            getSellerError(
              error,
              'Could not ship the order.',
            ),
          );
        },
      });
  }

  protected formatAddress(
    address: ShippingAddress,
  ): string {
    return [
      address.line1,
      address.line2,
      address.city,
      address.stateOrProvince,
      address.postalCode,
      address.countryCode,
    ]
      .filter((value): value is string =>
        Boolean(value),
      )
      .join(', ');
  }
}
