import { CanActivateChildFn } from '@angular/router';

export const dashChildGuard: CanActivateChildFn = (childRoute, state) => {
  const isLogegdIn = true;
  return isLogegdIn;
};
