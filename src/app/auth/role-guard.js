import { inject } from '@angular/core';
import { Router, } from '@angular/router';
import { AuthSession } from './auth-session';
export const roleGuard = (route) => {
    const authSession = inject(AuthSession);
    const router = inject(Router);
    const allowedRoles = route.data['roles'];
    if (!allowedRoles || allowedRoles.length === 0) {
        return router.createUrlTree(['/forbidden']);
    }
    if (authSession.hasAnyRole(allowedRoles)) {
        return true;
    }
    return router.createUrlTree(['/forbidden']);
};
