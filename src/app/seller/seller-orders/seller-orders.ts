import {
  CurrencyPipe,
  DatePipe,
} from '@angular/common';

import {
  Component,
  inject,
  OnInit,
  signal,
} from '@angular/core';

import { HttpErrorResponse } from '@angular/common/http';

import { finalize } from 'rxjs';

import { SellerApi } from '../seller-api';
import { SellerContext } from '../seller-context';

import {
  SellerOrder,
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
  private readonly sellerApi =
    inject(SellerApi);

  protected readonly sellerContext =
    inject(SellerContext);

  protected readonly orders =
    signal<SellerOrder[]>([]);

  protected readonly selectedOrder =
    signal<SellerOrder | null>(null);

  protected readonly isLoading =
    signal(false);

  protected readonly errorMessage =
    signal('');

  protected readonly page =
    signal(1);

  protected readonly totalCount =
    signal(0);

  protected readonly pageSize = 20;

  protected readonly totalPages =
    signal(0);

  ngOnInit(): void {
    if (!this.sellerContext.isOwner()) {
      return;
    }

    this.loadOrders();
  }

  private get sellerId(): string {
    const seller =
      this.sellerContext.selected();

    if (!seller) {
      throw new Error(
        'No seller is selected.',
      );
    }

    return seller.sellerId;
  }

  protected loadOrders(
    page = 1,
  ): void {
    if (
      page < 1 ||
      !this.sellerContext.isOwner()
    ) {
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
        finalize(() =>
          this.isLoading.set(false),
        ),
      )
      .subscribe({
        next: (response) => {
          this.orders.set(response.items);

          this.page.set(response.page);

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
          if (error.status === 403) {
            this.errorMessage.set(
              'Owner access is required to view seller orders.',
            );

            return;
          }

          if (error.status === 0) {
            this.errorMessage.set(
              'Cannot reach the orders API.',
            );

            return;
          }

          this.errorMessage.set(
            'Could not load seller orders.',
          );
        },
      });
  }

  protected openOrder(
    order: SellerOrder,
  ): void {
    this.selectedOrder.set(order);
  }

  protected closeOrder(): void {
    this.selectedOrder.set(null);
  }
}