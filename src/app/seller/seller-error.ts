import { HttpErrorResponse } from '@angular/common/http';

interface ErrorItem {
  code?: string;
  description?: string;
}

interface ApiProblem {
  detail?: string;
  title?: string;
  errors?: Record<string, string[]> | ErrorItem[];
}

export function getSellerError(
  error: HttpErrorResponse,
  fallback: string,
): string {
  if (error.status === 0) {
    return 'Cannot reach the API.';
  }

  const problem =
    typeof error.error === 'object' &&
    error.error !== null
      ? error.error as ApiProblem
      : null;

  if (problem?.errors) {
    if (Array.isArray(problem.errors)) {
      const message = problem.errors
        .map((item) => item.description)
        .filter((item): item is string => Boolean(item))
        .join(' ');

      if (message) {
        return message;
      }
    } else {
      const message = Object.values(problem.errors)
        .flat()
        .join(' ');

      if (message) {
        return message;
      }
    }
  }

  if (problem?.detail) {
    return problem.detail;
  }

  if (error.status === 401) {
    return 'Sign in again.';
  }

  if (error.status === 403) {
    return 'You do not have permission for this action.';
  }

  if (error.status === 404) {
    return 'The requested record was not found.';
  }

  if (error.status === 409) {
    return 'The data changed. Refresh and try again.';
  }

  return fallback;
}
