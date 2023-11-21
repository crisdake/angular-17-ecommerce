import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { TokenService } from '@shared/services/token.service';


export const RedirectGuard: CanActivateFn = (route, state) => {
  // aqui siempre se retorna un booleano y se da acceso o no
  /* tokenService = inject(TokenService) */
  const router = inject(Router)
  const token = inject(TokenService).IsValidRefreshToken()
  // navega al profile
  console.log(token)
  return token ? router.navigateByUrl('/login'): true;
};
