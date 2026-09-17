import {
  HttpClient,
  HttpParams,
} from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { PagedCatalogProducts } from './catalog.models';

@Injectable({
  providedIn: 'root',
})
export class ProductApi {
  private readonly http = inject(HttpClient);

  private readonly apiUrl =
    'http://localhost:5167/api/catalog/products';

  searchProducts(
    search = '',
    page = 1,
    pageSize = 10,
  ): Observable<PagedCatalogProducts> {
    let params = new HttpParams()
      .set('page', String(page))
      .set('pageSize', String(pageSize));

    const searchTerm = search.trim();

    if (searchTerm) {
      params = params.set('search', searchTerm);
    }

    return this.http.get<PagedCatalogProducts>(
      this.apiUrl,
      { params },
    );
  }
}
