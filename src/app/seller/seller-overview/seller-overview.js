import { Component, inject, signal, } from '@angular/core';
import { DatePipe } from '@angular/common';
import { finalize } from 'rxjs';
import { SellerApi } from '../seller-api';
import { SellerContext } from '../seller-context';
import { getSellerError } from '../seller-error';
import * as i0 from "@angular/core";
function SellerOverview_Conditional_0_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵdomElementStart(0, "button", 4);
    i0.ɵɵdomListener("click", function SellerOverview_Conditional_0_Conditional_3_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.submitForReview()); });
    i0.ɵɵtext(1);
    i0.ɵɵdomElementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵdomProperty("disabled", ctx_r1.isSaving());
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.isSaving() ? "Submitting" : "Submit for review", " ");
} }
function SellerOverview_Conditional_0_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵdomElementStart(0, "p", 2);
    i0.ɵɵtext(1);
    i0.ɵɵdomElementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.errorMessage(), " ");
} }
function SellerOverview_Conditional_0_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵdomElementStart(0, "p", 3);
    i0.ɵɵtext(1);
    i0.ɵɵdomElementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.successMessage(), " ");
} }
function SellerOverview_Conditional_0_Conditional_38_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵdomElementStart(0, "div")(1, "dt");
    i0.ɵɵtext(2, "Approved");
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(3, "dd");
    i0.ɵɵtext(4);
    i0.ɵɵpipe(5, "date");
    i0.ɵɵdomElementEnd()();
} if (rf & 2) {
    const seller_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(5, 1, seller_r3.approvedAtUtc, "mediumDate"), " ");
} }
function SellerOverview_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵdomElementStart(0, "header", 0)(1, "h2");
    i0.ɵɵtext(2, "Overview");
    i0.ɵɵdomElementEnd();
    i0.ɵɵconditionalCreate(3, SellerOverview_Conditional_0_Conditional_3_Template, 2, 2, "button", 1);
    i0.ɵɵdomElementEnd();
    i0.ɵɵconditionalCreate(4, SellerOverview_Conditional_0_Conditional_4_Template, 2, 1, "p", 2);
    i0.ɵɵconditionalCreate(5, SellerOverview_Conditional_0_Conditional_5_Template, 2, 1, "p", 3);
    i0.ɵɵdomElementStart(6, "dl")(7, "div")(8, "dt");
    i0.ɵɵtext(9, "Display name");
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(10, "dd");
    i0.ɵɵtext(11);
    i0.ɵɵdomElementEnd()();
    i0.ɵɵdomElementStart(12, "div")(13, "dt");
    i0.ɵɵtext(14, "Legal business name");
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(15, "dd");
    i0.ɵɵtext(16);
    i0.ɵɵdomElementEnd()();
    i0.ɵɵdomElementStart(17, "div")(18, "dt");
    i0.ɵɵtext(19, "Seller status");
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(20, "dd");
    i0.ɵɵtext(21);
    i0.ɵɵdomElementEnd()();
    i0.ɵɵdomElementStart(22, "div")(23, "dt");
    i0.ɵɵtext(24, "Membership status");
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(25, "dd");
    i0.ɵɵtext(26);
    i0.ɵɵdomElementEnd()();
    i0.ɵɵdomElementStart(27, "div")(28, "dt");
    i0.ɵɵtext(29, "Roles");
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(30, "dd");
    i0.ɵɵtext(31);
    i0.ɵɵdomElementEnd()();
    i0.ɵɵdomElementStart(32, "div")(33, "dt");
    i0.ɵɵtext(34, "Created");
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(35, "dd");
    i0.ɵɵtext(36);
    i0.ɵɵpipe(37, "date");
    i0.ɵɵdomElementEnd()();
    i0.ɵɵconditionalCreate(38, SellerOverview_Conditional_0_Conditional_38_Template, 6, 4, "div");
    i0.ɵɵdomElementEnd();
} if (rf & 2) {
    const seller_r3 = ctx;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵconditional(ctx_r1.canSubmit() ? 3 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.errorMessage() ? 4 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.successMessage() ? 5 : -1);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(seller_r3.displayName);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(seller_r3.legalBusinessName);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(seller_r3.sellerStatus);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(seller_r3.memberStatus);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(seller_r3.roles.join(", "));
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(37, 10, seller_r3.sellerCreatedAtUtc, "mediumDate"), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(seller_r3.approvedAtUtc ? 38 : -1);
} }
export class SellerOverview {
    sellerApi = inject(SellerApi);
    sellerContext = inject(SellerContext);
    isSaving = signal(false, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "isSaving" }] : /* istanbul ignore next */ []));
    errorMessage = signal('', /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "errorMessage" }] : /* istanbul ignore next */ []));
    successMessage = signal('', /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "successMessage" }] : /* istanbul ignore next */ []));
    canSubmit() {
        const seller = this.sellerContext.selected();
        return (this.sellerContext.isOwner() &&
            (seller?.sellerStatus ===
                'PendingVerification' ||
                seller?.sellerStatus === 'Rejected'));
    }
    submitForReview() {
        const seller = this.sellerContext.selected();
        if (!seller || !this.canSubmit()) {
            return;
        }
        this.isSaving.set(true);
        this.errorMessage.set('');
        this.successMessage.set('');
        this.sellerApi
            .submitSellerForReview(seller.sellerId)
            .pipe(finalize(() => this.isSaving.set(false)))
            .subscribe({
            next: (response) => {
                this.sellerContext.select({
                    ...seller,
                    sellerStatus: response.status,
                    approvedAtUtc: response.approvedAtUtc,
                });
                this.successMessage.set('Seller submitted for review.');
            },
            error: (error) => {
                this.errorMessage.set(getSellerError(error, 'Could not submit the seller.'));
            },
        });
    }
    static ɵfac = function SellerOverview_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SellerOverview)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SellerOverview, selectors: [["app-seller-overview"]], decls: 1, vars: 1, consts: [[1, "pageHeader"], ["type", "button", 3, "disabled"], ["role", "alert", 1, "message", "error"], ["role", "status", 1, "message", "success"], ["type", "button", 3, "click", "disabled"]], template: function SellerOverview_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵconditionalCreate(0, SellerOverview_Conditional_0_Template, 39, 13);
        } if (rf & 2) {
            let tmp_0_0;
            i0.ɵɵconditional((tmp_0_0 = ctx.sellerContext.selected()) ? 0 : -1, tmp_0_0);
        } }, dependencies: [DatePipe], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n.pageHeader[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n}\n\nh2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.5rem;\n  font-weight: 600;\n}\n\nbutton[_ngcontent-%COMP%] {\n  min-height: 2.5rem;\n  padding: 0.55rem 0.8rem;\n  color: white;\n  background: rgb(25, 25, 25);\n  border: 1px solid rgb(25, 25, 25);\n  border-radius: 0;\n  cursor: pointer;\n}\n\nbutton[_ngcontent-%COMP%]:disabled {\n  cursor: default;\n  opacity: 0.55;\n}\n\ndl[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n  border-top: 1px solid rgb(215, 215, 210);\n}\n\ndl[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 12rem 1fr;\n  gap: 1rem;\n  padding: 0.8rem 0;\n  border-bottom: 1px solid rgb(220, 220, 215);\n}\n\ndt[_ngcontent-%COMP%] {\n  color: rgb(80, 80, 76);\n}\n\ndd[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.message[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  border-left: 2px solid;\n}\n\n.error[_ngcontent-%COMP%] {\n  color: rgb(145, 25, 25);\n}\n\n.success[_ngcontent-%COMP%] {\n  color: rgb(30, 100, 55);\n}\n\n@media (max-width: 36rem) {\n  dl[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 0.3rem;\n  }\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SellerOverview, [{
        type: Component,
        args: [{ selector: 'app-seller-overview', imports: [DatePipe], template: "@if (sellerContext.selected(); as seller) {\n  <header class=\"pageHeader\">\n    <h2>Overview</h2>\n\n    @if (canSubmit()) {\n      <button\n        type=\"button\"\n        [disabled]=\"isSaving()\"\n        (click)=\"submitForReview()\"\n      >\n        {{\n          isSaving()\n            ? 'Submitting'\n            : 'Submit for review'\n        }}\n      </button>\n    }\n  </header>\n\n  @if (errorMessage()) {\n    <p class=\"message error\" role=\"alert\">\n      {{ errorMessage() }}\n    </p>\n  }\n\n  @if (successMessage()) {\n    <p class=\"message success\" role=\"status\">\n      {{ successMessage() }}\n    </p>\n  }\n\n  <dl>\n    <div>\n      <dt>Display name</dt>\n      <dd>{{ seller.displayName }}</dd>\n    </div>\n\n    <div>\n      <dt>Legal business name</dt>\n      <dd>{{ seller.legalBusinessName }}</dd>\n    </div>\n\n    <div>\n      <dt>Seller status</dt>\n      <dd>{{ seller.sellerStatus }}</dd>\n    </div>\n\n    <div>\n      <dt>Membership status</dt>\n      <dd>{{ seller.memberStatus }}</dd>\n    </div>\n\n    <div>\n      <dt>Roles</dt>\n      <dd>{{ seller.roles.join(', ') }}</dd>\n    </div>\n\n    <div>\n      <dt>Created</dt>\n      <dd>\n        {{\n          seller.sellerCreatedAtUtc\n            | date: 'mediumDate'\n        }}\n      </dd>\n    </div>\n\n    @if (seller.approvedAtUtc) {\n      <div>\n        <dt>Approved</dt>\n        <dd>\n          {{\n            seller.approvedAtUtc\n              | date: 'mediumDate'\n          }}\n        </dd>\n      </div>\n    }\n  </dl>\n}\n", styles: [":host {\n  display: block;\n}\n.pageHeader {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n}\n\nh2 {\n  margin: 0;\n  font-size: 1.5rem;\n  font-weight: 600;\n}\n\nbutton {\n  min-height: 2.5rem;\n  padding: 0.55rem 0.8rem;\n  color: white;\n  background: rgb(25, 25, 25);\n  border: 1px solid rgb(25, 25, 25);\n  border-radius: 0;\n  cursor: pointer;\n}\n\nbutton:disabled {\n  cursor: default;\n  opacity: 0.55;\n}\n\ndl {\n  margin-top: 1.5rem;\n  border-top: 1px solid rgb(215, 215, 210);\n}\n\ndl div {\n  display: grid;\n  grid-template-columns: 12rem 1fr;\n  gap: 1rem;\n  padding: 0.8rem 0;\n  border-bottom: 1px solid rgb(220, 220, 215);\n}\n\ndt {\n  color: rgb(80, 80, 76);\n}\n\ndd {\n  margin: 0;\n}\n\n.message {\n  padding: 0.75rem;\n  border-left: 2px solid;\n}\n\n.error {\n  color: rgb(145, 25, 25);\n}\n\n.success {\n  color: rgb(30, 100, 55);\n}\n\n@media (max-width: 36rem) {\n  dl div {\n    grid-template-columns: 1fr;\n    gap: 0.3rem;\n  }\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SellerOverview, { className: "SellerOverview", filePath: "src/app/seller/seller-overview/seller-overview.ts", lineNumber: 20 }); })();
