import { CurrencyPipe } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { EMPTY, switchMap } from 'rxjs';

import { AuthSession } from '../../auth/auth-session';
import { CartApi } from '../../cart/cart-api';
import { Navbar } from '../../shared/navbar/navbar';
import { StorefrontApi } from '../storefront-api';
import { StorefrontListing } from '../Storefront';

@Component({
  selector: 'app-product-list',
  imports: [CurrencyPipe, Navbar],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList implements OnInit {
  private readonly storefrontApi = inject(StorefrontApi);
  private readonly cartApi = inject(CartApi);
  private readonly authSession = inject(AuthSession);
  private readonly router = inject(Router);

  protected readonly listings = signal<StorefrontListing[]>([]);
  protected readonly isLoading = signal(true);
  protected readonly errorMessage = signal('');
  protected readonly cartMessage = signal('');
  protected readonly cartErrorMessage = signal('');
  protected readonly busyListingId = signal<string | null>(null);

  protected readonly currentPage = signal(1);
  protected readonly totalPages = signal(0);
  protected readonly totalCount = signal(0);

  ngOnInit(): void {
    this.loadStorefront();
  }

  protected loadStorefront(page = 1): void {
    this.isLoading.set(true);
    this.errorMessage.set('');

    this.storefrontApi.getStorefront(page, 20).subscribe({
      next: (response) => {
        this.listings.set(response.items);
        this.currentPage.set(response.page);
        this.totalPages.set(response.totalPages);
        this.totalCount.set(response.totalCount);
        this.isLoading.set(false);
      },

      error: (error: HttpErrorResponse) => {
        console.error('Storefront request failed:', error);
        this.errorMessage.set('Could not load the storefront.');
        this.isLoading.set(false);
      },
    });
  }

  protected addToCart(listing: StorefrontListing): void {
    this.cartMessage.set('');
    this.cartErrorMessage.set('');

    if (!this.authSession.isAuthenticated()) {
      void this.router.navigate(['/login'], {
        queryParams: {
          returnUrl: this.router.url,
        },
      });
      return;
    }

    this.busyListingId.set(listing.listingId);

    this.cartApi.getCart().pipe(
      switchMap((cart) => {
        const currentItem = cart.items.find(
          (item) => item.listingId === listing.listingId,
        );

        const nextQuantity =
          (currentItem?.quantity ?? 0) + 1;

        const availableQuantity =
          currentItem?.availableQuantity ??
          listing.availableQuantity;

        const maximumQuantity = Math.min(
          99,
          Math.max(0, availableQuantity),
        );

        if (nextQuantity > maximumQuantity) {
          this.cartErrorMessage.set(
            'The maximum available quantity is already in your cart.',
          );
          this.busyListingId.set(null);
          return EMPTY;
        }

        return this.cartApi.setItem(
          listing.listingId,
          { quantity: nextQuantity },
        );
      }),
    ).subscribe({
      next: (cart) => {
        const itemCount = cart.items.reduce(
          (total, item) => total + item.quantity,
          0,
        );

        this.cartMessage.set(
          `${listing.productTitle} was added. ` +
          `Your cart now has ${itemCount} ` +
          `${itemCount === 1 ? 'item' : 'items'}.`,
        );
        this.busyListingId.set(null);
      },
      error: (error: HttpErrorResponse) => {
        this.cartErrorMessage.set(
          this.readCartError(error),
        );
        this.busyListingId.set(null);
      },
    });
  }

  private readCartError(error: HttpErrorResponse): string {
    const detail = error.error?.detail;

    if (typeof detail === 'string' && detail.trim()) {
      return detail;
    }

    if (error.status === 0) {
      return 'Cannot reach the API. Check that the API is running.';
    }

    if (error.status === 401) {
      return 'Sign in to add items to your cart.';
    }

    return 'Could not add this item to your cart.';
  }
}
