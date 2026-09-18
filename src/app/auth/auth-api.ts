import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  AuthResponse,
  AuthUser,
  LoginRequest,
  RegisterRequest,
} from './auth.models';

@Injectable({
  providedIn: 'root',
})
export class AuthApi {
  private readonly http = inject(HttpClient);

  private readonly authUrl =
    'http://localhost:5167/api/auth';

  login(request: LoginRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(
      `${this.authUrl}/login`,
      request,
    );
  }

  getCurrentUser(): Observable<AuthUser> {
    return this.http.get<AuthUser>(
      `${this.authUrl}/me`,
    );
  }

  register(
    request: RegisterRequest,
  ): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(
      `${this.authUrl}/register`,
      request,
    );
  }


}