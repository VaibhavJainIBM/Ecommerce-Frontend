import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { AuthSession } from './auth-session';
import { SellerContext } from '../seller/seller-context';
const API_ROOT = 'http://localhost:5167/api/';
export const authInterceptor = (request, next) => {
    const sellerContext = inject(SellerContext);
    const authSession = inject(AuthSession);
    const router = inject(Router);
    const token = authSession.getAccessToken();
    const isOurApi = request.url.startsWith(API_ROOT);
    const isAnonymousAuthRequest = request.url === `${API_ROOT}auth/login`;
    request.url === `${API_ROOT}auth/register`;
    if (!token || !isOurApi || isAnonymousAuthRequest) {
        return next(request);
    }
    const authenticatedRequest = request.clone({
        setHeaders: {
            Authorization: `Bearer ${token}`,
        },
    });
    return next(authenticatedRequest).pipe(catchError((error) => {
        if (error.status === 401 &&
            authSession.isAuthenticated()) {
            const returnUrl = router.url;
            sellerContext.clear();
            authSession.logout();
            void router.navigate(['/login'], {
                queryParams: { returnUrl },
                replaceUrl: true,
            });
        }
        return throwError(() => error);
    }));
};
