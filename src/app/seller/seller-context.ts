import {
  computed,
  Injectable,
  signal,
} from '@angular/core';
import {
  MySeller,
  SellerRole,
} from './seller.models';

@Injectable({
  providedIn: 'root',
})
export class SellerContext {
  private readonly selectedState =
    signal<MySeller | null>(null);

  readonly selected = this.selectedState.asReadonly();

  readonly isOwner = computed(
    () => this.hasRole('Owner'),
  );

  readonly canManage = computed(
    () =>
      this.hasRole('Owner') ||
      this.hasRole('Manager'),
  );

  readonly canUseInventory = computed(
    () =>
      this.hasRole('Owner') ||
      this.hasRole('Manager') ||
      this.hasRole('WarehouseStaff'),
  );

  select(seller: MySeller): void {
    this.selectedState.set(seller);
  }

  clear(): void {
    this.selectedState.set(null);
  }

  hasRole(role: SellerRole): boolean {
    return (
      this.selectedState()?.roles.includes(role)
      ?? false
    );
  }
}