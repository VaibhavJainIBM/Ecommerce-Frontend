import { DatePipe } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import {
  Component,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AdminApi } from '../admin-api';
import { readAdminError } from '../admin-error';
import {
  AdminCatalogProduct,
  CatalogImportResult,
} from '../admin.models';

@Component({
  selector: 'app-admin-catalog',
  imports: [DatePipe, ReactiveFormsModule],
  templateUrl: './admin-catalog.html',
  styleUrls: [
    '../admin-shared.css',
    './admin-catalog.css',
  ],
})
export class AdminCatalog implements OnInit {
  private readonly api = inject(AdminApi);
  private fileInput: HTMLInputElement | null = null;

  protected readonly statuses = [
    'Draft',
    'Active',
    'Archived',
  ];
  protected readonly search = new FormControl('', {
    nonNullable: true,
  });
  protected readonly status = signal('');
  protected readonly products =
    signal<AdminCatalogProduct[]>([]);
  protected readonly page = signal(1);
  protected readonly totalPages = signal(0);
  protected readonly totalCount = signal(0);
  protected readonly isLoading = signal(false);
  protected readonly isCreating = signal(false);
  protected readonly busyProductId = signal<string | null>(null);
  protected readonly selectedFile = signal<File | null>(null);
  protected readonly activateImport = signal(false);
  protected readonly isImporting = signal(false);
  protected readonly importResult =
    signal<CatalogImportResult | null>(null);
  protected readonly errorMessage = signal('');
  protected readonly successMessage = signal('');

  protected readonly productForm = new FormGroup({
    title: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.maxLength(250),
      ],
    }),
    brandName: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.maxLength(150),
      ],
    }),
    description: new FormControl('', {
      nonNullable: true,
      validators: [Validators.maxLength(4000)],
    }),
    variants: new FormArray([
      this.createVariantForm(),
    ]),
  });

  protected get variants(): FormArray {
    return this.productForm.controls.variants;
  }

  ngOnInit(): void {
    this.loadProducts(1);
  }

  protected loadProducts(page: number): void {
    this.isLoading.set(true);
    this.errorMessage.set('');

    this.api.getCatalogProducts({
      search: this.search.value,
      status: this.status(),
      page,
      pageSize: 20,
    }).subscribe({
      next: (response) => {
        this.products.set(response.items);
        this.page.set(response.page);
        this.totalPages.set(response.totalPages);
        this.totalCount.set(response.totalCount);
        this.isLoading.set(false);
      },
      error: (error: HttpErrorResponse) => {
        this.errorMessage.set(
          readAdminError(
            error,
            'Could not load catalog products.',
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
    this.loadProducts(1);
  }

  protected addVariant(): void {
    if (this.variants.length >= 100) {
      return;
    }

    this.variants.push(this.createVariantForm());
  }

  protected removeVariant(index: number): void {
    if (this.variants.length <= 1) {
      return;
    }

    this.variants.removeAt(index);
  }

  protected createProduct(): void {
    if (this.productForm.invalid) {
      this.productForm.markAllAsTouched();
      this.errorMessage.set(
        'Complete the required product fields.',
      );
      return;
    }

    const value = this.productForm.getRawValue();
    this.isCreating.set(true);
    this.errorMessage.set('');
    this.successMessage.set('');

    this.api.createCatalogProduct({
      title: value.title.trim(),
      brandName: value.brandName.trim(),
      description: value.description.trim() || null,
      variants: value.variants.map((variant) => ({
        name: variant['name'].trim(),
        variantCode:
          variant['variantCode'].trim().toUpperCase(),
        gtin: variant['gtin'].trim() || null,
      })),
    }).subscribe({
      next: () => {
        this.resetProductForm();
        this.successMessage.set('Product created.');
        this.isCreating.set(false);
        this.loadProducts(1);
      },
      error: (error: HttpErrorResponse) => {
        this.errorMessage.set(
          readAdminError(
            error,
            'Could not create the product.',
          ),
        );
        this.isCreating.set(false);
      },
    });
  }

  protected activate(product: AdminCatalogProduct): void {
    this.busyProductId.set(product.productId);
    this.errorMessage.set('');
    this.successMessage.set('');

    this.api
      .activateCatalogProduct(product.productId)
      .subscribe({
        next: () => {
          this.busyProductId.set(null);
          this.successMessage.set('Product activated.');
          this.loadProducts(this.page());
        },
        error: (error: HttpErrorResponse) => {
          this.errorMessage.set(
            readAdminError(
              error,
              'Could not activate the product.',
            ),
          );
          this.busyProductId.set(null);
        },
      });
  }

  protected chooseFile(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.fileInput = input;
    const file = input.files?.[0] ?? null;

    if (file && file.size > 2 * 1024 * 1024) {
      this.selectedFile.set(null);
      this.errorMessage.set('The file is too large.');
      input.value = '';
      return;
    }

    this.selectedFile.set(file);
    this.errorMessage.set('');
    this.importResult.set(null);
  }

  protected changeImportActivation(event: Event): void {
    this.activateImport.set(
      (event.target as HTMLInputElement).checked,
    );
  }

  protected importCatalog(): void {
    const file = this.selectedFile();

    if (!file) {
      this.errorMessage.set('Choose a CSV file.');
      return;
    }

    this.isImporting.set(true);
    this.errorMessage.set('');
    this.successMessage.set('');
    this.importResult.set(null);

    this.api
      .importCatalog(file, this.activateImport())
      .subscribe({
        next: (result) => {
          this.importResult.set(result);
          this.selectedFile.set(null);
          if (this.fileInput) {
            this.fileInput.value = '';
          }
          this.successMessage.set('Catalog imported.');
          this.isImporting.set(false);
          this.loadProducts(1);
        },
        error: (error: HttpErrorResponse) => {
          this.errorMessage.set(
            readAdminError(
              error,
              'Could not import the catalog.',
            ),
          );
          this.isImporting.set(false);
        },
      });
  }

  protected downloadTemplate(): void {
    const header =
      'ProductKey,Title,BrandName,Description,' +
      'VariantName,VariantCode,Gtin\r\n';
    const blob = new Blob([header], {
      type: 'text/csv;charset=utf-8',
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'catalog-template.csv';
    link.click();
    URL.revokeObjectURL(url);
  }

  private createVariantForm(): FormGroup {
    return new FormGroup({
      name: new FormControl('', {
        nonNullable: true,
        validators: [
          Validators.required,
          Validators.maxLength(150),
        ],
      }),
      variantCode: new FormControl('', {
        nonNullable: true,
        validators: [
          Validators.required,
          Validators.maxLength(64),
          Validators.pattern(/^[A-Za-z0-9._-]+$/),
        ],
      }),
      gtin: new FormControl('', {
        nonNullable: true,
        validators: [
          Validators.pattern(/^(?:\d{8}|\d{12}|\d{13}|\d{14})?$/),
        ],
      }),
    });
  }

  private resetProductForm(): void {
    while (this.variants.length > 1) {
      this.variants.removeAt(this.variants.length - 1);
    }

    this.productForm.reset({
      title: '',
      brandName: '',
      description: '',
      variants: [
        {
          name: '',
          variantCode: '',
          gtin: '',
        },
      ],
    });
  }
}
