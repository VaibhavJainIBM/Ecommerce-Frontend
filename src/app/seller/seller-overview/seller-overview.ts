import { HttpErrorResponse } from '@angular/common/http';
import {
  Component,
  inject,
  signal,
} from '@angular/core';
import { DatePipe } from '@angular/common';
import { finalize } from 'rxjs';

import { SellerApi } from '../seller-api';
import { SellerContext } from '../seller-context';
import { getSellerError } from '../seller-error';

@Component({
  selector: 'app-seller-overview',
  imports: [DatePipe],
  templateUrl: './seller-overview.html',
  styleUrl: './seller-overview.css',
})
export class SellerOverview {
  private readonly sellerApi = inject(SellerApi);

  protected readonly sellerContext =
    inject(SellerContext);

  protected readonly isSaving = signal(false);
  protected readonly errorMessage = signal('');
  protected readonly successMessage = signal('');

  protected canSubmit(): boolean {
    const seller = this.sellerContext.selected();

    return (
      this.sellerContext.isOwner() &&
      (
        seller?.sellerStatus ===
          'PendingVerification' ||
        seller?.sellerStatus === 'Rejected'
      )
    );
  }

  protected submitForReview(): void {
    const seller = this.sellerContext.selected();

    if (!seller || !this.canSubmit()) {
      return;
    }

    this.isSaving.set(true);
    this.errorMessage.set('');
    this.successMessage.set('');

    this.sellerApi
      .submitSellerForReview(seller.sellerId)
      .pipe(
        finalize(() => this.isSaving.set(false)),
      )
      .subscribe({
        next: (response) => {
          this.sellerContext.select({
            ...seller,
            sellerStatus: response.status,
            approvedAtUtc: response.approvedAtUtc,
          });

          this.successMessage.set(
            'Seller submitted for review.',
          );
        },
        error: (error: HttpErrorResponse) => {
          this.errorMessage.set(
            getSellerError(
              error,
              'Could not submit the seller.',
            ),
          );
        },
      });
  }
}
