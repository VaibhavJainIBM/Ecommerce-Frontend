import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StorefrontResponse } from './Storefront';


@Injectable({
  providedIn: 'root',
})
export class StorefrontApi {
  private readonly http = inject(HttpClient);
  private readonly apiUrl =
    'http://localhost:5167/api/storefront/listings';

  getStorefront(
    page = 1,
    pageSize = 20,
  ): Observable<StorefrontResponse> {
    return this.http.get<StorefrontResponse>(this.apiUrl, {
      params: {
        page,
        pageSize,
      },
    });
  }
}