import { computed, Injectable, signal } from '@angular/core';
import { AuthResponse, AuthUser } from './auth.models';

@Injectable({
  providedIn: 'root',
})
export class AuthSession {
  private readonly tokenState = signal<string | null>(null);
  private readonly userState = signal<AuthUser | null>(null);

  readonly user = this.userState.asReadonly();

  readonly isAuthenticated = computed(
    () => this.tokenState() !== null,
  );

  start(response: AuthResponse): void {
    this.tokenState.set(response.accessToken);

    this.userState.set({
      userId: response.userId,
      firstName: response.firstName,
      lastName: response.lastName,
      email: response.email,
      platformRoles: response.platformRoles,
    });
  }

  getAccessToken(): string | null {
    return this.tokenState();
  }


  hasRole(role: string): boolean {
    return (
      this.userState()?.platformRoles.includes(role)
      ?? false
    );
  }

  hasAnyRole(roles: readonly string[]): boolean {
    return roles.some((role) => this.hasRole(role));
  }

  logout(): void {
    this.tokenState.set(null);
    this.userState.set(null);
  }
}