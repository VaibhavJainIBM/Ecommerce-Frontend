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
import { getSellerError } from '../seller-error';
import {
  SellerListing,
  SellerListingStatus,
} from '../seller.models';

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

  protected readonly listings =
    signal<SellerListing[]>([]);

  protected readonly selectedListing =
    signal<SellerListing | null>(null);

  protected readonly catalogProducts =
    signal<CatalogProduct[]>([]);

  protected readonly selectedCatalogVariant =
    signal<SelectedCatalogVariant | null>(null);

  protected readonly statusFilter =
    signal<SellerListingStatus | ''>('');

  protected readonly page = signal(1);
  protected readonly totalPages = signal(0);
  protected readonly totalCount = signal(0);

  protected readonly catalogPage = signal(1);
  protected readonly catalogTotalPages = signal(0);
  protected readonly catalogTotalCount = signal(0);

  protected readonly isLoading = signal(false);
  protected readonly isCatalogLoading = signal(false);
  protected readonly isCreating = signal(false);
  protected readonly isLoadingDetails = signal(false);
  protected readonly busyListingId =
    signal<string | null>(null);

  private readonly priceDrafts = new Map<
    string,
    { price: string; currency: string }
  >();

  protected readonly errorMessage = signal('');
  protected readonly catalogError = signal('');
  protected readonly successMessage = signal('');

  protected readonly statusOptions:
    SellerListingStatus[] = [
      'Draft',
      'PendingReview',
      'Active',
      'Paused',
      'Rejected',
      'Archived',
    ];

  protected readonly catalogSearch =
    new FormControl('', {
      nonNullable: true,
      validators: [Validators.maxLength(100)],
    });

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

  protected loadCatalog(page = 1): void {
    if (this.catalogSearch.invalid || page < 1) {
      this.catalogSearch.markAsTouched();
      return;
    }

    this.isCatalogLoading.set(true);
    this.catalogError.set('');

    this.productApi
      .searchProducts(
        this.catalogSearch.value,
        page,
        10,
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
          this.catalogError.set(
            getSellerError(
              error,
              'Could not load the catalog.',
            ),
          );
        },
      });
  }

  protected selectVariant(
    product: CatalogProduct,
    variant: CatalogVariant,
  ): void {
    this.selectedCatalogVariant.set({
      product,
      variant,
    });

    this.createForm.controls.productVariantId
      .setValue(variant.variantId);

    const skuControl =
      this.createForm.controls.sellerSku;

    if (!skuControl.value.trim()) {
      skuControl.setValue(
        this.makeSku(product, variant),
      );
    }
  }

  private makeSku(
    product: CatalogProduct,
    variant: CatalogVariant,
  ): string {
    return [
      product.brandName,
      product.title,
      variant.variantCode,
    ]
      .join('_')
      .toUpperCase()
      .replace(/[^A-Z0-9._-]+/g, '_')
      .replace(/_+/g, '_')
      .replace(/^_+|_+$/g, '')
      .slice(0, 64);
  }

  protected loadListings(page = 1): void {
    if (page < 1) {
      return;
    }

    this.isLoading.set(true);
    this.errorMessage.set('');

    this.sellerApi
      .getListings(this.sellerId, {
        page,
        pageSize: 20,
        status: this.statusFilter() || undefined,
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
            getSellerError(
              error,
              'Could not load listings.',
            ),
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
        'Select a variant and complete the form.',
      );
      return;
    }

    const value = this.createForm.getRawValue();
    this.isCreating.set(true);

    this.sellerApi
      .createListing(this.sellerId, {
        productVariantId:
          value.productVariantId,
        sellerSku: value.sellerSku.trim(),
        priceAmount: value.priceAmount,
        currencyCode:
          value.currencyCode.trim().toUpperCase(),
      })
      .pipe(
        finalize(() => this.isCreating.set(false)),
      )
      .subscribe({
        next: (listing) => {
          this.selectedListing.set(listing);
          this.selectedCatalogVariant.set(null);
          this.successMessage.set(
            'Draft listing created.',
          );

          this.createForm.reset({
            productVariantId: '',
            sellerSku: '',
            priceAmount: 0,
            currencyCode: 'INR',
          });

          this.loadListings(1);
        },
        error: (error: HttpErrorResponse) => {
          this.errorMessage.set(
            getSellerError(
              error,
              'Could not create the listing.',
            ),
          );
        },
      });
  }

  protected loadDetails(
    listingId: string,
  ): void {
    this.isLoadingDetails.set(true);
    this.errorMessage.set('');

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
            getSellerError(
              error,
              'Could not load the listing.',
            ),
          );
        },
      });
  }

  protected updatePrice(
    listing: SellerListing,
  ): void {
    const draft = this.priceDrafts.get(
      listing.listingId,
    );

    const priceText =
      draft?.price ?? String(listing.priceAmount);

    const currencyText =
      draft?.currency ?? listing.currencyCode;

    const priceValue = priceText.trim();
    const priceAmount = Number(priceValue);
    const currency =
      currencyText.trim().toUpperCase();

    if (
      !/^\d+(\.\d{1,2})?$/.test(priceValue) ||
      !Number.isFinite(priceAmount) ||
      priceAmount <= 0
    ) {
      this.errorMessage.set('Enter a valid price.');
      return;
    }

    if (!/^[A-Z]{3}$/.test(currency)) {
      this.errorMessage.set(
        'Enter a three letter currency code.',
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

  protected changePriceDraft(
    listing: SellerListing,
    field: 'price' | 'currency',
    event: Event,
  ): void {
    const value =
      (event.target as HTMLInputElement).value;

    const current = this.priceDrafts.get(
      listing.listingId,
    ) ?? {
      price: String(listing.priceAmount),
      currency: listing.currencyCode,
    };

    this.priceDrafts.set(listing.listingId, {
      ...current,
      [field]: value,
    });
  }

  protected submitForReview(
    listing: SellerListing,
  ): void {
    this.runListingAction(
      listing.listingId,
      this.sellerApi.submitListingForReview(
        this.sellerId,
        listing.listingId,
        { rowVersion: listing.rowVersion },
      ),
      'Listing submitted for review.',
    );
  }

  protected archiveListing(
    listing: SellerListing,
  ): void {
    if (!window.confirm('Archive this listing?')) {
      return;
    }

    this.runListingAction(
      listing.listingId,
      this.sellerApi.archiveListing(
        this.sellerId,
        listing.listingId,
        { rowVersion: listing.rowVersion },
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
    return listing.status !== 'Archived';
  }

  private runListingAction(
    listingId: string,
    request: Observable<SellerListing>,
    message: string,
  ): void {
    this.busyListingId.set(listingId);
    this.errorMessage.set('');
    this.successMessage.set('');

    request
      .pipe(
        finalize(() =>
          this.busyListingId.set(null),
        ),
      )
      .subscribe({
        next: (updated) => {
          this.replaceListing(updated);
          this.successMessage.set(message);
          this.loadListings(this.page());
        },
        error: (error: HttpErrorResponse) => {
          this.errorMessage.set(
            getSellerError(
              error,
              'Could not update the listing.',
            ),
          );

          if (error.status === 409) {
            this.loadListings(this.page());
          }
        },
      });
  }

  private replaceListing(
    updated: SellerListing,
  ): void {
    this.listings.update((items) =>
      items.map((item) =>
        item.listingId === updated.listingId
          ? updated
          : item,
      ),
    );

    this.selectedListing.update((current) =>
      current?.listingId === updated.listingId
        ? updated
        : current,
    );
  }
}
