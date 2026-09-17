import { HttpErrorResponse } from '@angular/common/http';
import {
  Component,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { Navbar } from '../../shared/navbar/navbar';
import { SellerApi } from '../seller-api';
import { MySeller } from '../seller.models';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-seller-dashboard',
  imports: [Navbar, RouterLink],
  templateUrl: './seller-dashboard.html',
  styleUrl: './seller-dashboard.css',
})
export class SellerDashboard implements OnInit {
  private readonly sellerApi = inject(SellerApi);

  protected readonly sellers = signal<MySeller[]>([]);
  protected readonly isLoading = signal(true);
  protected readonly errorMessage = signal('');

  ngOnInit(): void {
    this.loadSellers();
  }

  private loadSellers(): void {
    this.isLoading.set(true);
    this.errorMessage.set('');

    this.sellerApi.getMine().subscribe({
      next: (sellers) => {
        this.sellers.set(sellers);
        this.isLoading.set(false);
      },

      error: (error: HttpErrorResponse) => {
        if (error.status !== 401) {
          this.errorMessage.set(
            'Could not load your seller accounts.',
          );
        }

        this.isLoading.set(false);
      },
    });
  }
}