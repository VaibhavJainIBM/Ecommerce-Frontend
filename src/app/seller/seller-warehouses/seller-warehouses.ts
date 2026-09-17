import { HttpErrorResponse } from '@angular/common/http';
import {
  Component,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { DatePipe } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { finalize } from 'rxjs';

import { SellerApi } from '../seller-api';
import { SellerContext } from '../seller-context';
import { getSellerError } from '../seller-error';
import { Warehouse } from '../seller.models';

@Component({
  selector: 'app-seller-warehouses',
  imports: [
    ReactiveFormsModule,
    DatePipe,
  ],
  templateUrl: './seller-warehouses.html',
  styleUrl: './seller-warehouses.css',
})
export class SellerWarehouses implements OnInit {
  private readonly sellerApi = inject(SellerApi);

  protected readonly sellerContext =
    inject(SellerContext);

  protected readonly warehouses =
    signal<Warehouse[]>([]);

  protected readonly selectedWarehouse =
    signal<Warehouse | null>(null);

  protected readonly isLoading = signal(false);
  protected readonly isSaving = signal(false);
  protected readonly busyWarehouseId =
    signal<string | null>(null);

  protected readonly errorMessage = signal('');
  protected readonly successMessage = signal('');

  protected readonly createForm = new FormGroup({
    name: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.maxLength(150),
      ],
    }),
    code: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.maxLength(50),
        Validators.pattern(/^[A-Za-z0-9_-]+$/),
      ],
    }),
    line1: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.maxLength(200),
      ],
    }),
    line2: new FormControl('', {
      nonNullable: true,
      validators: [Validators.maxLength(200)],
    }),
    city: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.maxLength(100),
      ],
    }),
    stateOrProvince: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.maxLength(100),
      ],
    }),
    postalCode: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.maxLength(20),
      ],
    }),
    countryCode: new FormControl('IN', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.pattern(/^[A-Za-z]{2}$/),
      ],
    }),
  });

  ngOnInit(): void {
    this.loadWarehouses();
  }

  private get sellerId(): string {
    const sellerId =
      this.sellerContext.selected()?.sellerId;

    if (!sellerId) {
      throw new Error('No seller is selected.');
    }

    return sellerId;
  }

  protected canManageWarehouses(): boolean {
    return (
      this.sellerContext.canManage() &&
      this.sellerContext.selected()
        ?.sellerStatus === 'Active'
    );
  }

  protected loadWarehouses(): void {
    this.isLoading.set(true);
    this.errorMessage.set('');

    this.sellerApi
      .getWarehouses(this.sellerId)
      .pipe(
        finalize(() => this.isLoading.set(false)),
      )
      .subscribe({
        next: (warehouses) => {
          this.warehouses.set(warehouses);
        },
        error: (error: HttpErrorResponse) => {
          this.errorMessage.set(
            getSellerError(
              error,
              'Could not load warehouses.',
            ),
          );
        },
      });
  }

  protected loadWarehouse(
    warehouseId: string,
  ): void {
    this.errorMessage.set('');

    this.sellerApi
      .getWarehouse(this.sellerId, warehouseId)
      .subscribe({
        next: (warehouse) => {
          this.selectedWarehouse.set(warehouse);
        },
        error: (error: HttpErrorResponse) => {
          this.errorMessage.set(
            getSellerError(
              error,
              'Could not load the warehouse.',
            ),
          );
        },
      });
  }

  protected createWarehouse(): void {
    this.errorMessage.set('');
    this.successMessage.set('');

    if (
      this.createForm.invalid ||
      !this.canManageWarehouses()
    ) {
      this.createForm.markAllAsTouched();
      this.errorMessage.set(
        'Complete the warehouse form.',
      );
      return;
    }

    const value = this.createForm.getRawValue();
    this.isSaving.set(true);

    this.sellerApi
      .createWarehouse(this.sellerId, {
        name: value.name.trim(),
        code: value.code.trim().toUpperCase(),
        address: {
          line1: value.line1.trim(),
          line2: value.line2.trim() || null,
          city: value.city.trim(),
          stateOrProvince:
            value.stateOrProvince.trim(),
          postalCode: value.postalCode.trim(),
          countryCode:
            value.countryCode.trim().toUpperCase(),
        },
      })
      .pipe(
        finalize(() => this.isSaving.set(false)),
      )
      .subscribe({
        next: (warehouse) => {
          this.selectedWarehouse.set(warehouse);
          this.successMessage.set(
            'Warehouse created.',
          );
          this.createForm.reset({
            name: '',
            code: '',
            line1: '',
            line2: '',
            city: '',
            stateOrProvince: '',
            postalCode: '',
            countryCode: 'IN',
          });
          this.loadWarehouses();
        },
        error: (error: HttpErrorResponse) => {
          this.errorMessage.set(
            getSellerError(
              error,
              'Could not create the warehouse.',
            ),
          );
        },
      });
  }

  protected activateWarehouse(
    warehouse: Warehouse,
  ): void {
    this.errorMessage.set('');
    this.successMessage.set('');
    this.busyWarehouseId.set(
      warehouse.warehouseId,
    );

    this.sellerApi
      .activateWarehouse(
        this.sellerId,
        warehouse.warehouseId,
      )
      .pipe(
        finalize(() =>
          this.busyWarehouseId.set(null),
        ),
      )
      .subscribe({
        next: (updated) => {
          this.replaceWarehouse(updated);
          this.selectedWarehouse.set(updated);
          this.successMessage.set(
            'Warehouse activated.',
          );
        },
        error: (error: HttpErrorResponse) => {
          this.errorMessage.set(
            getSellerError(
              error,
              'Could not activate the warehouse.',
            ),
          );
        },
      });
  }

  private replaceWarehouse(
    updated: Warehouse,
  ): void {
    this.warehouses.update((warehouses) =>
      warehouses.map((warehouse) =>
        warehouse.warehouseId ===
        updated.warehouseId
          ? updated
          : warehouse,
      ),
    );
  }
}
