import {
  CurrencyPipe,
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
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import {
  Router,
  RouterLink,
} from '@angular/router';

import {
  finalize,
} from 'rxjs';

import {
  AuthSession,
} from '../../auth/auth-session';

import {
  CartApi,
} from '../../cart/cart-api';

import {
  Cart,
} from '../../cart/cart.models';

import {
  Navbar,
} from '../../shared/navbar/navbar';

import {
  OrderApi,
} from '../order-api';

import {
  CheckoutRequest,
} from '../order.models';

@Component({
  selector: 'app-checkout',

  imports: [
    CurrencyPipe,
    ReactiveFormsModule,
    RouterLink,
    Navbar,
  ],

  templateUrl: './checkout.html',
  styleUrl: './checkout.css',
})
export class Checkout
  implements OnInit {

  private readonly cartApi =
    inject(CartApi);

  private readonly orderApi =
    inject(OrderApi);

  private readonly authSession =
    inject(AuthSession);

  private readonly router =
    inject(Router);

  protected readonly cart =
    signal<Cart | null>(null);

  protected readonly isLoading =
    signal(true);

  protected readonly isSubmitting =
    signal(false);

  protected readonly errorMessage =
    signal('');

  /*
   * Keep this key for retries of the same checkout.
   */
  private readonly idempotencyKey =
    globalThis.crypto.randomUUID();

  protected readonly checkoutForm =
    new FormGroup({
      recipientName:
        new FormControl(
          '',
          {
            nonNullable: true,
            validators: [
              Validators.required,
              Validators.maxLength(150),
            ],
          },
        ),

      phone:
        new FormControl(
          '',
          {
            nonNullable: true,
            validators: [
              Validators.required,
              Validators.maxLength(32),
            ],
          },
        ),

      line1:
        new FormControl(
          '',
          {
            nonNullable: true,
            validators: [
              Validators.required,
              Validators.maxLength(200),
            ],
          },
        ),

      line2:
        new FormControl(
          '',
          {
            nonNullable: true,
            validators: [
              Validators.maxLength(200),
            ],
          },
        ),

      city:
        new FormControl(
          '',
          {
            nonNullable: true,
            validators: [
              Validators.required,
              Validators.maxLength(100),
            ],
          },
        ),

      stateOrProvince:
        new FormControl(
          '',
          {
            nonNullable: true,
            validators: [
              Validators.required,
              Validators.maxLength(100),
            ],
          },
        ),

      postalCode:
        new FormControl(
          '',
          {
            nonNullable: true,
            validators: [
              Validators.required,
              Validators.maxLength(20),
            ],
          },
        ),

      countryCode:
        new FormControl(
          'IN',
          {
            nonNullable: true,
            validators: [
              Validators.required,
              Validators.pattern(
                /^[A-Za-z]{2}$/,
              ),
            ],
          },
        ),
    });

  ngOnInit(): void {
    const user =
      this.authSession.user();

    if (user) {
      this.checkoutForm.controls
        .recipientName
        .setValue(
          `${user.firstName} ${user.lastName}`.trim(),
        );
    }

    this.loadCart();
  }

  protected loadCart(): void {
    this.isLoading.set(true);
    this.errorMessage.set('');

    this.cartApi
      .getCart()
      .pipe(
        finalize(() =>
          this.isLoading.set(false),
        ),
      )
      .subscribe({
        next: (cart) => {
          this.cart.set(cart);
        },

        error: (
          error: HttpErrorResponse,
        ) => {
          this.errorMessage.set(
            this.readError(
              error,
              'Could not load your cart.',
            ),
          );
        },
      });
  }

  protected checkout(): void {
    const cart =
      this.cart();

    this.errorMessage.set('');

    if (
      !cart ||
      cart.items.length === 0
    ) {
      this.errorMessage.set(
        'Your cart is empty.',
      );

      return;
    }

    if (
      !cart.isCheckoutReady ||
      !cart.rowVersion ||
      !cart.currencyCode
    ) {
      this.errorMessage.set(
        'Your cart is not ready for checkout. Refresh the cart.',
      );

      return;
    }

    if (
      this.checkoutForm.invalid
    ) {
      this.checkoutForm
        .markAllAsTouched();

      this.errorMessage.set(
        'Complete the shipping details.',
      );

      return;
    }

    const value =
      this.checkoutForm.getRawValue();

    const request:
      CheckoutRequest = {
        cartRowVersion:
          cart.rowVersion,

        expectedTotalAmount:
          cart.totalAmount,

        currencyCode:
          cart.currencyCode,

        recipientName:
          value.recipientName.trim(),

        phone:
          value.phone.trim(),

        shippingAddress: {
          line1:
            value.line1.trim(),

          line2:
            value.line2.trim()
              ? value.line2.trim()
              : null,

          city:
            value.city.trim(),

          stateOrProvince:
            value.stateOrProvince.trim(),

          postalCode:
            value.postalCode.trim(),

          countryCode:
            value.countryCode
              .trim()
              .toUpperCase(),
        },
      };

    this.isSubmitting.set(true);

    this.orderApi
      .checkout(
        request,
        this.idempotencyKey,
      )
      .pipe(
        finalize(() =>
          this.isSubmitting.set(false),
        ),
      )
      .subscribe({
        next: (order) => {
          void this.router.navigate([
            '/orders',
            order.orderId,
          ]);
        },

        error: (
          error: HttpErrorResponse,
        ) => {
          this.errorMessage.set(
            this.readError(
              error,
              'Checkout failed.',
            ),
          );
        },
      });
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
        'Cannot reach the API. ' +
        'Retry the checkout without changing the details.'
      );
    }

    if (error.status === 401) {
      return 'Sign in before checking out.';
    }

    if (error.status === 403) {
      return 'This account cannot place orders.';
    }

    if (error.status === 409) {
      return (
        'Your cart changed or stock/prices changed. ' +
        'Return to the cart and refresh it.'
      );
    }

    return fallback;
  }
}