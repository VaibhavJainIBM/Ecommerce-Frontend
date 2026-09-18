import { Routes } from '@angular/router';
import { ProductList } from './catalog/product-list/product-list';
import { Login } from './auth/login/login';
import { Account } from './auth/account/account';
import { authGuard } from './auth/auth-guard';

import { roleGuard } from './auth/role-guard';
import { Roles } from './auth/auth.models';
import { Forbidden } from './auth/forbidden/forbidden';
import { AdminDashboard } from './admin/admin-dashboard/admin-dashboard';
import { AdminOverview } from './admin/admin-overview/admin-overview';
import { AdminCatalog } from './admin/admin-catalog/admin-catalog';
import { AdminSellerReviews } from './admin/admin-seller-reviews/admin-seller-reviews';
import { AdminListingReviews } from './admin/admin-listing-reviews/admin-listing-reviews';
import { SellerDashboard } from './seller/seller-dashboard/seller-dashboard';

import { sellerAccessGuard } from './seller/seller-access-guard';
import { SellerWorkspace } from './seller/seller-workspace/seller-workspace';
import { SellerOverview } from './seller/seller-overview/seller-overview';
import { SellerListings } from './seller/seller-listings/seller-listings';
import { SellerWarehouses } from './seller/seller-warehouses/seller-warehouses';
import { SellerInventory } from './seller/seller-inventory/seller-inventory';
import { SellerOrders } from './seller/seller-orders/seller-orders';
import { SellerTeam } from './seller/seller-team/seller-team';
import { sellerRoleGuard } from './seller/seller-role-guard';
import { sellerAreaGuard } from './seller/seller-area-guard';


export const routes: Routes = [
  {
    path: '',
    component: ProductList,
    title: 'Storefront | IBM-Mart',
  },
  {
    path: 'login',
    component: Login,
    title: 'Sign in | IBM-Mart',
  },
  {
    path: 'account',
    component: Account,
    title: 'Account | IBM-Mart',
    canActivate: [authGuard],
  },

  {
    path: 'admin',
    component: AdminDashboard,
    title: 'Admin | IBM-Mart',
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
        title: 'Admin overview | IBM-Mart',
      },
      {
        path: 'catalog',
        component: AdminCatalog,
        title: 'Admin catalog | IBM-Mart',
      },
      {
        path: 'sellers',
        component: AdminSellerReviews,
        title: 'Seller reviews | IBM-Mart',
      },
      {
        path: 'listings',
        component: AdminListingReviews,
        title: 'Listing reviews | IBM-Mart',
      },
    ],
  },
  {
    path: 'seller',
    component: SellerDashboard,
    title: 'Seller | IBM-Mart',
    canActivate: [authGuard, sellerAreaGuard],
  },
  {
    path: 'forbidden',
    component: Forbidden,
    title: 'Access denied | IBM-Mart',
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
        title: 'Seller overview | IBM-Mart',
      },
      {
        path: 'listings',
        component: SellerListings,
        title: 'Listings | IBM-Mart',
        canActivate: [sellerRoleGuard],
        data: {
          sellerRoles: ['Owner', 'Manager'],
        },
      },
      {
        path: 'warehouses',
        component: SellerWarehouses,
        title: 'Warehouses | IBM-Mart',
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
        title: 'Inventory | IBM-Mart',
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
        title: 'Orders | IBM-Mart',
        canActivate: [sellerRoleGuard],
        data: {
          sellerRoles: ['Owner', 'Manager'],
        },
      },
      {
        path: 'team',
        component: SellerTeam,
        title: 'Seller team | IBM-Mart',
        canActivate: [sellerRoleGuard],
        data: {
          sellerRoles: ['Owner'],
        },
      },
    ],
  },


  {
    path: '**',
    redirectTo: '',
  },
];
