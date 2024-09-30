import { HttpInterceptorFn } from '@angular/common/http';
//https://fakeapi.platzi.com/en/rest/auth-jwt/
export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  console.log(req);
  let token = localStorage.getItem('token');
  console.log(token);
  if (token) {
    req = req.clone({ setHeaders: { Authorization: 'Bearer  ' + token } });
  }
  return next(req);
};
