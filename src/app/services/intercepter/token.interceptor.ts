import { HttpInterceptorFn } from '@angular/common/http';
//https://fakeapi.platzi.com/en/rest/auth-jwt/
export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  let token = localStorage.getItem('token');
  if (token) {
    req = req.clone({ setHeaders: { Authorization: 'Bearer  ' + token } });
  }
  return next(req);
};
