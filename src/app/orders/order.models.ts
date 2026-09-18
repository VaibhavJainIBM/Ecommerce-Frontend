export type CustomerOrderStatus =
  | 'PendingPayment'
  | 'Cancelled'
  | 'Expired';

export interface ShippingAddress {
  line1: string;
  line2: string | null;
  city: string;
  stateOrProvince: string;
  postalCode: string;
  countryCode: string;
}

export interface CheckoutRequest {
  cartRowVersion: string;
  expectedTotalAmount: number;
  currencyCode: string;
  recipientName: string;
  phone: string;

  shippingAddress: {
    line1: string;
    line2: string | null;
    city: string;
    stateOrProvince: string;
    postalCode: string;
    countryCode: string;
  };
}

export interface CustomerOrderItem {
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
}

export interface CustomerOrder {
  orderId: string;
  orderNumber: string;

  status: CustomerOrderStatus;

  totalAmount: number;
  currencyCode: string;

  recipientName: string;
  phone: string;

  shippingAddress: ShippingAddress;

  items: CustomerOrderItem[];

  createdAtUtc: string;
  expiresAtUtc: string;

  rowVersion: string;
}

export interface PagedCustomerOrders {
  items: CustomerOrder[];

  page: number;
  pageSize: number;
  totalCount: number;
}