import { inject } from '@angular/core';
import { Router, } from '@angular/router';
import { AuthSession } from './auth-session';
export const authGuard = (_route, state) => {
    const authSession = inject(AuthSession);
    const router = inject(Router);
    if (authSession.isAuthenticated()) {
        return true;
    }
    return router.createUrlTree(['/login'], {
        queryParams: {
            returnUrl: state.url,
        },
    });
};
