import { Routes } from '@angular/router';

import { AdminApi } from './admin/admin-api';
import { AdminCatalog } from './admin/admin-catalog/admin-catalog';
import { AdminDashboard } from './admin/admin-dashboard/admin-dashboard';
import { AdminListingReviews } from './admin/admin-listing-reviews/admin-listing-reviews';
import { AdminOverview } from './admin/admin-overview/admin-overview';
import { AdminSellerReviews } from './admin/admin-seller-reviews/admin-seller-reviews';
import { Account } from './auth/account/account';
import { authGuard } from './auth/auth-guard';
import { Roles } from './auth/auth.models';
import { Forbidden } from './auth/forbidden/forbidden';
import { Login } from './auth/login/login';
import { Register } from './auth/register/register';
import { roleGuard } from './auth/role-guard';
import { CartPage } from './cart/cart-page/cart-page';
import { ProductList } from './catalog/product-list/product-list';
import { sellerAccessGuard } from './seller/seller-access-guard';
import { sellerAreaGuard } from './seller/seller-area-guard';
import { SellerDashboard } from './seller/seller-dashboard/seller-dashboard';
import { SellerInventory } from './seller/seller-inventory/seller-inventory';
import { SellerListings } from './seller/seller-listings/seller-listings';
import { SellerOrders } from './seller/seller-orders/seller-orders';
import { SellerOverview } from './seller/seller-overview/seller-overview';
import { sellerRoleGuard } from './seller/seller-role-guard';
import { SellerTeam } from './seller/seller-team/seller-team';
import { SellerWarehouses } from './seller/seller-warehouses/seller-warehouses';
import { SellerWorkspace } from './seller/seller-workspace/seller-workspace';
import { Checkout} from './orders/checkout/checkout';
import { OrderList } from './orders/order-list/order-list';
import { OrderDetails } from './orders/order-detail/order-details';


export const routes: Routes = [
  {
    path: '',
    component: ProductList,
    title: 'Storefront',
  },
  {
    path: 'login',
    component: Login,
    title: 'Sign in',
  },
  {
    path: 'register',
    component: Register,
    title: 'Create account',
  },
  {
    path: 'account',
    component: Account,
    title: 'Account',
    canActivate: [authGuard],
  },
  {
    path: 'cart',
    component: CartPage,
    title: 'Cart',
    canActivate: [authGuard],
  },
  {
    path: 'admin',
    component: AdminDashboard,
    title: 'Admin',
    canActivate: [authGuard, roleGuard],
    data: {
      roles: [Roles.Admin],
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'overview',
      },
      {
        path: 'overview',
        component: AdminOverview,
        title: 'Admin overview',
      },
      {
        path: 'catalog',
        component: AdminCatalog,
        title: 'Admin catalog',
      },
      {
        path: 'sellers',
        component: AdminSellerReviews,
        title: 'Seller reviews',
      },
      {
        path: 'listings',
        component: AdminListingReviews,
        title: 'Listing reviews',
      },
    ],
  },
  {
    path: 'seller',
    component: SellerDashboard,
    title: 'Seller',
    canActivate: [
      authGuard,
      sellerAreaGuard,
    ],
  },
  {
    path: 'forbidden',
    component: Forbidden,
    title: 'Access denied',
    canActivate: [authGuard],
  },
  {
    path: 'seller/:sellerId',
    component: SellerWorkspace,
    canActivate: [
      authGuard,
      sellerAreaGuard,
      sellerAccessGuard,
    ],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'overview',
      },
      {
        path: 'overview',
        component: SellerOverview,
        title: 'Seller overview',
      },
      {
        path: 'listings',
        component: SellerListings,
        title: 'Listings',
        canActivate: [sellerRoleGuard],
        data: {
          sellerRoles: [
            'Owner',
            'Manager',
          ],
        },
      },
      {
        path: 'warehouses',
        component: SellerWarehouses,
        title: 'Warehouses',
        canActivate: [sellerRoleGuard],
        data: {
          sellerRoles: [
            'Owner',
            'Manager',
            'WarehouseStaff',
          ],
        },
      },
      {
        path: 'inventory',
        component: SellerInventory,
        title: 'Inventory',
        canActivate: [sellerRoleGuard],
        data: {
          sellerRoles: [
            'Owner',
            'Manager',
            'WarehouseStaff',
          ],
        },
      },
      {
        path: 'orders',
        component: SellerOrders,
        title: 'Orders',
        canActivate: [sellerRoleGuard],
        data: {
          sellerRoles: [
            'Owner',
            'Manager',
          ],
        },
      },
      {
        path: 'team',
        component: SellerTeam,
        title: 'Seller team',
        canActivate: [sellerRoleGuard],
        data: {
          sellerRoles: ['Owner'],
        },
      },
    ],
  },

  {
    path: 'checkout',
    component: Checkout,
    title: 'Checkout',
    canActivate: [authGuard],
  },
  {
    path: 'orders',
    component: OrderList,
    title: 'My orders',
    canActivate: [authGuard],
  },
  {
    path: 'orders/:orderId',
    component: OrderDetails,
    title: 'Order details',
    canActivate: [authGuard],
  },
  {
    path: '**',
    redirectTo: '',
  },
];
