import { inject } from '@angular/core';
import {
  CanActivateFn,
  Router,
} from '@angular/router';

import { SellerContext } from './seller-context';
import { SellerRole } from './seller.models';

export const sellerRoleGuard: CanActivateFn = (
  route,
) => {
  const sellerContext = inject(SellerContext);
  const router = inject(Router);

  const seller = sellerContext.selected();
  const allowedRoles =
    route.data['sellerRoles'] as
      | SellerRole[]
      | undefined;

  if (
    seller &&
    allowedRoles?.some((role) =>
      seller.roles.includes(role),
    )
  ) {
    return true;
  }

  if (seller) {
    return router.createUrlTree([
      '/seller',
      seller.sellerId,
      'overview',
    ]);
  }

  return router.createUrlTree(['/seller']);
};
