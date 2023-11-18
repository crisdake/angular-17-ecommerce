import { Injectable } from '@angular/core';
import { jwtDecode, JwtPayload } from 'jwt-decode';
import { getCookie,setCookie,removeCookie } from 'typescript-cookie';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  saveToken(token: string) {
    /* sessionStorage.setItem('token', token); */
    setCookie('token',token,{expires:365,path:'/'})
  }

  static getToken() {
    /* const token = sessionStorage.getItem('token'); */
    const token = getCookie('token')
    return token;
  }

  removeToken() {
    /* sessionStorage.removeItem('token'); */
    removeCookie('token')
  }
  static IsValidToken(){
    const token = TokenService.getToken()
    if(!token){
       return false
    }
    const decodeToken = jwtDecode<JwtPayload>(token)
    if( decodeToken && decodeToken?.exp){
        const tokenDateExp = new Date(0)
        tokenDateExp.setUTCSeconds(decodeToken.exp)
        const today = new Date()
        return tokenDateExp.getTime() > today.getTime()
    }
    return false
  }
  /* refresh token */
  saveRefreshToken(token: string) {
    /* sessionStorage.setItem('token', token); */
    setCookie('refresh-token',token,{expires:365,path:'/'})
  }

  static getRefreshToken() {
    /* const token = sessionStorage.getItem('token'); */
    const token = getCookie('refresh-token')
    return token;
  }

  removeRefreshToken() {
    /* sessionStorage.removeItem('token'); */
    removeCookie('refresh-token')
  }
  static IsValidRefreshToken(){
    const token = TokenService.getRefreshToken()
    if(!token){
       return false
    }
    const decodeToken = jwtDecode<JwtPayload>(token)
    if( decodeToken && decodeToken?.exp){
        const tokenDateExp = new Date(0)
        tokenDateExp.setUTCSeconds(decodeToken.exp)
        const today = new Date()
        return tokenDateExp.getTime() > today.getTime()
    }
    return false
  }
}
