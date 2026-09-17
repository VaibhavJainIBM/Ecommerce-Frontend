import { inject } from '@angular/core';
import {
  CanActivateFn,
  Router,
} from '@angular/router';
import { AuthSession } from '../auth/auth-session';
import { Roles } from '../auth/auth.models';

export const sellerAreaGuard: CanActivateFn = () => {
  const authSession = inject(AuthSession);
  const router = inject(Router);

  if (authSession.hasRole(Roles.Admin)) {
    return router.createUrlTree(['/admin']);
  }

  return true;
};
