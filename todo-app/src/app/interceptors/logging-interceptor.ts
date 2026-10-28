import { HttpEventType, HttpInterceptorFn } from '@angular/common/http';
import { tap } from 'rxjs/operators';

export const loggingInterceptor: HttpInterceptorFn = (req, next) => {
  // return next(req);
  console.log('Request', req.method, req.url);
  return next(req).pipe(
    tap((res) => {
      if (res.type === HttpEventType.Response) {
        console.log('Response', res.status, req.url);
      }
    }),
  );
};
