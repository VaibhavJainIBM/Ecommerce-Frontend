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