import { CurrencyPipe } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { StorefrontApi } from '../storefront-api';
import { StorefrontListing } from '../Storefront';
import { RouterLink } from '@angular/router';
import { Navbar } from '../../shared/navbar/navbar';


@Component({
  selector: 'app-product-list',
  imports: [CurrencyPipe, Navbar],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList implements OnInit {
  private readonly storefrontApi = inject(StorefrontApi);

  protected readonly listings = signal<StorefrontListing[]>([]);
  protected readonly isLoading = signal(true);
  protected readonly errorMessage = signal('');

  protected readonly currentPage = signal(1);
  protected readonly totalPages = signal(0);
  protected readonly totalCount = signal(0);

  ngOnInit(): void {
    this.loadStorefront();
  }

  protected loadStorefront(page = 1): void {
    this.isLoading.set(true);
    this.errorMessage.set('');

    this.storefrontApi.getStorefront(page, 20).subscribe({
      next: (response) => {
        this.listings.set(response.items);
        this.currentPage.set(response.page);
        this.totalPages.set(response.totalPages);
        this.totalCount.set(response.totalCount);
        this.isLoading.set(false);
      },

      error: (error: HttpErrorResponse) => {
        console.error('Storefront request failed:', error);
        this.errorMessage.set('Could not load the storefront.');
        this.isLoading.set(false);
      },
    });
  }
}
