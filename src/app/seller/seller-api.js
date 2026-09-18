import { HttpClient, HttpParams, } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class SellerApi {
    http = inject(HttpClient);
    apiRoot = 'http://localhost:5167/api';
    sellersUrl = `${this.apiRoot}/sellers`;
    getMine() {
        return this.http.get(`${this.sellersUrl}/mine`);
    }
    createSeller(request) {
        return this.http.post(this.sellersUrl, request);
    }
    getInvitations() {
        return this.http.get(`${this.apiRoot}/seller-invitations`);
    }
    acceptInvitation(sellerId) {
        return this.http.post(`${this.sellersUrl}/${sellerId}/invitations/accept`, null);
    }
    getOwnerAccess(sellerId) {
        return this.http.get(`${this.sellersUrl}/${sellerId}/owner-access`);
    }
    submitSellerForReview(sellerId) {
        return this.http.post(`${this.sellersUrl}/${sellerId}/submit-for-review`, null);
    }
    getListings(sellerId, query = {}) {
        let params = new HttpParams()
            .set('page', String(query.page ?? 1))
            .set('pageSize', String(query.pageSize ?? 20));
        if (query.status !== undefined) {
            params = params.set('status', query.status);
        }
        return this.http.get(`${this.sellersUrl}/${sellerId}/listings`, { params });
    }
    getListing(sellerId, listingId) {
        return this.http.get(`${this.sellersUrl}/${sellerId}/listings/${listingId}`);
    }
    createListing(sellerId, request) {
        return this.http.post(`${this.sellersUrl}/${sellerId}/listings`, request);
    }
    updateListingPrice(sellerId, listingId, request) {
        return this.http.patch(`${this.sellersUrl}/${sellerId}/listings/${listingId}/price`, request);
    }
    submitListingForReview(sellerId, listingId, request) {
        return this.http.post(`${this.sellersUrl}/${sellerId}/listings/${listingId}/submit-for-review`, request);
    }
    archiveListing(sellerId, listingId, request) {
        return this.http.post(`${this.sellersUrl}/${sellerId}/listings/${listingId}/archive`, request);
    }
    getWarehouses(sellerId) {
        return this.http.get(`${this.sellersUrl}/${sellerId}/warehouses`);
    }
    getWarehouse(sellerId, warehouseId) {
        return this.http.get(`${this.sellersUrl}/${sellerId}/warehouses/${warehouseId}`);
    }
    createWarehouse(sellerId, request) {
        return this.http.post(`${this.sellersUrl}/${sellerId}/warehouses`, request);
    }
    activateWarehouse(sellerId, warehouseId) {
        return this.http.post(`${this.sellersUrl}/${sellerId}/warehouses/${warehouseId}/activate`, null);
    }
    getInventory(sellerId) {
        return this.http.get(`${this.sellersUrl}/${sellerId}/inventory`);
    }
    getInventoryItem(sellerId, inventoryItemId) {
        return this.http.get(`${this.sellersUrl}/${sellerId}/inventory/${inventoryItemId}`);
    }
    createInventoryItem(sellerId, request) {
        return this.http.post(`${this.sellersUrl}/${sellerId}/inventory`, request);
    }
    receiveInventory(sellerId, inventoryItemId, request) {
        return this.http.post(`${this.sellersUrl}/${sellerId}/inventory/${inventoryItemId}/receive`, request);
    }
    adjustInventory(sellerId, inventoryItemId, request) {
        return this.http.post(`${this.sellersUrl}/${sellerId}/inventory/${inventoryItemId}/adjust`, request);
    }
    getOrders(sellerId, page = 1, pageSize = 20) {
        const params = new HttpParams()
            .set('page', String(page))
            .set('pageSize', String(pageSize));
        return this.http.get(`${this.sellersUrl}/${sellerId}/orders`, { params });
    }
    shipOrder(sellerId, orderId) {
        return this.http.post(`${this.sellersUrl}/${sellerId}/orders/${orderId}/ship`, null);
    }
    getRoles(sellerId) {
        return this.http.get(`${this.sellersUrl}/${sellerId}/roles`);
    }
    getMembers(sellerId) {
        return this.http.get(`${this.sellersUrl}/${sellerId}/members`);
    }
    getMember(sellerId, memberId) {
        return this.http.get(`${this.sellersUrl}/${sellerId}/members/${memberId}`);
    }
    inviteMember(sellerId, request) {
        return this.http.post(`${this.sellersUrl}/${sellerId}/members`, request);
    }
    suspendMember(sellerId, memberId) {
        return this.http.post(`${this.sellersUrl}/${sellerId}/members/${memberId}/suspend`, null);
    }
    reactivateMember(sellerId, memberId) {
        return this.http.post(`${this.sellersUrl}/${sellerId}/members/${memberId}/reactivate`, null);
    }
    removeMember(sellerId, memberId) {
        return this.http.delete(`${this.sellersUrl}/${sellerId}/members/${memberId}`);
    }
    assignRole(sellerId, memberId, role) {
        return this.http.put(`${this.sellersUrl}/${sellerId}/members/${memberId}/roles/${role}`, null);
    }
    revokeRole(sellerId, memberId, role) {
        return this.http.delete(`${this.sellersUrl}/${sellerId}/members/${memberId}/roles/${role}`);
    }
    assignWarehouse(sellerId, memberId, warehouseId) {
        return this.http.put(`${this.sellersUrl}/${sellerId}/members/${memberId}/warehouses/${warehouseId}`, null);
    }
    revokeWarehouse(sellerId, memberId, warehouseId) {
        return this.http.delete(`${this.sellersUrl}/${sellerId}/members/${memberId}/warehouses/${warehouseId}`);
    }
    static ɵfac = function SellerApi_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SellerApi)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: SellerApi, factory: SellerApi.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SellerApi, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();
