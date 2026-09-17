export type SellerRole =
  | 'Owner'
  | 'Manager'
  | 'WarehouseStaff';

export type SellerMemberStatus =
  | 'Invited'
  | 'Active'
  | 'Suspended'
  | 'Removed';

export type SellerStatus =
  | 'PendingVerification'
  | 'UnderReview'
  | 'Active'
  | 'Rejected'
  | 'Suspended'
  | 'Closed';

export interface MySeller {
  sellerId: string;
  displayName: string;
  legalBusinessName: string;
  sellerStatus: SellerStatus;
  sellerCreatedAtUtc: string;
  approvedAtUtc: string | null;
  memberId: string;
  memberStatus: SellerMemberStatus;
  joinedAtUtc: string | null;
  roles: SellerRole[];
}

export interface CreateSellerRequest {
  displayName: string;
  legalBusinessName: string;
}

export interface SellerOnboardingResponse {
  sellerId: string;
  displayName: string;
  legalBusinessName: string;
  sellerStatus: SellerStatus;
  ownerMemberId: string;
  memberStatus: SellerMemberStatus;
  ownerRoleId: string;
  role: SellerRole;
  createdAtUtc: string;
}

export interface SellerLifecycleResponse {
  sellerId: string;
  displayName: string;
  legalBusinessName: string;
  status: SellerStatus;
  approvedAtUtc: string | null;
  createdAtUtc: string;
  updatedAtUtc: string | null;
}

export interface SellerOwnerAccess {
  sellerId: string;
  access: string;
  message: string;
}

export interface SellerInvitation {
  sellerId: string;
  sellerName: string;
  memberId: string;
  roles: SellerRole[];
}

export interface SellerRoleDefinition {
  name: SellerRole;
  description: string;
}

export interface SellerMember {
  memberId: string;
  sellerId: string;
  userId: string;
  email: string;
  status: SellerMemberStatus;
  roles: SellerRole[];
  warehouseIds: string[];
  invitedAtUtc: string;
  joinedAtUtc: string | null;
}

export interface InviteSellerMemberRequest {
  email: string;
  role: SellerRole;
}

export type SellerListingStatus =
  | 'Draft'
  | 'PendingReview'
  | 'Active'
  | 'Paused'
  | 'Rejected'
  | 'Archived';

export interface SellerListing {
  listingId: string;
  sellerId: string;
  productId: string;
  productTitle: string;
  brandName: string;
  productVariantId: string;
  variantName: string;
  variantCode: string;
  sellerSku: string;
  priceAmount: number;
  currencyCode: string;
  status: SellerListingStatus;
  rowVersion: string;
  createdAtUtc: string;
}

export interface PagedSellerListings {
  items: SellerListing[];
  page: number;
  pageSize: number;
  totalCount: number;
  totalPages: number;
}

export interface SellerListingQuery {
  page?: number;
  pageSize?: number;
  status?: SellerListingStatus;
}

export interface CreateSellerListingRequest {
  productVariantId: string;
  sellerSku: string;
  priceAmount: number;
  currencyCode: string;
}

export interface UpdateSellerListingPriceRequest {
  priceAmount: number;
  currencyCode: string;
  rowVersion: string;
}

export interface SellerListingRowVersionRequest {
  rowVersion: string;
}

export type WarehouseStatus =
  | 'Draft'
  | 'Active'
  | 'TemporarilyClosed'
  | 'Inactive';

export interface WarehouseAddress {
  line1: string;
  line2: string | null;
  city: string;
  stateOrProvince: string;
  postalCode: string;
  countryCode: string;
}

export interface Warehouse {
  warehouseId: string;
  sellerId: string;
  name: string;
  code: string;
  status: WarehouseStatus;
  address: WarehouseAddress;
  createdAtUtc: string;
  updatedAtUtc: string | null;
}

export interface CreateWarehouseRequest {
  name: string;
  code: string;
  address: WarehouseAddress;
}

export interface InventoryItem {
  inventoryItemId: string;
  sellerId: string;
  warehouseId: string;
  warehouseName: string;
  warehouseCode: string;
  sellerListingId: string;
  sellerSku: string;
  productVariantId: string;
  onHandQuantity: number;
  reservedQuantity: number;
  availableQuantity: number;
  rowVersion: string;
  createdAtUtc: string;
  updatedAtUtc: string | null;
}

export interface CreateInventoryItemRequest {
  warehouseId: string;
  sellerListingId: string;
  initialQuantity: number;
}

export interface InventoryQuantityRequest {
  quantity: number;
  rowVersion: string;
}

export type OrderStatus =
  | 'PendingPayment'
  | 'Cancelled'
  | 'Expired'
  | 'Paid'
  | 'PartiallyShipped'
  | 'Shipped';

export interface ShippingAddress {
  line1: string | null;
  line2: string | null;
  city: string | null;
  stateOrProvince: string | null;
  postalCode: string | null;
  countryCode: string | null;
}

export interface SellerOrderItem {
  orderItemId: string;
  sellerId: string;
  sellerDisplayName: string;
  listingId: string;
  productVariantId: string;
  productTitle: string;
  variantName: string;
  sellerSku: string;
  unitPriceAmount: number;
  currencyCode: string;
  quantity: number;
  lineTotal: number;
  shippedAtUtc: string | null;
}

export interface SellerOrder {
  orderId: string;
  orderNumber: string;
  status: OrderStatus;
  sellerSubtotal: number;
  currencyCode: string;
  recipientName: string;
  phone: string;
  shippingAddress: ShippingAddress;
  items: SellerOrderItem[];
  createdAtUtc: string;
  expiresAtUtc: string;
  paymentMode: string | null;
}

export interface PagedSellerOrders {
  items: SellerOrder[];
  page: number;
  pageSize: number;
  totalCount: number;
}
