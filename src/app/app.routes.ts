import { Routes } from '@angular/router';
import { ProductList } from './catalog/product-list/product-list';
import { Login } from './auth/login/login';
import { Account } from './auth/account/account';
import { authGuard } from './auth/auth-guard';

import { roleGuard } from './auth/role-guard';
import { Roles } from './auth/auth.models';
import { Forbidden } from './auth/forbidden/forbidden';
import { AdminDashboard } from './admin/admin-dashboard/admin-dashboard';
import { SellerDashboard } from './seller/seller-dashboard/seller-dashboard';

import { sellerAccessGuard } from './seller/seller-access-guard';
import { SellerWorkspace } from './seller/seller-workspace/seller-workspace';
import { SellerOverview } from './seller/seller-overview/seller-overview';
import { SellerListings } from './seller/seller-listings/seller-listings';
import { SellerWarehouses } from './seller/seller-warehouses/seller-warehouses';
import { SellerInventory } from './seller/seller-inventory/seller-inventory';
import { SellerOrders } from './seller/seller-orders/seller-orders';
import { SellerTeam } from './seller/seller-team/seller-team';


export const routes: Routes = [
  {
    path: '',
    component: ProductList,
    title: 'Storefront | CartCraft',
  },
  {
    path: 'login',
    component: Login,
    title: 'Sign in | CartCraft',
  },
  {
    path: 'account',
    component: Account,
    title: 'Account | CartCraft',
    canActivate: [authGuard],
  },

  {
    path: 'admin',
    component: AdminDashboard,
    title: 'Admin | CartCraft',
    canActivate: [authGuard, roleGuard],
    data: {
      roles: [Roles.Admin],
    },
  },
  {
    path: 'seller',
    component: SellerDashboard,
    title: 'Seller | CartCraft',
    canActivate: [authGuard],
  },
  {
    path: 'forbidden',
    component: Forbidden,
    title: 'Access denied | CartCraft',
    canActivate: [authGuard],
  },


  {
  path: 'seller/:sellerId',
    component: SellerWorkspace,
    canActivate: [authGuard, sellerAccessGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'overview',
      },
      {
        path: 'overview',
        component: SellerOverview,
        title: 'Seller overview | CartCraft',
      },
      {
        path: 'listings',
        component: SellerListings,
        title: 'Listings | CartCraft',
      },
      {
        path: 'warehouses',
        component: SellerWarehouses,
        title: 'Warehouses | CartCraft',
      },
      {
        path: 'inventory',
        component: SellerInventory,
        title: 'Inventory | CartCraft',
      },
      {
        path: 'orders',
        component: SellerOrders,
        title: 'Orders | CartCraft',
      },
      {
        path: 'team',
        component: SellerTeam,
        title: 'Seller team | CartCraft',
      },
    ],
  },


  {
    path: '**',
    redirectTo: '',
  },
];