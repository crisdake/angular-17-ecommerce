import { HttpInterceptorFn, HttpContextToken, HttpContext, HttpRequest, HttpHandlerFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '@shared/services/auth.service';
import { TokenService } from '@shared/services/token.service';
import { switchMap } from 'rxjs/operators';

const CheckToke = new HttpContextToken<boolean>(() => false)
export function checkToken() {
  return new HttpContext().set(CheckToke, true)
}

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  if (req.context.get(CheckToke)) {
    const valid = inject(TokenService).IsValidToken() // pregunta el token es valido
    if (valid) {
      return addToken(req, next)
    }
    else {
      return updateandRefresh(req, next)
    }
  }
  else {
    return next(req)
  }
};
export function addToken(req: HttpRequest<unknown>, next: HttpHandlerFn) {
  const access_token = inject(TokenService).getToken()
  if (access_token) {
    const authRequest = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${access_token}`)
    })
    return next(authRequest)
  }
  else {
    return next(req)
  }
}
export function updateandRefresh(req: HttpRequest<unknown>, next: HttpHandlerFn) {
  const refresh = inject(TokenService).getRefreshToken()
  const isvalid = inject(TokenService).IsValidRefreshToken()
  if (refresh && isvalid) {
    const auth = inject(AuthService)
    return auth.refreshToken(refresh).pipe(
      switchMap(() => addToken(req, next))
    )
  }
  return next(req)

}
