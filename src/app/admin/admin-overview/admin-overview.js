import { Component, inject, signal, } from '@angular/core';
import { RouterLink } from '@angular/router';
import { forkJoin } from 'rxjs';
import { AdminApi } from '../admin-api';
import { readAdminError } from '../admin-error';
import * as i0 from "@angular/core";
function AdminOverview_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 2);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.errorMessage(), " ");
} }
function AdminOverview_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1, "Loading");
    i0.ɵɵelementEnd();
} }
function AdminOverview_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3)(1, "a", 4)(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4, " Sellers under review ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "a", 5)(6, "span");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(8, " Listings awaiting review ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "a", 6)(10, "span");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(12, " Draft products ");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r0.pendingSellers());
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r0.pendingListings());
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r0.draftProducts());
} }
function AdminOverview_Conditional_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section")(1, "h3");
    i0.ɵɵtext(2, "Administrator");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "dl")(4, "div")(5, "dt");
    i0.ɵɵtext(6, "Email");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "dd");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "div")(10, "dt");
    i0.ɵɵtext(11, "Roles");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "dd");
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const admin_r2 = ctx;
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate(admin_r2.email);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(admin_r2.platformRoles.join(", "));
} }
export class AdminOverview {
    api = inject(AdminApi);
    profile = signal(null, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "profile" }] : /* istanbul ignore next */ []));
    pendingSellers = signal(0, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "pendingSellers" }] : /* istanbul ignore next */ []));
    pendingListings = signal(0, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "pendingListings" }] : /* istanbul ignore next */ []));
    draftProducts = signal(0, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "draftProducts" }] : /* istanbul ignore next */ []));
    isLoading = signal(false, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "isLoading" }] : /* istanbul ignore next */ []));
    errorMessage = signal('', /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "errorMessage" }] : /* istanbul ignore next */ []));
    ngOnInit() {
        this.load();
    }
    load() {
        this.isLoading.set(true);
        this.errorMessage.set('');
        forkJoin({
            profile: this.api.getProfile(),
            sellers: this.api.getSellers({
                status: 'UnderReview',
                pageSize: 1,
            }),
            listings: this.api.getListings({
                status: 'PendingReview',
                pageSize: 1,
            }),
            products: this.api.getCatalogProducts({
                status: 'Draft',
                pageSize: 1,
            }),
        }).subscribe({
            next: (result) => {
                this.profile.set(result.profile);
                this.pendingSellers.set(result.sellers.totalCount);
                this.pendingListings.set(result.listings.totalCount);
                this.draftProducts.set(result.products.totalCount);
                this.isLoading.set(false);
            },
            error: (error) => {
                this.errorMessage.set(readAdminError(error, 'Could not load the admin overview.'));
                this.isLoading.set(false);
            },
        });
    }
    static ɵfac = function AdminOverview_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AdminOverview)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AdminOverview, selectors: [["app-admin-overview"]], decls: 9, vars: 4, consts: [[1, "pageHeader"], ["type", "button", 3, "click", "disabled"], ["role", "alert", 1, "message", "error"], [1, "summaryGrid"], ["routerLink", "/admin/sellers"], ["routerLink", "/admin/listings"], ["routerLink", "/admin/catalog"]], template: function AdminOverview_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "header", 0)(1, "h2");
            i0.ɵɵtext(2, "Overview");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "button", 1);
            i0.ɵɵlistener("click", function AdminOverview_Template_button_click_3_listener() { return ctx.load(); });
            i0.ɵɵtext(4, " Refresh ");
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(5, AdminOverview_Conditional_5_Template, 2, 1, "p", 2);
            i0.ɵɵconditionalCreate(6, AdminOverview_Conditional_6_Template, 2, 0, "p")(7, AdminOverview_Conditional_7_Template, 13, 3, "div", 3);
            i0.ɵɵconditionalCreate(8, AdminOverview_Conditional_8_Template, 14, 2, "section");
        } if (rf & 2) {
            let tmp_3_0;
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("disabled", ctx.isLoading());
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.errorMessage() ? 5 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.isLoading() ? 6 : 7);
            i0.ɵɵadvance(2);
            i0.ɵɵconditional((tmp_3_0 = ctx.profile()) ? 8 : -1, tmp_3_0);
        } }, dependencies: [RouterLink], styles: ["[_nghost-%COMP%] {\n  display: block;\n  min-width: 0;\n}\n\n.pageHeader[_ngcontent-%COMP%], \n.sectionHeader[_ngcontent-%COMP%], \n.pagination[_ngcontent-%COMP%], \n.actions[_ngcontent-%COMP%], \n.inlineFields[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n}\n\n.pageHeader[_ngcontent-%COMP%], \n.sectionHeader[_ngcontent-%COMP%], \n.pagination[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n\nh2[_ngcontent-%COMP%], \nh3[_ngcontent-%COMP%], \nh4[_ngcontent-%COMP%], \np[_ngcontent-%COMP%] {\n  overflow-wrap: anywhere;\n}\n\nh2[_ngcontent-%COMP%], \nh3[_ngcontent-%COMP%], \nh4[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 600;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n\nh3[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n}\n\nh4[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n\nsection[_ngcontent-%COMP%] {\n  padding-top: 1.5rem;\n  margin-top: 1.5rem;\n  border-top: 1px solid rgb(215, 215, 210);\n}\n\nform[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n\n.formGrid[_ngcontent-%COMP%], \n.filterForm[_ngcontent-%COMP%], \n.variantFields[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns:\n    repeat(auto-fit, minmax(min(100%, 13rem), 1fr));\n  gap: 1rem;\n  align-items: end;\n}\n\n.filterForm[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n\nlabel[_ngcontent-%COMP%] {\n  display: grid;\n  min-width: 0;\n  gap: 0.4rem;\n  font-size: 0.8rem;\n  font-weight: 600;\n}\n\ninput[_ngcontent-%COMP%], \nselect[_ngcontent-%COMP%], \ntextarea[_ngcontent-%COMP%], \nbutton[_ngcontent-%COMP%], \n.buttonLink[_ngcontent-%COMP%] {\n  min-width: 0;\n  min-height: 2.4rem;\n  padding: 0.5rem 0.65rem;\n  color: rgb(24, 24, 24);\n  background: white;\n  border: 1px solid rgb(165, 165, 160);\n  border-radius: 0;\n  font: inherit;\n}\n\ninput[_ngcontent-%COMP%], \nselect[_ngcontent-%COMP%], \ntextarea[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  min-height: 6rem;\n  resize: vertical;\n}\n\nbutton[_ngcontent-%COMP%], \n.buttonLink[_ngcontent-%COMP%] {\n  width: fit-content;\n  cursor: pointer;\n  text-decoration: none;\n}\n\nbutton[_ngcontent-%COMP%]:disabled {\n  cursor: default;\n  opacity: 0.55;\n}\n\n.message[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  border-left: 2px solid;\n}\n\n.error[_ngcontent-%COMP%] {\n  color: rgb(145, 25, 25);\n}\n\n.success[_ngcontent-%COMP%] {\n  color: rgb(30, 100, 55);\n}\n\n.records[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0;\n  margin-top: 1rem;\n  border-top: 1px solid rgb(215, 215, 210);\n}\n\n.record[_ngcontent-%COMP%] {\n  min-width: 0;\n  padding: 1rem 0;\n  border-bottom: 1px solid rgb(215, 215, 210);\n}\n\n.recordGrid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns:\n    minmax(0, 1.4fr)\n    minmax(0, 1fr)\n    minmax(7rem, 0.6fr)\n    auto;\n  gap: 1rem;\n  align-items: start;\n}\n\n.recordGrid[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%], \n.recordHeader[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n\n.recordHeader[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: start;\n  gap: 1rem;\n}\n\n.muted[_ngcontent-%COMP%], \nsmall[_ngcontent-%COMP%] {\n  color: rgb(80, 80, 76);\n}\n\n.metaLabel[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 0.25rem;\n  color: rgb(80, 80, 76);\n  font-size: 0.75rem;\n}\n\n.variants[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.5rem;\n  padding: 0;\n  margin: 0.8rem 0 0;\n  list-style: none;\n}\n\n.variants[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding-top: 0.5rem;\n  border-top: 1px solid rgb(230, 230, 225);\n  overflow-wrap: anywhere;\n}\n\n.pagination[_ngcontent-%COMP%] {\n  padding-top: 1rem;\n}\n\ndl[_ngcontent-%COMP%] {\n  margin: 1rem 0 0;\n  border-top: 1px solid rgb(215, 215, 210);\n}\n\ndl[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(7rem, 10rem) minmax(0, 1fr);\n  gap: 1rem;\n  padding: 0.7rem 0;\n  border-bottom: 1px solid rgb(220, 220, 215);\n}\n\ndt[_ngcontent-%COMP%] {\n  color: rgb(80, 80, 76);\n}\n\ndd[_ngcontent-%COMP%] {\n  min-width: 0;\n  margin: 0;\n  overflow-wrap: anywhere;\n}\n\n@media (max-width: 52rem) {\n  .recordGrid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n\n@media (max-width: 36rem) {\n  .pageHeader[_ngcontent-%COMP%], \n   .sectionHeader[_ngcontent-%COMP%], \n   .recordHeader[_ngcontent-%COMP%] {\n    align-items: stretch;\n    flex-direction: column;\n  }\n\n  .recordGrid[_ngcontent-%COMP%], \n   dl[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 0.4rem;\n  }\n}", ".summaryGrid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns:\n    repeat(auto-fit, minmax(min(100%, 12rem), 1fr));\n  gap: 1rem;\n  margin-top: 1.5rem;\n}\n\n.summaryGrid[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  min-width: 0;\n  padding: 1rem;\n  color: rgb(24, 24, 24);\n  border: 1px solid rgb(190, 190, 185);\n  text-decoration: none;\n  overflow-wrap: anywhere;\n}\n\n.summaryGrid[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n\n.summaryGrid[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 0.5rem;\n  font-size: 1.6rem;\n  font-weight: 600;\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AdminOverview, [{
        type: Component,
        args: [{ selector: 'app-admin-overview', imports: [RouterLink], template: "<header class=\"pageHeader\">\n  <h2>Overview</h2>\n\n  <button\n    type=\"button\"\n    [disabled]=\"isLoading()\"\n    (click)=\"load()\"\n  >\n    Refresh\n  </button>\n</header>\n\n@if (errorMessage()) {\n  <p class=\"message error\" role=\"alert\">\n    {{ errorMessage() }}\n  </p>\n}\n\n@if (isLoading()) {\n  <p>Loading</p>\n} @else {\n  <div class=\"summaryGrid\">\n    <a routerLink=\"/admin/sellers\">\n      <span>{{ pendingSellers() }}</span>\n      Sellers under review\n    </a>\n\n    <a routerLink=\"/admin/listings\">\n      <span>{{ pendingListings() }}</span>\n      Listings awaiting review\n    </a>\n\n    <a routerLink=\"/admin/catalog\">\n      <span>{{ draftProducts() }}</span>\n      Draft products\n    </a>\n  </div>\n}\n\n@if (profile(); as admin) {\n  <section>\n    <h3>Administrator</h3>\n\n    <dl>\n      <div>\n        <dt>Email</dt>\n        <dd>{{ admin.email }}</dd>\n      </div>\n      <div>\n        <dt>Roles</dt>\n        <dd>{{ admin.platformRoles.join(', ') }}</dd>\n      </div>\n    </dl>\n  </section>\n}\n", styles: [":host {\n  display: block;\n  min-width: 0;\n}\n\n.pageHeader,\n.sectionHeader,\n.pagination,\n.actions,\n.inlineFields {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n}\n\n.pageHeader,\n.sectionHeader,\n.pagination {\n  justify-content: space-between;\n}\n\nh2,\nh3,\nh4,\np {\n  overflow-wrap: anywhere;\n}\n\nh2,\nh3,\nh4 {\n  margin: 0;\n  font-weight: 600;\n}\n\nh2 {\n  font-size: 1.5rem;\n}\n\nh3 {\n  font-size: 1.05rem;\n}\n\nh4 {\n  font-size: 1rem;\n}\n\nsection {\n  padding-top: 1.5rem;\n  margin-top: 1.5rem;\n  border-top: 1px solid rgb(215, 215, 210);\n}\n\nform {\n  min-width: 0;\n}\n\n.formGrid,\n.filterForm,\n.variantFields {\n  display: grid;\n  grid-template-columns:\n    repeat(auto-fit, minmax(min(100%, 13rem), 1fr));\n  gap: 1rem;\n  align-items: end;\n}\n\n.filterForm {\n  margin-top: 1rem;\n}\n\nlabel {\n  display: grid;\n  min-width: 0;\n  gap: 0.4rem;\n  font-size: 0.8rem;\n  font-weight: 600;\n}\n\ninput,\nselect,\ntextarea,\nbutton,\n.buttonLink {\n  min-width: 0;\n  min-height: 2.4rem;\n  padding: 0.5rem 0.65rem;\n  color: rgb(24, 24, 24);\n  background: white;\n  border: 1px solid rgb(165, 165, 160);\n  border-radius: 0;\n  font: inherit;\n}\n\ninput,\nselect,\ntextarea {\n  width: 100%;\n}\n\ntextarea {\n  min-height: 6rem;\n  resize: vertical;\n}\n\nbutton,\n.buttonLink {\n  width: fit-content;\n  cursor: pointer;\n  text-decoration: none;\n}\n\nbutton:disabled {\n  cursor: default;\n  opacity: 0.55;\n}\n\n.message {\n  padding: 0.75rem;\n  border-left: 2px solid;\n}\n\n.error {\n  color: rgb(145, 25, 25);\n}\n\n.success {\n  color: rgb(30, 100, 55);\n}\n\n.records {\n  display: grid;\n  gap: 0;\n  margin-top: 1rem;\n  border-top: 1px solid rgb(215, 215, 210);\n}\n\n.record {\n  min-width: 0;\n  padding: 1rem 0;\n  border-bottom: 1px solid rgb(215, 215, 210);\n}\n\n.recordGrid {\n  display: grid;\n  grid-template-columns:\n    minmax(0, 1.4fr)\n    minmax(0, 1fr)\n    minmax(7rem, 0.6fr)\n    auto;\n  gap: 1rem;\n  align-items: start;\n}\n\n.recordGrid > *,\n.recordHeader > * {\n  min-width: 0;\n}\n\n.recordHeader {\n  display: flex;\n  justify-content: space-between;\n  align-items: start;\n  gap: 1rem;\n}\n\n.muted,\nsmall {\n  color: rgb(80, 80, 76);\n}\n\n.metaLabel {\n  display: block;\n  margin-bottom: 0.25rem;\n  color: rgb(80, 80, 76);\n  font-size: 0.75rem;\n}\n\n.variants {\n  display: grid;\n  gap: 0.5rem;\n  padding: 0;\n  margin: 0.8rem 0 0;\n  list-style: none;\n}\n\n.variants li {\n  padding-top: 0.5rem;\n  border-top: 1px solid rgb(230, 230, 225);\n  overflow-wrap: anywhere;\n}\n\n.pagination {\n  padding-top: 1rem;\n}\n\ndl {\n  margin: 1rem 0 0;\n  border-top: 1px solid rgb(215, 215, 210);\n}\n\ndl div {\n  display: grid;\n  grid-template-columns: minmax(7rem, 10rem) minmax(0, 1fr);\n  gap: 1rem;\n  padding: 0.7rem 0;\n  border-bottom: 1px solid rgb(220, 220, 215);\n}\n\ndt {\n  color: rgb(80, 80, 76);\n}\n\ndd {\n  min-width: 0;\n  margin: 0;\n  overflow-wrap: anywhere;\n}\n\n@media (max-width: 52rem) {\n  .recordGrid {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n\n@media (max-width: 36rem) {\n  .pageHeader,\n  .sectionHeader,\n  .recordHeader {\n    align-items: stretch;\n    flex-direction: column;\n  }\n\n  .recordGrid,\n  dl div {\n    grid-template-columns: 1fr;\n    gap: 0.4rem;\n  }\n}\n", ".summaryGrid {\n  display: grid;\n  grid-template-columns:\n    repeat(auto-fit, minmax(min(100%, 12rem), 1fr));\n  gap: 1rem;\n  margin-top: 1.5rem;\n}\n\n.summaryGrid a {\n  min-width: 0;\n  padding: 1rem;\n  color: rgb(24, 24, 24);\n  border: 1px solid rgb(190, 190, 185);\n  text-decoration: none;\n  overflow-wrap: anywhere;\n}\n\n.summaryGrid a:hover {\n  text-decoration: underline;\n}\n\n.summaryGrid span {\n  display: block;\n  margin-bottom: 0.5rem;\n  font-size: 1.6rem;\n  font-weight: 600;\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AdminOverview, { className: "AdminOverview", filePath: "src/app/admin/admin-overview/admin-overview.ts", lineNumber: 23 }); })();
