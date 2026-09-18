export interface SetCartItemRequest {
  quantity: number;
}

export interface CartItem {
  listingId: string;
  sellerId: string;
  sellerDisplayName: string;
  productTitle: string;
  variantName: string;
  unitPriceAmount: number;
  currencyCode: string;
  quantity: number;
  lineTotal: number;
  availableQuantity: number;
  isAvailable: boolean;
}

export interface Cart {
  cartId: string | null;
  rowVersion: string | null;
  items: CartItem[];
  totalAmount: number;
  currencyCode: string | null;
  isCheckoutReady: boolean;
}
