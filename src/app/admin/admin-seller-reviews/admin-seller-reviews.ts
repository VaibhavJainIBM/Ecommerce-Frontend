import { HttpErrorResponse } from '@angular/common/http';
import {
  Component,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { AdminApi } from '../admin-api';
import { readAdminError } from '../admin-error';
import { AdminSeller } from '../admin.models';

@Component({
  selector: 'app-admin-seller-reviews',
  imports: [DatePipe, ReactiveFormsModule],
  templateUrl: './admin-seller-reviews.html',
  styleUrls: [
    '../admin-shared.css',
    './admin-seller-reviews.css',
  ],
})
export class AdminSellerReviews implements OnInit {
  private readonly api = inject(AdminApi);

  protected readonly statuses = [
    'PendingVerification',
    'UnderReview',
    'Active',
    'Rejected',
    'Suspended',
    'Closed',
  ];
  protected readonly search = new FormControl('', {
    nonNullable: true,
  });
  protected readonly status = signal('UnderReview');
  protected readonly sellers = signal<AdminSeller[]>([]);
  protected readonly page = signal(1);
  protected readonly totalPages = signal(0);
  protected readonly totalCount = signal(0);
  protected readonly isLoading = signal(false);
  protected readonly busySellerId = signal<string | null>(null);
  protected readonly errorMessage = signal('');
  protected readonly successMessage = signal('');

  ngOnInit(): void {
    this.load(1);
  }

  protected load(page: number): void {
    this.isLoading.set(true);
    this.errorMessage.set('');

    this.api.getSellers({
      search: this.search.value,
      status: this.status(),
      page,
      pageSize: 20,
    }).subscribe({
      next: (response) => {
        this.sellers.set(response.items);
        this.page.set(response.page);
        this.totalPages.set(response.totalPages);
        this.totalCount.set(response.totalCount);
        this.isLoading.set(false);
      },
      error: (error: HttpErrorResponse) => {
        this.errorMessage.set(
          readAdminError(
            error,
            'Could not load sellers.',
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

  protected approve(seller: AdminSeller): void {
    this.busySellerId.set(seller.sellerId);
    this.errorMessage.set('');
    this.successMessage.set('');

    this.api.approveSeller(seller.sellerId).subscribe({
      next: () => {
        this.busySellerId.set(null);
        this.successMessage.set('Seller approved.');
        this.load(this.page());
      },
      error: (error: HttpErrorResponse) => {
        this.errorMessage.set(
          readAdminError(
            error,
            'Could not approve the seller.',
          ),
        );
        this.busySellerId.set(null);
      },
    });
  }
}
