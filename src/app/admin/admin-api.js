import { HttpClient, HttpParams, } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class AdminApi {
    http = inject(HttpClient);
    adminUrl = 'http://localhost:5167/api/admin';
    getProfile() {
        return this.http.get(`${this.adminUrl}/me`);
    }
    getSellers(query = {}) {
        return this.http.get(`${this.adminUrl}/sellers`, { params: this.queryParams(query) });
    }
    approveSeller(sellerId) {
        return this.http.post(`${this.adminUrl}/sellers/${sellerId}/approve`, null);
    }
    getListings(query = {}) {
        return this.http.get(`${this.adminUrl}/listings`, { params: this.queryParams(query) });
    }
    approveListing(listing) {
        return this.http.post(`${this.adminUrl}/sellers/${listing.sellerId}` +
            `/listings/${listing.listingId}/approve`, { rowVersion: listing.rowVersion });
    }
    getCatalogProducts(query = {}) {
        return this.http.get(`${this.adminUrl}/catalog/products`, { params: this.queryParams(query) });
    }
    createCatalogProduct(request) {
        return this.http.post(`${this.adminUrl}/catalog/products`, request);
    }
    activateCatalogProduct(productId) {
        return this.http.post(`${this.adminUrl}/catalog/products/${productId}/activate`, null);
    }
    importCatalog(file, activate) {
        const form = new FormData();
        form.append('file', file, file.name);
        form.append('activate', String(activate));
        return this.http.post(`${this.adminUrl}/catalog/products/import-csv`, form);
    }
    queryParams(query) {
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
    static ɵfac = function AdminApi_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AdminApi)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AdminApi, factory: AdminApi.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AdminApi, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();
