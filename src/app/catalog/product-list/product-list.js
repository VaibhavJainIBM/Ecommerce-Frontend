import { CurrencyPipe } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { EMPTY, switchMap } from 'rxjs';
import { AuthSession } from '../../auth/auth-session';
import { CartApi } from '../../cart/cart-api';
import { Navbar } from '../../shared/navbar/navbar';
import { StorefrontApi } from '../storefront-api';
import * as i0 from "@angular/core";
const _forTrack0 = ($index, $item) => $item.listingId;
function ProductList_Conditional_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 4);
    i0.ɵɵtext(1, "Loading");
    i0.ɵɵelementEnd();
} }
function ProductList_Conditional_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 4);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("", ctx_r0.totalCount(), " listings");
} }
function ProductList_Conditional_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 5);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.cartMessage(), " ");
} }
function ProductList_Conditional_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 6);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.cartErrorMessage(), " ");
} }
function ProductList_Conditional_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵtext(1, " Loading storefront\u2026 ");
    i0.ɵɵelementEnd();
} }
function ProductList_Conditional_14_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 8)(1, "p");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 10);
    i0.ɵɵlistener("click", function ProductList_Conditional_14_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.loadStorefront(ctx_r0.currentPage())); });
    i0.ɵɵtext(4, " Try again ");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.errorMessage());
} }
function ProductList_Conditional_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵtext(1, " No products are currently available. ");
    i0.ɵɵelementEnd();
} }
function ProductList_Conditional_16_For_2_Conditional_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const listing_r5 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", listing_r5.availableQuantity, " in stock ");
} }
function ProductList_Conditional_16_For_2_Conditional_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 21);
    i0.ɵɵtext(1, " Out of stock ");
    i0.ɵɵelementEnd();
} }
function ProductList_Conditional_16_For_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li")(1, "article", 14)(2, "div", 15)(3, "p", 16);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "h2");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "p", 17);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "div", 18)(10, "div", 19)(11, "span", 20);
    i0.ɵɵtext(12, "Seller");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "span");
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(15, "div", 19)(16, "span", 20);
    i0.ɵɵtext(17, "Availability");
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(18, ProductList_Conditional_16_For_2_Conditional_18_Template, 2, 1, "span")(19, ProductList_Conditional_16_For_2_Conditional_19_Template, 2, 0, "span", 21);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(20, "div", 22)(21, "strong", 23);
    i0.ɵɵtext(22);
    i0.ɵɵpipe(23, "currency");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "button", 24);
    i0.ɵɵlistener("click", function ProductList_Conditional_16_For_2_Template_button_click_24_listener() { const listing_r5 = i0.ɵɵrestoreView(_r4).$implicit; const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.addToCart(listing_r5)); });
    i0.ɵɵtext(25);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const listing_r5 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate2(" ", listing_r5.brandName, " \u00B7 ", listing_r5.variantName, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(listing_r5.productTitle);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", listing_r5.description, " ");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(listing_r5.sellerDisplayName);
    i0.ɵɵadvance(4);
    i0.ɵɵconditional(listing_r5.availableQuantity > 0 ? 18 : 19);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind4(23, 9, listing_r5.priceAmount, listing_r5.currencyCode, "symbol", "1.0-2"), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", listing_r5.availableQuantity === 0 || ctx_r0.busyListingId() !== null);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.busyListingId() === listing_r5.listingId ? "Adding\u2026" : "Add", " ");
} }
function ProductList_Conditional_16_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ul", 11);
    i0.ɵɵrepeaterCreate(1, ProductList_Conditional_16_For_2_Template, 26, 14, "li", null, _forTrack0);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "nav", 12)(4, "button", 13);
    i0.ɵɵlistener("click", function ProductList_Conditional_16_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r3); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.loadStorefront(ctx_r0.currentPage() - 1)); });
    i0.ɵɵtext(5, " \u2190 Previous ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "span");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "button", 13);
    i0.ɵɵlistener("click", function ProductList_Conditional_16_Template_button_click_8_listener() { i0.ɵɵrestoreView(_r3); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.loadStorefront(ctx_r0.currentPage() + 1)); });
    i0.ɵɵtext(9, " Next \u2192 ");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r0.listings());
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("disabled", ctx_r0.currentPage() <= 1);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate2("", ctx_r0.currentPage(), " / ", ctx_r0.totalPages());
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r0.currentPage() >= ctx_r0.totalPages());
} }
export class ProductList {
    storefrontApi = inject(StorefrontApi);
    cartApi = inject(CartApi);
    authSession = inject(AuthSession);
    router = inject(Router);
    listings = signal([], /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "listings" }] : /* istanbul ignore next */ []));
    isLoading = signal(true, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "isLoading" }] : /* istanbul ignore next */ []));
    errorMessage = signal('', /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "errorMessage" }] : /* istanbul ignore next */ []));
    cartMessage = signal('', /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "cartMessage" }] : /* istanbul ignore next */ []));
    cartErrorMessage = signal('', /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "cartErrorMessage" }] : /* istanbul ignore next */ []));
    busyListingId = signal(null, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "busyListingId" }] : /* istanbul ignore next */ []));
    currentPage = signal(1, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "currentPage" }] : /* istanbul ignore next */ []));
    totalPages = signal(0, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "totalPages" }] : /* istanbul ignore next */ []));
    totalCount = signal(0, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "totalCount" }] : /* istanbul ignore next */ []));
    ngOnInit() {
        this.loadStorefront();
    }
    loadStorefront(page = 1) {
        this.isLoading.set(true);
        this.errorMessage.set('');
        this.storefrontApi.getStorefront(page, 20).subscribe({
            next: (response) => {
                this.listings.set(response.items);
                this.currentPage.set(response.page);
                this.totalPages.set(response.totalPages);
                this.totalCount.set(response.totalCount);
                this.isLoading.set(false);
            },
            error: (error) => {
                console.error('Storefront request failed:', error);
                this.errorMessage.set('Could not load the storefront.');
                this.isLoading.set(false);
            },
        });
    }
    addToCart(listing) {
        this.cartMessage.set('');
        this.cartErrorMessage.set('');
        if (!this.authSession.isAuthenticated()) {
            void this.router.navigate(['/login'], {
                queryParams: {
                    returnUrl: this.router.url,
                },
            });
            return;
        }
        this.busyListingId.set(listing.listingId);
        this.cartApi.getCart().pipe(switchMap((cart) => {
            const currentItem = cart.items.find((item) => item.listingId === listing.listingId);
            const nextQuantity = (currentItem?.quantity ?? 0) + 1;
            const availableQuantity = currentItem?.availableQuantity ??
                listing.availableQuantity;
            const maximumQuantity = Math.min(99, Math.max(0, availableQuantity));
            if (nextQuantity > maximumQuantity) {
                this.cartErrorMessage.set('The maximum available quantity is already in your cart.');
                this.busyListingId.set(null);
                return EMPTY;
            }
            return this.cartApi.setItem(listing.listingId, { quantity: nextQuantity });
        })).subscribe({
            next: (cart) => {
                const itemCount = cart.items.reduce((total, item) => total + item.quantity, 0);
                this.cartMessage.set(`${listing.productTitle} was added. ` +
                    `Your cart now has ${itemCount} ` +
                    `${itemCount === 1 ? 'item' : 'items'}.`);
                this.busyListingId.set(null);
            },
            error: (error) => {
                this.cartErrorMessage.set(this.readCartError(error));
                this.busyListingId.set(null);
            },
        });
    }
    readCartError(error) {
        const detail = error.error?.detail;
        if (typeof detail === 'string' && detail.trim()) {
            return detail;
        }
        if (error.status === 0) {
            return 'Cannot reach the API. Check that the API is running.';
        }
        if (error.status === 401) {
            return 'Sign in to add items to your cart.';
        }
        return 'Could not add this item to your cart.';
    }
    static ɵfac = function ProductList_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ProductList)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ProductList, selectors: [["app-product-list"]], decls: 17, vars: 4, consts: [[1, "page"], ["id", "products", 1, "storefront"], [1, "catalog-heading"], [1, "eyebrow"], [1, "listing-count"], ["role", "status", 1, "cart-feedback", "success-feedback"], ["role", "alert", 1, "cart-feedback", "error-feedback"], ["role", "status", 1, "state"], ["role", "alert", 1, "state", "error-state"], [1, "state"], ["type", "button", 1, "retry-button", 3, "click"], [1, "product-list"], ["aria-label", "Storefront pages", 1, "pagination"], ["type", "button", 3, "click", "disabled"], [1, "product-row"], [1, "product-main"], [1, "product-meta"], [1, "description"], [1, "card-details"], [1, "detail"], [1, "label"], [1, "out-of-stock"], [1, "purchase"], [1, "price"], ["type", "button", 1, "add-button", 3, "click", "disabled"]], template: function ProductList_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelement(1, "app-navbar");
            i0.ɵɵelementStart(2, "main", 1)(3, "header", 2)(4, "div")(5, "p", 3);
            i0.ɵɵtext(6, "Marketplace");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "h1");
            i0.ɵɵtext(8, "Products");
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(9, ProductList_Conditional_9_Template, 2, 0, "p", 4)(10, ProductList_Conditional_10_Template, 2, 1, "p", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(11, ProductList_Conditional_11_Template, 2, 1, "p", 5);
            i0.ɵɵconditionalCreate(12, ProductList_Conditional_12_Template, 2, 1, "p", 6);
            i0.ɵɵconditionalCreate(13, ProductList_Conditional_13_Template, 2, 0, "div", 7)(14, ProductList_Conditional_14_Template, 5, 1, "div", 8)(15, ProductList_Conditional_15_Template, 2, 0, "div", 9)(16, ProductList_Conditional_16_Template, 10, 4);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(9);
            i0.ɵɵconditional(ctx.isLoading() ? 9 : !ctx.errorMessage() ? 10 : -1);
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.cartMessage() ? 11 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.cartErrorMessage() ? 12 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.isLoading() ? 13 : ctx.errorMessage() ? 14 : ctx.listings().length === 0 ? 15 : 16);
        } }, dependencies: [Navbar, CurrencyPipe], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.page[_ngcontent-%COMP%] {\n  min-width: 0;\n  min-height: 100vh;\n}\n\n.storefront[_ngcontent-%COMP%] {\n  width: min(74rem, calc(100% - 2rem));\n  margin: 0 auto;\n  padding: 2.5rem 0 4rem;\n}\n\n.catalog-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: end;\n  justify-content: space-between;\n  gap: 1rem;\n  padding-bottom: 1.5rem;\n}\n\n.eyebrow[_ngcontent-%COMP%] {\n  margin: 0 0 0.5rem;\n  color: rgb(80, 80, 76);\n  font-size: 0.8rem;\n}\n\nh1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 2rem;\n  font-weight: 600;\n}\n\n.listing-count[_ngcontent-%COMP%] {\n  margin: 0;\n  color: rgb(80, 80, 76);\n  font-size: 0.85rem;\n}\n\n.state[_ngcontent-%COMP%] {\n  padding: 2rem 0;\n  color: rgb(80, 80, 76);\n  border-top: 1px solid rgb(215, 215, 210);\n  border-bottom: 1px solid rgb(215, 215, 210);\n}\n\n.error-state[_ngcontent-%COMP%] {\n  color: rgb(145, 25, 25);\n}\n\n.cart-feedback[_ngcontent-%COMP%] {\n  padding: 0.75rem 1rem;\n  margin: 0 0 1rem;\n  border-left: 3px solid currentColor;\n  font-size: 0.85rem;\n}\n\n.success-feedback[_ngcontent-%COMP%] {\n  color: rgb(33, 92, 57);\n  background: rgb(239, 248, 242);\n}\n\n.error-feedback[_ngcontent-%COMP%] {\n  color: rgb(145, 25, 25);\n  background: rgb(253, 241, 241);\n}\n\n.retry-button[_ngcontent-%COMP%], \n.add-button[_ngcontent-%COMP%] {\n  min-height: 2.4rem;\n  padding: 0.5rem 0.8rem;\n  border: 1px solid rgb(24, 24, 24);\n  border-radius: 0;\n  font: inherit;\n  cursor: pointer;\n}\n\n.retry-button[_ngcontent-%COMP%] {\n  color: rgb(24, 24, 24);\n  background: white;\n}\n\n.product-list[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns:\n    repeat(auto-fill, minmax(min(100%, 18rem), 1fr));\n  gap: 1rem;\n  padding: 0;\n  margin: 0;\n  list-style: none;\n}\n\n.product-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n\n.product-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  height: 100%;\n  padding: 1rem;\n  border: 1px solid rgb(205, 205, 200);\n}\n\n.product-main[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n\n.product-meta[_ngcontent-%COMP%] {\n  margin: 0 0 0.5rem;\n  color: rgb(80, 80, 76);\n  font-size: 0.75rem;\n  font-weight: 600;\n  overflow-wrap: anywhere;\n}\n\nh2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.15rem;\n  font-weight: 600;\n  overflow-wrap: anywhere;\n}\n\n.description[_ngcontent-%COMP%] {\n  margin: 0.6rem 0 0;\n  color: rgb(80, 80, 76);\n  font-size: 0.875rem;\n  line-height: 1.5;\n  overflow-wrap: anywhere;\n}\n\n.card-details[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);\n  gap: 1rem;\n  padding: 1rem 0;\n  margin-top: 1rem;\n  border-top: 1px solid rgb(225, 225, 220);\n}\n\n.detail[_ngcontent-%COMP%] {\n  display: grid;\n  min-width: 0;\n  gap: 0.3rem;\n  font-size: 0.85rem;\n  overflow-wrap: anywhere;\n}\n\n.label[_ngcontent-%COMP%] {\n  color: rgb(100, 100, 95);\n  font-size: 0.75rem;\n}\n\n.out-of-stock[_ngcontent-%COMP%] {\n  color: rgb(145, 25, 25);\n}\n\n.purchase[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  padding-top: 1rem;\n  border-top: 1px solid rgb(225, 225, 220);\n}\n\n.price[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-variant-numeric: tabular-nums;\n}\n\n.add-button[_ngcontent-%COMP%] {\n  color: white;\n  background: rgb(24, 24, 24);\n}\n\n.add-button[_ngcontent-%COMP%]:disabled {\n  color: rgb(110, 110, 105);\n  background: rgb(235, 235, 230);\n  border-color: rgb(205, 205, 200);\n  cursor: default;\n}\n\n.pagination[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr auto 1fr;\n  align-items: center;\n  gap: 1rem;\n  padding-top: 1.5rem;\n}\n\n.pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: fit-content;\n  padding: 0;\n  color: rgb(24, 24, 24);\n  background: transparent;\n  border: 0;\n  font: inherit;\n  cursor: pointer;\n}\n\n.pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-child {\n  justify-self: end;\n}\n\n.pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  color: rgb(155, 155, 150);\n  cursor: default;\n}\n\n.pagination[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: rgb(80, 80, 76);\n  font-size: 0.8rem;\n  font-variant-numeric: tabular-nums;\n}\n\n@media (max-width: 34rem) {\n  .storefront[_ngcontent-%COMP%] {\n    padding-top: 2rem;\n  }\n\n  .catalog-heading[_ngcontent-%COMP%] {\n    align-items: start;\n    flex-direction: column;\n  }\n}\n\n@media (max-width: 22rem) {\n  .card-details[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProductList, [{
        type: Component,
        args: [{ selector: 'app-product-list', imports: [CurrencyPipe, Navbar], template: "<div class=\"page\">\n  <app-navbar>\n  </app-navbar>\n\n  <main class=\"storefront\" id=\"products\">\n    <header class=\"catalog-heading\">\n      <div>\n        <p class=\"eyebrow\">Marketplace</p>\n        <h1>Products</h1>\n      </div>\n\n      @if (isLoading()) {\n        <p class=\"listing-count\">Loading</p>\n      } @else if (!errorMessage()) {\n        <p class=\"listing-count\">{{ totalCount() }} listings</p>\n      }\n    </header>\n\n    @if (cartMessage()) {\n      <p class=\"cart-feedback success-feedback\" role=\"status\">\n        {{ cartMessage() }}\n      </p>\n    }\n\n    @if (cartErrorMessage()) {\n      <p class=\"cart-feedback error-feedback\" role=\"alert\">\n        {{ cartErrorMessage() }}\n      </p>\n    }\n\n    @if (isLoading()) {\n      <div class=\"state\" role=\"status\">\n        Loading storefront\u2026\n      </div>\n    } @else if (errorMessage()) {\n      <div class=\"state error-state\" role=\"alert\">\n        <p>{{ errorMessage() }}</p>\n\n        <button\n          class=\"retry-button\"\n          type=\"button\"\n          (click)=\"loadStorefront(currentPage())\"\n        >\n          Try again\n        </button>\n      </div>\n    } @else if (listings().length === 0) {\n      <div class=\"state\">\n        No products are currently available.\n      </div>\n    } @else {\n      <ul class=\"product-list\">\n        @for (listing of listings(); track listing.listingId) {\n          <li>\n            <article class=\"product-row\">\n              <div class=\"product-main\">\n                <p class=\"product-meta\">\n                  {{ listing.brandName }} \u00B7 {{ listing.variantName }}\n                </p>\n\n                <h2>{{ listing.productTitle }}</h2>\n\n                <p class=\"description\">\n                  {{ listing.description }}\n                </p>\n              </div>\n\n              <div class=\"card-details\">\n                <div class=\"detail\">\n                  <span class=\"label\">Seller</span>\n                  <span>{{ listing.sellerDisplayName }}</span>\n                </div>\n\n                <div class=\"detail\">\n                  <span class=\"label\">Availability</span>\n\n                  @if (listing.availableQuantity > 0) {\n                    <span>\n                      {{ listing.availableQuantity }} in stock\n                    </span>\n                  } @else {\n                    <span class=\"out-of-stock\">\n                      Out of stock\n                    </span>\n                  }\n                </div>\n              </div>\n\n              <div class=\"purchase\">\n                <strong class=\"price\">\n                  {{\n                    listing.priceAmount\n                      | currency\n                        : listing.currencyCode\n                        : 'symbol'\n                        : '1.0-2'\n                  }}\n                </strong>\n\n                <button\n                  class=\"add-button\"\n                  type=\"button\"\n                  [disabled]=\"\n                    listing.availableQuantity === 0 ||\n                    busyListingId() !== null\n                  \"\n                  (click)=\"addToCart(listing)\"\n                >\n                  {{\n                    busyListingId() === listing.listingId\n                      ? 'Adding\u2026'\n                      : 'Add'\n                  }}\n                </button>\n              </div>\n            </article>\n          </li>\n        }\n      </ul>\n\n      <nav class=\"pagination\" aria-label=\"Storefront pages\">\n        <button\n          type=\"button\"\n          [disabled]=\"currentPage() <= 1\"\n          (click)=\"loadStorefront(currentPage() - 1)\"\n        >\n          \u2190 Previous\n        </button>\n\n        <span>{{ currentPage() }} / {{ totalPages() }}</span>\n\n        <button\n          type=\"button\"\n          [disabled]=\"currentPage() >= totalPages()\"\n          (click)=\"loadStorefront(currentPage() + 1)\"\n        >\n          Next \u2192\n        </button>\n      </nav>\n    }\n  </main>\n</div>\n", styles: [":host {\n  display: block;\n}\n\n.page {\n  min-width: 0;\n  min-height: 100vh;\n}\n\n.storefront {\n  width: min(74rem, calc(100% - 2rem));\n  margin: 0 auto;\n  padding: 2.5rem 0 4rem;\n}\n\n.catalog-heading {\n  display: flex;\n  align-items: end;\n  justify-content: space-between;\n  gap: 1rem;\n  padding-bottom: 1.5rem;\n}\n\n.eyebrow {\n  margin: 0 0 0.5rem;\n  color: rgb(80, 80, 76);\n  font-size: 0.8rem;\n}\n\nh1 {\n  margin: 0;\n  font-size: 2rem;\n  font-weight: 600;\n}\n\n.listing-count {\n  margin: 0;\n  color: rgb(80, 80, 76);\n  font-size: 0.85rem;\n}\n\n.state {\n  padding: 2rem 0;\n  color: rgb(80, 80, 76);\n  border-top: 1px solid rgb(215, 215, 210);\n  border-bottom: 1px solid rgb(215, 215, 210);\n}\n\n.error-state {\n  color: rgb(145, 25, 25);\n}\n\n.cart-feedback {\n  padding: 0.75rem 1rem;\n  margin: 0 0 1rem;\n  border-left: 3px solid currentColor;\n  font-size: 0.85rem;\n}\n\n.success-feedback {\n  color: rgb(33, 92, 57);\n  background: rgb(239, 248, 242);\n}\n\n.error-feedback {\n  color: rgb(145, 25, 25);\n  background: rgb(253, 241, 241);\n}\n\n.retry-button,\n.add-button {\n  min-height: 2.4rem;\n  padding: 0.5rem 0.8rem;\n  border: 1px solid rgb(24, 24, 24);\n  border-radius: 0;\n  font: inherit;\n  cursor: pointer;\n}\n\n.retry-button {\n  color: rgb(24, 24, 24);\n  background: white;\n}\n\n.product-list {\n  display: grid;\n  grid-template-columns:\n    repeat(auto-fill, minmax(min(100%, 18rem), 1fr));\n  gap: 1rem;\n  padding: 0;\n  margin: 0;\n  list-style: none;\n}\n\n.product-list > li {\n  min-width: 0;\n}\n\n.product-row {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  height: 100%;\n  padding: 1rem;\n  border: 1px solid rgb(205, 205, 200);\n}\n\n.product-main {\n  flex: 1;\n  min-width: 0;\n}\n\n.product-meta {\n  margin: 0 0 0.5rem;\n  color: rgb(80, 80, 76);\n  font-size: 0.75rem;\n  font-weight: 600;\n  overflow-wrap: anywhere;\n}\n\nh2 {\n  margin: 0;\n  font-size: 1.15rem;\n  font-weight: 600;\n  overflow-wrap: anywhere;\n}\n\n.description {\n  margin: 0.6rem 0 0;\n  color: rgb(80, 80, 76);\n  font-size: 0.875rem;\n  line-height: 1.5;\n  overflow-wrap: anywhere;\n}\n\n.card-details {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);\n  gap: 1rem;\n  padding: 1rem 0;\n  margin-top: 1rem;\n  border-top: 1px solid rgb(225, 225, 220);\n}\n\n.detail {\n  display: grid;\n  min-width: 0;\n  gap: 0.3rem;\n  font-size: 0.85rem;\n  overflow-wrap: anywhere;\n}\n\n.label {\n  color: rgb(100, 100, 95);\n  font-size: 0.75rem;\n}\n\n.out-of-stock {\n  color: rgb(145, 25, 25);\n}\n\n.purchase {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  padding-top: 1rem;\n  border-top: 1px solid rgb(225, 225, 220);\n}\n\n.price {\n  font-size: 1rem;\n  font-variant-numeric: tabular-nums;\n}\n\n.add-button {\n  color: white;\n  background: rgb(24, 24, 24);\n}\n\n.add-button:disabled {\n  color: rgb(110, 110, 105);\n  background: rgb(235, 235, 230);\n  border-color: rgb(205, 205, 200);\n  cursor: default;\n}\n\n.pagination {\n  display: grid;\n  grid-template-columns: 1fr auto 1fr;\n  align-items: center;\n  gap: 1rem;\n  padding-top: 1.5rem;\n}\n\n.pagination button {\n  width: fit-content;\n  padding: 0;\n  color: rgb(24, 24, 24);\n  background: transparent;\n  border: 0;\n  font: inherit;\n  cursor: pointer;\n}\n\n.pagination button:last-child {\n  justify-self: end;\n}\n\n.pagination button:disabled {\n  color: rgb(155, 155, 150);\n  cursor: default;\n}\n\n.pagination span {\n  color: rgb(80, 80, 76);\n  font-size: 0.8rem;\n  font-variant-numeric: tabular-nums;\n}\n\n@media (max-width: 34rem) {\n  .storefront {\n    padding-top: 2rem;\n  }\n\n  .catalog-heading {\n    align-items: start;\n    flex-direction: column;\n  }\n}\n\n@media (max-width: 22rem) {\n  .card-details {\n    grid-template-columns: 1fr;\n  }\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ProductList, { className: "ProductList", filePath: "src/app/catalog/product-list/product-list.ts", lineNumber: 19 }); })();
