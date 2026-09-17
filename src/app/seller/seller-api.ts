import {
  HttpClient,
  HttpParams,
} from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import {
  CreateInventoryItemRequest,
  CreateSellerListingRequest,
  CreateSellerRequest,
  CreateWarehouseRequest,
  InventoryItem,
  InventoryQuantityRequest,
  InviteSellerMemberRequest,
  MySeller,
  PagedSellerListings,
  PagedSellerOrders,
  SellerInvitation,
  SellerLifecycleResponse,
  SellerListing,
  SellerListingQuery,
  SellerListingRowVersionRequest,
  SellerMember,
  SellerOnboardingResponse,
  SellerOrder,
  SellerOwnerAccess,
  SellerRole,
  SellerRoleDefinition,
  UpdateSellerListingPriceRequest,
  Warehouse,
} from './seller.models';

@Injectable({
  providedIn: 'root',
})
export class SellerApi {
  private readonly http = inject(HttpClient);

  private readonly apiRoot =
    'http://localhost:5167/api';

  private readonly sellersUrl =
    `${this.apiRoot}/sellers`;

  getMine(): Observable<MySeller[]> {
    return this.http.get<MySeller[]>(
      `${this.sellersUrl}/mine`,
    );
  }

  createSeller(
    request: CreateSellerRequest,
  ): Observable<SellerOnboardingResponse> {
    return this.http.post<SellerOnboardingResponse>(
      this.sellersUrl,
      request,
    );
  }

  getInvitations(): Observable<SellerInvitation[]> {
    return this.http.get<SellerInvitation[]>(
      `${this.apiRoot}/seller-invitations`,
    );
  }

  acceptInvitation(
    sellerId: string,
  ): Observable<SellerMember> {
    return this.http.post<SellerMember>(
      `${this.sellersUrl}/${sellerId}/invitations/accept`,
      null,
    );
  }

  getOwnerAccess(
    sellerId: string,
  ): Observable<SellerOwnerAccess> {
    return this.http.get<SellerOwnerAccess>(
      `${this.sellersUrl}/${sellerId}/owner-access`,
    );
  }

  submitSellerForReview(
    sellerId: string,
  ): Observable<SellerLifecycleResponse> {
    return this.http.post<SellerLifecycleResponse>(
      `${this.sellersUrl}/${sellerId}/submit-for-review`,
      null,
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

  getWarehouses(
    sellerId: string,
  ): Observable<Warehouse[]> {
    return this.http.get<Warehouse[]>(
      `${this.sellersUrl}/${sellerId}/warehouses`,
    );
  }

  getWarehouse(
    sellerId: string,
    warehouseId: string,
  ): Observable<Warehouse> {
    return this.http.get<Warehouse>(
      `${this.sellersUrl}/${sellerId}/warehouses/${warehouseId}`,
    );
  }

  createWarehouse(
    sellerId: string,
    request: CreateWarehouseRequest,
  ): Observable<Warehouse> {
    return this.http.post<Warehouse>(
      `${this.sellersUrl}/${sellerId}/warehouses`,
      request,
    );
  }

  activateWarehouse(
    sellerId: string,
    warehouseId: string,
  ): Observable<Warehouse> {
    return this.http.post<Warehouse>(
      `${this.sellersUrl}/${sellerId}/warehouses/${warehouseId}/activate`,
      null,
    );
  }

  getInventory(
    sellerId: string,
  ): Observable<InventoryItem[]> {
    return this.http.get<InventoryItem[]>(
      `${this.sellersUrl}/${sellerId}/inventory`,
    );
  }

  getInventoryItem(
    sellerId: string,
    inventoryItemId: string,
  ): Observable<InventoryItem> {
    return this.http.get<InventoryItem>(
      `${this.sellersUrl}/${sellerId}/inventory/${inventoryItemId}`,
    );
  }

  createInventoryItem(
    sellerId: string,
    request: CreateInventoryItemRequest,
  ): Observable<InventoryItem> {
    return this.http.post<InventoryItem>(
      `${this.sellersUrl}/${sellerId}/inventory`,
      request,
    );
  }

  receiveInventory(
    sellerId: string,
    inventoryItemId: string,
    request: InventoryQuantityRequest,
  ): Observable<InventoryItem> {
    return this.http.post<InventoryItem>(
      `${this.sellersUrl}/${sellerId}/inventory/${inventoryItemId}/receive`,
      request,
    );
  }

  adjustInventory(
    sellerId: string,
    inventoryItemId: string,
    request: InventoryQuantityRequest,
  ): Observable<InventoryItem> {
    return this.http.post<InventoryItem>(
      `${this.sellersUrl}/${sellerId}/inventory/${inventoryItemId}/adjust`,
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

  shipOrder(
    sellerId: string,
    orderId: string,
  ): Observable<SellerOrder> {
    return this.http.post<SellerOrder>(
      `${this.sellersUrl}/${sellerId}/orders/${orderId}/ship`,
      null,
    );
  }

  getRoles(
    sellerId: string,
  ): Observable<SellerRoleDefinition[]> {
    return this.http.get<SellerRoleDefinition[]>(
      `${this.sellersUrl}/${sellerId}/roles`,
    );
  }

  getMembers(
    sellerId: string,
  ): Observable<SellerMember[]> {
    return this.http.get<SellerMember[]>(
      `${this.sellersUrl}/${sellerId}/members`,
    );
  }

  getMember(
    sellerId: string,
    memberId: string,
  ): Observable<SellerMember> {
    return this.http.get<SellerMember>(
      `${this.sellersUrl}/${sellerId}/members/${memberId}`,
    );
  }

  inviteMember(
    sellerId: string,
    request: InviteSellerMemberRequest,
  ): Observable<SellerMember> {
    return this.http.post<SellerMember>(
      `${this.sellersUrl}/${sellerId}/members`,
      request,
    );
  }

  suspendMember(
    sellerId: string,
    memberId: string,
  ): Observable<SellerMember> {
    return this.http.post<SellerMember>(
      `${this.sellersUrl}/${sellerId}/members/${memberId}/suspend`,
      null,
    );
  }

  reactivateMember(
    sellerId: string,
    memberId: string,
  ): Observable<SellerMember> {
    return this.http.post<SellerMember>(
      `${this.sellersUrl}/${sellerId}/members/${memberId}/reactivate`,
      null,
    );
  }

  removeMember(
    sellerId: string,
    memberId: string,
  ): Observable<SellerMember> {
    return this.http.delete<SellerMember>(
      `${this.sellersUrl}/${sellerId}/members/${memberId}`,
    );
  }

  assignRole(
    sellerId: string,
    memberId: string,
    role: SellerRole,
  ): Observable<SellerMember> {
    return this.http.put<SellerMember>(
      `${this.sellersUrl}/${sellerId}/members/${memberId}/roles/${role}`,
      null,
    );
  }

  revokeRole(
    sellerId: string,
    memberId: string,
    role: SellerRole,
  ): Observable<SellerMember> {
    return this.http.delete<SellerMember>(
      `${this.sellersUrl}/${sellerId}/members/${memberId}/roles/${role}`,
    );
  }

  assignWarehouse(
    sellerId: string,
    memberId: string,
    warehouseId: string,
  ): Observable<SellerMember> {
    return this.http.put<SellerMember>(
      `${this.sellersUrl}/${sellerId}/members/${memberId}/warehouses/${warehouseId}`,
      null,
    );
  }

  revokeWarehouse(
    sellerId: string,
    memberId: string,
    warehouseId: string,
  ): Observable<SellerMember> {
    return this.http.delete<SellerMember>(
      `${this.sellersUrl}/${sellerId}/members/${memberId}/warehouses/${warehouseId}`,
    );
  }
}
