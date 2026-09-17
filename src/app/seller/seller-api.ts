import {
  HttpClient,
  HttpParams,
} from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import {
  CreateSellerListingRequest,
  MySeller,
  PagedSellerListings,
  PagedSellerOrders,
  SellerListing,
  SellerListingQuery,
  SellerListingRowVersionRequest,
  UpdateSellerListingPriceRequest,
} from './seller.models';

@Injectable({
  providedIn: 'root',
})
export class SellerApi {
  private readonly http = inject(HttpClient);

  private readonly sellersUrl =
    'http://localhost:5167/api/sellers';

  getMine(): Observable<MySeller[]> {
    return this.http.get<MySeller[]>(
      `${this.sellersUrl}/mine`,
    );
  }

  getListings(
    sellerId: string,
    query: SellerListingQuery = {},
  ): Observable<PagedSellerListings> {
    let params = new HttpParams()
      .set('page', String(query.page ?? 1))
      .set('pageSize', String(query.pageSize ?? 20));

    if (query.status !== undefined) {
      params = params.set('status', query.status);
    }

    return this.http.get<PagedSellerListings>(
      `${this.sellersUrl}/${sellerId}/listings`,
      { params },
    );
  }

  getListing(
    sellerId: string,
    listingId: string,
  ): Observable<SellerListing> {
    return this.http.get<SellerListing>(
      `${this.sellersUrl}/${sellerId}/listings/${listingId}`,
    );
  }

  createListing(
    sellerId: string,
    request: CreateSellerListingRequest,
  ): Observable<SellerListing> {
    return this.http.post<SellerListing>(
      `${this.sellersUrl}/${sellerId}/listings`,
      request,
    );
  }

  updateListingPrice(
    sellerId: string,
    listingId: string,
    request: UpdateSellerListingPriceRequest,
  ): Observable<SellerListing> {
    return this.http.patch<SellerListing>(
      `${this.sellersUrl}/${sellerId}/listings/${listingId}/price`,
      request,
    );
  }

  submitListingForReview(
    sellerId: string,
    listingId: string,
    request: SellerListingRowVersionRequest,
  ): Observable<SellerListing> {
    return this.http.post<SellerListing>(
      `${this.sellersUrl}/${sellerId}/listings/${listingId}/submit-for-review`,
      request,
    );
  }

  archiveListing(
    sellerId: string,
    listingId: string,
    request: SellerListingRowVersionRequest,
  ): Observable<SellerListing> {
    return this.http.post<SellerListing>(
      `${this.sellersUrl}/${sellerId}/listings/${listingId}/archive`,
      request,
    );
  }

  getOrders(
    sellerId: string,
    page = 1,
    pageSize = 20,
  ): Observable<PagedSellerOrders> {
    const params = new HttpParams()
      .set('page', String(page))
      .set('pageSize', String(pageSize));

    return this.http.get<PagedSellerOrders>(
      `${this.sellersUrl}/${sellerId}/orders`,
      { params },
    );
  }



}