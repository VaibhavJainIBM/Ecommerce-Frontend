import { DatePipe } from '@angular/common';
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
  forkJoin,
  of,
  Observable,
} from 'rxjs';

import { SellerApi } from '../seller-api';
import { SellerContext } from '../seller-context';
import { getSellerError } from '../seller-error';
import {
  InventoryItem,
  PagedSellerListings,
  SellerListing,
  Warehouse,
} from '../seller.models';

@Component({
  selector: 'app-seller-inventory',
  imports: [
    ReactiveFormsModule,
    DatePipe,
  ],
  templateUrl: './seller-inventory.html',
  styleUrl: './seller-inventory.css',
})
export class SellerInventory implements OnInit {
  private readonly sellerApi = inject(SellerApi);

  protected readonly sellerContext =
    inject(SellerContext);

  protected readonly inventory =
    signal<InventoryItem[]>([]);

  protected readonly warehouses =
    signal<Warehouse[]>([]);

  protected readonly listingOptions =
    signal<SellerListing[]>([]);

  protected readonly selectedItem =
    signal<InventoryItem | null>(null);

  protected readonly isLoading = signal(false);
  protected readonly isSaving = signal(false);
  protected readonly busyItemId =
    signal<string | null>(null);

  private readonly receiveDrafts =
    new Map<string, string>();

  private readonly adjustDrafts =
    new Map<string, string>();

  protected readonly errorMessage = signal('');
  protected readonly successMessage = signal('');

  protected readonly createForm = new FormGroup({
    warehouseId: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    sellerListingId: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    initialQuantity: new FormControl(0, {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.min(0),
        Validators.pattern(/^\d+$/),
      ],
    }),
  });

  ngOnInit(): void {
    this.load();
  }

  private get sellerId(): string {
    const sellerId =
      this.sellerContext.selected()?.sellerId;

    if (!sellerId) {
      throw new Error('No seller is selected.');
    }

    return sellerId;
  }

  protected sellerIsActive(): boolean {
    return (
      this.sellerContext.selected()
        ?.sellerStatus === 'Active'
    );
  }

  protected canCreateInventory(): boolean {
    return (
      this.sellerContext.canManage() &&
      this.sellerIsActive()
    );
  }

  protected load(): void {
    this.isLoading.set(true);
    this.errorMessage.set('');

    const emptyListings: PagedSellerListings = {
      items: [],
      page: 1,
      pageSize: 100,
      totalCount: 0,
      totalPages: 0,
    };

    const listingsRequest =
      this.sellerContext.canManage()
        ? this.sellerApi.getListings(
            this.sellerId,
            {
              page: 1,
              pageSize: 100,
            },
          )
        : of(emptyListings);

    forkJoin({
      inventory:
        this.sellerApi.getInventory(this.sellerId),
      warehouses:
        this.sellerApi.getWarehouses(this.sellerId),
      listings: listingsRequest,
    })
      .pipe(
        finalize(() => this.isLoading.set(false)),
      )
      .subscribe({
        next: ({
          inventory,
          warehouses,
          listings,
        }) => {
          this.inventory.set(inventory);

          this.warehouses.set(
            warehouses.filter(
              (warehouse) =>
                warehouse.status === 'Active',
            ),
          );

          this.listingOptions.set(
            listings.items.filter(
              (listing) =>
                listing.status !== 'Archived',
            ),
          );
        },
        error: (error: HttpErrorResponse) => {
          this.errorMessage.set(
            getSellerError(
              error,
              'Could not load inventory.',
            ),
          );
        },
      });
  }

  protected loadItem(
    inventoryItemId: string,
  ): void {
    this.errorMessage.set('');

    this.sellerApi
      .getInventoryItem(
        this.sellerId,
        inventoryItemId,
      )
      .subscribe({
        next: (item) => {
          this.selectedItem.set(item);
        },
        error: (error: HttpErrorResponse) => {
          this.errorMessage.set(
            getSellerError(
              error,
              'Could not load the inventory item.',
            ),
          );
        },
      });
  }

  protected createInventory(): void {
    this.errorMessage.set('');
    this.successMessage.set('');

    if (
      this.createForm.invalid ||
      !this.canCreateInventory()
    ) {
      this.createForm.markAllAsTouched();
      this.errorMessage.set(
        'Complete the inventory form.',
      );
      return;
    }

    const value = this.createForm.getRawValue();
    this.isSaving.set(true);

    this.sellerApi
      .createInventoryItem(this.sellerId, value)
      .pipe(
        finalize(() => this.isSaving.set(false)),
      )
      .subscribe({
        next: (item) => {
          this.selectedItem.set(item);
          this.successMessage.set(
            'Inventory item created.',
          );
          this.createForm.reset({
            warehouseId: '',
            sellerListingId: '',
            initialQuantity: 0,
          });
          this.load();
        },
        error: (error: HttpErrorResponse) => {
          this.errorMessage.set(
            getSellerError(
              error,
              'Could not create inventory.',
            ),
          );
        },
      });
  }

  protected receive(
    item: InventoryItem,
  ): void {
    const quantityText =
      this.receiveDrafts.get(
        item.inventoryItemId,
      ) ?? '1';

    const quantity = Number(quantityText);

    if (
      !Number.isInteger(quantity) ||
      quantity <= 0
    ) {
      this.errorMessage.set(
        'Receive quantity must be a positive whole number.',
      );
      return;
    }

    this.runStockAction(
      item,
      this.sellerApi.receiveInventory(
        this.sellerId,
        item.inventoryItemId,
        {
          quantity,
          rowVersion: item.rowVersion,
        },
      ),
      'Stock received.',
    );
  }

  protected adjust(
    item: InventoryItem,
  ): void {
    const quantityText =
      this.adjustDrafts.get(
        item.inventoryItemId,
      ) ?? String(item.onHandQuantity);

    const quantity = Number(quantityText);

    if (
      !Number.isInteger(quantity) ||
      quantity < item.reservedQuantity
    ) {
      this.errorMessage.set(
        'On hand quantity cannot be below reserved quantity.',
      );
      return;
    }

    this.runStockAction(
      item,
      this.sellerApi.adjustInventory(
        this.sellerId,
        item.inventoryItemId,
        {
          quantity,
          rowVersion: item.rowVersion,
        },
      ),
      'Stock adjusted.',
    );
  }

  protected changeQuantityDraft(
    item: InventoryItem,
    kind: 'receive' | 'adjust',
    event: Event,
  ): void {
    const value =
      (event.target as HTMLInputElement).value;

    const drafts = kind === 'receive'
      ? this.receiveDrafts
      : this.adjustDrafts;

    drafts.set(item.inventoryItemId, value);
  }

  private runStockAction(
    item: InventoryItem,
    request: Observable<InventoryItem>,
    message: string,
  ): void {
    if (!this.sellerIsActive()) {
      return;
    }

    this.busyItemId.set(item.inventoryItemId);
    this.errorMessage.set('');
    this.successMessage.set('');

    request
      .pipe(
        finalize(() => this.busyItemId.set(null)),
      )
      .subscribe({
        next: (updated) => {
          this.replaceItem(updated);
          this.selectedItem.set(updated);
          this.receiveDrafts.set(
            updated.inventoryItemId,
            '1',
          );
          this.adjustDrafts.set(
            updated.inventoryItemId,
            String(updated.onHandQuantity),
          );
          this.successMessage.set(message);
        },
        error: (error: HttpErrorResponse) => {
          this.errorMessage.set(
            getSellerError(
              error,
              'Could not update stock.',
            ),
          );

          if (error.status === 409) {
            this.load();
          }
        },
      });
  }

  private replaceItem(
    updated: InventoryItem,
  ): void {
    this.inventory.update((items) =>
      items.map((item) =>
        item.inventoryItemId ===
        updated.inventoryItemId
          ? updated
          : item,
      ),
    );
  }
}
