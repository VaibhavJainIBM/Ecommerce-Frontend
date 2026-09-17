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
  Observable,
} from 'rxjs';

import { SellerApi } from '../seller-api';
import { SellerContext } from '../seller-context';
import { getSellerError } from '../seller-error';
import {
  SellerMember,
  SellerRole,
  SellerRoleDefinition,
  Warehouse,
} from '../seller.models';

@Component({
  selector: 'app-seller-team',
  imports: [
    ReactiveFormsModule,
    DatePipe,
  ],
  templateUrl: './seller-team.html',
  styleUrl: './seller-team.css',
})
export class SellerTeam implements OnInit {
  private readonly sellerApi = inject(SellerApi);

  protected readonly sellerContext =
    inject(SellerContext);

  protected readonly roles =
    signal<SellerRoleDefinition[]>([]);

  protected readonly members =
    signal<SellerMember[]>([]);

  protected readonly warehouses =
    signal<Warehouse[]>([]);

  protected readonly selectedMember =
    signal<SellerMember | null>(null);

  protected readonly isLoading = signal(false);
  protected readonly isInviting = signal(false);
  protected readonly busyMemberId =
    signal<string | null>(null);

  protected readonly errorMessage = signal('');
  protected readonly successMessage = signal('');

  protected readonly inviteForm = new FormGroup({
    email: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.email,
        Validators.maxLength(256),
      ],
    }),
    role: new FormControl<SellerRole>(
      'Manager',
      { nonNullable: true },
    ),
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

  protected load(): void {
    this.isLoading.set(true);
    this.errorMessage.set('');

    forkJoin({
      roles: this.sellerApi.getRoles(this.sellerId),
      members:
        this.sellerApi.getMembers(this.sellerId),
      warehouses:
        this.sellerApi.getWarehouses(this.sellerId),
    })
      .pipe(
        finalize(() => this.isLoading.set(false)),
      )
      .subscribe({
        next: ({
          roles,
          members,
          warehouses,
        }) => {
          this.roles.set(roles);
          this.members.set(members);
          this.warehouses.set(warehouses);

          const selected =
            this.selectedMember();

          if (selected) {
            this.selectedMember.set(
              members.find(
                (member) =>
                  member.memberId ===
                  selected.memberId,
              ) ?? null,
            );
          }
        },
        error: (error: HttpErrorResponse) => {
          this.errorMessage.set(
            getSellerError(
              error,
              'Could not load the team.',
            ),
          );
        },
      });
  }

  protected loadMember(memberId: string): void {
    this.errorMessage.set('');

    this.sellerApi
      .getMember(this.sellerId, memberId)
      .subscribe({
        next: (member) => {
          this.selectedMember.set(member);
        },
        error: (error: HttpErrorResponse) => {
          this.errorMessage.set(
            getSellerError(
              error,
              'Could not load the member.',
            ),
          );
        },
      });
  }

  protected invite(): void {
    this.errorMessage.set('');
    this.successMessage.set('');

    if (this.inviteForm.invalid) {
      this.inviteForm.markAllAsTouched();
      this.errorMessage.set(
        'Enter a valid email and role.',
      );
      return;
    }

    const value = this.inviteForm.getRawValue();
    this.isInviting.set(true);

    this.sellerApi
      .inviteMember(this.sellerId, {
        email: value.email.trim(),
        role: value.role,
      })
      .pipe(
        finalize(() =>
          this.isInviting.set(false),
        ),
      )
      .subscribe({
        next: (member) => {
          this.members.update((members) => [
            ...members,
            member,
          ]);
          this.selectedMember.set(member);
          this.inviteForm.reset({
            email: '',
            role: 'Manager',
          });
          this.successMessage.set(
            'Invitation created.',
          );
        },
        error: (error: HttpErrorResponse) => {
          this.errorMessage.set(
            getSellerError(
              error,
              'Could not invite the member.',
            ),
          );
        },
      });
  }

  protected suspend(member: SellerMember): void {
    this.runMemberAction(
      member,
      this.sellerApi.suspendMember(
        this.sellerId,
        member.memberId,
      ),
      'Member suspended.',
    );
  }

  protected reactivate(member: SellerMember): void {
    this.runMemberAction(
      member,
      this.sellerApi.reactivateMember(
        this.sellerId,
        member.memberId,
      ),
      'Member reactivated.',
    );
  }

  protected remove(member: SellerMember): void {
    if (!window.confirm('Remove this member?')) {
      return;
    }

    this.runMemberAction(
      member,
      this.sellerApi.removeMember(
        this.sellerId,
        member.memberId,
      ),
      'Member removed.',
    );
  }

  protected toggleRole(
    member: SellerMember,
    role: SellerRole,
  ): void {
    const assigned = member.roles.includes(role);

    const request = assigned
      ? this.sellerApi.revokeRole(
          this.sellerId,
          member.memberId,
          role,
        )
      : this.sellerApi.assignRole(
          this.sellerId,
          member.memberId,
          role,
        );

    this.runMemberAction(
      member,
      request,
      assigned
        ? 'Role removed.'
        : 'Role assigned.',
    );
  }

  protected toggleWarehouse(
    member: SellerMember,
    warehouseId: string,
  ): void {
    const assigned =
      member.warehouseIds.includes(warehouseId);

    const request = assigned
      ? this.sellerApi.revokeWarehouse(
          this.sellerId,
          member.memberId,
          warehouseId,
        )
      : this.sellerApi.assignWarehouse(
          this.sellerId,
          member.memberId,
          warehouseId,
        );

    this.runMemberAction(
      member,
      request,
      assigned
        ? 'Warehouse removed.'
        : 'Warehouse assigned.',
    );
  }

  private runMemberAction(
    member: SellerMember,
    request: Observable<SellerMember>,
    message: string,
  ): void {
    this.busyMemberId.set(member.memberId);
    this.errorMessage.set('');
    this.successMessage.set('');

    request
      .pipe(
        finalize(() =>
          this.busyMemberId.set(null),
        ),
      )
      .subscribe({
        next: (updated) => {
          this.replaceMember(updated);
          this.selectedMember.set(updated);
          this.successMessage.set(message);
        },
        error: (error: HttpErrorResponse) => {
          this.errorMessage.set(
            getSellerError(
              error,
              'Could not update the member.',
            ),
          );

          if (error.status === 409) {
            this.load();
          }
        },
      });
  }

  private replaceMember(
    updated: SellerMember,
  ): void {
    this.members.update((members) =>
      members.map((member) =>
        member.memberId === updated.memberId
          ? updated
          : member,
      ),
    );
  }
}
