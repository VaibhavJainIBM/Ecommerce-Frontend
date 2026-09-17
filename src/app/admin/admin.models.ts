export interface AdminProfile {
  userId: string;
  email: string;
  platformRoles: string[];
}

export interface AdminQuery {
  search?: string;
  status?: string;
  page?: number;
  pageSize?: number;
}

export interface AdminSeller {
  sellerId: string;
  displayName: string;
  legalBusinessName: string;
  status: string;
  approvedAtUtc: string | null;
  createdAtUtc: string;
  updatedAtUtc: string | null;
}

export interface PagedAdminSellers {
  items: AdminSeller[];
  page: number;
  pageSize: number;
  totalCount: number;
  totalPages: number;
}

export interface AdminListing {
  listingId: string;
  sellerId: string;
  sellerDisplayName: string;
  sellerStatus: string;
  productId: string;
  productTitle: string;
  brandName: string;
  productVariantId: string;
  variantName: string;
  variantCode: string;
  sellerSku: string;
  priceAmount: number;
  currencyCode: string;
  status: string;
  rowVersion: string;
  createdAtUtc: string;
}

export interface PagedAdminListings {
  items: AdminListing[];
  page: number;
  pageSize: number;
  totalCount: number;
  totalPages: number;
}

export interface AdminCatalogVariant {
  variantId: string;
  name: string;
  variantCode: string;
  gtin: string | null;
  status: string;
  createdAtUtc: string;
}

export interface AdminCatalogProduct {
  productId: string;
  title: string;
  brandName: string;
  description: string | null;
  status: string;
  createdAtUtc: string;
  updatedAtUtc: string | null;
  variants: AdminCatalogVariant[];
}

export interface PagedAdminCatalogProducts {
  items: AdminCatalogProduct[];
  page: number;
  pageSize: number;
  totalCount: number;
  totalPages: number;
}

export interface CreateCatalogVariantRequest {
  name: string;
  variantCode: string;
  gtin: string | null;
}

export interface CreateCatalogProductRequest {
  title: string;
  brandName: string;
  description: string | null;
  variants: CreateCatalogVariantRequest[];
}

export interface CreatedCatalogVariant {
  variantId: string;
  name: string;
  variantCode: string;
  gtin: string | null;
  status: string;
  createdAtUtc: string;
}

export interface CreatedCatalogProduct {
  productId: string;
  title: string;
  brandName: string;
  description: string | null;
  status: string;
  createdAtUtc: string;
  variants: CreatedCatalogVariant[];
}

export interface CatalogImportVariant {
  csvRowNumber: number;
  variantId: string;
  variantName: string;
  variantCode: string;
  gtin: string | null;
  status: string;
}

export interface CatalogImportProduct {
  productKey: string;
  productId: string;
  status: string;
  variants: CatalogImportVariant[];
}

export interface CatalogImportResult {
  rowsProcessed: number;
  productsCreated: number;
  variantsCreated: number;
  activated: boolean;
  products: CatalogImportProduct[];
}
