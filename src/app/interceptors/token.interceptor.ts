import { HttpInterceptorFn,HttpContextToken,HttpContext} from '@angular/common/http';
import { AuthService } from '@shared/services/auth.service';
import { TokenService } from '@shared/services/token.service';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
   const access_token = TokenService.getToken()
    if(access_token){
       const authRequest = req.clone({
        headers: req.headers.set('Authorization',`Bearer: ${access_token}`)
       })
    if(req.context.get(CheckToken)){
      return next(authRequest)
    } else {
      return next(req)
    }
    }
    else {
      return next(req)
    }
  };
const CheckToken = new HttpContextToken<boolean>(()=>false)
export function checkToken(){
   return new HttpContext().set(CheckToken,true)
}

export function updateTokenAndRefresh(){

}
