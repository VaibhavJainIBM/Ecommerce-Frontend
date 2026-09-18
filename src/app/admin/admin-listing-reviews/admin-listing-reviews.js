import { CurrencyPipe, DatePipe, } from '@angular/common';
import { Component, inject, signal, } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { AdminApi } from '../admin-api';
import { readAdminError } from '../admin-error';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
const _forTrack0 = ($index, $item) => $item.listingId;
function AdminListingReviews_For_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 7);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    i0.ɵɵproperty("value", item_r1);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r1);
} }
function AdminListingReviews_Conditional_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 9);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.errorMessage(), " ");
} }
function AdminListingReviews_Conditional_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 10);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.successMessage(), " ");
} }
function AdminListingReviews_Conditional_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1, "Loading");
    i0.ɵɵelementEnd();
} }
function AdminListingReviews_Conditional_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1, "No listings");
    i0.ɵɵelementEnd();
} }
function AdminListingReviews_Conditional_25_For_2_Conditional_23_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 2);
    i0.ɵɵlistener("click", function AdminListingReviews_Conditional_25_For_2_Conditional_23_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r3); const listing_r4 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.approve(listing_r4)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const listing_r4 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("disabled", ctx_r1.busyListingId() !== null);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.busyListingId() === listing_r4.listingId ? "Approving" : "Approve", " ");
} }
function AdminListingReviews_Conditional_25_For_2_Conditional_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const listing_r4 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(listing_r4.status);
} }
function AdminListingReviews_Conditional_25_For_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "article", 12)(1, "div")(2, "span", 14);
    i0.ɵɵtext(3, "Product");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "strong");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "small");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "div")(9, "span", 14);
    i0.ɵɵtext(10, "Seller");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(11);
    i0.ɵɵelementStart(12, "small");
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(14, "div")(15, "span", 14);
    i0.ɵɵtext(16, "Price");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(17);
    i0.ɵɵpipe(18, "currency");
    i0.ɵɵelementStart(19, "small");
    i0.ɵɵtext(20);
    i0.ɵɵpipe(21, "date");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(22, "div", 15);
    i0.ɵɵconditionalCreate(23, AdminListingReviews_Conditional_25_For_2_Conditional_23_Template, 2, 2, "button", 16)(24, AdminListingReviews_Conditional_25_For_2_Conditional_24_Template, 2, 1, "span");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const listing_r4 = ctx.$implicit;
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate2(" ", listing_r4.brandName, " ", listing_r4.productTitle, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2(" ", listing_r4.variantName, " ", listing_r4.variantCode, " ");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", listing_r4.sellerDisplayName, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(listing_r4.sellerSku);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(18, 9, listing_r4.priceAmount, listing_r4.currencyCode), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(21, 12, listing_r4.createdAtUtc, "mediumDate"), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵconditional(listing_r4.status === "PendingReview" ? 23 : 24);
} }
function AdminListingReviews_Conditional_25_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 13)(1, "button", 2);
    i0.ɵɵlistener("click", function AdminListingReviews_Conditional_25_Conditional_3_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.load(ctx_r1.page() - 1)); });
    i0.ɵɵtext(2, " Previous ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "button", 2);
    i0.ɵɵlistener("click", function AdminListingReviews_Conditional_25_Conditional_3_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.load(ctx_r1.page() + 1)); });
    i0.ɵɵtext(6, " Next ");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r1.page() <= 1);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate2("", ctx_r1.page(), " of ", ctx_r1.totalPages());
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r1.page() >= ctx_r1.totalPages());
} }
function AdminListingReviews_Conditional_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 11);
    i0.ɵɵrepeaterCreate(1, AdminListingReviews_Conditional_25_For_2_Template, 25, 15, "article", 12, _forTrack0);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(3, AdminListingReviews_Conditional_25_Conditional_3_Template, 7, 4, "div", 13);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r1.listings());
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r1.totalPages() > 1 ? 3 : -1);
} }
export class AdminListingReviews {
    api = inject(AdminApi);
    statuses = [
        'Draft',
        'PendingReview',
        'Active',
        'Paused',
        'Rejected',
        'Archived',
    ];
    search = new FormControl('', {
        nonNullable: true,
    });
    status = signal('PendingReview', /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "status" }] : /* istanbul ignore next */ []));
    listings = signal([], /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "listings" }] : /* istanbul ignore next */ []));
    page = signal(1, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "page" }] : /* istanbul ignore next */ []));
    totalPages = signal(0, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "totalPages" }] : /* istanbul ignore next */ []));
    totalCount = signal(0, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "totalCount" }] : /* istanbul ignore next */ []));
    isLoading = signal(false, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "isLoading" }] : /* istanbul ignore next */ []));
    busyListingId = signal(null, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "busyListingId" }] : /* istanbul ignore next */ []));
    errorMessage = signal('', /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "errorMessage" }] : /* istanbul ignore next */ []));
    successMessage = signal('', /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "successMessage" }] : /* istanbul ignore next */ []));
    ngOnInit() {
        this.load(1);
    }
    load(page) {
        this.isLoading.set(true);
        this.errorMessage.set('');
        this.api.getListings({
            search: this.search.value,
            status: this.status(),
            page,
            pageSize: 20,
        }).subscribe({
            next: (response) => {
                this.listings.set(response.items);
                this.page.set(response.page);
                this.totalPages.set(response.totalPages);
                this.totalCount.set(response.totalCount);
                this.isLoading.set(false);
            },
            error: (error) => {
                this.errorMessage.set(readAdminError(error, 'Could not load listings.'));
                this.isLoading.set(false);
            },
        });
    }
    changeStatus(event) {
        this.status.set(event.target.value);
        this.load(1);
    }
    approve(listing) {
        this.busyListingId.set(listing.listingId);
        this.errorMessage.set('');
        this.successMessage.set('');
        this.api.approveListing(listing).subscribe({
            next: () => {
                this.busyListingId.set(null);
                this.successMessage.set('Listing approved.');
                this.load(this.page());
            },
            error: (error) => {
                this.errorMessage.set(readAdminError(error, 'Could not approve the listing.'));
                this.busyListingId.set(null);
            },
        });
    }
    static ɵfac = function AdminListingReviews_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AdminListingReviews)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AdminListingReviews, selectors: [["app-admin-listing-reviews"]], decls: 26, vars: 8, consts: [[1, "pageHeader"], [1, "muted"], ["type", "button", 3, "click", "disabled"], [1, "filterForm", 3, "ngSubmit"], ["type", "search", "maxlength", "100", 3, "formControl"], [3, "change", "value"], ["value", ""], [3, "value"], ["type", "submit", 3, "disabled"], ["role", "alert", 1, "message", "error"], ["role", "status", 1, "message", "success"], [1, "records"], [1, "record", "recordGrid"], [1, "pagination"], [1, "metaLabel"], [1, "actions"], ["type", "button", 3, "disabled"]], template: function AdminListingReviews_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "header", 0)(1, "div")(2, "h2");
            i0.ɵɵtext(3, "Listing reviews");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "p", 1);
            i0.ɵɵtext(5);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(6, "button", 2);
            i0.ɵɵlistener("click", function AdminListingReviews_Template_button_click_6_listener() { return ctx.load(ctx.page()); });
            i0.ɵɵtext(7, " Refresh ");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(8, "form", 3);
            i0.ɵɵlistener("ngSubmit", function AdminListingReviews_Template_form_ngSubmit_8_listener() { return ctx.load(1); });
            i0.ɵɵelementStart(9, "label");
            i0.ɵɵtext(10, " Search ");
            i0.ɵɵelement(11, "input", 4);
            i0.ɵɵcontrolCreate();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "label");
            i0.ɵɵtext(13, " Status ");
            i0.ɵɵelementStart(14, "select", 5);
            i0.ɵɵlistener("change", function AdminListingReviews_Template_select_change_14_listener($event) { return ctx.changeStatus($event); });
            i0.ɵɵelementStart(15, "option", 6);
            i0.ɵɵtext(16, "All");
            i0.ɵɵelementEnd();
            i0.ɵɵrepeaterCreate(17, AdminListingReviews_For_18_Template, 2, 2, "option", 7, i0.ɵɵrepeaterTrackByIdentity);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(19, "button", 8);
            i0.ɵɵtext(20, " Search ");
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(21, AdminListingReviews_Conditional_21_Template, 2, 1, "p", 9);
            i0.ɵɵconditionalCreate(22, AdminListingReviews_Conditional_22_Template, 2, 1, "p", 10);
            i0.ɵɵconditionalCreate(23, AdminListingReviews_Conditional_23_Template, 2, 0, "p")(24, AdminListingReviews_Conditional_24_Template, 2, 0, "p")(25, AdminListingReviews_Conditional_25_Template, 4, 1);
        } if (rf & 2) {
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate1("", ctx.totalCount(), " listings");
            i0.ɵɵadvance();
            i0.ɵɵproperty("disabled", ctx.isLoading());
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("formControl", ctx.search);
            i0.ɵɵcontrol();
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("value", ctx.status());
            i0.ɵɵadvance(3);
            i0.ɵɵrepeater(ctx.statuses);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("disabled", ctx.isLoading());
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.errorMessage() ? 21 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.successMessage() ? 22 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.isLoading() ? 23 : ctx.listings().length === 0 ? 24 : 25);
        } }, dependencies: [ReactiveFormsModule, i1.ɵNgNoValidate, i1.NgSelectOption, i1.ɵNgSelectMultipleOption, i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.MaxLengthValidator, i1.FormControlDirective, CurrencyPipe, DatePipe], styles: ["[_nghost-%COMP%] {\n  display: block;\n  min-width: 0;\n}\n\n.pageHeader[_ngcontent-%COMP%], \n.sectionHeader[_ngcontent-%COMP%], \n.pagination[_ngcontent-%COMP%], \n.actions[_ngcontent-%COMP%], \n.inlineFields[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n}\n\n.pageHeader[_ngcontent-%COMP%], \n.sectionHeader[_ngcontent-%COMP%], \n.pagination[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n\nh2[_ngcontent-%COMP%], \nh3[_ngcontent-%COMP%], \nh4[_ngcontent-%COMP%], \np[_ngcontent-%COMP%] {\n  overflow-wrap: anywhere;\n}\n\nh2[_ngcontent-%COMP%], \nh3[_ngcontent-%COMP%], \nh4[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 600;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n\nh3[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n}\n\nh4[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n\nsection[_ngcontent-%COMP%] {\n  padding-top: 1.5rem;\n  margin-top: 1.5rem;\n  border-top: 1px solid rgb(215, 215, 210);\n}\n\nform[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n\n.formGrid[_ngcontent-%COMP%], \n.filterForm[_ngcontent-%COMP%], \n.variantFields[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns:\n    repeat(auto-fit, minmax(min(100%, 13rem), 1fr));\n  gap: 1rem;\n  align-items: end;\n}\n\n.filterForm[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n\nlabel[_ngcontent-%COMP%] {\n  display: grid;\n  min-width: 0;\n  gap: 0.4rem;\n  font-size: 0.8rem;\n  font-weight: 600;\n}\n\ninput[_ngcontent-%COMP%], \nselect[_ngcontent-%COMP%], \ntextarea[_ngcontent-%COMP%], \nbutton[_ngcontent-%COMP%], \n.buttonLink[_ngcontent-%COMP%] {\n  min-width: 0;\n  min-height: 2.4rem;\n  padding: 0.5rem 0.65rem;\n  color: rgb(24, 24, 24);\n  background: white;\n  border: 1px solid rgb(165, 165, 160);\n  border-radius: 0;\n  font: inherit;\n}\n\ninput[_ngcontent-%COMP%], \nselect[_ngcontent-%COMP%], \ntextarea[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  min-height: 6rem;\n  resize: vertical;\n}\n\nbutton[_ngcontent-%COMP%], \n.buttonLink[_ngcontent-%COMP%] {\n  width: fit-content;\n  cursor: pointer;\n  text-decoration: none;\n}\n\nbutton[_ngcontent-%COMP%]:disabled {\n  cursor: default;\n  opacity: 0.55;\n}\n\n.message[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  border-left: 2px solid;\n}\n\n.error[_ngcontent-%COMP%] {\n  color: rgb(145, 25, 25);\n}\n\n.success[_ngcontent-%COMP%] {\n  color: rgb(30, 100, 55);\n}\n\n.records[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0;\n  margin-top: 1rem;\n  border-top: 1px solid rgb(215, 215, 210);\n}\n\n.record[_ngcontent-%COMP%] {\n  min-width: 0;\n  padding: 1rem 0;\n  border-bottom: 1px solid rgb(215, 215, 210);\n}\n\n.recordGrid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns:\n    minmax(0, 1.4fr)\n    minmax(0, 1fr)\n    minmax(7rem, 0.6fr)\n    auto;\n  gap: 1rem;\n  align-items: start;\n}\n\n.recordGrid[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%], \n.recordHeader[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n\n.recordHeader[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: start;\n  gap: 1rem;\n}\n\n.muted[_ngcontent-%COMP%], \nsmall[_ngcontent-%COMP%] {\n  color: rgb(80, 80, 76);\n}\n\n.metaLabel[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 0.25rem;\n  color: rgb(80, 80, 76);\n  font-size: 0.75rem;\n}\n\n.variants[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.5rem;\n  padding: 0;\n  margin: 0.8rem 0 0;\n  list-style: none;\n}\n\n.variants[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding-top: 0.5rem;\n  border-top: 1px solid rgb(230, 230, 225);\n  overflow-wrap: anywhere;\n}\n\n.pagination[_ngcontent-%COMP%] {\n  padding-top: 1rem;\n}\n\ndl[_ngcontent-%COMP%] {\n  margin: 1rem 0 0;\n  border-top: 1px solid rgb(215, 215, 210);\n}\n\ndl[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(7rem, 10rem) minmax(0, 1fr);\n  gap: 1rem;\n  padding: 0.7rem 0;\n  border-bottom: 1px solid rgb(220, 220, 215);\n}\n\ndt[_ngcontent-%COMP%] {\n  color: rgb(80, 80, 76);\n}\n\ndd[_ngcontent-%COMP%] {\n  min-width: 0;\n  margin: 0;\n  overflow-wrap: anywhere;\n}\n\n@media (max-width: 52rem) {\n  .recordGrid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n\n@media (max-width: 36rem) {\n  .pageHeader[_ngcontent-%COMP%], \n   .sectionHeader[_ngcontent-%COMP%], \n   .recordHeader[_ngcontent-%COMP%] {\n    align-items: stretch;\n    flex-direction: column;\n  }\n\n  .recordGrid[_ngcontent-%COMP%], \n   dl[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 0.4rem;\n  }\n}", ".record[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 0.25rem;\n}\n\n.pageHeader[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.4rem 0 0;\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AdminListingReviews, [{
        type: Component,
        args: [{ selector: 'app-admin-listing-reviews', imports: [CurrencyPipe, DatePipe, ReactiveFormsModule], template: "<header class=\"pageHeader\">\n  <div>\n    <h2>Listing reviews</h2>\n    <p class=\"muted\">{{ totalCount() }} listings</p>\n  </div>\n\n  <button\n    type=\"button\"\n    [disabled]=\"isLoading()\"\n    (click)=\"load(page())\"\n  >\n    Refresh\n  </button>\n</header>\n\n<form\n  class=\"filterForm\"\n  (ngSubmit)=\"load(1)\"\n>\n  <label>\n    Search\n    <input\n      type=\"search\"\n      [formControl]=\"search\"\n      maxlength=\"100\"\n    />\n  </label>\n\n  <label>\n    Status\n    <select\n      [value]=\"status()\"\n      (change)=\"changeStatus($event)\"\n    >\n      <option value=\"\">All</option>\n\n      @for (item of statuses; track item) {\n        <option [value]=\"item\">{{ item }}</option>\n      }\n    </select>\n  </label>\n\n  <button type=\"submit\" [disabled]=\"isLoading()\">\n    Search\n  </button>\n</form>\n\n@if (errorMessage()) {\n  <p class=\"message error\" role=\"alert\">\n    {{ errorMessage() }}\n  </p>\n}\n\n@if (successMessage()) {\n  <p class=\"message success\" role=\"status\">\n    {{ successMessage() }}\n  </p>\n}\n\n@if (isLoading()) {\n  <p>Loading</p>\n} @else if (listings().length === 0) {\n  <p>No listings</p>\n} @else {\n  <div class=\"records\">\n    @for (\n      listing of listings();\n      track listing.listingId\n    ) {\n      <article class=\"record recordGrid\">\n        <div>\n          <span class=\"metaLabel\">Product</span>\n          <strong>\n            {{ listing.brandName }}\n            {{ listing.productTitle }}\n          </strong>\n          <small>\n            {{ listing.variantName }}\n            {{ listing.variantCode }}\n          </small>\n        </div>\n\n        <div>\n          <span class=\"metaLabel\">Seller</span>\n          {{ listing.sellerDisplayName }}\n          <small>{{ listing.sellerSku }}</small>\n        </div>\n\n        <div>\n          <span class=\"metaLabel\">Price</span>\n          {{\n            listing.priceAmount\n              | currency: listing.currencyCode\n          }}\n          <small>\n            {{ listing.createdAtUtc | date: 'mediumDate' }}\n          </small>\n        </div>\n\n        <div class=\"actions\">\n          @if (listing.status === 'PendingReview') {\n            <button\n              type=\"button\"\n              [disabled]=\"busyListingId() !== null\"\n              (click)=\"approve(listing)\"\n            >\n              {{\n                busyListingId() === listing.listingId\n                  ? 'Approving'\n                  : 'Approve'\n              }}\n            </button>\n          } @else {\n            <span>{{ listing.status }}</span>\n          }\n        </div>\n      </article>\n    }\n  </div>\n\n  @if (totalPages() > 1) {\n    <div class=\"pagination\">\n      <button\n        type=\"button\"\n        [disabled]=\"page() <= 1\"\n        (click)=\"load(page() - 1)\"\n      >\n        Previous\n      </button>\n\n      <span>{{ page() }} of {{ totalPages() }}</span>\n\n      <button\n        type=\"button\"\n        [disabled]=\"page() >= totalPages()\"\n        (click)=\"load(page() + 1)\"\n      >\n        Next\n      </button>\n    </div>\n  }\n}\n", styles: [":host {\n  display: block;\n  min-width: 0;\n}\n\n.pageHeader,\n.sectionHeader,\n.pagination,\n.actions,\n.inlineFields {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n}\n\n.pageHeader,\n.sectionHeader,\n.pagination {\n  justify-content: space-between;\n}\n\nh2,\nh3,\nh4,\np {\n  overflow-wrap: anywhere;\n}\n\nh2,\nh3,\nh4 {\n  margin: 0;\n  font-weight: 600;\n}\n\nh2 {\n  font-size: 1.5rem;\n}\n\nh3 {\n  font-size: 1.05rem;\n}\n\nh4 {\n  font-size: 1rem;\n}\n\nsection {\n  padding-top: 1.5rem;\n  margin-top: 1.5rem;\n  border-top: 1px solid rgb(215, 215, 210);\n}\n\nform {\n  min-width: 0;\n}\n\n.formGrid,\n.filterForm,\n.variantFields {\n  display: grid;\n  grid-template-columns:\n    repeat(auto-fit, minmax(min(100%, 13rem), 1fr));\n  gap: 1rem;\n  align-items: end;\n}\n\n.filterForm {\n  margin-top: 1rem;\n}\n\nlabel {\n  display: grid;\n  min-width: 0;\n  gap: 0.4rem;\n  font-size: 0.8rem;\n  font-weight: 600;\n}\n\ninput,\nselect,\ntextarea,\nbutton,\n.buttonLink {\n  min-width: 0;\n  min-height: 2.4rem;\n  padding: 0.5rem 0.65rem;\n  color: rgb(24, 24, 24);\n  background: white;\n  border: 1px solid rgb(165, 165, 160);\n  border-radius: 0;\n  font: inherit;\n}\n\ninput,\nselect,\ntextarea {\n  width: 100%;\n}\n\ntextarea {\n  min-height: 6rem;\n  resize: vertical;\n}\n\nbutton,\n.buttonLink {\n  width: fit-content;\n  cursor: pointer;\n  text-decoration: none;\n}\n\nbutton:disabled {\n  cursor: default;\n  opacity: 0.55;\n}\n\n.message {\n  padding: 0.75rem;\n  border-left: 2px solid;\n}\n\n.error {\n  color: rgb(145, 25, 25);\n}\n\n.success {\n  color: rgb(30, 100, 55);\n}\n\n.records {\n  display: grid;\n  gap: 0;\n  margin-top: 1rem;\n  border-top: 1px solid rgb(215, 215, 210);\n}\n\n.record {\n  min-width: 0;\n  padding: 1rem 0;\n  border-bottom: 1px solid rgb(215, 215, 210);\n}\n\n.recordGrid {\n  display: grid;\n  grid-template-columns:\n    minmax(0, 1.4fr)\n    minmax(0, 1fr)\n    minmax(7rem, 0.6fr)\n    auto;\n  gap: 1rem;\n  align-items: start;\n}\n\n.recordGrid > *,\n.recordHeader > * {\n  min-width: 0;\n}\n\n.recordHeader {\n  display: flex;\n  justify-content: space-between;\n  align-items: start;\n  gap: 1rem;\n}\n\n.muted,\nsmall {\n  color: rgb(80, 80, 76);\n}\n\n.metaLabel {\n  display: block;\n  margin-bottom: 0.25rem;\n  color: rgb(80, 80, 76);\n  font-size: 0.75rem;\n}\n\n.variants {\n  display: grid;\n  gap: 0.5rem;\n  padding: 0;\n  margin: 0.8rem 0 0;\n  list-style: none;\n}\n\n.variants li {\n  padding-top: 0.5rem;\n  border-top: 1px solid rgb(230, 230, 225);\n  overflow-wrap: anywhere;\n}\n\n.pagination {\n  padding-top: 1rem;\n}\n\ndl {\n  margin: 1rem 0 0;\n  border-top: 1px solid rgb(215, 215, 210);\n}\n\ndl div {\n  display: grid;\n  grid-template-columns: minmax(7rem, 10rem) minmax(0, 1fr);\n  gap: 1rem;\n  padding: 0.7rem 0;\n  border-bottom: 1px solid rgb(220, 220, 215);\n}\n\ndt {\n  color: rgb(80, 80, 76);\n}\n\ndd {\n  min-width: 0;\n  margin: 0;\n  overflow-wrap: anywhere;\n}\n\n@media (max-width: 52rem) {\n  .recordGrid {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n\n@media (max-width: 36rem) {\n  .pageHeader,\n  .sectionHeader,\n  .recordHeader {\n    align-items: stretch;\n    flex-direction: column;\n  }\n\n  .recordGrid,\n  dl div {\n    grid-template-columns: 1fr;\n    gap: 0.4rem;\n  }\n}\n", ".record small {\n  display: block;\n  margin-top: 0.25rem;\n}\n\n.pageHeader p {\n  margin: 0.4rem 0 0;\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AdminListingReviews, { className: "AdminListingReviews", filePath: "src/app/admin/admin-listing-reviews/admin-listing-reviews.ts", lineNumber: 26 }); })();
