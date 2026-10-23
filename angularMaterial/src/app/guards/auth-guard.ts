import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { IsLoggedIn } from '../services/is-logged-in';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const isLoggedInService = inject(IsLoggedIn);
  const token = isLoggedInService.$isLoggedIn.value;

  if (token) {
    console.log('token is', token);

    return true;
  } else {
    return router.createUrlTree(['']);
  }
};
