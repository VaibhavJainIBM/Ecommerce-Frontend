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
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  finalize,
  Observable,
} from 'rxjs';

import {
  CatalogProduct,
  CatalogVariant,
} from '../../catalog/catalog.models';
import { ProductApi } from '../../catalog/product-api';
import { SellerApi } from '../seller-api';
import { SellerContext } from '../seller-context';
import {
  SellerListing,
  SellerListingStatus,
} from '../seller.models';

interface ApiProblem {
  detail?: string;
  errors?: Record<string, string[]>;
}

interface SelectedCatalogVariant {
  product: CatalogProduct;
  variant: CatalogVariant;
}

@Component({
  selector: 'app-seller-listings',
  imports: [
    ReactiveFormsModule,
    CurrencyPipe,
    DatePipe,
  ],
  templateUrl: './seller-listings.html',
  styleUrl: './seller-listings.css',
})
export class SellerListings implements OnInit {
  private readonly sellerApi = inject(SellerApi);
  private readonly productApi = inject(ProductApi);

  protected readonly sellerContext =
    inject(SellerContext);

  protected readonly catalogProducts =
    signal<CatalogProduct[]>([]);

  protected readonly selectedCatalogVariant =
    signal<SelectedCatalogVariant | null>(null);

  protected readonly catalogSearch = signal('');
  protected readonly catalogPage = signal(1);
  protected readonly catalogTotalPages = signal(0);
  protected readonly catalogTotalCount = signal(0);
  protected readonly isCatalogLoading = signal(false);
  protected readonly catalogErrorMessage = signal('');

  private readonly lastSuggestedSku = signal('');

  protected readonly listings =
    signal<SellerListing[]>([]);

  protected readonly selectedListing =
    signal<SellerListing | null>(null);

  protected readonly statusFilter =
    signal<SellerListingStatus | ''>('');

  protected readonly page = signal(1);
  protected readonly totalPages = signal(0);
  protected readonly totalCount = signal(0);

  protected readonly isLoading = signal(false);
  protected readonly isCreating = signal(false);
  protected readonly isLoadingDetails = signal(false);

  protected readonly busyListingId =
    signal<string | null>(null);

  protected readonly errorMessage = signal('');
  protected readonly successMessage = signal('');

  protected readonly pageSize = 20;
  protected readonly catalogPageSize = 10;

  protected readonly statusOptions:
    SellerListingStatus[] = [
      'Draft',
      'PendingReview',
      'Active',
      'Paused',
      'Rejected',
      'Archived',
    ];

  protected readonly createForm = new FormGroup({
    productVariantId: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),

    sellerSku: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.maxLength(64),
        Validators.pattern(/^[A-Za-z0-9._-]+$/),
      ],
    }),

    priceAmount: new FormControl(0, {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.min(0.01),
        Validators.pattern(/^\d+(\.\d{1,2})?$/),
      ],
    }),

    currencyCode: new FormControl('INR', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.pattern(/^[A-Za-z]{3}$/),
      ],
    }),
  });

  ngOnInit(): void {
    if (!this.sellerContext.canManage()) {
      this.errorMessage.set(
        'Owner or Manager access is required.',
      );
      return;
    }

    this.loadCatalog();
    this.loadListings();
  }

  private get sellerId(): string {
    const seller = this.sellerContext.selected();

    if (!seller) {
      throw new Error('No seller is selected.');
    }

    return seller.sellerId;
  }

  protected loadCatalog(
    search = this.catalogSearch(),
    page = 1,
  ): void {
    if (page < 1) {
      return;
    }

    const searchTerm = search.trim();

    if (searchTerm.length > 100) {
      this.catalogErrorMessage.set(
        'Catalog search cannot exceed 100 characters.',
      );
      return;
    }

    this.catalogSearch.set(searchTerm);
    this.isCatalogLoading.set(true);
    this.catalogErrorMessage.set('');

    this.productApi
      .searchProducts(
        searchTerm,
        page,
        this.catalogPageSize,
      )
      .pipe(
        finalize(() =>
          this.isCatalogLoading.set(false),
        ),
      )
      .subscribe({
        next: (response) => {
          this.catalogProducts.set(response.items);
          this.catalogPage.set(response.page);
          this.catalogTotalPages.set(
            response.totalPages,
          );
          this.catalogTotalCount.set(
            response.totalCount,
          );
        },

        error: (error: HttpErrorResponse) => {
          this.catalogErrorMessage.set(
            this.readCatalogError(error),
          );
        },
      });
  }

  protected searchCatalog(
    search: string,
    event?: Event,
  ): void {
    event?.preventDefault();
    this.loadCatalog(search, 1);
  }

  protected clearCatalogSearch(): void {
    this.loadCatalog('', 1);
  }

  protected selectCatalogVariant(
    product: CatalogProduct,
    variant: CatalogVariant,
  ): void {
    this.createForm.controls.productVariantId.setValue(
      variant.variantId,
    );

    this.selectedCatalogVariant.set({
      product,
      variant,
    });

    const skuControl =
      this.createForm.controls.sellerSku;

    const currentSku = skuControl.value.trim();

    if (
      currentSku &&
      currentSku !== this.lastSuggestedSku()
    ) {
      return;
    }

    const suggestedSku = this.createSkuSuggestion(
      product,
      variant,
    );

    skuControl.setValue(suggestedSku);
    this.lastSuggestedSku.set(suggestedSku);
  }

  protected loadListings(page = 1): void {
    if (page < 1) {
      return;
    }

    this.isLoading.set(true);
    this.errorMessage.set('');

    const status =
      this.statusFilter() || undefined;

    this.sellerApi
      .getListings(this.sellerId, {
        page,
        pageSize: this.pageSize,
        status,
      })
      .pipe(
        finalize(() => this.isLoading.set(false)),
      )
      .subscribe({
        next: (response) => {
          this.listings.set(response.items);
          this.page.set(response.page);
          this.totalPages.set(response.totalPages);
          this.totalCount.set(response.totalCount);
        },

        error: (error: HttpErrorResponse) => {
          this.errorMessage.set(
            this.readError(error),
          );
        },
      });
  }

  protected changeStatusFilter(
    event: Event,
  ): void {
    const select = event.target as HTMLSelectElement;

    this.statusFilter.set(
      select.value as SellerListingStatus | '',
    );

    this.loadListings(1);
  }

  protected createListing(): void {
    this.errorMessage.set('');
    this.successMessage.set('');

    if (
      this.createForm.invalid ||
      !this.canCreateListing()
    ) {
      this.createForm.markAllAsTouched();

      this.errorMessage.set(
        'Check the listing fields and try again.',
      );
      return;
    }

    const value = this.createForm.getRawValue();

    if (!value.productVariantId.trim()) {
      this.errorMessage.set(
        'Product variant ID is required.',
      );
      return;
    }

    this.isCreating.set(true);

    this.sellerApi
      .createListing(this.sellerId, {
        productVariantId:
          value.productVariantId.trim(),

        sellerSku:
          value.sellerSku.trim(),

        priceAmount:
          value.priceAmount,

        currencyCode:
          value.currencyCode.trim().toUpperCase(),
      })
      .pipe(
        finalize(() => this.isCreating.set(false)),
      )
      .subscribe({
        next: (listing) => {
          this.selectedListing.set(listing);

          this.successMessage.set(
            'Draft listing created.',
          );

          this.createForm.reset({
            productVariantId: '',
            sellerSku: '',
            priceAmount: 0,
            currencyCode: 'INR',
          });

          this.selectedCatalogVariant.set(null);
          this.lastSuggestedSku.set('');

          this.loadListings(1);
        },

        error: (error: HttpErrorResponse) => {
          this.errorMessage.set(
            this.readError(error),
          );
        },
      });
  }

  protected loadDetails(
    listingId: string,
  ): void {
    this.isLoadingDetails.set(true);
    this.errorMessage.set('');
    this.selectedListing.set(null);

    this.sellerApi
      .getListing(this.sellerId, listingId)
      .pipe(
        finalize(() =>
          this.isLoadingDetails.set(false),
        ),
      )
      .subscribe({
        next: (listing) => {
          this.selectedListing.set(listing);
        },

        error: (error: HttpErrorResponse) => {
          this.errorMessage.set(
            this.readError(error),
          );
        },
      });
  }

  protected updatePrice(
    listing: SellerListing,
    priceText: string,
    currencyText: string,
  ): void {
    const trimmedPrice = priceText.trim();
    const currency =
      currencyText.trim().toUpperCase();

    const validPrice =
      /^\d+(\.\d{1,2})?$/.test(trimmedPrice);

    const priceAmount = Number(trimmedPrice);

    if (
      !validPrice ||
      !Number.isFinite(priceAmount) ||
      priceAmount <= 0
    ) {
      this.errorMessage.set(
        'Enter a positive price with at most two decimal places.',
      );
      return;
    }

    if (!/^[A-Z]{3}$/.test(currency)) {
      this.errorMessage.set(
        'Currency must contain exactly three letters.',
      );
      return;
    }

    this.runListingAction(
      listing.listingId,

      this.sellerApi.updateListingPrice(
        this.sellerId,
        listing.listingId,
        {
          priceAmount,
          currencyCode: currency,
          rowVersion: listing.rowVersion,
        },
      ),

      'Price updated.',
    );
  }

  protected submitForReview(
    listing: SellerListing,
  ): void {
    this.runListingAction(
      listing.listingId,

      this.sellerApi.submitListingForReview(
        this.sellerId,
        listing.listingId,
        {
          rowVersion: listing.rowVersion,
        },
      ),

      'Listing submitted for review.',
    );
  }

  protected archiveListing(
    listing: SellerListing,
  ): void {
    const confirmed = window.confirm(
      `Archive ${listing.productTitle}? ` +
      'Your current API has no unarchive endpoint.',
    );

    if (!confirmed) {
      return;
    }

    this.runListingAction(
      listing.listingId,

      this.sellerApi.archiveListing(
        this.sellerId,
        listing.listingId,
        {
          rowVersion: listing.rowVersion,
        },
      ),

      'Listing archived.',
    );
  }

  protected canCreateListing(): boolean {
    const status =
      this.sellerContext.selected()?.sellerStatus;

    return (
      this.sellerContext.canManage() &&
      (
        status === 'PendingVerification' ||
        status === 'UnderReview' ||
        status === 'Rejected' ||
        status === 'Active'
      )
    );
  }

  protected canEditPrice(
    listing: SellerListing,
  ): boolean {
    return (
      this.canCreateListing() &&
      (
        listing.status === 'Draft' ||
        listing.status === 'Rejected' ||
        listing.status === 'Paused' ||
        listing.status === 'Active'
      )
    );
  }

  protected canSubmit(
    listing: SellerListing,
  ): boolean {
    return (
      this.sellerContext.canManage() &&
      this.sellerContext.selected()
        ?.sellerStatus === 'Active' &&
      (
        listing.status === 'Draft' ||
        listing.status === 'Rejected'
      )
    );
  }

  protected canArchive(
    listing: SellerListing,
  ): boolean {
    return (
      this.sellerContext.canManage() &&
      listing.status !== 'Archived'
    );
  }

  private runListingAction(
    listingId: string,
    request: Observable<SellerListing>,
    successMessage: string,
  ): void {
    this.errorMessage.set('');
    this.successMessage.set('');
    this.busyListingId.set(listingId);

    request
      .pipe(
        finalize(() =>
          this.busyListingId.set(null),
        ),
      )
      .subscribe({
        next: (updatedListing) => {
          this.replaceListing(updatedListing);

          this.successMessage.set(
            successMessage,
          );

          this.loadListings(this.page());
        },

        error: (error: HttpErrorResponse) => {
          const message = this.readError(error);

          if (error.status === 409) {
            // The rowVersion is stale.
            this.selectedListing.set(null);
            this.loadListings(this.page());

            this.errorMessage.set(
              `${message} The listings were refreshed; try again.`,
            );

            return;
          }

          this.errorMessage.set(message);
        },
      });
  }

  private replaceListing(
    updatedListing: SellerListing,
  ): void {
    this.listings.update((listings) =>
      listings.map((listing) =>
        listing.listingId ===
        updatedListing.listingId
          ? updatedListing
          : listing,
      ),
    );

    this.selectedListing.update((current) =>
      current?.listingId ===
      updatedListing.listingId
        ? updatedListing
        : current,
    );
  }

  private createSkuSuggestion(
    product: CatalogProduct,
    variant: CatalogVariant,
  ): string {
    const suggestedSku = [
      product.brandName,
      product.title,
      variant.variantCode,
    ]
      .join('-')
      .normalize('NFKD')
      .replace(/[\u0300-\u036f]/g, '')
      .toUpperCase()
      .replace(/[^A-Z0-9._-]+/g, '-')
      .replace(/-+/g, '-')
      .replace(/^[._-]+|[._-]+$/g, '')
      .slice(0, 64);

    return suggestedSku ||
      `SKU-${variant.variantId.slice(0, 8).toUpperCase()}`;
  }

  private readCatalogError(
    error: HttpErrorResponse,
  ): string {
    if (error.status === 0) {
      return (
        'Cannot reach the catalog API. Check that the ' +
        'backend is running.'
      );
    }

    const problem =
      typeof error.error === 'object' &&
      error.error !== null
        ? error.error as ApiProblem
        : null;

    if (problem?.errors) {
      const messages =
        Object.values(problem.errors).flat();

      if (messages.length > 0) {
        return messages.join(' ');
      }
    }

    if (problem?.detail) {
      return problem.detail;
    }

    return 'The shared product catalog could not be loaded.';
  }

  private readError(
    error: HttpErrorResponse,
  ): string {
    if (error.status === 0) {
      return (
        'Cannot reach the API. Check that the ' +
        'backend is running.'
      );
    }

    const problem =
      typeof error.error === 'object' &&
      error.error !== null
        ? error.error as ApiProblem
        : null;

    if (problem?.errors) {
      const messages =
        Object.values(problem.errors).flat();

      if (messages.length > 0) {
        return messages.join(' ');
      }
    }

    if (problem?.detail) {
      return problem.detail;
    }

    if (error.status === 403) {
      return (
        'Owner or Manager seller access is required.'
      );
    }

    if (error.status === 404) {
      return (
        'The seller, product variant, or listing was not found.'
      );
    }

    if (error.status === 409) {
      return (
        'The listing conflicts with current server data.'
      );
    }

    return 'The listing request failed.';
  }
}
