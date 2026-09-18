import { inject } from '@angular/core';
import { Router, } from '@angular/router';
import { SellerContext } from './seller-context';
export const sellerRoleGuard = (route) => {
    const sellerContext = inject(SellerContext);
    const router = inject(Router);
    const seller = sellerContext.selected();
    const allowedRoles = route.data['sellerRoles'];
    if (seller &&
        allowedRoles?.some((role) => seller.roles.includes(role))) {
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
