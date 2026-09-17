import { HttpErrorResponse } from '@angular/common/http';
import {
  Component,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { forkJoin } from 'rxjs';
import { AdminApi } from '../admin-api';
import { readAdminError } from '../admin-error';
import { AdminProfile } from '../admin.models';

@Component({
  selector: 'app-admin-overview',
  imports: [RouterLink],
  templateUrl: './admin-overview.html',
  styleUrls: [
    '../admin-shared.css',
    './admin-overview.css',
  ],
})
export class AdminOverview implements OnInit {
  private readonly api = inject(AdminApi);

  protected readonly profile =
    signal<AdminProfile | null>(null);
  protected readonly pendingSellers = signal(0);
  protected readonly pendingListings = signal(0);
  protected readonly draftProducts = signal(0);
  protected readonly isLoading = signal(false);
  protected readonly errorMessage = signal('');

  ngOnInit(): void {
    this.load();
  }

  protected load(): void {
    this.isLoading.set(true);
    this.errorMessage.set('');

    forkJoin({
      profile: this.api.getProfile(),
      sellers: this.api.getSellers({
        status: 'UnderReview',
        pageSize: 1,
      }),
      listings: this.api.getListings({
        status: 'PendingReview',
        pageSize: 1,
      }),
      products: this.api.getCatalogProducts({
        status: 'Draft',
        pageSize: 1,
      }),
    }).subscribe({
      next: (result) => {
        this.profile.set(result.profile);
        this.pendingSellers.set(
          result.sellers.totalCount,
        );
        this.pendingListings.set(
          result.listings.totalCount,
        );
        this.draftProducts.set(
          result.products.totalCount,
        );
        this.isLoading.set(false);
      },
      error: (error: HttpErrorResponse) => {
        this.errorMessage.set(
          readAdminError(
            error,
            'Could not load the admin overview.',
          ),
        );
        this.isLoading.set(false);
      },
    });
  }
}
