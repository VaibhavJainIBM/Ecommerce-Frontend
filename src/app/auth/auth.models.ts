export interface LoginRequest {
  email: string;
  password: string;
}

export interface AuthResponse {
  userId: string;
  firstName: string;
  lastName: string;
  email: string;
  accessToken: string;
  tokenType: string;
  expiresAtUtc: string;
  platformRoles: string[];
}

export interface AuthUser {
  userId: string;
  firstName: string;
  lastName: string;
  email: string;
  platformRoles: string[];
}

export const Roles = {
  Admin: 'PlatformAdmin',
} as const;

export interface RegisterRequest {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}