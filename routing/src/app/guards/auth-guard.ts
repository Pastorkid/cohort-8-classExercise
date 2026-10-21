import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const isLoggedIn = true;
  if (isLoggedIn) {
    return true;
  } else {
    return router.createUrlTree(['/login']);
  }
};
