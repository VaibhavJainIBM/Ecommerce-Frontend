import { Component, inject } from '@angular/core';
import {
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { Navbar } from '../../shared/navbar/navbar';
import { SellerContext } from '../seller-context';

@Component({
  selector: 'app-seller-workspace',
  imports: [
    Navbar,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
  ],
  templateUrl: './seller-workspace.html',
  styleUrl: './seller-workspace.css',
})
export class SellerWorkspace {
  protected readonly sellerContext =
    inject(SellerContext);
}