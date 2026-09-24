import {
  HttpErrorResponse,
  HttpInterceptorFn,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { AuthSession } from './auth-session';
import { SellerContext } from '../seller/seller-context';

const API_ROOTS = [
  'http://localhost:5167/api/',
  'http://localhost:5202/api/',
];

const ANONYMOUS_AUTH_URLS = [
  'http://localhost:5167/api/auth/login',
  'http://localhost:5167/api/auth/register',
];

export const authInterceptor: HttpInterceptorFn = (
  request,
  next,
) => {
  const sellerContext = inject(SellerContext);
  const authSession = inject(AuthSession);
  const router = inject(Router);

  const token = authSession.getAccessToken();

  const isOurApi = API_ROOTS.some(
    root => request.url.startsWith(root),
  );

  const isAnonymousAuthRequest =
    ANONYMOUS_AUTH_URLS.includes(request.url);

  if (
    !token ||
    !isOurApi ||
    isAnonymousAuthRequest
  ) {
    return next(request);
  }

  const authenticatedRequest = request.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`,
    },
  });

  return next(authenticatedRequest).pipe(
    catchError((error: HttpErrorResponse) => {
      if (
        error.status === 401 &&
        authSession.isAuthenticated()
      ) {
        const returnUrl = router.url;

        sellerContext.clear();
        authSession.logout();

        void router.navigate(['/login'], {
          queryParams: { returnUrl },
          replaceUrl: true,
        });
      }

      return throwError(() => error);
    }),
  );
};