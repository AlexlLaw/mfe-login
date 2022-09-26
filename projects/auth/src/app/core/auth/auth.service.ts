import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from 'projects/auth/src/environments/environment';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthResponse } from '../interfaces/authResponse.interface';
import { TokenService } from './token/token.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly API = `${environment.API}Usuario/authenticate`;;
  private userService = inject(TokenService)

  constructor(private http: HttpClient) { }

  public postAuthenticate(cpf: string, senha: string): Observable<AuthResponse> {
    return this.http
     .post(`${this.API}`,
      { cpf, senha },
      { observe: 'response' })
    .pipe(tap((res: any): void => {
      const response = res.body;
      const token: AuthResponse = response
      this.userService.setToken(token.token);
    }));
  }
}