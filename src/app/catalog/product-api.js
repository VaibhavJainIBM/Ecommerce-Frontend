import { HttpClient, HttpParams, } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class ProductApi {
    http = inject(HttpClient);
    apiUrl = 'http://localhost:5167/api/catalog/products';
    searchProducts(search = '', page = 1, pageSize = 10) {
        let params = new HttpParams()
            .set('page', String(page))
            .set('pageSize', String(pageSize));
        const term = search.trim();
        if (term) {
            params = params.set('search', term);
        }
        return this.http.get(this.apiUrl, { params });
    }
    getProduct(productId) {
        return this.http.get(`${this.apiUrl}/${productId}`);
    }
    static ɵfac = function ProductApi_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ProductApi)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ProductApi, factory: ProductApi.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProductApi, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();
