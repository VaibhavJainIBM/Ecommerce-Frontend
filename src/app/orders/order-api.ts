import {
  HttpClient,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';

import {
  inject,
  Injectable,
} from '@angular/core';

import {
  Observable,
} from 'rxjs';

import {
  CheckoutRequest,
  CustomerOrder,
  PagedCustomerOrders,
} from './order.models';

@Injectable({
  providedIn: 'root',
})
export class OrderApi {
  private readonly http =
    inject(HttpClient);

  private readonly ordersUrl =
    'http://localhost:5167/api/orders';

  checkout(
    request: CheckoutRequest,
    idempotencyKey: string,
  ): Observable<CustomerOrder> {
    const headers =
      new HttpHeaders().set(
        'Idempotency-Key',
        idempotencyKey,
      );

    return this.http.post<CustomerOrder>(
      `${this.ordersUrl}/checkout`,
      request,
      { headers },
    );
  }

  getOrders(
    page = 1,
    pageSize = 20,
  ): Observable<PagedCustomerOrders> {
    const params =
      new HttpParams()
        .set(
          'page',
          String(page),
        )
        .set(
          'pageSize',
          String(pageSize),
        );

    return this.http.get<PagedCustomerOrders>(
      this.ordersUrl,
      { params },
    );
  }

  getOrder(
    orderId: string,
  ): Observable<CustomerOrder> {
    return this.http.get<CustomerOrder>(
      `${this.ordersUrl}/${orderId}`,
    );
  }

  cancelOrder(
    orderId: string,
  ): Observable<CustomerOrder> {
    return this.http.post<CustomerOrder>(
      `${this.ordersUrl}/${orderId}/cancel`,
      {},
    );
  }
}