import { Component, inject, OnInit, signal } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink, ActivatedRoute } from '@angular/router';

import { HttpErrorResponse } from '@angular/common/http';
import { AuthApi } from '../auth-api';
import { AuthSession } from '../auth-session';
import { Navbar } from '../../shared/navbar/navbar';
import { Roles } from '../auth.models';


@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, Navbar],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  protected readonly showPassword = signal(false);
  protected readonly statusMessage = signal('');
  private readonly router = inject(Router);
  private readonly authApi = inject(AuthApi);
  private readonly authSession = inject(AuthSession);
  private readonly route = inject(ActivatedRoute);



  protected readonly isSubmitting = signal(false);
  protected readonly errorMessage = signal('');

  protected readonly loginForm = new FormGroup({
    email: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.email,
      ],
    }),

    password: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
  });

  protected get email() {
    return this.loginForm.controls.email;
  }

  protected get password() {
    return this.loginForm.controls.password;
  }

  protected togglePassword(): void {
    this.showPassword.update((visible) => !visible);
  }

  private getDefaultRoute(roles: string[]): string {
    if (roles.includes(Roles.Admin)) {
      return '/admin';
    }
    return '/account';
  }

  private getDestination(
    roles: string[],
    returnUrl: string | null,
  ): string {
    const isAdmin = roles.includes(Roles.Admin);

    if (
      !returnUrl ||
      !returnUrl.startsWith('/') ||
      returnUrl.startsWith('//')
    ) {
      return this.getDefaultRoute(roles);
    }

    if (isAdmin && returnUrl.startsWith('/seller')) {
      return '/admin';
    }

    if (!isAdmin && returnUrl.startsWith('/admin')) {
      return '/account';
    }

    return returnUrl;
  }


    protected onSubmit(): void {
      this.errorMessage.set('');

      if (this.loginForm.invalid) {
        this.loginForm.markAllAsTouched();
        return;
      }

      this.isSubmitting.set(true);

      const request = this.loginForm.getRawValue();

      this.authApi.login(request).subscribe({
        next: (response) => {
          this.authSession.start(response);
          this.isSubmitting.set(false);

          const returnUrl =
            this.route.snapshot.queryParamMap.get('returnUrl');

          const destination = this.getDestination(
            response.platformRoles,
            returnUrl,
          );

          void this.router.navigateByUrl(destination);
        },

        error: (error: HttpErrorResponse) => {
          if (error.status === 401) {
            this.errorMessage.set(
              'Incorrect email or password.',
            );
          } else if (error.status === 0) {
            this.errorMessage.set(
              'Cannot reach the API. Check that the API is running.',
            );
          } else if (error.status === 400) {
            this.errorMessage.set(
              'The login request was invalid.',
            );
          } else {
            this.errorMessage.set(
              'Sign-in failed. Please try again.',
            );
          }

          this.isSubmitting.set(false);
        },
      });
    }
}
