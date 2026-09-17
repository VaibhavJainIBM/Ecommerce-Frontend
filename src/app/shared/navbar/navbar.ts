import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthSession } from '../../auth/auth-session';
import { Roles } from '../../auth/auth.models';
import { SellerContext } from '../../seller/seller-context';


@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  protected readonly authSession = inject(AuthSession);
  private readonly router = inject(Router);
  protected readonly roles = Roles;
  private readonly sellerContext = inject(SellerContext);


  protected logout(): void {
    this.sellerContext.clear();
    this.authSession.logout();

    void this.router.navigate(['/']);
  }
}