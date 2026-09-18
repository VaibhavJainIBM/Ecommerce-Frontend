import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Cart, SetCartItemRequest } from './cart.models';

@Injectable({
  providedIn: 'root',
})
export class CartApi {
  private readonly http = inject(HttpClient);

  private readonly cartUrl = 'http://localhost:5167/api/cart';

  getCart(): Observable<Cart> {
    return this.http.get<Cart>(this.cartUrl);
  }

  setItem(listingId: string, request: SetCartItemRequest): Observable<Cart> {
    return this.http.put<Cart>(`${this.cartUrl}/items/${listingId}`, request);
  }

  removeItem(listingId: string): Observable<Cart> {
    return this.http.delete<Cart>(`${this.cartUrl}/items/${listingId}`);
  }

  clearCart(): Observable<Cart> {
    return this.http.delete<Cart>(this.cartUrl);
  }
}
