import { CanActivateFn, Router } from '@angular/router';
import { TokenService } from '@shared/services/token.service';


export const authGuard: CanActivateFn = (route, state) => {
  // aqui siempre se retorna un booleano y se da acceso o no
  /* tokenService = inject(TokenService) */
  const isvalidtoken = TokenService.IsValidToken()
  return isvalidtoken ? true: false;
};
