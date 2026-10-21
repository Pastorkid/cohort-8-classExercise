import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';

export const dashboardMatchGuard: CanMatchFn = (route, segments) => {
  const router = inject(Router);
  const isLoggedIn = true;
  if (isLoggedIn) {
    return true;
  } else {
    return router.createUrlTree(['/login']);
  }
};
