import {
  CurrencyPipe,
  DatePipe,
} from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import {
  Component,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { AdminApi } from '../admin-api';
import { readAdminError } from '../admin-error';
import { AdminListing } from '../admin.models';

@Component({
  selector: 'app-admin-listing-reviews',
  imports: [CurrencyPipe, DatePipe, ReactiveFormsModule],
  templateUrl: './admin-listing-reviews.html',
  styleUrls: [
    '../admin-shared.css',
    './admin-listing-reviews.css',
  ],
})
export class AdminListingReviews implements OnInit {
  private readonly api = inject(AdminApi);

  protected readonly statuses = [
    'Draft',
    'PendingReview',
    'Active',
    'Paused',
    'Rejected',
    'Archived',
  ];
  protected readonly search = new FormControl('', {
    nonNullable: true,
  });
  protected readonly status = signal('PendingReview');
  protected readonly listings = signal<AdminListing[]>([]);
  protected readonly page = signal(1);
  protected readonly totalPages = signal(0);
  protected readonly totalCount = signal(0);
  protected readonly isLoading = signal(false);
  protected readonly busyListingId = signal<string | null>(null);
  protected readonly errorMessage = signal('');
  protected readonly successMessage = signal('');

  ngOnInit(): void {
    this.load(1);
  }

  protected load(page: number): void {
    this.isLoading.set(true);
    this.errorMessage.set('');

    this.api.getListings({
      search: this.search.value,
      status: this.status(),
      page,
      pageSize: 20,
    }).subscribe({
      next: (response) => {
        this.listings.set(response.items);
        this.page.set(response.page);
        this.totalPages.set(response.totalPages);
        this.totalCount.set(response.totalCount);
        this.isLoading.set(false);
      },
      error: (error: HttpErrorResponse) => {
        this.errorMessage.set(
          readAdminError(
            error,
            'Could not load listings.',
          ),
        );
        this.isLoading.set(false);
      },
    });
  }

  protected changeStatus(event: Event): void {
    this.status.set(
      (event.target as HTMLSelectElement).value,
    );
    this.load(1);
  }

  protected approve(listing: AdminListing): void {
    this.busyListingId.set(listing.listingId);
    this.errorMessage.set('');
    this.successMessage.set('');

    this.api.approveListing(listing).subscribe({
      next: () => {
        this.busyListingId.set(null);
        this.successMessage.set('Listing approved.');
        this.load(this.page());
      },
      error: (error: HttpErrorResponse) => {
        this.errorMessage.set(
          readAdminError(
            error,
            'Could not approve the listing.',
          ),
        );
        this.busyListingId.set(null);
      },
    });
  }
}
