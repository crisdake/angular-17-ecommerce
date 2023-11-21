import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { TokenService } from '@shared/services/token.service';


export const authGuard: CanActivateFn = (route, state) => {
  // aqui siempre se retorna un booleano y se da acceso o no
  /* tokenService = inject(TokenService) */
  const token = inject(TokenService)
  const router = inject(Router)
  const isvalidtoken = token.IsValidRefreshToken()
  return isvalidtoken ? true: router.navigateByUrl('/');
};
