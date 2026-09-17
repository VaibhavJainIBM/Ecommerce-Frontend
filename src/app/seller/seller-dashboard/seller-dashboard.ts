import { HttpErrorResponse } from '@angular/common/http';
import {
  Component,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { finalize, forkJoin } from 'rxjs';

import { Navbar } from '../../shared/navbar/navbar';
import { SellerApi } from '../seller-api';
import { getSellerError } from '../seller-error';
import {
  MySeller,
  SellerInvitation,
} from '../seller.models';

@Component({
  selector: 'app-seller-dashboard',
  imports: [
    Navbar,
    ReactiveFormsModule,
    RouterLink,
  ],
  templateUrl: './seller-dashboard.html',
  styleUrl: './seller-dashboard.css',
})
export class SellerDashboard implements OnInit {
  private readonly sellerApi = inject(SellerApi);

  protected readonly sellers = signal<MySeller[]>([]);
  protected readonly invitations =
    signal<SellerInvitation[]>([]);

  protected readonly isLoading = signal(false);
  protected readonly isSaving = signal(false);
  protected readonly busySellerId =
    signal<string | null>(null);

  protected readonly errorMessage = signal('');
  protected readonly successMessage = signal('');

  protected readonly createForm = new FormGroup({
    displayName: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.maxLength(150),
      ],
    }),
    legalBusinessName: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.maxLength(250),
      ],
    }),
  });

  ngOnInit(): void {
    this.load();
  }

  protected load(): void {
    this.isLoading.set(true);
    this.errorMessage.set('');

    forkJoin({
      sellers: this.sellerApi.getMine(),
      invitations: this.sellerApi.getInvitations(),
    })
      .pipe(
        finalize(() => this.isLoading.set(false)),
      )
      .subscribe({
        next: ({ sellers, invitations }) => {
          this.sellers.set(sellers);
          this.invitations.set(invitations);
        },
        error: (error: HttpErrorResponse) => {
          this.errorMessage.set(
            getSellerError(
              error,
              'Could not load seller accounts.',
            ),
          );
        },
      });
  }

  protected createSeller(): void {
    this.errorMessage.set('');
    this.successMessage.set('');

    if (this.createForm.invalid) {
      this.createForm.markAllAsTouched();
      this.errorMessage.set(
        'Enter both business names.',
      );
      return;
    }

    const value = this.createForm.getRawValue();
    this.isSaving.set(true);

    this.sellerApi
      .createSeller({
        displayName: value.displayName.trim(),
        legalBusinessName:
          value.legalBusinessName.trim(),
      })
      .pipe(
        finalize(() => this.isSaving.set(false)),
      )
      .subscribe({
        next: () => {
          this.createForm.reset({
            displayName: '',
            legalBusinessName: '',
          });
          this.successMessage.set(
            'Seller account created.',
          );
          this.load();
        },
        error: (error: HttpErrorResponse) => {
          this.errorMessage.set(
            getSellerError(
              error,
              'Could not create the seller account.',
            ),
          );
        },
      });
  }

  protected acceptInvitation(
    invitation: SellerInvitation,
  ): void {
    this.errorMessage.set('');
    this.successMessage.set('');
    this.busySellerId.set(invitation.sellerId);

    this.sellerApi
      .acceptInvitation(invitation.sellerId)
      .pipe(
        finalize(() =>
          this.busySellerId.set(null),
        ),
      )
      .subscribe({
        next: () => {
          this.successMessage.set(
            'Invitation accepted.',
          );
          this.load();
        },
        error: (error: HttpErrorResponse) => {
          this.errorMessage.set(
            getSellerError(
              error,
              'Could not accept the invitation.',
            ),
          );
        },
      });
  }

  protected canOpen(seller: MySeller): boolean {
    return (
      seller.memberStatus === 'Active' &&
      seller.roles.length > 0
    );
  }
}
