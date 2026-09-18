import { inject } from '@angular/core';
import { Router, } from '@angular/router';
import { catchError, map, of, } from 'rxjs';
import { SellerApi } from './seller-api';
import { SellerContext } from './seller-context';
export const sellerAccessGuard = (route, state) => {
    const sellerApi = inject(SellerApi);
    const sellerContext = inject(SellerContext);
    const router = inject(Router);
    const sellerId = route.paramMap.get('sellerId');
    if (!sellerId) {
        return router.createUrlTree(['/seller']);
    }
    sellerContext.clear();
    return sellerApi.getMine().pipe(map((sellers) => {
        const seller = sellers.find((item) => item.sellerId === sellerId);
        const hasWorkspaceAccess = seller?.memberStatus === 'Active' &&
            seller.roles.length > 0;
        if (!seller || !hasWorkspaceAccess) {
            return router.createUrlTree(['/forbidden']);
        }
        sellerContext.select(seller);
        return true;
    }), catchError((error) => {
        sellerContext.clear();
        if (error.status === 401) {
            return of(router.createUrlTree(['/login'], {
                queryParams: {
                    returnUrl: state.url,
                },
            }));
        }
        return of(router.createUrlTree(['/seller']));
    }));
};
