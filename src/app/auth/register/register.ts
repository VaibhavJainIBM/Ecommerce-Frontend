import { HttpErrorResponse } from '@angular/common/http';
import {
  Component,
  inject,
  signal,
} from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import {
  Router,
  RouterLink,
} from '@angular/router';

import { Navbar } from '../../shared/navbar/navbar';
import { AuthApi } from '../auth-api';
import { RegisterRequest } from '../auth.models';
import { AuthSession } from '../auth-session';

const nonWhitespaceValidator: ValidatorFn = (
  control: AbstractControl,
): ValidationErrors | null => {
  const value = String(control.value ?? '');

  return value.trim().length > 0
    ? null
    : { whitespace: true };
};

const passwordPolicyValidator: ValidatorFn = (
  control: AbstractControl,
): ValidationErrors | null => {
  const value = String(control.value ?? '');

  if (!value) {
    return null;
  }

  const isValid =
    value.length >= 8 &&
    new Set(value).size >= 4 &&
    /[A-Z]/.test(value) &&
    /[a-z]/.test(value) &&
    /\d/.test(value) &&
    /[^A-Za-z0-9]/.test(value);

  return isValid
    ? null
    : { passwordPolicy: true };
};

const passwordsMatchValidator: ValidatorFn = (
  control: AbstractControl,
): ValidationErrors | null => {
  const password =
    control.get('password')?.value;

  const confirmation =
    control.get('confirmPassword')?.value;

  return password === confirmation
    ? null
    : { passwordsMismatch: true };
};

@Component({
  selector: 'app-register',
  imports: [
    ReactiveFormsModule,
    RouterLink,
    Navbar,
  ],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  private readonly authApi = inject(AuthApi);
  private readonly authSession =
    inject(AuthSession);
  private readonly router = inject(Router);

  protected readonly showPassword =
    signal(false);

  protected readonly showConfirmPassword =
    signal(false);

  protected readonly isSubmitting =
    signal(false);

  protected readonly errorMessage =
    signal('');

  protected readonly registerForm =
    new FormGroup(
      {
        firstName: new FormControl('', {
          nonNullable: true,
          validators: [
            Validators.required,
            nonWhitespaceValidator,
            Validators.maxLength(100),
          ],
        }),

        lastName: new FormControl('', {
          nonNullable: true,
          validators: [
            Validators.required,
            nonWhitespaceValidator,
            Validators.maxLength(100),
          ],
        }),

        email: new FormControl('', {
          nonNullable: true,
          validators: [
            Validators.required,
            Validators.email,
          ],
        }),

        password: new FormControl('', {
          nonNullable: true,
          validators: [
            Validators.required,
            passwordPolicyValidator,
          ],
        }),

        confirmPassword: new FormControl('', {
          nonNullable: true,
          validators: [
            Validators.required,
          ],
        }),
      },
      {
        validators: passwordsMatchValidator,
      },
    );

  protected get firstName() {
    return this.registerForm.controls.firstName;
  }

  protected get lastName() {
    return this.registerForm.controls.lastName;
  }

  protected get email() {
    return this.registerForm.controls.email;
  }

  protected get password() {
    return this.registerForm.controls.password;
  }

  protected get confirmPassword() {
    return this.registerForm.controls
      .confirmPassword;
  }

  protected togglePassword(): void {
    this.showPassword.update(
      (visible) => !visible,
    );
  }

  protected toggleConfirmPassword(): void {
    this.showConfirmPassword.update(
      (visible) => !visible,
    );
  }

  protected onSubmit(): void {
    this.errorMessage.set('');

    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }

    this.isSubmitting.set(true);

    const value =
      this.registerForm.getRawValue();

    const request: RegisterRequest = {
      firstName: value.firstName.trim(),
      lastName: value.lastName.trim(),
      email: value.email.trim(),
      password: value.password,
    };

    this.authApi.register(request).subscribe({
      next: (response) => {
        this.authSession.start(response);
        this.isSubmitting.set(false);

        void this.router.navigateByUrl(
          '/account',
        );
      },

      error: (error: HttpErrorResponse) => {
        if (error.status === 409) {
          this.email.setErrors({
            ...this.email.errors,
            duplicateEmail: true,
          });
        }

        this.errorMessage.set(
          this.readRegistrationError(error),
        );

        this.isSubmitting.set(false);
      },
    });
  }

  private readRegistrationError(
    error: HttpErrorResponse,
  ): string {
    if (error.status === 409) {
      return 'An account with this email already exists.';
    }

    if (error.status === 400) {
      const errors = error.error?.errors as
        | Record<string, string[]>
        | undefined;

      const messages = errors
        ? Object.values(errors).flat()
        : [];

      return messages.length > 0
        ? messages.join(' ')
        : 'Check your registration details.';
    }

    if (error.status === 0) {
      return (
        'Cannot reach the API. ' +
        'Check that the API is running.'
      );
    }

    return (
      'Account creation failed. ' +
      'Please try again.'
    );
  }
}