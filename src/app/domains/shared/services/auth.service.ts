import { HttpClient } from '@angular/common/http';
import { Injectable, inject,signal } from '@angular/core';
import { TokenService } from './token.service';
import { Auth, User } from '@shared/models/user.model';
import {ResponseLogin} from '@shared/models/auth.model'
import { switchMap, tap } from 'rxjs';
import { checkToken } from 'src/app/interceptors/token.interceptor';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient)
  User = signal<User | null>(null)
  constructor(
    private tokenService: TokenService
  ) { }
/*   this.http.get<User>('https://api.escuelajs.co/api/v1/profile',{
      headers:{
        Authorization: `Bearer ${token}`
      }
    }) */
  getProfile(){
    const token = TokenService.getToken()
    return this.http.get<User>('https://api.escuelajs.co/api/v1/profile',{
      context: checkToken()
    }).pipe(
      tap(user=> this.User.set(user))
    )
  }
  Login(email:string,password:string){
    return this.http.post<ResponseLogin>('https://api.escuelajs.co/api/v1/login',{email,password})
    .pipe(
      // recibimos el access token y el refresh token
      tap((response) => {
      this.tokenService.saveToken(response.access_token)
      this.tokenService.saveRefreshToken(response.refresh_token)
      }))
  }
  LoginAndGet(email:string,password: string){
     return this.Login(email,password)
     .pipe(
      switchMap(()=> this.getProfile())
     )
  }
  refreshToken(refresh: string){
    return this.http.post<ResponseLogin>('https://api.escuelajs.co/api/v1/auth/refresh-token',{refresh})
    .pipe(
      // recibimos el access token y el refresh token
      tap((response) => {
      this.tokenService.saveToken(response.access_token)
      this.tokenService.saveRefreshToken(response.refresh_token)
      }))
  }
  logout(){
    this.tokenService.removeToken()
  }
  Register(name:string,email:string,password:string,avatar:string){
    return this.http.post<Auth>('https://api.escuelajs.co/api/v1/users',{name,email,password,avatar})
  }
  RegisterAndlogin(name:string,email:string,password:string,avatar:string){
    return this.http.post<Auth>('https://api.escuelajs.co/api/v1/users',{name,email,password,avatar})
    .pipe(
      switchMap(()=> this.Login(email,password))
    )
  }
  Available(email:string){
    return this.http.post<{isAvailable:boolean}>('https://api.escuelajs.co/api/v1/users/is-available',{email})
  }
}
