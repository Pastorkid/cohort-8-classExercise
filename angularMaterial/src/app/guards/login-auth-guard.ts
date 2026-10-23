import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { IsLoggedIn } from '../services/is-logged-in';

export const loginAuthGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const isLoggedInService = inject(IsLoggedIn);
  const token = isLoggedInService.$isLoggedIn.value;

  if (token) {
    console.log('token is', token);
    return router.createUrlTree(['/home']);
  } else {
    return true;
  }
};
