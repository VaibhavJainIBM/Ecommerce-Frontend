import { DatePipe } from '@angular/common';
import { Component, inject, signal, } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators, } from '@angular/forms';
import { finalize, forkJoin, } from 'rxjs';
import { SellerApi } from '../seller-api';
import { SellerContext } from '../seller-context';
import { getSellerError } from '../seller-error';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
const _forTrack0 = ($index, $item) => $item.name;
const _forTrack1 = ($index, $item) => $item.memberId;
const _forTrack2 = ($index, $item) => $item.warehouseId;
function SellerTeam_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 2);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.errorMessage(), " ");
} }
function SellerTeam_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 3);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.successMessage(), " ");
} }
function SellerTeam_For_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 7);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const role_r2 = ctx.$implicit;
    i0.ɵɵproperty("value", role_r2.name);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", role_r2.name, " ");
} }
function SellerTeam_Conditional_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1, "Loading");
    i0.ɵɵelementEnd();
} }
function SellerTeam_Conditional_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1, "No members");
    i0.ɵɵelementEnd();
} }
function SellerTeam_Conditional_26_For_16_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr")(1, "td", 10);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td", 11);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "td", 12);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "td", 13);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "td", 14)(10, "button", 15);
    i0.ɵɵlistener("click", function SellerTeam_Conditional_26_For_16_Template_button_click_10_listener() { const member_r4 = i0.ɵɵrestoreView(_r3).$implicit; const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.loadMember(member_r4.memberId)); });
    i0.ɵɵtext(11, " Manage ");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const member_r4 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(member_r4.email);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(member_r4.status);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", member_r4.roles.length > 0 ? member_r4.roles.join(", ") : "None", " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", member_r4.warehouseIds.length, " ");
} }
function SellerTeam_Conditional_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9)(1, "table")(2, "thead")(3, "tr")(4, "th");
    i0.ɵɵtext(5, "Email");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "th");
    i0.ɵɵtext(7, "Status");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "th");
    i0.ɵɵtext(9, "Roles");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "th");
    i0.ɵɵtext(11, "Warehouses");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "th");
    i0.ɵɵtext(13, "Action");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(14, "tbody");
    i0.ɵɵrepeaterCreate(15, SellerTeam_Conditional_26_For_16_Template, 12, 4, "tr", null, _forTrack1);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(15);
    i0.ɵɵrepeater(ctx_r0.members());
} }
function SellerTeam_Conditional_27_Conditional_10_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 1);
    i0.ɵɵlistener("click", function SellerTeam_Conditional_27_Conditional_10_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r6); const member_r7 = i0.ɵɵnextContext(); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.suspend(member_r7)); });
    i0.ɵɵtext(1, " Suspend ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("disabled", ctx_r0.busyMemberId() !== null);
} }
function SellerTeam_Conditional_27_Conditional_11_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 1);
    i0.ɵɵlistener("click", function SellerTeam_Conditional_27_Conditional_11_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r8); const member_r7 = i0.ɵɵnextContext(); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.reactivate(member_r7)); });
    i0.ɵɵtext(1, " Reactivate ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("disabled", ctx_r0.busyMemberId() !== null);
} }
function SellerTeam_Conditional_27_Conditional_12_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 1);
    i0.ɵɵlistener("click", function SellerTeam_Conditional_27_Conditional_12_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r9); const member_r7 = i0.ɵɵnextContext(); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.remove(member_r7)); });
    i0.ɵɵtext(1, " Remove ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("disabled", ctx_r0.busyMemberId() !== null);
} }
function SellerTeam_Conditional_27_For_18_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label", 20)(1, "input", 21);
    i0.ɵɵlistener("change", function SellerTeam_Conditional_27_For_18_Template_input_change_1_listener() { const role_r11 = i0.ɵɵrestoreView(_r10).$implicit; const member_r7 = i0.ɵɵnextContext(); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.toggleRole(member_r7, role_r11.name)); });
    i0.ɵɵelementEnd();
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const role_r11 = ctx.$implicit;
    const member_r7 = i0.ɵɵnextContext();
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("checked", member_r7.roles.includes(role_r11.name))("disabled", member_r7.status === "Removed" || ctx_r0.busyMemberId() !== null);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", role_r11.name, " ");
} }
function SellerTeam_Conditional_27_Conditional_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1, "No warehouses");
    i0.ɵɵelementEnd();
} }
function SellerTeam_Conditional_27_For_24_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label", 20)(1, "input", 21);
    i0.ɵɵlistener("change", function SellerTeam_Conditional_27_For_24_Template_input_change_1_listener() { const warehouse_r13 = i0.ɵɵrestoreView(_r12).$implicit; const member_r7 = i0.ɵɵnextContext(); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.toggleWarehouse(member_r7, warehouse_r13.warehouseId)); });
    i0.ɵɵelementEnd();
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const warehouse_r13 = ctx.$implicit;
    const member_r7 = i0.ɵɵnextContext();
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("checked", member_r7.warehouseIds.includes(warehouse_r13.warehouseId))("disabled", member_r7.status === "Removed" || ctx_r0.busyMemberId() !== null);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2(" ", warehouse_r13.name, " ", warehouse_r13.code, " ");
} }
function SellerTeam_Conditional_27_Conditional_36_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
    i0.ɵɵpipe(1, "date");
} if (rf & 2) {
    const member_r7 = i0.ɵɵnextContext();
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(1, 1, member_r7.joinedAtUtc, "medium"), " ");
} }
function SellerTeam_Conditional_27_Conditional_37_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " Not joined ");
} }
function SellerTeam_Conditional_27_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section")(1, "div", 16)(2, "div")(3, "h3");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "button", 15);
    i0.ɵɵlistener("click", function SellerTeam_Conditional_27_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r5); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.selectedMember.set(null)); });
    i0.ɵɵtext(8, " Close ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "div", 17);
    i0.ɵɵconditionalCreate(10, SellerTeam_Conditional_27_Conditional_10_Template, 2, 1, "button", 18);
    i0.ɵɵconditionalCreate(11, SellerTeam_Conditional_27_Conditional_11_Template, 2, 1, "button", 18);
    i0.ɵɵconditionalCreate(12, SellerTeam_Conditional_27_Conditional_12_Template, 2, 1, "button", 18);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "div", 19)(14, "div")(15, "h4");
    i0.ɵɵtext(16, "Roles");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(17, SellerTeam_Conditional_27_For_18_Template, 3, 3, "label", 20, _forTrack0);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "div")(20, "h4");
    i0.ɵɵtext(21, "Warehouses");
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(22, SellerTeam_Conditional_27_Conditional_22_Template, 2, 0, "p");
    i0.ɵɵrepeaterCreate(23, SellerTeam_Conditional_27_For_24_Template, 3, 4, "label", 20, _forTrack2);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(25, "dl")(26, "div")(27, "dt");
    i0.ɵɵtext(28, "Invited");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(29, "dd");
    i0.ɵɵtext(30);
    i0.ɵɵpipe(31, "date");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(32, "div")(33, "dt");
    i0.ɵɵtext(34, "Joined");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(35, "dd");
    i0.ɵɵconditionalCreate(36, SellerTeam_Conditional_27_Conditional_36_Template, 2, 4)(37, SellerTeam_Conditional_27_Conditional_37_Template, 1, 0);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const member_r7 = ctx;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(member_r7.email);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(member_r7.status);
    i0.ɵɵadvance(4);
    i0.ɵɵconditional(member_r7.status === "Active" ? 10 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(member_r7.status === "Suspended" ? 11 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(member_r7.status !== "Removed" ? 12 : -1);
    i0.ɵɵadvance(5);
    i0.ɵɵrepeater(ctx_r0.roles());
    i0.ɵɵadvance(5);
    i0.ɵɵconditional(ctx_r0.warehouses().length === 0 ? 22 : -1);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r0.warehouses());
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(31, 8, member_r7.invitedAtUtc, "medium"), " ");
    i0.ɵɵadvance(6);
    i0.ɵɵconditional(member_r7.joinedAtUtc ? 36 : 37);
} }
export class SellerTeam {
    sellerApi = inject(SellerApi);
    sellerContext = inject(SellerContext);
    roles = signal([], /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "roles" }] : /* istanbul ignore next */ []));
    members = signal([], /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "members" }] : /* istanbul ignore next */ []));
    warehouses = signal([], /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "warehouses" }] : /* istanbul ignore next */ []));
    selectedMember = signal(null, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "selectedMember" }] : /* istanbul ignore next */ []));
    isLoading = signal(false, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "isLoading" }] : /* istanbul ignore next */ []));
    isInviting = signal(false, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "isInviting" }] : /* istanbul ignore next */ []));
    busyMemberId = signal(null, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "busyMemberId" }] : /* istanbul ignore next */ []));
    errorMessage = signal('', /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "errorMessage" }] : /* istanbul ignore next */ []));
    successMessage = signal('', /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "successMessage" }] : /* istanbul ignore next */ []));
    inviteForm = new FormGroup({
        email: new FormControl('', {
            nonNullable: true,
            validators: [
                Validators.required,
                Validators.email,
                Validators.maxLength(256),
            ],
        }),
        role: new FormControl('Manager', { nonNullable: true }),
    });
    ngOnInit() {
        this.load();
    }
    get sellerId() {
        const sellerId = this.sellerContext.selected()?.sellerId;
        if (!sellerId) {
            throw new Error('No seller is selected.');
        }
        return sellerId;
    }
    load() {
        this.isLoading.set(true);
        this.errorMessage.set('');
        forkJoin({
            roles: this.sellerApi.getRoles(this.sellerId),
            members: this.sellerApi.getMembers(this.sellerId),
            warehouses: this.sellerApi.getWarehouses(this.sellerId),
        })
            .pipe(finalize(() => this.isLoading.set(false)))
            .subscribe({
            next: ({ roles, members, warehouses, }) => {
                this.roles.set(roles);
                this.members.set(members);
                this.warehouses.set(warehouses);
                const selected = this.selectedMember();
                if (selected) {
                    this.selectedMember.set(members.find((member) => member.memberId ===
                        selected.memberId) ?? null);
                }
            },
            error: (error) => {
                this.errorMessage.set(getSellerError(error, 'Could not load the team.'));
            },
        });
    }
    loadMember(memberId) {
        this.errorMessage.set('');
        this.sellerApi
            .getMember(this.sellerId, memberId)
            .subscribe({
            next: (member) => {
                this.selectedMember.set(member);
            },
            error: (error) => {
                this.errorMessage.set(getSellerError(error, 'Could not load the member.'));
            },
        });
    }
    invite() {
        this.errorMessage.set('');
        this.successMessage.set('');
        if (this.inviteForm.invalid) {
            this.inviteForm.markAllAsTouched();
            this.errorMessage.set('Enter a valid email and role.');
            return;
        }
        const value = this.inviteForm.getRawValue();
        this.isInviting.set(true);
        this.sellerApi
            .inviteMember(this.sellerId, {
            email: value.email.trim(),
            role: value.role,
        })
            .pipe(finalize(() => this.isInviting.set(false)))
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
                this.successMessage.set('Invitation created.');
            },
            error: (error) => {
                this.errorMessage.set(getSellerError(error, 'Could not invite the member.'));
            },
        });
    }
    suspend(member) {
        this.runMemberAction(member, this.sellerApi.suspendMember(this.sellerId, member.memberId), 'Member suspended.');
    }
    reactivate(member) {
        this.runMemberAction(member, this.sellerApi.reactivateMember(this.sellerId, member.memberId), 'Member reactivated.');
    }
    remove(member) {
        if (!window.confirm('Remove this member?')) {
            return;
        }
        this.runMemberAction(member, this.sellerApi.removeMember(this.sellerId, member.memberId), 'Member removed.');
    }
    toggleRole(member, role) {
        const assigned = member.roles.includes(role);
        const request = assigned
            ? this.sellerApi.revokeRole(this.sellerId, member.memberId, role)
            : this.sellerApi.assignRole(this.sellerId, member.memberId, role);
        this.runMemberAction(member, request, assigned
            ? 'Role removed.'
            : 'Role assigned.');
    }
    toggleWarehouse(member, warehouseId) {
        const assigned = member.warehouseIds.includes(warehouseId);
        const request = assigned
            ? this.sellerApi.revokeWarehouse(this.sellerId, member.memberId, warehouseId)
            : this.sellerApi.assignWarehouse(this.sellerId, member.memberId, warehouseId);
        this.runMemberAction(member, request, assigned
            ? 'Warehouse removed.'
            : 'Warehouse assigned.');
    }
    runMemberAction(member, request, message) {
        this.busyMemberId.set(member.memberId);
        this.errorMessage.set('');
        this.successMessage.set('');
        request
            .pipe(finalize(() => this.busyMemberId.set(null)))
            .subscribe({
            next: (updated) => {
                this.replaceMember(updated);
                this.selectedMember.set(updated);
                this.successMessage.set(message);
            },
            error: (error) => {
                this.errorMessage.set(getSellerError(error, 'Could not update the member.'));
                if (error.status === 409) {
                    this.load();
                }
            },
        });
    }
    replaceMember(updated) {
        this.members.update((members) => members.map((member) => member.memberId === updated.memberId
            ? updated
            : member));
    }
    static ɵfac = function SellerTeam_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SellerTeam)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SellerTeam, selectors: [["app-seller-team"]], decls: 28, vars: 8, consts: [[1, "pageHeader"], ["type", "button", 3, "click", "disabled"], ["role", "alert", 1, "message", "error"], ["role", "status", 1, "message", "success"], [1, "inviteForm", 3, "ngSubmit", "formGroup"], ["type", "email", "formControlName", "email"], ["formControlName", "role"], [3, "value"], ["type", "submit", 3, "disabled"], [1, "tableWrap"], ["data-label", "Email"], ["data-label", "Status"], ["data-label", "Roles"], ["data-label", "Warehouses"], ["data-label", "Action"], ["type", "button", 3, "click"], [1, "sectionHeader"], [1, "memberActions"], ["type", "button", 3, "disabled"], [1, "managementGrid"], [1, "checkRow"], ["type", "checkbox", 3, "change", "checked", "disabled"]], template: function SellerTeam_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "header", 0)(1, "h2");
            i0.ɵɵtext(2, "Team");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "button", 1);
            i0.ɵɵlistener("click", function SellerTeam_Template_button_click_3_listener() { return ctx.load(); });
            i0.ɵɵtext(4, " Refresh ");
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(5, SellerTeam_Conditional_5_Template, 2, 1, "p", 2);
            i0.ɵɵconditionalCreate(6, SellerTeam_Conditional_6_Template, 2, 1, "p", 3);
            i0.ɵɵelementStart(7, "section")(8, "h3");
            i0.ɵɵtext(9, "Invite member");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "form", 4);
            i0.ɵɵlistener("ngSubmit", function SellerTeam_Template_form_ngSubmit_10_listener() { return ctx.invite(); });
            i0.ɵɵelementStart(11, "label");
            i0.ɵɵtext(12, " Email ");
            i0.ɵɵelement(13, "input", 5);
            i0.ɵɵcontrolCreate();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "label");
            i0.ɵɵtext(15, " Role ");
            i0.ɵɵelementStart(16, "select", 6);
            i0.ɵɵrepeaterCreate(17, SellerTeam_For_18_Template, 2, 2, "option", 7, _forTrack0);
            i0.ɵɵelementEnd();
            i0.ɵɵcontrolCreate();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(19, "button", 8);
            i0.ɵɵtext(20);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(21, "section")(22, "h3");
            i0.ɵɵtext(23, "Members");
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(24, SellerTeam_Conditional_24_Template, 2, 0, "p")(25, SellerTeam_Conditional_25_Template, 2, 0, "p")(26, SellerTeam_Conditional_26_Template, 17, 0, "div", 9);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(27, SellerTeam_Conditional_27_Template, 38, 11, "section");
        } if (rf & 2) {
            let tmp_10_0;
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("disabled", ctx.isLoading());
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.errorMessage() ? 5 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.successMessage() ? 6 : -1);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("formGroup", ctx.inviteForm);
            i0.ɵɵadvance(3);
            i0.ɵɵcontrol();
            i0.ɵɵadvance(3);
            i0.ɵɵcontrol();
            i0.ɵɵadvance();
            i0.ɵɵrepeater(ctx.roles());
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("disabled", ctx.isInviting());
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1(" ", ctx.isInviting() ? "Sending" : "Invite", " ");
            i0.ɵɵadvance(4);
            i0.ɵɵconditional(ctx.isLoading() ? 24 : ctx.members().length === 0 ? 25 : 26);
            i0.ɵɵadvance(3);
            i0.ɵɵconditional((tmp_10_0 = ctx.selectedMember()) ? 27 : -1, tmp_10_0);
        } }, dependencies: [ReactiveFormsModule, i1.ɵNgNoValidate, i1.NgSelectOption, i1.ɵNgSelectMultipleOption, i1.DefaultValueAccessor, i1.SelectControlValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.FormGroupDirective, i1.FormControlName, DatePipe], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.pageHeader[_ngcontent-%COMP%], \n.sectionHeader[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n}\n\nh2[_ngcontent-%COMP%], \nh3[_ngcontent-%COMP%], \nh4[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 600;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n\nh3[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n}\n\nh4[_ngcontent-%COMP%] {\n  margin-bottom: 0.8rem;\n  font-size: 0.95rem;\n}\n\nsection[_ngcontent-%COMP%] {\n  padding-top: 1.5rem;\n  margin-top: 1.5rem;\n  border-top: 1px solid rgb(215, 215, 210);\n}\n\n.inviteForm[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 12rem auto;\n  gap: 1rem;\n  align-items: end;\n  margin-top: 1rem;\n}\n\nlabel[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.4rem;\n  font-size: 0.8rem;\n  font-weight: 600;\n}\n\ninput[_ngcontent-%COMP%], \nselect[_ngcontent-%COMP%], \nbutton[_ngcontent-%COMP%] {\n  min-height: 2.4rem;\n  padding: 0.5rem 0.65rem;\n  color: rgb(24, 24, 24);\n  background: white;\n  border: 1px solid rgb(165, 165, 160);\n  border-radius: 0;\n  font: inherit;\n}\n\nbutton[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\nbutton[_ngcontent-%COMP%]:disabled {\n  cursor: default;\n  opacity: 0.55;\n}\n\n.message[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  border-left: 2px solid;\n}\n\n.error[_ngcontent-%COMP%] {\n  color: rgb(145, 25, 25);\n}\n\n.success[_ngcontent-%COMP%] {\n  color: rgb(30, 100, 55);\n}\n\n.tableWrap[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  min-width: 0;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n\nth[_ngcontent-%COMP%], \ntd[_ngcontent-%COMP%] {\n  padding: 0.7rem;\n  border-bottom: 1px solid rgb(220, 220, 215);\n  text-align: left;\n}\n\nth[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n}\n\n.sectionHeader[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.3rem;\n}\n\n.sectionHeader[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: rgb(80, 80, 76);\n}\n\n.memberActions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  margin-top: 1rem;\n}\n\n.managementGrid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 2rem;\n  margin-top: 1.5rem;\n}\n\n.checkRow[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n  padding: 0.45rem 0;\n  font-weight: 400;\n}\n\n.checkRow[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  min-height: auto;\n}\n\ndl[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n  border-top: 1px solid rgb(215, 215, 210);\n}\n\ndl[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 8rem 1fr;\n  gap: 1rem;\n  padding: 0.7rem 0;\n  border-bottom: 1px solid rgb(220, 220, 215);\n}\n\ndt[_ngcontent-%COMP%] {\n  color: rgb(80, 80, 76);\n}\n\ndd[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n@media (max-width: 44rem) {\n  .inviteForm[_ngcontent-%COMP%], \n   .managementGrid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SellerTeam, [{
        type: Component,
        args: [{ selector: 'app-seller-team', imports: [
                    ReactiveFormsModule,
                    DatePipe,
                ], template: "<header class=\"pageHeader\">\n  <h2>Team</h2>\n\n  <button\n    type=\"button\"\n    [disabled]=\"isLoading()\"\n    (click)=\"load()\"\n  >\n    Refresh\n  </button>\n</header>\n\n@if (errorMessage()) {\n  <p class=\"message error\" role=\"alert\">\n    {{ errorMessage() }}\n  </p>\n}\n\n@if (successMessage()) {\n  <p class=\"message success\" role=\"status\">\n    {{ successMessage() }}\n  </p>\n}\n\n<section>\n  <h3>Invite member</h3>\n\n  <form\n    class=\"inviteForm\"\n    [formGroup]=\"inviteForm\"\n    (ngSubmit)=\"invite()\"\n  >\n    <label>\n      Email\n      <input\n        type=\"email\"\n        formControlName=\"email\"\n      />\n    </label>\n\n    <label>\n      Role\n      <select formControlName=\"role\">\n        @for (\n          role of roles();\n          track role.name\n        ) {\n          <option [value]=\"role.name\">\n            {{ role.name }}\n          </option>\n        }\n      </select>\n    </label>\n\n    <button\n      type=\"submit\"\n      [disabled]=\"isInviting()\"\n    >\n      {{ isInviting() ? 'Sending' : 'Invite' }}\n    </button>\n  </form>\n</section>\n\n<section>\n  <h3>Members</h3>\n\n  @if (isLoading()) {\n    <p>Loading</p>\n  } @else if (members().length === 0) {\n    <p>No members</p>\n  } @else {\n    <div class=\"tableWrap\">\n      <table>\n        <thead>\n          <tr>\n            <th>Email</th>\n            <th>Status</th>\n            <th>Roles</th>\n            <th>Warehouses</th>\n            <th>Action</th>\n          </tr>\n        </thead>\n\n        <tbody>\n          @for (\n            member of members();\n            track member.memberId\n          ) {\n            <tr>\n              <td data-label=\"Email\">{{ member.email }}</td>\n              <td data-label=\"Status\">{{ member.status }}</td>\n              <td data-label=\"Roles\">\n                {{\n                  member.roles.length > 0\n                    ? member.roles.join(', ')\n                    : 'None'\n                }}\n              </td>\n              <td data-label=\"Warehouses\">\n                {{ member.warehouseIds.length }}\n              </td>\n              <td data-label=\"Action\">\n                <button\n                  type=\"button\"\n                  (click)=\"\n                    loadMember(member.memberId)\n                  \"\n                >\n                  Manage\n                </button>\n              </td>\n            </tr>\n          }\n        </tbody>\n      </table>\n    </div>\n  }\n</section>\n\n@if (selectedMember(); as member) {\n  <section>\n    <div class=\"sectionHeader\">\n      <div>\n        <h3>{{ member.email }}</h3>\n        <span>{{ member.status }}</span>\n      </div>\n\n      <button\n        type=\"button\"\n        (click)=\"selectedMember.set(null)\"\n      >\n        Close\n      </button>\n    </div>\n\n    <div class=\"memberActions\">\n      @if (member.status === 'Active') {\n        <button\n          type=\"button\"\n          [disabled]=\"busyMemberId() !== null\"\n          (click)=\"suspend(member)\"\n        >\n          Suspend\n        </button>\n      }\n\n      @if (member.status === 'Suspended') {\n        <button\n          type=\"button\"\n          [disabled]=\"busyMemberId() !== null\"\n          (click)=\"reactivate(member)\"\n        >\n          Reactivate\n        </button>\n      }\n\n      @if (member.status !== 'Removed') {\n        <button\n          type=\"button\"\n          [disabled]=\"busyMemberId() !== null\"\n          (click)=\"remove(member)\"\n        >\n          Remove\n        </button>\n      }\n    </div>\n\n    <div class=\"managementGrid\">\n      <div>\n        <h4>Roles</h4>\n\n        @for (\n          role of roles();\n          track role.name\n        ) {\n          <label class=\"checkRow\">\n            <input\n              type=\"checkbox\"\n              [checked]=\"\n                member.roles.includes(role.name)\n              \"\n              [disabled]=\"\n                member.status === 'Removed' ||\n                busyMemberId() !== null\n              \"\n              (change)=\"\n                toggleRole(member, role.name)\n              \"\n            />\n            {{ role.name }}\n          </label>\n        }\n      </div>\n\n      <div>\n        <h4>Warehouses</h4>\n\n        @if (warehouses().length === 0) {\n          <p>No warehouses</p>\n        }\n\n        @for (\n          warehouse of warehouses();\n          track warehouse.warehouseId\n        ) {\n          <label class=\"checkRow\">\n            <input\n              type=\"checkbox\"\n              [checked]=\"\n                member.warehouseIds.includes(\n                  warehouse.warehouseId\n                )\n              \"\n              [disabled]=\"\n                member.status === 'Removed' ||\n                busyMemberId() !== null\n              \"\n              (change)=\"\n                toggleWarehouse(\n                  member,\n                  warehouse.warehouseId\n                )\n              \"\n            />\n            {{ warehouse.name }}\n            {{ warehouse.code }}\n          </label>\n        }\n      </div>\n    </div>\n\n    <dl>\n      <div>\n        <dt>Invited</dt>\n        <dd>\n          {{ member.invitedAtUtc | date: 'medium' }}\n        </dd>\n      </div>\n\n      <div>\n        <dt>Joined</dt>\n        <dd>\n          @if (member.joinedAtUtc) {\n            {{\n              member.joinedAtUtc | date: 'medium'\n            }}\n          } @else {\n            Not joined\n          }\n        </dd>\n      </div>\n    </dl>\n  </section>\n}\n", styles: [":host {\n  display: block;\n}\n\n.pageHeader,\n.sectionHeader {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n}\n\nh2,\nh3,\nh4 {\n  margin: 0;\n  font-weight: 600;\n}\n\nh2 {\n  font-size: 1.5rem;\n}\n\nh3 {\n  font-size: 1.05rem;\n}\n\nh4 {\n  margin-bottom: 0.8rem;\n  font-size: 0.95rem;\n}\n\nsection {\n  padding-top: 1.5rem;\n  margin-top: 1.5rem;\n  border-top: 1px solid rgb(215, 215, 210);\n}\n\n.inviteForm {\n  display: grid;\n  grid-template-columns: 1fr 12rem auto;\n  gap: 1rem;\n  align-items: end;\n  margin-top: 1rem;\n}\n\nlabel {\n  display: grid;\n  gap: 0.4rem;\n  font-size: 0.8rem;\n  font-weight: 600;\n}\n\ninput,\nselect,\nbutton {\n  min-height: 2.4rem;\n  padding: 0.5rem 0.65rem;\n  color: rgb(24, 24, 24);\n  background: white;\n  border: 1px solid rgb(165, 165, 160);\n  border-radius: 0;\n  font: inherit;\n}\n\nbutton {\n  cursor: pointer;\n}\n\nbutton:disabled {\n  cursor: default;\n  opacity: 0.55;\n}\n\n.message {\n  padding: 0.75rem;\n  border-left: 2px solid;\n}\n\n.error {\n  color: rgb(145, 25, 25);\n}\n\n.success {\n  color: rgb(30, 100, 55);\n}\n\n.tableWrap {\n  margin-top: 1rem;\n  min-width: 0;\n}\n\ntable {\n  width: 100%;\n  border-collapse: collapse;\n}\n\nth,\ntd {\n  padding: 0.7rem;\n  border-bottom: 1px solid rgb(220, 220, 215);\n  text-align: left;\n}\n\nth {\n  font-size: 0.75rem;\n}\n\n.sectionHeader > div {\n  display: grid;\n  gap: 0.3rem;\n}\n\n.sectionHeader span {\n  color: rgb(80, 80, 76);\n}\n\n.memberActions {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  margin-top: 1rem;\n}\n\n.managementGrid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 2rem;\n  margin-top: 1.5rem;\n}\n\n.checkRow {\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n  padding: 0.45rem 0;\n  font-weight: 400;\n}\n\n.checkRow input {\n  min-height: auto;\n}\n\ndl {\n  margin-top: 1.5rem;\n  border-top: 1px solid rgb(215, 215, 210);\n}\n\ndl div {\n  display: grid;\n  grid-template-columns: 8rem 1fr;\n  gap: 1rem;\n  padding: 0.7rem 0;\n  border-bottom: 1px solid rgb(220, 220, 215);\n}\n\ndt {\n  color: rgb(80, 80, 76);\n}\n\ndd {\n  margin: 0;\n}\n\n@media (max-width: 44rem) {\n  .inviteForm,\n  .managementGrid {\n    grid-template-columns: 1fr;\n  }\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SellerTeam, { className: "SellerTeam", filePath: "src/app/seller/seller-team/seller-team.ts", lineNumber: 40 }); })();
