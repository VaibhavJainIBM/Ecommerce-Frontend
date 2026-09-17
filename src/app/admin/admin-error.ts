import { HttpErrorResponse } from '@angular/common/http';

interface ApiProblem {
  detail?: string;
  title?: string;
  errors?: Record<string, string[]>;
}

export function readAdminError(
  error: HttpErrorResponse,
  fallback: string,
): string {
  if (error.status === 0) {
    return 'Cannot reach the API.';
  }

  const problem =
    typeof error.error === 'object' &&
    error.error !== null
      ? (error.error as ApiProblem)
      : null;

  const validationMessage = problem?.errors
    ? Object.values(problem.errors).flat()[0]
    : undefined;

  if (validationMessage) {
    return validationMessage;
  }

  if (problem?.detail) {
    return problem.detail;
  }

  if (error.status === 401) {
    return 'Sign in again.';
  }

  if (error.status === 403) {
    return 'Administrator access is required.';
  }

  if (error.status === 409) {
    return 'The record changed. Refresh and try again.';
  }

  if (error.status === 413) {
    return 'The file is too large.';
  }

  return fallback;
}
