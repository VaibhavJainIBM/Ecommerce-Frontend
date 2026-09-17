export interface StorefrontListing {
  listingId: string;
  sellerId: string;
  sellerDisplayName: string;
  productId: string;
  productTitle: string;
  brandName: string;
  description: string;
  productVariantId: string;
  variantName: string;
  variantCode: string;
  sellerSku: string;
  priceAmount: number;
  currencyCode: string;
  availableQuantity: number;
}

export interface StorefrontResponse {
  items: StorefrontListing[];
  page: number;
  pageSize: number;
  totalCount: number;
  totalPages: number;
}