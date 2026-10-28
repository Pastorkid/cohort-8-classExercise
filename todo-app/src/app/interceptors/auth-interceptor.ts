import { HttpInterceptorFn } from '@angular/common/http';
import { TodoService } from '../Services/todo-service';
import { inject } from '@angular/core';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  // const service = inject(TodoService);
  // return next(req);
  // const modifyRequest = req.clone({
  //   setHeaders: {
  //     'Z-app': '1.0.0',
  //   },
  // });
  // return next(modifyRequest);

  // For JWT AUTHENTICATION
  const token = localStorage.getItem('token');
  if (token) {
    const authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
    return next(authReq);
  } else {
    return next(req);
  }
};
