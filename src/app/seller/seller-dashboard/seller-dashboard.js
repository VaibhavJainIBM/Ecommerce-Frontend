import { Component, inject, signal, } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators, } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { finalize, forkJoin } from 'rxjs';
import { Navbar } from '../../shared/navbar/navbar';
import { SellerApi } from '../seller-api';
import { getSellerError } from '../seller-error';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
const _c0 = a0 => ["/seller", a0];
const _forTrack0 = ($index, $item) => $item.memberId;
const _forTrack1 = ($index, $item) => $item.sellerId;
function SellerDashboard_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 3);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.errorMessage(), " ");
} }
function SellerDashboard_Conditional_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 4);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.successMessage(), " ");
} }
function SellerDashboard_Conditional_21_For_15_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr")(1, "td", 10);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td", 11);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "td", 12)(6, "button", 2);
    i0.ɵɵlistener("click", function SellerDashboard_Conditional_21_For_15_Template_button_click_6_listener() { const invitation_r3 = i0.ɵɵrestoreView(_r2).$implicit; const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.acceptInvitation(invitation_r3)); });
    i0.ɵɵtext(7, " Accept ");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const invitation_r3 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", invitation_r3.sellerName, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", invitation_r3.roles.join(", "), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", ctx_r0.busySellerId() === invitation_r3.sellerId);
} }
function SellerDashboard_Conditional_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section")(1, "h2");
    i0.ɵɵtext(2, "Invitations");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 9)(4, "table")(5, "thead")(6, "tr")(7, "th");
    i0.ɵɵtext(8, "Seller");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "th");
    i0.ɵɵtext(10, "Roles");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "th");
    i0.ɵɵtext(12, "Action");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(13, "tbody");
    i0.ɵɵrepeaterCreate(14, SellerDashboard_Conditional_21_For_15_Template, 8, 3, "tr", null, _forTrack0);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(14);
    i0.ɵɵrepeater(ctx_r0.invitations());
} }
function SellerDashboard_Conditional_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1, "Loading");
    i0.ɵɵelementEnd();
} }
function SellerDashboard_Conditional_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1, "No seller accounts");
    i0.ɵɵelementEnd();
} }
function SellerDashboard_Conditional_27_For_18_Conditional_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 16);
    i0.ɵɵtext(1, " Open ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const seller_r4 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(1, _c0, seller_r4.sellerId));
} }
function SellerDashboard_Conditional_27_For_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 10);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td", 13);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "td", 14);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "td", 15);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "td", 11);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "td", 12);
    i0.ɵɵconditionalCreate(12, SellerDashboard_Conditional_27_For_18_Conditional_12_Template, 2, 3, "a", 16);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const seller_r4 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", seller_r4.displayName, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", seller_r4.legalBusinessName, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", seller_r4.sellerStatus, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", seller_r4.memberStatus, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", seller_r4.roles.length > 0 ? seller_r4.roles.join(", ") : "None", " ");
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r0.canOpen(seller_r4) ? 12 : -1);
} }
function SellerDashboard_Conditional_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9)(1, "table")(2, "thead")(3, "tr")(4, "th");
    i0.ɵɵtext(5, "Seller");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "th");
    i0.ɵɵtext(7, "Business");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "th");
    i0.ɵɵtext(9, "Seller status");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "th");
    i0.ɵɵtext(11, "Membership");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "th");
    i0.ɵɵtext(13, "Roles");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "th");
    i0.ɵɵtext(15, "Action");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(16, "tbody");
    i0.ɵɵrepeaterCreate(17, SellerDashboard_Conditional_27_For_18_Template, 13, 6, "tr", null, _forTrack1);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(17);
    i0.ɵɵrepeater(ctx_r0.sellers());
} }
export class SellerDashboard {
    sellerApi = inject(SellerApi);
    sellers = signal([], /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "sellers" }] : /* istanbul ignore next */ []));
    invitations = signal([], /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "invitations" }] : /* istanbul ignore next */ []));
    isLoading = signal(false, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "isLoading" }] : /* istanbul ignore next */ []));
    isSaving = signal(false, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "isSaving" }] : /* istanbul ignore next */ []));
    busySellerId = signal(null, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "busySellerId" }] : /* istanbul ignore next */ []));
    errorMessage = signal('', /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "errorMessage" }] : /* istanbul ignore next */ []));
    successMessage = signal('', /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "successMessage" }] : /* istanbul ignore next */ []));
    createForm = new FormGroup({
        displayName: new FormControl('', {
            nonNullable: true,
            validators: [
                Validators.required,
                Validators.maxLength(150),
            ],
        }),
        legalBusinessName: new FormControl('', {
            nonNullable: true,
            validators: [
                Validators.required,
                Validators.maxLength(250),
            ],
        }),
    });
    ngOnInit() {
        this.load();
    }
    load() {
        this.isLoading.set(true);
        this.errorMessage.set('');
        forkJoin({
            sellers: this.sellerApi.getMine(),
            invitations: this.sellerApi.getInvitations(),
        })
            .pipe(finalize(() => this.isLoading.set(false)))
            .subscribe({
            next: ({ sellers, invitations }) => {
                this.sellers.set(sellers);
                this.invitations.set(invitations);
            },
            error: (error) => {
                this.errorMessage.set(getSellerError(error, 'Could not load seller accounts.'));
            },
        });
    }
    createSeller() {
        this.errorMessage.set('');
        this.successMessage.set('');
        if (this.createForm.invalid) {
            this.createForm.markAllAsTouched();
            this.errorMessage.set('Enter both business names.');
            return;
        }
        const value = this.createForm.getRawValue();
        this.isSaving.set(true);
        this.sellerApi
            .createSeller({
            displayName: value.displayName.trim(),
            legalBusinessName: value.legalBusinessName.trim(),
        })
            .pipe(finalize(() => this.isSaving.set(false)))
            .subscribe({
            next: () => {
                this.createForm.reset({
                    displayName: '',
                    legalBusinessName: '',
                });
                this.successMessage.set('Seller account created.');
                this.load();
            },
            error: (error) => {
                this.errorMessage.set(getSellerError(error, 'Could not create the seller account.'));
            },
        });
    }
    acceptInvitation(invitation) {
        this.errorMessage.set('');
        this.successMessage.set('');
        this.busySellerId.set(invitation.sellerId);
        this.sellerApi
            .acceptInvitation(invitation.sellerId)
            .pipe(finalize(() => this.busySellerId.set(null)))
            .subscribe({
            next: () => {
                this.successMessage.set('Invitation accepted.');
                this.load();
            },
            error: (error) => {
                this.errorMessage.set(getSellerError(error, 'Could not accept the invitation.'));
            },
        });
    }
    canOpen(seller) {
        return (seller.memberStatus === 'Active' &&
            seller.roles.length > 0);
    }
    static ɵfac = function SellerDashboard_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SellerDashboard)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SellerDashboard, selectors: [["app-seller-dashboard"]], decls: 28, vars: 8, consts: [[1, "sellerPage"], [1, "pageHeader"], ["type", "button", 3, "click", "disabled"], ["role", "alert", 1, "message", "error"], ["role", "status", 1, "message", "success"], [1, "simpleForm", 3, "ngSubmit", "formGroup"], ["type", "text", "formControlName", "displayName", "maxlength", "150"], ["type", "text", "formControlName", "legalBusinessName", "maxlength", "250"], ["type", "submit", 3, "disabled"], [1, "tableWrap"], ["data-label", "Seller"], ["data-label", "Roles"], ["data-label", "Action"], ["data-label", "Business"], ["data-label", "Seller status"], ["data-label", "Membership"], [3, "routerLink"]], template: function SellerDashboard_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "app-navbar");
            i0.ɵɵelementStart(1, "main", 0)(2, "header", 1)(3, "h1");
            i0.ɵɵtext(4, "Seller accounts");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "button", 2);
            i0.ɵɵlistener("click", function SellerDashboard_Template_button_click_5_listener() { return ctx.load(); });
            i0.ɵɵtext(6, " Refresh ");
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(7, SellerDashboard_Conditional_7_Template, 2, 1, "p", 3);
            i0.ɵɵconditionalCreate(8, SellerDashboard_Conditional_8_Template, 2, 1, "p", 4);
            i0.ɵɵelementStart(9, "section")(10, "h2");
            i0.ɵɵtext(11, "Create seller");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "form", 5);
            i0.ɵɵlistener("ngSubmit", function SellerDashboard_Template_form_ngSubmit_12_listener() { return ctx.createSeller(); });
            i0.ɵɵelementStart(13, "label");
            i0.ɵɵtext(14, " Display name ");
            i0.ɵɵelement(15, "input", 6);
            i0.ɵɵcontrolCreate();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(16, "label");
            i0.ɵɵtext(17, " Legal business name ");
            i0.ɵɵelement(18, "input", 7);
            i0.ɵɵcontrolCreate();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(19, "button", 8);
            i0.ɵɵtext(20);
            i0.ɵɵelementEnd()()();
            i0.ɵɵconditionalCreate(21, SellerDashboard_Conditional_21_Template, 16, 0, "section");
            i0.ɵɵelementStart(22, "section")(23, "h2");
            i0.ɵɵtext(24, "Accounts");
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(25, SellerDashboard_Conditional_25_Template, 2, 0, "p")(26, SellerDashboard_Conditional_26_Template, 2, 0, "p")(27, SellerDashboard_Conditional_27_Template, 19, 0, "div", 9);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("disabled", ctx.isLoading());
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.errorMessage() ? 7 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.successMessage() ? 8 : -1);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("formGroup", ctx.createForm);
            i0.ɵɵadvance(3);
            i0.ɵɵcontrol();
            i0.ɵɵadvance(3);
            i0.ɵɵcontrol();
            i0.ɵɵadvance();
            i0.ɵɵproperty("disabled", ctx.isSaving());
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1(" ", ctx.isSaving() ? "Saving" : "Create", " ");
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.invitations().length > 0 ? 21 : -1);
            i0.ɵɵadvance(4);
            i0.ɵɵconditional(ctx.isLoading() ? 25 : ctx.sellers().length === 0 ? 26 : 27);
        } }, dependencies: [Navbar,
            ReactiveFormsModule, i1.ɵNgNoValidate, i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.MaxLengthValidator, i1.FormGroupDirective, i1.FormControlName, RouterLink], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.sellerPage[_ngcontent-%COMP%] {\n  width: min(72rem, calc(100% - 2rem));\n  margin: 0 auto;\n  padding: 2rem 0 4rem;\n}\n\n.pageHeader[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n}\n\nh1[_ngcontent-%COMP%], \nh2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 600;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n}\n\nsection[_ngcontent-%COMP%] {\n  padding-top: 1.5rem;\n  margin-top: 1.5rem;\n  border-top: 1px solid rgb(215, 215, 210);\n}\n\n.simpleForm[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr auto;\n  gap: 1rem;\n  align-items: end;\n  margin-top: 1rem;\n}\n\nlabel[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.4rem;\n  font-size: 0.85rem;\n  font-weight: 600;\n}\n\ninput[_ngcontent-%COMP%], \nbutton[_ngcontent-%COMP%] {\n  min-height: 2.5rem;\n  padding: 0.55rem 0.7rem;\n  color: rgb(24, 24, 24);\n  background: white;\n  border: 1px solid rgb(165, 165, 160);\n  border-radius: 0;\n  font: inherit;\n}\n\nbutton[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\nbutton[_ngcontent-%COMP%]:disabled {\n  cursor: default;\n  opacity: 0.55;\n}\n\na[_ngcontent-%COMP%] {\n  color: rgb(24, 24, 24);\n}\n\n.message[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  border-left: 2px solid;\n}\n\n.error[_ngcontent-%COMP%] {\n  color: rgb(145, 25, 25);\n}\n\n.success[_ngcontent-%COMP%] {\n  color: rgb(30, 100, 55);\n}\n\n.tableWrap[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  min-width: 0;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n\nth[_ngcontent-%COMP%], \ntd[_ngcontent-%COMP%] {\n  padding: 0.8rem;\n  border-bottom: 1px solid rgb(220, 220, 215);\n  text-align: left;\n  vertical-align: top;\n}\n\nth[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 700;\n}\n\n@media (max-width: 44rem) {\n  .simpleForm[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SellerDashboard, [{
        type: Component,
        args: [{ selector: 'app-seller-dashboard', imports: [
                    Navbar,
                    ReactiveFormsModule,
                    RouterLink,
                ], template: "<app-navbar></app-navbar>\n\n<main class=\"sellerPage\">\n  <header class=\"pageHeader\">\n    <h1>Seller accounts</h1>\n\n    <button\n      type=\"button\"\n      [disabled]=\"isLoading()\"\n      (click)=\"load()\"\n    >\n      Refresh\n    </button>\n  </header>\n\n  @if (errorMessage()) {\n    <p class=\"message error\" role=\"alert\">\n      {{ errorMessage() }}\n    </p>\n  }\n\n  @if (successMessage()) {\n    <p class=\"message success\" role=\"status\">\n      {{ successMessage() }}\n    </p>\n  }\n\n  <section>\n    <h2>Create seller</h2>\n\n    <form\n      class=\"simpleForm\"\n      [formGroup]=\"createForm\"\n      (ngSubmit)=\"createSeller()\"\n    >\n      <label>\n        Display name\n        <input\n          type=\"text\"\n          formControlName=\"displayName\"\n          maxlength=\"150\"\n        />\n      </label>\n\n      <label>\n        Legal business name\n        <input\n          type=\"text\"\n          formControlName=\"legalBusinessName\"\n          maxlength=\"250\"\n        />\n      </label>\n\n      <button\n        type=\"submit\"\n        [disabled]=\"isSaving()\"\n      >\n        {{ isSaving() ? 'Saving' : 'Create' }}\n      </button>\n    </form>\n  </section>\n\n  @if (invitations().length > 0) {\n    <section>\n      <h2>Invitations</h2>\n\n      <div class=\"tableWrap\">\n        <table>\n          <thead>\n            <tr>\n              <th>Seller</th>\n              <th>Roles</th>\n              <th>Action</th>\n            </tr>\n          </thead>\n\n          <tbody>\n            @for (\n              invitation of invitations();\n              track invitation.memberId\n            ) {\n              <tr>\n                <td data-label=\"Seller\">\n                  {{ invitation.sellerName }}\n                </td>\n                <td data-label=\"Roles\">\n                  {{ invitation.roles.join(', ') }}\n                </td>\n                <td data-label=\"Action\">\n                  <button\n                    type=\"button\"\n                    [disabled]=\"\n                      busySellerId() ===\n                      invitation.sellerId\n                    \"\n                    (click)=\"\n                      acceptInvitation(invitation)\n                    \"\n                  >\n                    Accept\n                  </button>\n                </td>\n              </tr>\n            }\n          </tbody>\n        </table>\n      </div>\n    </section>\n  }\n\n  <section>\n    <h2>Accounts</h2>\n\n    @if (isLoading()) {\n      <p>Loading</p>\n    } @else if (sellers().length === 0) {\n      <p>No seller accounts</p>\n    } @else {\n      <div class=\"tableWrap\">\n        <table>\n          <thead>\n            <tr>\n              <th>Seller</th>\n              <th>Business</th>\n              <th>Seller status</th>\n              <th>Membership</th>\n              <th>Roles</th>\n              <th>Action</th>\n            </tr>\n          </thead>\n\n          <tbody>\n            @for (\n              seller of sellers();\n              track seller.sellerId\n            ) {\n              <tr>\n                <td data-label=\"Seller\">\n                  {{ seller.displayName }}\n                </td>\n                <td data-label=\"Business\">\n                  {{ seller.legalBusinessName }}\n                </td>\n                <td data-label=\"Seller status\">\n                  {{ seller.sellerStatus }}\n                </td>\n                <td data-label=\"Membership\">\n                  {{ seller.memberStatus }}\n                </td>\n                <td data-label=\"Roles\">\n                  {{\n                    seller.roles.length > 0\n                      ? seller.roles.join(', ')\n                      : 'None'\n                  }}\n                </td>\n                <td data-label=\"Action\">\n                  @if (canOpen(seller)) {\n                    <a\n                      [routerLink]=\"[\n                        '/seller',\n                        seller.sellerId\n                      ]\"\n                    >\n                      Open\n                    </a>\n                  }\n                </td>\n              </tr>\n            }\n          </tbody>\n        </table>\n      </div>\n    }\n  </section>\n</main>\n", styles: [":host {\n  display: block;\n}\n\n.sellerPage {\n  width: min(72rem, calc(100% - 2rem));\n  margin: 0 auto;\n  padding: 2rem 0 4rem;\n}\n\n.pageHeader {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n}\n\nh1,\nh2 {\n  margin: 0;\n  font-weight: 600;\n}\n\nh1 {\n  font-size: 2rem;\n}\n\nh2 {\n  font-size: 1.1rem;\n}\n\nsection {\n  padding-top: 1.5rem;\n  margin-top: 1.5rem;\n  border-top: 1px solid rgb(215, 215, 210);\n}\n\n.simpleForm {\n  display: grid;\n  grid-template-columns: 1fr 1fr auto;\n  gap: 1rem;\n  align-items: end;\n  margin-top: 1rem;\n}\n\nlabel {\n  display: grid;\n  gap: 0.4rem;\n  font-size: 0.85rem;\n  font-weight: 600;\n}\n\ninput,\nbutton {\n  min-height: 2.5rem;\n  padding: 0.55rem 0.7rem;\n  color: rgb(24, 24, 24);\n  background: white;\n  border: 1px solid rgb(165, 165, 160);\n  border-radius: 0;\n  font: inherit;\n}\n\nbutton {\n  cursor: pointer;\n}\n\nbutton:disabled {\n  cursor: default;\n  opacity: 0.55;\n}\n\na {\n  color: rgb(24, 24, 24);\n}\n\n.message {\n  padding: 0.75rem;\n  border-left: 2px solid;\n}\n\n.error {\n  color: rgb(145, 25, 25);\n}\n\n.success {\n  color: rgb(30, 100, 55);\n}\n\n.tableWrap {\n  margin-top: 1rem;\n  min-width: 0;\n}\n\ntable {\n  width: 100%;\n  border-collapse: collapse;\n}\n\nth,\ntd {\n  padding: 0.8rem;\n  border-bottom: 1px solid rgb(220, 220, 215);\n  text-align: left;\n  vertical-align: top;\n}\n\nth {\n  font-size: 0.75rem;\n  font-weight: 700;\n}\n\n@media (max-width: 44rem) {\n  .simpleForm {\n    grid-template-columns: 1fr;\n  }\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SellerDashboard, { className: "SellerDashboard", filePath: "src/app/seller/seller-dashboard/seller-dashboard.ts", lineNumber: 35 }); })();
