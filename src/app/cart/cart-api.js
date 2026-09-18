import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class CartApi {
    http = inject(HttpClient);
    cartUrl = 'http://localhost:5167/api/cart';
    getCart() {
        return this.http.get(this.cartUrl);
    }
    setItem(listingId, request) {
        return this.http.put(`${this.cartUrl}/items/${listingId}`, request);
    }
    removeItem(listingId) {
        return this.http.delete(`${this.cartUrl}/items/${listingId}`);
    }
    clearCart() {
        return this.http.delete(this.cartUrl);
    }
    static ɵfac = function CartApi_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || CartApi)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: CartApi, factory: CartApi.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CartApi, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();
