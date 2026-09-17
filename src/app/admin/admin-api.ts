import {
  HttpClient,
  HttpParams,
} from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  AdminListing,
  AdminProfile,
  AdminQuery,
  AdminSeller,
  CatalogImportResult,
  CreateCatalogProductRequest,
  CreatedCatalogProduct,
  PagedAdminCatalogProducts,
  PagedAdminListings,
  PagedAdminSellers,
} from './admin.models';

@Injectable({
  providedIn: 'root',
})
export class AdminApi {
  private readonly http = inject(HttpClient);
  private readonly adminUrl =
    'http://localhost:5167/api/admin';

  getProfile(): Observable<AdminProfile> {
    return this.http.get<AdminProfile>(
      `${this.adminUrl}/me`,
    );
  }

  getSellers(
    query: AdminQuery = {},
  ): Observable<PagedAdminSellers> {
    return this.http.get<PagedAdminSellers>(
      `${this.adminUrl}/sellers`,
      { params: this.queryParams(query) },
    );
  }

  approveSeller(
    sellerId: string,
  ): Observable<AdminSeller> {
    return this.http.post<AdminSeller>(
      `${this.adminUrl}/sellers/${sellerId}/approve`,
      null,
    );
  }

  getListings(
    query: AdminQuery = {},
  ): Observable<PagedAdminListings> {
    return this.http.get<PagedAdminListings>(
      `${this.adminUrl}/listings`,
      { params: this.queryParams(query) },
    );
  }

  approveListing(
    listing: Pick<
      AdminListing,
      'sellerId' | 'listingId' | 'rowVersion'
    >,
  ): Observable<AdminListing> {
    return this.http.post<AdminListing>(
      `${this.adminUrl}/sellers/${listing.sellerId}` +
        `/listings/${listing.listingId}/approve`,
      { rowVersion: listing.rowVersion },
    );
  }

  getCatalogProducts(
    query: AdminQuery = {},
  ): Observable<PagedAdminCatalogProducts> {
    return this.http.get<PagedAdminCatalogProducts>(
      `${this.adminUrl}/catalog/products`,
      { params: this.queryParams(query) },
    );
  }

  createCatalogProduct(
    request: CreateCatalogProductRequest,
  ): Observable<CreatedCatalogProduct> {
    return this.http.post<CreatedCatalogProduct>(
      `${this.adminUrl}/catalog/products`,
      request,
    );
  }

  activateCatalogProduct(
    productId: string,
  ): Observable<CreatedCatalogProduct> {
    return this.http.post<CreatedCatalogProduct>(
      `${this.adminUrl}/catalog/products/${productId}/activate`,
      null,
    );
  }

  importCatalog(
    file: File,
    activate: boolean,
  ): Observable<CatalogImportResult> {
    const form = new FormData();
    form.append('file', file, file.name);
    form.append('activate', String(activate));

    return this.http.post<CatalogImportResult>(
      `${this.adminUrl}/catalog/products/import-csv`,
      form,
    );
  }

  private queryParams(query: AdminQuery): HttpParams {
    let params = new HttpParams()
      .set('page', query.page ?? 1)
      .set('pageSize', query.pageSize ?? 20);

    if (query.search?.trim()) {
      params = params.set('search', query.search.trim());
    }

    if (query.status?.trim()) {
      params = params.set('status', query.status.trim());
    }

    return params;
  }
}
