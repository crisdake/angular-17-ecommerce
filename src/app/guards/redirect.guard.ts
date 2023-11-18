import { CanActivateFn, Router } from '@angular/router';
import { TokenService } from '@shared/services/token.service';


export const RedirectGuard: CanActivateFn = (route, state) => {
  // aqui siempre se retorna un booleano y se da acceso o no
  /* tokenService = inject(TokenService) */
  const token = TokenService.IsValidRefreshToken()
  // navega al profile
  return token ? true: false;
};
