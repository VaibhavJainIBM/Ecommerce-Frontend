import { CurrencyPipe, DatePipe, } from '@angular/common';
import { Component, inject, signal, } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators, } from '@angular/forms';
import { finalize, } from 'rxjs';
import { ProductApi } from '../../catalog/product-api';
import { SellerApi } from '../seller-api';
import { SellerContext } from '../seller-context';
import { getSellerError } from '../seller-error';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
const _forTrack0 = ($index, $item) => $item.productId;
const _forTrack1 = ($index, $item) => $item.variantId;
const _forTrack2 = ($index, $item) => $item.listingId;
function SellerListings_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 2);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.errorMessage(), " ");
} }
function SellerListings_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 3);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.successMessage(), " ");
} }
function SellerListings_Conditional_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 2);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.catalogError(), " ");
} }
function SellerListings_Conditional_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1, "Loading");
    i0.ɵɵelementEnd();
} }
function SellerListings_Conditional_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1, "No products");
    i0.ɵɵelementEnd();
} }
function SellerListings_Conditional_19_For_14_For_1_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr")(1, "td", 19);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td", 20);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "td", 21);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "td", 22)(8, "button", 23);
    i0.ɵɵlistener("click", function SellerListings_Conditional_19_For_14_For_1_Template_button_click_8_listener() { const variant_r3 = i0.ɵɵrestoreView(_r2).$implicit; const product_r4 = i0.ɵɵnextContext().$implicit; const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.selectVariant(product_r4, variant_r3)); });
    i0.ɵɵtext(9, " Select ");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const variant_r3 = ctx.$implicit;
    const product_r4 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2(" ", product_r4.brandName, " ", product_r4.title, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(variant_r3.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(variant_r3.variantCode);
} }
function SellerListings_Conditional_19_For_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵrepeaterCreate(0, SellerListings_Conditional_19_For_14_For_1_Template, 10, 4, "tr", null, _forTrack1);
} if (rf & 2) {
    const product_r4 = ctx.$implicit;
    i0.ɵɵrepeater(product_r4.variants);
} }
function SellerListings_Conditional_19_Conditional_15_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 18)(1, "button", 1);
    i0.ɵɵlistener("click", function SellerListings_Conditional_19_Conditional_15_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r5); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.loadCatalog(ctx_r0.catalogPage() - 1)); });
    i0.ɵɵtext(2, " Previous ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "button", 1);
    i0.ɵɵlistener("click", function SellerListings_Conditional_19_Conditional_15_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r5); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.loadCatalog(ctx_r0.catalogPage() + 1)); });
    i0.ɵɵtext(6, " Next ");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r0.catalogPage() <= 1);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate2(" ", ctx_r0.catalogPage(), " of ", ctx_r0.catalogTotalPages(), " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r0.catalogPage() >= ctx_r0.catalogTotalPages());
} }
function SellerListings_Conditional_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 17)(1, "table")(2, "thead")(3, "tr")(4, "th");
    i0.ɵɵtext(5, "Product");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "th");
    i0.ɵɵtext(7, "Variant");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "th");
    i0.ɵɵtext(9, "Code");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "th");
    i0.ɵɵtext(11, "Action");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(12, "tbody");
    i0.ɵɵrepeaterCreate(13, SellerListings_Conditional_19_For_14_Template, 2, 0, null, null, _forTrack0);
    i0.ɵɵelementEnd()()();
    i0.ɵɵconditionalCreate(15, SellerListings_Conditional_19_Conditional_15_Template, 7, 4, "div", 18);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(13);
    i0.ɵɵrepeater(ctx_r0.catalogProducts());
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r0.catalogTotalPages() > 1 ? 15 : -1);
} }
function SellerListings_Conditional_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 7);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const selected_r6 = ctx;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate4(" ", selected_r6.product.brandName, " ", selected_r6.product.title, " ", selected_r6.variant.name, " ", selected_r6.variant.variantCode, " ");
} }
function SellerListings_Conditional_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1, "Select a catalog variant");
    i0.ɵɵelementEnd();
} }
function SellerListings_For_48_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 16);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const status_r7 = ctx.$implicit;
    i0.ɵɵproperty("value", status_r7);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", status_r7, " ");
} }
function SellerListings_Conditional_49_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1, "Loading");
    i0.ɵɵelementEnd();
} }
function SellerListings_Conditional_50_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1, "No listings");
    i0.ɵɵelementEnd();
} }
function SellerListings_Conditional_51_For_16_Conditional_10_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 27)(1, "input", 31);
    i0.ɵɵlistener("input", function SellerListings_Conditional_51_For_16_Conditional_10_Template_input_input_1_listener($event) { i0.ɵɵrestoreView(_r9); const listing_r10 = i0.ɵɵnextContext().$implicit; const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.changePriceDraft(listing_r10, "price", $event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "input", 32);
    i0.ɵɵlistener("input", function SellerListings_Conditional_51_For_16_Conditional_10_Template_input_input_2_listener($event) { i0.ɵɵrestoreView(_r9); const listing_r10 = i0.ɵɵnextContext().$implicit; const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.changePriceDraft(listing_r10, "currency", $event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 1);
    i0.ɵɵlistener("click", function SellerListings_Conditional_51_For_16_Conditional_10_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r9); const listing_r10 = i0.ɵɵnextContext().$implicit; const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.updatePrice(listing_r10)); });
    i0.ɵɵtext(4, " Save ");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const listing_r10 = i0.ɵɵnextContext().$implicit;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("value", listing_r10.priceAmount);
    i0.ɵɵadvance();
    i0.ɵɵproperty("value", listing_r10.currencyCode);
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r0.busyListingId() !== null);
} }
function SellerListings_Conditional_51_For_16_Conditional_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
    i0.ɵɵpipe(1, "currency");
} if (rf & 2) {
    const listing_r10 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(1, 1, listing_r10.priceAmount, listing_r10.currencyCode), " ");
} }
function SellerListings_Conditional_51_For_16_Conditional_16_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 1);
    i0.ɵɵlistener("click", function SellerListings_Conditional_51_For_16_Conditional_16_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r11); const listing_r10 = i0.ɵɵnextContext().$implicit; const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.submitForReview(listing_r10)); });
    i0.ɵɵtext(1, " Submit ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("disabled", ctx_r0.busyListingId() !== null);
} }
function SellerListings_Conditional_51_For_16_Conditional_17_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 1);
    i0.ɵɵlistener("click", function SellerListings_Conditional_51_For_16_Conditional_17_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r12); const listing_r10 = i0.ɵɵnextContext().$implicit; const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.archiveListing(listing_r10)); });
    i0.ɵɵtext(1, " Archive ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("disabled", ctx_r0.busyListingId() !== null);
} }
function SellerListings_Conditional_51_For_16_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr")(1, "td", 19);
    i0.ɵɵtext(2);
    i0.ɵɵelementStart(3, "small");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "td", 24);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "td", 25);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "td", 26);
    i0.ɵɵconditionalCreate(10, SellerListings_Conditional_51_For_16_Conditional_10_Template, 5, 3, "div", 27)(11, SellerListings_Conditional_51_For_16_Conditional_11_Template, 2, 4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "td", 28)(13, "div", 29)(14, "button", 23);
    i0.ɵɵlistener("click", function SellerListings_Conditional_51_For_16_Template_button_click_14_listener() { const listing_r10 = i0.ɵɵrestoreView(_r8).$implicit; const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.loadDetails(listing_r10.listingId)); });
    i0.ɵɵtext(15, " Details ");
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(16, SellerListings_Conditional_51_For_16_Conditional_16_Template, 2, 1, "button", 30);
    i0.ɵɵconditionalCreate(17, SellerListings_Conditional_51_For_16_Conditional_17_Template, 2, 1, "button", 30);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const listing_r10 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", listing_r10.productTitle, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", listing_r10.variantName, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(listing_r10.sellerSku);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(listing_r10.status);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r0.canEditPrice(listing_r10) ? 10 : 11);
    i0.ɵɵadvance(6);
    i0.ɵɵconditional(ctx_r0.canSubmit(listing_r10) ? 16 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r0.canArchive(listing_r10) ? 17 : -1);
} }
function SellerListings_Conditional_51_Conditional_17_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 18)(1, "button", 1);
    i0.ɵɵlistener("click", function SellerListings_Conditional_51_Conditional_17_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r13); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.loadListings(ctx_r0.page() - 1)); });
    i0.ɵɵtext(2, " Previous ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "button", 1);
    i0.ɵɵlistener("click", function SellerListings_Conditional_51_Conditional_17_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r13); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.loadListings(ctx_r0.page() + 1)); });
    i0.ɵɵtext(6, " Next ");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r0.page() <= 1);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate2(" ", ctx_r0.page(), " of ", ctx_r0.totalPages(), " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r0.page() >= ctx_r0.totalPages());
} }
function SellerListings_Conditional_51_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 17)(1, "table")(2, "thead")(3, "tr")(4, "th");
    i0.ɵɵtext(5, "Product");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "th");
    i0.ɵɵtext(7, "SKU");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "th");
    i0.ɵɵtext(9, "Status");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "th");
    i0.ɵɵtext(11, "Price");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "th");
    i0.ɵɵtext(13, "Actions");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(14, "tbody");
    i0.ɵɵrepeaterCreate(15, SellerListings_Conditional_51_For_16_Template, 18, 7, "tr", null, _forTrack2);
    i0.ɵɵelementEnd()()();
    i0.ɵɵconditionalCreate(17, SellerListings_Conditional_51_Conditional_17_Template, 7, 4, "div", 18);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(15);
    i0.ɵɵrepeater(ctx_r0.listings());
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r0.totalPages() > 1 ? 17 : -1);
} }
function SellerListings_Conditional_52_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section")(1, "div", 13)(2, "h3");
    i0.ɵɵtext(3, "Listing details");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "button", 23);
    i0.ɵɵlistener("click", function SellerListings_Conditional_52_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r14); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.selectedListing.set(null)); });
    i0.ɵɵtext(5, " Close ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "dl")(7, "div")(8, "dt");
    i0.ɵɵtext(9, "Product");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "dd");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "div")(13, "dt");
    i0.ɵɵtext(14, "Variant");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "dd");
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(17, "div")(18, "dt");
    i0.ɵɵtext(19, "Code");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "dd");
    i0.ɵɵtext(21);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(22, "div")(23, "dt");
    i0.ɵɵtext(24, "SKU");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "dd");
    i0.ɵɵtext(26);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(27, "div")(28, "dt");
    i0.ɵɵtext(29, "Status");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "dd");
    i0.ɵɵtext(31);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(32, "div")(33, "dt");
    i0.ɵɵtext(34, "Created");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(35, "dd");
    i0.ɵɵtext(36);
    i0.ɵɵpipe(37, "date");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const listing_r15 = ctx;
    i0.ɵɵadvance(11);
    i0.ɵɵtextInterpolate(listing_r15.productTitle);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(listing_r15.variantName);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(listing_r15.variantCode);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(listing_r15.sellerSku);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(listing_r15.status);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(37, 6, listing_r15.createdAtUtc, "medium"), " ");
} }
export class SellerListings {
    sellerApi = inject(SellerApi);
    productApi = inject(ProductApi);
    sellerContext = inject(SellerContext);
    listings = signal([], /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "listings" }] : /* istanbul ignore next */ []));
    selectedListing = signal(null, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "selectedListing" }] : /* istanbul ignore next */ []));
    catalogProducts = signal([], /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "catalogProducts" }] : /* istanbul ignore next */ []));
    selectedCatalogVariant = signal(null, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "selectedCatalogVariant" }] : /* istanbul ignore next */ []));
    statusFilter = signal('', /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "statusFilter" }] : /* istanbul ignore next */ []));
    page = signal(1, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "page" }] : /* istanbul ignore next */ []));
    totalPages = signal(0, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "totalPages" }] : /* istanbul ignore next */ []));
    totalCount = signal(0, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "totalCount" }] : /* istanbul ignore next */ []));
    catalogPage = signal(1, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "catalogPage" }] : /* istanbul ignore next */ []));
    catalogTotalPages = signal(0, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "catalogTotalPages" }] : /* istanbul ignore next */ []));
    catalogTotalCount = signal(0, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "catalogTotalCount" }] : /* istanbul ignore next */ []));
    isLoading = signal(false, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "isLoading" }] : /* istanbul ignore next */ []));
    isCatalogLoading = signal(false, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "isCatalogLoading" }] : /* istanbul ignore next */ []));
    isCreating = signal(false, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "isCreating" }] : /* istanbul ignore next */ []));
    isLoadingDetails = signal(false, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "isLoadingDetails" }] : /* istanbul ignore next */ []));
    busyListingId = signal(null, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "busyListingId" }] : /* istanbul ignore next */ []));
    priceDrafts = new Map();
    errorMessage = signal('', /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "errorMessage" }] : /* istanbul ignore next */ []));
    catalogError = signal('', /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "catalogError" }] : /* istanbul ignore next */ []));
    successMessage = signal('', /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "successMessage" }] : /* istanbul ignore next */ []));
    statusOptions = [
        'Draft',
        'PendingReview',
        'Active',
        'Paused',
        'Rejected',
        'Archived',
    ];
    catalogSearch = new FormControl('', {
        nonNullable: true,
        validators: [Validators.maxLength(100)],
    });
    createForm = new FormGroup({
        productVariantId: new FormControl('', {
            nonNullable: true,
            validators: [Validators.required],
        }),
        sellerSku: new FormControl('', {
            nonNullable: true,
            validators: [
                Validators.required,
                Validators.maxLength(64),
                Validators.pattern(/^[A-Za-z0-9._-]+$/),
            ],
        }),
        priceAmount: new FormControl(0, {
            nonNullable: true,
            validators: [
                Validators.required,
                Validators.min(0.01),
                Validators.pattern(/^\d+(\.\d{1,2})?$/),
            ],
        }),
        currencyCode: new FormControl('INR', {
            nonNullable: true,
            validators: [
                Validators.required,
                Validators.pattern(/^[A-Za-z]{3}$/),
            ],
        }),
    });
    ngOnInit() {
        if (!this.sellerContext.canManage()) {
            this.errorMessage.set('Owner or Manager access is required.');
            return;
        }
        this.loadCatalog();
        this.loadListings();
    }
    get sellerId() {
        const seller = this.sellerContext.selected();
        if (!seller) {
            throw new Error('No seller is selected.');
        }
        return seller.sellerId;
    }
    loadCatalog(page = 1) {
        if (this.catalogSearch.invalid || page < 1) {
            this.catalogSearch.markAsTouched();
            return;
        }
        this.isCatalogLoading.set(true);
        this.catalogError.set('');
        this.productApi
            .searchProducts(this.catalogSearch.value, page, 10)
            .pipe(finalize(() => this.isCatalogLoading.set(false)))
            .subscribe({
            next: (response) => {
                this.catalogProducts.set(response.items);
                this.catalogPage.set(response.page);
                this.catalogTotalPages.set(response.totalPages);
                this.catalogTotalCount.set(response.totalCount);
            },
            error: (error) => {
                this.catalogError.set(getSellerError(error, 'Could not load the catalog.'));
            },
        });
    }
    selectVariant(product, variant) {
        this.selectedCatalogVariant.set({
            product,
            variant,
        });
        this.createForm.controls.productVariantId
            .setValue(variant.variantId);
        const skuControl = this.createForm.controls.sellerSku;
        if (!skuControl.value.trim()) {
            skuControl.setValue(this.makeSku(product, variant));
        }
    }
    makeSku(product, variant) {
        return [
            product.brandName,
            product.title,
            variant.variantCode,
        ]
            .join('_')
            .toUpperCase()
            .replace(/[^A-Z0-9._-]+/g, '_')
            .replace(/_+/g, '_')
            .replace(/^_+|_+$/g, '')
            .slice(0, 64);
    }
    loadListings(page = 1) {
        if (page < 1) {
            return;
        }
        this.isLoading.set(true);
        this.errorMessage.set('');
        this.sellerApi
            .getListings(this.sellerId, {
            page,
            pageSize: 20,
            status: this.statusFilter() || undefined,
        })
            .pipe(finalize(() => this.isLoading.set(false)))
            .subscribe({
            next: (response) => {
                this.listings.set(response.items);
                this.page.set(response.page);
                this.totalPages.set(response.totalPages);
                this.totalCount.set(response.totalCount);
            },
            error: (error) => {
                this.errorMessage.set(getSellerError(error, 'Could not load listings.'));
            },
        });
    }
    changeStatusFilter(event) {
        const select = event.target;
        this.statusFilter.set(select.value);
        this.loadListings(1);
    }
    createListing() {
        this.errorMessage.set('');
        this.successMessage.set('');
        if (this.createForm.invalid ||
            !this.canCreateListing()) {
            this.createForm.markAllAsTouched();
            this.errorMessage.set('Select a variant and complete the form.');
            return;
        }
        const value = this.createForm.getRawValue();
        this.isCreating.set(true);
        this.sellerApi
            .createListing(this.sellerId, {
            productVariantId: value.productVariantId,
            sellerSku: value.sellerSku.trim(),
            priceAmount: value.priceAmount,
            currencyCode: value.currencyCode.trim().toUpperCase(),
        })
            .pipe(finalize(() => this.isCreating.set(false)))
            .subscribe({
            next: (listing) => {
                this.selectedListing.set(listing);
                this.selectedCatalogVariant.set(null);
                this.successMessage.set('Draft listing created.');
                this.createForm.reset({
                    productVariantId: '',
                    sellerSku: '',
                    priceAmount: 0,
                    currencyCode: 'INR',
                });
                this.loadListings(1);
            },
            error: (error) => {
                this.errorMessage.set(getSellerError(error, 'Could not create the listing.'));
            },
        });
    }
    loadDetails(listingId) {
        this.isLoadingDetails.set(true);
        this.errorMessage.set('');
        this.sellerApi
            .getListing(this.sellerId, listingId)
            .pipe(finalize(() => this.isLoadingDetails.set(false)))
            .subscribe({
            next: (listing) => {
                this.selectedListing.set(listing);
            },
            error: (error) => {
                this.errorMessage.set(getSellerError(error, 'Could not load the listing.'));
            },
        });
    }
    updatePrice(listing) {
        const draft = this.priceDrafts.get(listing.listingId);
        const priceText = draft?.price ?? String(listing.priceAmount);
        const currencyText = draft?.currency ?? listing.currencyCode;
        const priceValue = priceText.trim();
        const priceAmount = Number(priceValue);
        const currency = currencyText.trim().toUpperCase();
        if (!/^\d+(\.\d{1,2})?$/.test(priceValue) ||
            !Number.isFinite(priceAmount) ||
            priceAmount <= 0) {
            this.errorMessage.set('Enter a valid price.');
            return;
        }
        if (!/^[A-Z]{3}$/.test(currency)) {
            this.errorMessage.set('Enter a three letter currency code.');
            return;
        }
        this.runListingAction(listing.listingId, this.sellerApi.updateListingPrice(this.sellerId, listing.listingId, {
            priceAmount,
            currencyCode: currency,
            rowVersion: listing.rowVersion,
        }), 'Price updated.');
    }
    changePriceDraft(listing, field, event) {
        const value = event.target.value;
        const current = this.priceDrafts.get(listing.listingId) ?? {
            price: String(listing.priceAmount),
            currency: listing.currencyCode,
        };
        this.priceDrafts.set(listing.listingId, {
            ...current,
            [field]: value,
        });
    }
    submitForReview(listing) {
        this.runListingAction(listing.listingId, this.sellerApi.submitListingForReview(this.sellerId, listing.listingId, { rowVersion: listing.rowVersion }), 'Listing submitted for review.');
    }
    archiveListing(listing) {
        if (!window.confirm('Archive this listing?')) {
            return;
        }
        this.runListingAction(listing.listingId, this.sellerApi.archiveListing(this.sellerId, listing.listingId, { rowVersion: listing.rowVersion }), 'Listing archived.');
    }
    canCreateListing() {
        const status = this.sellerContext.selected()?.sellerStatus;
        return (this.sellerContext.canManage() &&
            (status === 'PendingVerification' ||
                status === 'UnderReview' ||
                status === 'Rejected' ||
                status === 'Active'));
    }
    canEditPrice(listing) {
        return (this.canCreateListing() &&
            (listing.status === 'Draft' ||
                listing.status === 'Rejected' ||
                listing.status === 'Paused' ||
                listing.status === 'Active'));
    }
    canSubmit(listing) {
        return (this.sellerContext.canManage() &&
            this.sellerContext.selected()
                ?.sellerStatus === 'Active' &&
            (listing.status === 'Draft' ||
                listing.status === 'Rejected'));
    }
    canArchive(listing) {
        return listing.status !== 'Archived';
    }
    runListingAction(listingId, request, message) {
        this.busyListingId.set(listingId);
        this.errorMessage.set('');
        this.successMessage.set('');
        request
            .pipe(finalize(() => this.busyListingId.set(null)))
            .subscribe({
            next: (updated) => {
                this.replaceListing(updated);
                this.successMessage.set(message);
                this.loadListings(this.page());
            },
            error: (error) => {
                this.errorMessage.set(getSellerError(error, 'Could not update the listing.'));
                if (error.status === 409) {
                    this.loadListings(this.page());
                }
            },
        });
    }
    replaceListing(updated) {
        this.listings.update((items) => items.map((item) => item.listingId === updated.listingId
            ? updated
            : item));
        this.selectedListing.update((current) => current?.listingId === updated.listingId
            ? updated
            : current);
    }
    static ɵfac = function SellerListings_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SellerListings)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SellerListings, selectors: [["app-seller-listings"]], decls: 53, vars: 14, consts: [[1, "pageHeader"], ["type", "button", 3, "click", "disabled"], ["role", "alert", 1, "message", "error"], ["role", "status", 1, "message", "success"], [1, "searchForm", 3, "ngSubmit"], ["type", "search", "maxlength", "100", 3, "formControl"], ["type", "submit", 3, "disabled"], [1, "selection"], [1, "createForm", 3, "ngSubmit", "formGroup"], ["type", "hidden", "formControlName", "productVariantId"], ["type", "text", "formControlName", "sellerSku", "maxlength", "64"], ["type", "number", "formControlName", "priceAmount", "min", "0.01", "step", "0.01"], ["type", "text", "formControlName", "currencyCode", "maxlength", "3"], [1, "sectionHeader"], [3, "change", "value"], ["value", ""], [3, "value"], [1, "tableWrap"], [1, "pagination"], ["data-label", "Product"], ["data-label", "Variant"], ["data-label", "Code"], ["data-label", "Action"], ["type", "button", 3, "click"], ["data-label", "SKU"], ["data-label", "Status"], ["data-label", "Price"], [1, "priceEditor"], ["data-label", "Actions"], [1, "actions"], ["type", "button", 3, "disabled"], ["type", "number", "min", "0.01", "step", "0.01", 3, "input", "value"], ["type", "text", "maxlength", "3", 3, "input", "value"]], template: function SellerListings_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "header", 0)(1, "h2");
            i0.ɵɵtext(2, "Listings");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "button", 1);
            i0.ɵɵlistener("click", function SellerListings_Template_button_click_3_listener() { return ctx.loadListings(ctx.page()); });
            i0.ɵɵtext(4, " Refresh ");
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(5, SellerListings_Conditional_5_Template, 2, 1, "p", 2);
            i0.ɵɵconditionalCreate(6, SellerListings_Conditional_6_Template, 2, 1, "p", 3);
            i0.ɵɵelementStart(7, "section")(8, "h3");
            i0.ɵɵtext(9, "Catalog");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "form", 4);
            i0.ɵɵlistener("ngSubmit", function SellerListings_Template_form_ngSubmit_10_listener() { return ctx.loadCatalog(1); });
            i0.ɵɵelementStart(11, "label");
            i0.ɵɵtext(12, " Search ");
            i0.ɵɵelement(13, "input", 5);
            i0.ɵɵcontrolCreate();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "button", 6);
            i0.ɵɵtext(15, " Search ");
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(16, SellerListings_Conditional_16_Template, 2, 1, "p", 2);
            i0.ɵɵconditionalCreate(17, SellerListings_Conditional_17_Template, 2, 0, "p")(18, SellerListings_Conditional_18_Template, 2, 0, "p")(19, SellerListings_Conditional_19_Template, 16, 1);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(20, "section")(21, "h3");
            i0.ɵɵtext(22, "Create listing");
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(23, SellerListings_Conditional_23_Template, 2, 4, "p", 7)(24, SellerListings_Conditional_24_Template, 2, 0, "p");
            i0.ɵɵelementStart(25, "form", 8);
            i0.ɵɵlistener("ngSubmit", function SellerListings_Template_form_ngSubmit_25_listener() { return ctx.createListing(); });
            i0.ɵɵelement(26, "input", 9);
            i0.ɵɵcontrolCreate();
            i0.ɵɵelementStart(27, "label");
            i0.ɵɵtext(28, " Seller SKU ");
            i0.ɵɵelement(29, "input", 10);
            i0.ɵɵcontrolCreate();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(30, "label");
            i0.ɵɵtext(31, " Price ");
            i0.ɵɵelement(32, "input", 11);
            i0.ɵɵcontrolCreate();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(33, "label");
            i0.ɵɵtext(34, " Currency ");
            i0.ɵɵelement(35, "input", 12);
            i0.ɵɵcontrolCreate();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(36, "button", 6);
            i0.ɵɵtext(37);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(38, "section")(39, "div", 13)(40, "h3");
            i0.ɵɵtext(41, "Seller listings");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(42, "label");
            i0.ɵɵtext(43, " Status ");
            i0.ɵɵelementStart(44, "select", 14);
            i0.ɵɵlistener("change", function SellerListings_Template_select_change_44_listener($event) { return ctx.changeStatusFilter($event); });
            i0.ɵɵelementStart(45, "option", 15);
            i0.ɵɵtext(46, "All");
            i0.ɵɵelementEnd();
            i0.ɵɵrepeaterCreate(47, SellerListings_For_48_Template, 2, 2, "option", 16, i0.ɵɵrepeaterTrackByIdentity);
            i0.ɵɵelementEnd()()();
            i0.ɵɵconditionalCreate(49, SellerListings_Conditional_49_Template, 2, 0, "p")(50, SellerListings_Conditional_50_Template, 2, 0, "p")(51, SellerListings_Conditional_51_Template, 18, 1);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(52, SellerListings_Conditional_52_Template, 38, 9, "section");
        } if (rf & 2) {
            let tmp_8_0;
            let tmp_19_0;
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("disabled", ctx.isLoading());
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.errorMessage() ? 5 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.successMessage() ? 6 : -1);
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("formControl", ctx.catalogSearch);
            i0.ɵɵcontrol();
            i0.ɵɵadvance();
            i0.ɵɵproperty("disabled", ctx.isCatalogLoading());
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.catalogError() ? 16 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.isCatalogLoading() ? 17 : ctx.catalogProducts().length === 0 ? 18 : 19);
            i0.ɵɵadvance(6);
            i0.ɵɵconditional((tmp_8_0 = ctx.selectedCatalogVariant()) ? 23 : 24, tmp_8_0);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("formGroup", ctx.createForm);
            i0.ɵɵadvance();
            i0.ɵɵcontrol();
            i0.ɵɵadvance(3);
            i0.ɵɵcontrol();
            i0.ɵɵadvance(3);
            i0.ɵɵcontrol();
            i0.ɵɵadvance(3);
            i0.ɵɵcontrol();
            i0.ɵɵadvance();
            i0.ɵɵproperty("disabled", ctx.isCreating() || !ctx.canCreateListing());
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1(" ", ctx.isCreating() ? "Creating" : "Create", " ");
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("value", ctx.statusFilter());
            i0.ɵɵadvance(3);
            i0.ɵɵrepeater(ctx.statusOptions);
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.isLoading() ? 49 : ctx.listings().length === 0 ? 50 : 51);
            i0.ɵɵadvance(3);
            i0.ɵɵconditional((tmp_19_0 = ctx.selectedListing()) ? 52 : -1, tmp_19_0);
        } }, dependencies: [ReactiveFormsModule, i1.ɵNgNoValidate, i1.NgSelectOption, i1.ɵNgSelectMultipleOption, i1.DefaultValueAccessor, i1.NumberValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.MaxLengthValidator, i1.MinValidator, i1.FormControlDirective, i1.FormGroupDirective, i1.FormControlName, CurrencyPipe,
            DatePipe], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.pageHeader[_ngcontent-%COMP%], \n.sectionHeader[_ngcontent-%COMP%], \n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n}\n\nh2[_ngcontent-%COMP%], \nh3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 600;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n\nh3[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n}\n\nsection[_ngcontent-%COMP%] {\n  padding-top: 1.5rem;\n  margin-top: 1.5rem;\n  border-top: 1px solid rgb(215, 215, 210);\n}\n\n.searchForm[_ngcontent-%COMP%], \n.createForm[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1rem;\n  align-items: end;\n  margin-top: 1rem;\n}\n\n.searchForm[_ngcontent-%COMP%] {\n  grid-template-columns: 1fr auto;\n}\n\n.createForm[_ngcontent-%COMP%] {\n  grid-template-columns: 1fr 9rem 7rem auto;\n}\n\nlabel[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.4rem;\n  font-size: 0.8rem;\n  font-weight: 600;\n}\n\ninput[_ngcontent-%COMP%], \nselect[_ngcontent-%COMP%], \nbutton[_ngcontent-%COMP%] {\n  min-height: 2.4rem;\n  padding: 0.5rem 0.65rem;\n  color: rgb(24, 24, 24);\n  background: white;\n  border: 1px solid rgb(165, 165, 160);\n  border-radius: 0;\n  font: inherit;\n}\n\nbutton[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\nbutton[_ngcontent-%COMP%]:disabled {\n  cursor: default;\n  opacity: 0.55;\n}\n\n.selection[_ngcontent-%COMP%] {\n  padding: 0.7rem;\n  border: 1px solid rgb(165, 165, 160);\n}\n\n.message[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  border-left: 2px solid;\n}\n\n.error[_ngcontent-%COMP%] {\n  color: rgb(145, 25, 25);\n}\n\n.success[_ngcontent-%COMP%] {\n  color: rgb(30, 100, 55);\n}\n\n.tableWrap[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  min-width: 0;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n\nth[_ngcontent-%COMP%], \ntd[_ngcontent-%COMP%] {\n  padding: 0.7rem;\n  border-bottom: 1px solid rgb(220, 220, 215);\n  text-align: left;\n  vertical-align: top;\n}\n\nth[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n}\n\ntd[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 0.25rem;\n  color: rgb(85, 85, 80);\n}\n\n.priceEditor[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 7rem 4rem auto;\n  gap: 0.4rem;\n}\n\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.4rem;\n}\n\n.pagination[_ngcontent-%COMP%] {\n  padding-top: 1rem;\n}\n\ndl[_ngcontent-%COMP%] {\n  border-top: 1px solid rgb(215, 215, 210);\n}\n\ndl[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 10rem 1fr;\n  gap: 1rem;\n  padding: 0.7rem 0;\n  border-bottom: 1px solid rgb(220, 220, 215);\n}\n\ndt[_ngcontent-%COMP%] {\n  color: rgb(80, 80, 76);\n}\n\ndd[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n@media (max-width: 56rem) {\n  .createForm[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n\n@media (max-width: 40rem) {\n  .searchForm[_ngcontent-%COMP%], \n   .createForm[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n\n  .sectionHeader[_ngcontent-%COMP%] {\n    align-items: start;\n    flex-direction: column;\n  }\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SellerListings, [{
        type: Component,
        args: [{ selector: 'app-seller-listings', imports: [
                    ReactiveFormsModule,
                    CurrencyPipe,
                    DatePipe,
                ], template: "<header class=\"pageHeader\">\n  <h2>Listings</h2>\n\n  <button\n    type=\"button\"\n    [disabled]=\"isLoading()\"\n    (click)=\"loadListings(page())\"\n  >\n    Refresh\n  </button>\n</header>\n\n@if (errorMessage()) {\n  <p class=\"message error\" role=\"alert\">\n    {{ errorMessage() }}\n  </p>\n}\n\n@if (successMessage()) {\n  <p class=\"message success\" role=\"status\">\n    {{ successMessage() }}\n  </p>\n}\n\n<section>\n  <h3>Catalog</h3>\n\n  <form\n    class=\"searchForm\"\n    (ngSubmit)=\"loadCatalog(1)\"\n  >\n    <label>\n      Search\n      <input\n        type=\"search\"\n        [formControl]=\"catalogSearch\"\n        maxlength=\"100\"\n      />\n    </label>\n\n    <button\n      type=\"submit\"\n      [disabled]=\"isCatalogLoading()\"\n    >\n      Search\n    </button>\n  </form>\n\n  @if (catalogError()) {\n    <p class=\"message error\" role=\"alert\">\n      {{ catalogError() }}\n    </p>\n  }\n\n  @if (isCatalogLoading()) {\n    <p>Loading</p>\n  } @else if (catalogProducts().length === 0) {\n    <p>No products</p>\n  } @else {\n    <div class=\"tableWrap\">\n      <table>\n        <thead>\n          <tr>\n            <th>Product</th>\n            <th>Variant</th>\n            <th>Code</th>\n            <th>Action</th>\n          </tr>\n        </thead>\n\n        <tbody>\n          @for (\n            product of catalogProducts();\n            track product.productId\n          ) {\n            @for (\n              variant of product.variants;\n              track variant.variantId\n            ) {\n              <tr>\n                <td data-label=\"Product\">\n                  {{ product.brandName }}\n                  {{ product.title }}\n                </td>\n                <td data-label=\"Variant\">{{ variant.name }}</td>\n                <td data-label=\"Code\">{{ variant.variantCode }}</td>\n                <td data-label=\"Action\">\n                  <button\n                    type=\"button\"\n                    (click)=\"\n                      selectVariant(product, variant)\n                    \"\n                  >\n                    Select\n                  </button>\n                </td>\n              </tr>\n            }\n          }\n        </tbody>\n      </table>\n    </div>\n\n    @if (catalogTotalPages() > 1) {\n      <div class=\"pagination\">\n        <button\n          type=\"button\"\n          [disabled]=\"catalogPage() <= 1\"\n          (click)=\"\n            loadCatalog(catalogPage() - 1)\n          \"\n        >\n          Previous\n        </button>\n\n        <span>\n          {{ catalogPage() }}\n          of\n          {{ catalogTotalPages() }}\n        </span>\n\n        <button\n          type=\"button\"\n          [disabled]=\"\n            catalogPage() >= catalogTotalPages()\n          \"\n          (click)=\"\n            loadCatalog(catalogPage() + 1)\n          \"\n        >\n          Next\n        </button>\n      </div>\n    }\n  }\n</section>\n\n<section>\n  <h3>Create listing</h3>\n\n  @if (selectedCatalogVariant(); as selected) {\n    <p class=\"selection\">\n      {{ selected.product.brandName }}\n      {{ selected.product.title }}\n      {{ selected.variant.name }}\n      {{ selected.variant.variantCode }}\n    </p>\n  } @else {\n    <p>Select a catalog variant</p>\n  }\n\n  <form\n    class=\"createForm\"\n    [formGroup]=\"createForm\"\n    (ngSubmit)=\"createListing()\"\n  >\n    <input\n      type=\"hidden\"\n      formControlName=\"productVariantId\"\n    />\n\n    <label>\n      Seller SKU\n      <input\n        type=\"text\"\n        formControlName=\"sellerSku\"\n        maxlength=\"64\"\n      />\n    </label>\n\n    <label>\n      Price\n      <input\n        type=\"number\"\n        formControlName=\"priceAmount\"\n        min=\"0.01\"\n        step=\"0.01\"\n      />\n    </label>\n\n    <label>\n      Currency\n      <input\n        type=\"text\"\n        formControlName=\"currencyCode\"\n        maxlength=\"3\"\n      />\n    </label>\n\n    <button\n      type=\"submit\"\n      [disabled]=\"\n        isCreating() ||\n        !canCreateListing()\n      \"\n    >\n      {{ isCreating() ? 'Creating' : 'Create' }}\n    </button>\n  </form>\n</section>\n\n<section>\n  <div class=\"sectionHeader\">\n    <h3>Seller listings</h3>\n\n    <label>\n      Status\n      <select\n        [value]=\"statusFilter()\"\n        (change)=\"changeStatusFilter($event)\"\n      >\n        <option value=\"\">All</option>\n\n        @for (\n          status of statusOptions;\n          track status\n        ) {\n          <option [value]=\"status\">\n            {{ status }}\n          </option>\n        }\n      </select>\n    </label>\n  </div>\n\n  @if (isLoading()) {\n    <p>Loading</p>\n  } @else if (listings().length === 0) {\n    <p>No listings</p>\n  } @else {\n    <div class=\"tableWrap\">\n      <table>\n        <thead>\n          <tr>\n            <th>Product</th>\n            <th>SKU</th>\n            <th>Status</th>\n            <th>Price</th>\n            <th>Actions</th>\n          </tr>\n        </thead>\n\n        <tbody>\n          @for (\n            listing of listings();\n            track listing.listingId\n          ) {\n            <tr>\n              <td data-label=\"Product\">\n                {{ listing.productTitle }}\n                <small>\n                  {{ listing.variantName }}\n                </small>\n              </td>\n              <td data-label=\"SKU\">{{ listing.sellerSku }}</td>\n              <td data-label=\"Status\">{{ listing.status }}</td>\n              <td data-label=\"Price\">\n                @if (canEditPrice(listing)) {\n                  <div class=\"priceEditor\">\n                    <input\n                      type=\"number\"\n                      min=\"0.01\"\n                      step=\"0.01\"\n                      [value]=\"listing.priceAmount\"\n                      (input)=\"\n                        changePriceDraft(\n                          listing,\n                          'price',\n                          $event\n                        )\n                      \"\n                    />\n\n                    <input\n                      type=\"text\"\n                      maxlength=\"3\"\n                      [value]=\"listing.currencyCode\"\n                      (input)=\"\n                        changePriceDraft(\n                          listing,\n                          'currency',\n                          $event\n                        )\n                      \"\n                    />\n\n                    <button\n                      type=\"button\"\n                      [disabled]=\"\n                        busyListingId() !== null\n                      \"\n                      (click)=\"updatePrice(listing)\"\n                    >\n                      Save\n                    </button>\n                  </div>\n                } @else {\n                  {{\n                    listing.priceAmount\n                      | currency:\n                        listing.currencyCode\n                  }}\n                }\n              </td>\n              <td data-label=\"Actions\">\n                <div class=\"actions\">\n                  <button\n                    type=\"button\"\n                    (click)=\"\n                      loadDetails(listing.listingId)\n                    \"\n                  >\n                    Details\n                  </button>\n\n                  @if (canSubmit(listing)) {\n                    <button\n                      type=\"button\"\n                      [disabled]=\"\n                        busyListingId() !== null\n                      \"\n                      (click)=\"\n                        submitForReview(listing)\n                      \"\n                    >\n                      Submit\n                    </button>\n                  }\n\n                  @if (canArchive(listing)) {\n                    <button\n                      type=\"button\"\n                      [disabled]=\"\n                        busyListingId() !== null\n                      \"\n                      (click)=\"\n                        archiveListing(listing)\n                      \"\n                    >\n                      Archive\n                    </button>\n                  }\n                </div>\n              </td>\n            </tr>\n          }\n        </tbody>\n      </table>\n    </div>\n\n    @if (totalPages() > 1) {\n      <div class=\"pagination\">\n        <button\n          type=\"button\"\n          [disabled]=\"page() <= 1\"\n          (click)=\"loadListings(page() - 1)\"\n        >\n          Previous\n        </button>\n\n        <span>\n          {{ page() }} of {{ totalPages() }}\n        </span>\n\n        <button\n          type=\"button\"\n          [disabled]=\"page() >= totalPages()\"\n          (click)=\"loadListings(page() + 1)\"\n        >\n          Next\n        </button>\n      </div>\n    }\n  }\n</section>\n\n@if (selectedListing(); as listing) {\n  <section>\n    <div class=\"sectionHeader\">\n      <h3>Listing details</h3>\n\n      <button\n        type=\"button\"\n        (click)=\"selectedListing.set(null)\"\n      >\n        Close\n      </button>\n    </div>\n\n    <dl>\n      <div>\n        <dt>Product</dt>\n        <dd>{{ listing.productTitle }}</dd>\n      </div>\n      <div>\n        <dt>Variant</dt>\n        <dd>{{ listing.variantName }}</dd>\n      </div>\n      <div>\n        <dt>Code</dt>\n        <dd>{{ listing.variantCode }}</dd>\n      </div>\n      <div>\n        <dt>SKU</dt>\n        <dd>{{ listing.sellerSku }}</dd>\n      </div>\n      <div>\n        <dt>Status</dt>\n        <dd>{{ listing.status }}</dd>\n      </div>\n      <div>\n        <dt>Created</dt>\n        <dd>\n          {{ listing.createdAtUtc | date: 'medium' }}\n        </dd>\n      </div>\n    </dl>\n  </section>\n}\n", styles: [":host {\n  display: block;\n}\n\n.pageHeader,\n.sectionHeader,\n.pagination {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n}\n\nh2,\nh3 {\n  margin: 0;\n  font-weight: 600;\n}\n\nh2 {\n  font-size: 1.5rem;\n}\n\nh3 {\n  font-size: 1.05rem;\n}\n\nsection {\n  padding-top: 1.5rem;\n  margin-top: 1.5rem;\n  border-top: 1px solid rgb(215, 215, 210);\n}\n\n.searchForm,\n.createForm {\n  display: grid;\n  gap: 1rem;\n  align-items: end;\n  margin-top: 1rem;\n}\n\n.searchForm {\n  grid-template-columns: 1fr auto;\n}\n\n.createForm {\n  grid-template-columns: 1fr 9rem 7rem auto;\n}\n\nlabel {\n  display: grid;\n  gap: 0.4rem;\n  font-size: 0.8rem;\n  font-weight: 600;\n}\n\ninput,\nselect,\nbutton {\n  min-height: 2.4rem;\n  padding: 0.5rem 0.65rem;\n  color: rgb(24, 24, 24);\n  background: white;\n  border: 1px solid rgb(165, 165, 160);\n  border-radius: 0;\n  font: inherit;\n}\n\nbutton {\n  cursor: pointer;\n}\n\nbutton:disabled {\n  cursor: default;\n  opacity: 0.55;\n}\n\n.selection {\n  padding: 0.7rem;\n  border: 1px solid rgb(165, 165, 160);\n}\n\n.message {\n  padding: 0.75rem;\n  border-left: 2px solid;\n}\n\n.error {\n  color: rgb(145, 25, 25);\n}\n\n.success {\n  color: rgb(30, 100, 55);\n}\n\n.tableWrap {\n  margin-top: 1rem;\n  min-width: 0;\n}\n\ntable {\n  width: 100%;\n  border-collapse: collapse;\n}\n\nth,\ntd {\n  padding: 0.7rem;\n  border-bottom: 1px solid rgb(220, 220, 215);\n  text-align: left;\n  vertical-align: top;\n}\n\nth {\n  font-size: 0.75rem;\n}\n\ntd small {\n  display: block;\n  margin-top: 0.25rem;\n  color: rgb(85, 85, 80);\n}\n\n.priceEditor {\n  display: grid;\n  grid-template-columns: 7rem 4rem auto;\n  gap: 0.4rem;\n}\n\n.actions {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.4rem;\n}\n\n.pagination {\n  padding-top: 1rem;\n}\n\ndl {\n  border-top: 1px solid rgb(215, 215, 210);\n}\n\ndl div {\n  display: grid;\n  grid-template-columns: 10rem 1fr;\n  gap: 1rem;\n  padding: 0.7rem 0;\n  border-bottom: 1px solid rgb(220, 220, 215);\n}\n\ndt {\n  color: rgb(80, 80, 76);\n}\n\ndd {\n  margin: 0;\n}\n\n@media (max-width: 56rem) {\n  .createForm {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n\n@media (max-width: 40rem) {\n  .searchForm,\n  .createForm {\n    grid-template-columns: 1fr;\n  }\n\n  .sectionHeader {\n    align-items: start;\n    flex-direction: column;\n  }\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SellerListings, { className: "SellerListings", filePath: "src/app/seller/seller-listings/seller-listings.ts", lineNumber: 51 }); })();
