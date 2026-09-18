import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class StorefrontApi {
    http = inject(HttpClient);
    apiUrl = 'http://localhost:5167/api/storefront/listings';
    getStorefront(page = 1, pageSize = 20) {
        return this.http.get(this.apiUrl, {
            params: {
                page,
                pageSize,
            },
        });
    }
    static ɵfac = function StorefrontApi_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || StorefrontApi)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: StorefrontApi, factory: StorefrontApi.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StorefrontApi, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();
