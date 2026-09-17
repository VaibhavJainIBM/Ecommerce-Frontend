import { HttpErrorResponse } from '@angular/common/http';
import {
  Component,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthApi } from '../auth-api';
import { AuthUser } from '../auth.models';
import { Navbar } from '../../shared/navbar/navbar';



@Component({
  selector: 'app-account',
  imports: [RouterLink, Navbar],
  templateUrl: './account.html',
  styleUrl: './account.css',
})
export class Account implements OnInit {
  private readonly authApi = inject(AuthApi);

  protected readonly user = signal<AuthUser | null>(null);
  protected readonly isLoading = signal(true);
  protected readonly errorMessage = signal('');

  ngOnInit(): void {
    this.authApi.getCurrentUser().subscribe({
      next: (user) => {
        this.user.set(user);
        this.isLoading.set(false);
      },

      error: (error: HttpErrorResponse) => {
        if (error.status === 401) {
          this.errorMessage.set(
            'Your session is missing or expired. Please sign in.',
          );
        } else {
          this.errorMessage.set(
            'Could not load your account.',
          );
        }

        this.isLoading.set(false);
      },
    });
  }
}