import { Injectable } from '@angular/core';

import jwt_decode from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';

import { TokenService } from '../token/token.service';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject = new BehaviorSubject<User>(null!);

  constructor(private tokenService: TokenService) {
    this.tokenService.hasToken() &&
         this.decodeAndNotify();
  }

  public setToken(token: string) {
    this.tokenService.setToken(token);
    this.decodeAndNotify();
  }

  public getUser() {
   return this.userSubject.asObservable();
  }

  public logout() {
    this.tokenService.removeToken();
    this.userSubject.next(null!);
  }

  public isLogged() {
    return this.tokenService.hasToken();
  }

  private decodeAndNotify() {
    const token = this.tokenService.getToken();
    const user = jwt_decode(token!) as User;
    this.userSubject.next(user);
  }
}