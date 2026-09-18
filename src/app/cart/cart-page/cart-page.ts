import { CurrencyPipe } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import {
  Component,
  computed,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { RouterLink } from '@angular/router';

import { Navbar } from '../../shared/navbar/navbar';
import { CartApi } from '../cart-api';
import { Cart, CartItem } from '../cart.models';

@Component({
  selector: 'app-cart-page',
  imports: [
    CurrencyPipe,
    Navbar,
    RouterLink,
  ],
  templateUrl: './cart-page.html',
  styleUrl: './cart-page.css',
})
export class CartPage implements OnInit {
  private readonly cartApi = inject(CartApi);

  protected readonly cart = signal<Cart | null>(null);
  protected readonly isLoading = signal(true);
  protected readonly isClearing = signal(false);
  protected readonly busyListingId = signal<string | null>(null);
  protected readonly errorMessage = signal('');
  protected readonly successMessage = signal('');

  protected readonly itemCount = computed(() =>
    this.cart()?.items.reduce(
      (total, item) => total + item.quantity,
      0,
    ) ?? 0,
  );

  ngOnInit(): void {
    this.loadCart();
  }

  protected loadCart(): void {
    this.isLoading.set(true);
    this.errorMessage.set('');

    this.cartApi.getCart().subscribe({
      next: (cart) => {
        this.cart.set(cart);
        this.isLoading.set(false);
      },
      error: (error: HttpErrorResponse) => {
        this.errorMessage.set(
          this.readCartError(
            error,
            'Could not load your cart.',
          ),
        );
        this.isLoading.set(false);
      },
    });
  }

  protected updateQuantity(
    item: CartItem,
    quantity: number,
  ): void {
    const maximum = this.maximumQuantity(item);
    const normalizedQuantity =
      item.quantity > maximum &&
      quantity < item.quantity &&
      maximum >= 1
        ? maximum
        : quantity;

    if (
      normalizedQuantity === item.quantity ||
      normalizedQuantity < 1 ||
      normalizedQuantity > maximum
    ) {
      return;
    }

    this.beginItemMutation(item.listingId);

    this.cartApi
      .setItem(item.listingId, {
        quantity: normalizedQuantity,
      })
      .subscribe({
        next: (cart) => {
          this.finishMutation(
            cart,
            'Cart quantity updated.',
          );
        },
        error: (error: HttpErrorResponse) => {
          this.failItemMutation(
            error,
            'Could not update this cart item.',
          );
        },
      });
  }

  protected removeItem(item: CartItem): void {
    this.beginItemMutation(item.listingId);

    this.cartApi
      .removeItem(item.listingId)
      .subscribe({
        next: (cart) => {
          this.finishMutation(
            cart,
            `${item.productTitle} was removed from your cart.`,
          );
        },
        error: (error: HttpErrorResponse) => {
          this.failItemMutation(
            error,
            'Could not remove this cart item.',
          );
        },
      });
  }

  protected clearCart(): void {
    const cart = this.cart();

    if (
      !cart ||
      cart.items.length === 0 ||
      !globalThis.confirm(
        'Remove every item from your cart?',
      )
    ) {
      return;
    }

    this.isClearing.set(true);
    this.errorMessage.set('');
    this.successMessage.set('');

    this.cartApi.clearCart().subscribe({
      next: (updatedCart) => {
        this.cart.set(updatedCart);
        this.isClearing.set(false);
        this.successMessage.set('Your cart was cleared.');
      },
      error: (error: HttpErrorResponse) => {
        this.errorMessage.set(
          this.readCartError(
            error,
            'Could not clear your cart.',
          ),
        );
        this.isClearing.set(false);
      },
    });
  }

  protected maximumQuantity(item: CartItem): number {
    return Math.min(
      99,
      Math.max(0, item.availableQuantity),
    );
  }

  private beginItemMutation(listingId: string): void {
    this.busyListingId.set(listingId);
    this.errorMessage.set('');
    this.successMessage.set('');
  }

  private finishMutation(
    cart: Cart,
    message: string,
  ): void {
    this.cart.set(cart);
    this.busyListingId.set(null);
    this.successMessage.set(message);
  }

  private failItemMutation(
    error: HttpErrorResponse,
    fallback: string,
  ): void {
    this.errorMessage.set(
      this.readCartError(error, fallback),
    );
    this.busyListingId.set(null);
  }

  private readCartError(
    error: HttpErrorResponse,
    fallback: string,
  ): string {
    const detail = error.error?.detail;

    if (typeof detail === 'string' && detail.trim()) {
      return detail;
    }

    const errors = error.error?.errors as
      | Record<string, string[]>
      | undefined;

    const messages = errors
      ? Object.values(errors).flat()
      : [];

    if (messages.length > 0) {
      return messages.join(' ');
    }

    if (error.status === 0) {
      return 'Cannot reach the API. Check that the API is running.';
    }

    if (error.status === 401) {
      return 'Sign in to view your cart.';
    }

    if (error.status === 403) {
      return 'This account cannot use a cart.';
    }

    if (error.status === 409) {
      return `${fallback} Refresh the cart and try again.`;
    }

    return fallback;
  }
}
