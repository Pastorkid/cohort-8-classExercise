import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  // return next(req);
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      console.log('Http Err', error.status);
      return throwError(() => error);
    }),
  );
};
