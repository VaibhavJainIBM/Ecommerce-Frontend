import { Component, inject } from '@angular/core';
import {
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { AuthSession } from '../../auth/auth-session';
import { Navbar } from '../../shared/navbar/navbar';

@Component({
  selector: 'app-admin-dashboard',
  imports: [
    Navbar,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
  ],
  templateUrl: './admin-dashboard.html',
  styleUrl: './admin-dashboard.css',
})
export class AdminDashboard {
  protected readonly authSession = inject(AuthSession);
}
