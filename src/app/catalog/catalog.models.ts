export interface CatalogVariant {
  variantId: string;
  name: string;
  variantCode: string;
  gtin: string | null;
}

export interface CatalogProduct {
  productId: string;
  title: string;
  brandName: string;
  description: string | null;
  variants: CatalogVariant[];
}

export interface PagedCatalogProducts {
  items: CatalogProduct[];
  page: number;
  pageSize: number;
  totalCount: number;
  totalPages: number;
}
