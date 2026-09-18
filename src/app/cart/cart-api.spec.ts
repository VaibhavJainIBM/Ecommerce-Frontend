import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { CartApi } from './cart-api';
import { Cart } from './cart.models';

describe('CartApi', () => {
  let cartApi: CartApi;
  let httpTesting: HttpTestingController;

  const cart: Cart = {
    cartId: '22222222-2222-2222-2222-222222222222',
    rowVersion: 'AQIDBA==',
    items: [
      {
        listingId: '11111111-1111-1111-1111-111111111111',
        sellerId: '33333333-3333-3333-3333-333333333333',
        sellerDisplayName: 'Example seller',
        productTitle: 'Example product',
        variantName: 'Standard',
        unitPriceAmount: 25,
        currencyCode: 'USD',
        quantity: 2,
        lineTotal: 50,
        availableQuantity: 8,
        isAvailable: true,
      },
    ],
    totalAmount: 50,
    currencyCode: 'USD',
    isCheckoutReady: true,
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CartApi, provideHttpClient(), provideHttpClientTesting()],
    });

    cartApi = TestBed.inject(CartApi);
    httpTesting = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTesting.verify();
  });

  it('gets the current cart', () => {
    let actual: Cart | undefined;

    cartApi.getCart().subscribe((response) => {
      actual = response;
    });

    const request = httpTesting.expectOne('http://localhost:5167/api/cart');

    expect(request.request.method).toBe('GET');

    request.flush(cart);

    expect(actual).toEqual(cart);
  });

  it('sets a listing quantity', () => {
    const listingId = '11111111-1111-1111-1111-111111111111';

    cartApi.setItem(listingId, { quantity: 2 }).subscribe();

    const request = httpTesting.expectOne(`http://localhost:5167/api/cart/items/${listingId}`);

    expect(request.request.method).toBe('PUT');
    expect(request.request.body).toEqual({ quantity: 2 });

    request.flush(cart);
  });

  it('removes a listing from the cart', () => {
    const listingId = '11111111-1111-1111-1111-111111111111';

    cartApi.removeItem(listingId).subscribe();

    const request = httpTesting.expectOne(`http://localhost:5167/api/cart/items/${listingId}`);

    expect(request.request.method).toBe('DELETE');

    request.flush(cart);
  });

  it('clears the cart', () => {
    cartApi.clearCart().subscribe();

    const request = httpTesting.expectOne('http://localhost:5167/api/cart');

    expect(request.request.method).toBe('DELETE');

    request.flush({
      ...cart,
      items: [],
      totalAmount: 0,
      currencyCode: null,
      isCheckoutReady: false,
    });
  });
});
