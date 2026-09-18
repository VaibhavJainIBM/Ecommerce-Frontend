import { CurrencyPipe } from '@angular/common';
import { Component, computed, inject, signal, } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Navbar } from '../../shared/navbar/navbar';
import { CartApi } from '../cart-api';
import * as i0 from "@angular/core";
const _forTrack0 = ($index, $item) => $item.listingId;
function CartPage_Conditional_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 4);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2(" ", ctx_r0.itemCount(), " ", ctx_r0.itemCount() === 1 ? "item" : "items", " ");
} }
function CartPage_Conditional_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 5);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.successMessage(), " ");
} }
function CartPage_Conditional_11_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 6)(1, "p");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 8);
    i0.ɵɵlistener("click", function CartPage_Conditional_11_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.loadCart()); });
    i0.ɵɵtext(4, " Refresh cart ");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.errorMessage());
} }
function CartPage_Conditional_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 7);
    i0.ɵɵtext(1, " Loading your cart\u2026 ");
    i0.ɵɵelementEnd();
} }
function CartPage_Conditional_13_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 9)(1, "h2");
    i0.ɵɵtext(2, "Your cart is empty");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p");
    i0.ɵɵtext(4, "Browse the storefront to find something to add.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "a", 11);
    i0.ɵɵtext(6, " Continue shopping ");
    i0.ɵɵelementEnd()();
} }
function CartPage_Conditional_13_Conditional_1_For_3_Conditional_12_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " This listing is currently unavailable. ");
} }
function CartPage_Conditional_13_Conditional_1_For_3_Conditional_12_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    const item_r5 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵtextInterpolate1(" Only ", item_r5.availableQuantity, " are currently available. Reduce the quantity before checkout. ");
} }
function CartPage_Conditional_13_Conditional_1_For_3_Conditional_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 24);
    i0.ɵɵconditionalCreate(1, CartPage_Conditional_13_Conditional_1_For_3_Conditional_12_Conditional_1_Template, 1, 0)(2, CartPage_Conditional_13_Conditional_1_For_3_Conditional_12_Conditional_2_Template, 1, 1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r5 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵconditional(item_r5.availableQuantity <= 0 ? 1 : 2);
} }
function CartPage_Conditional_13_Conditional_1_For_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li")(1, "article", 19)(2, "div", 20)(3, "p", 21);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "h2");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "p", 22);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "p", 23);
    i0.ɵɵtext(10);
    i0.ɵɵpipe(11, "currency");
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(12, CartPage_Conditional_13_Conditional_1_For_3_Conditional_12_Template, 3, 1, "p", 24);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "div", 25)(14, "span", 26);
    i0.ɵɵtext(15, "Quantity");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "div", 27)(17, "button", 28);
    i0.ɵɵlistener("click", function CartPage_Conditional_13_Conditional_1_For_3_Template_button_click_17_listener() { const item_r5 = i0.ɵɵrestoreView(_r4).$implicit; const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.updateQuantity(item_r5, item_r5.quantity - 1)); });
    i0.ɵɵtext(18, " \u2212 ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "span", 29);
    i0.ɵɵtext(20);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "button", 30);
    i0.ɵɵlistener("click", function CartPage_Conditional_13_Conditional_1_For_3_Template_button_click_21_listener() { const item_r5 = i0.ɵɵrestoreView(_r4).$implicit; const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.updateQuantity(item_r5, item_r5.quantity + 1)); });
    i0.ɵɵtext(22, " + ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(23, "button", 31);
    i0.ɵɵlistener("click", function CartPage_Conditional_13_Conditional_1_For_3_Template_button_click_23_listener() { const item_r5 = i0.ɵɵrestoreView(_r4).$implicit; const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.removeItem(item_r5)); });
    i0.ɵɵtext(24);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(25, "div", 32)(26, "span", 26);
    i0.ɵɵtext(27, "Subtotal");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "strong");
    i0.ɵɵtext(29);
    i0.ɵɵpipe(30, "currency");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", item_r5.sellerDisplayName, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r5.productTitle);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", item_r5.variantName, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind4(11, 11, item_r5.unitPriceAmount, item_r5.currencyCode, "symbol", "1.0-2"), " each ");
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(!item_r5.isAvailable ? 12 : -1);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("disabled", ctx_r0.isClearing() || ctx_r0.busyListingId() !== null || item_r5.quantity <= 1 || ctx_r0.maximumQuantity(item_r5) < 1);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", item_r5.quantity, " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r0.isClearing() || ctx_r0.busyListingId() !== null || item_r5.quantity >= ctx_r0.maximumQuantity(item_r5));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", ctx_r0.isClearing() || ctx_r0.busyListingId() !== null);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.busyListingId() === item_r5.listingId ? "Updating\u2026" : "Remove", " ");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind4(30, 16, item_r5.lineTotal, item_r5.currencyCode, "symbol", "1.0-2"), " ");
} }
function CartPage_Conditional_13_Conditional_1_Conditional_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
    i0.ɵɵpipe(1, "currency");
} if (rf & 2) {
    const currentCart_r6 = i0.ɵɵnextContext(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind4(1, 1, currentCart_r6.totalAmount, currentCart_r6.currencyCode, "symbol", "1.0-2"), " ");
} }
function CartPage_Conditional_13_Conditional_1_Conditional_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " Unavailable ");
} }
function CartPage_Conditional_13_Conditional_1_Conditional_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 16);
    i0.ɵɵtext(1, " Resolve unavailable items before checkout. ");
    i0.ɵɵelementEnd();
} }
function CartPage_Conditional_13_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 10)(1, "ul", 12);
    i0.ɵɵrepeaterCreate(2, CartPage_Conditional_13_Conditional_1_For_3_Template, 31, 21, "li", null, _forTrack0);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "aside", 13)(5, "h2", 14);
    i0.ɵɵtext(6, "Summary");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 15)(8, "span");
    i0.ɵɵtext(9, "Total");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "strong");
    i0.ɵɵconditionalCreate(11, CartPage_Conditional_13_Conditional_1_Conditional_11_Template, 2, 6)(12, CartPage_Conditional_13_Conditional_1_Conditional_12_Template, 1, 0);
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(13, CartPage_Conditional_13_Conditional_1_Conditional_13_Template, 2, 0, "p", 16);
    i0.ɵɵelementStart(14, "a", 17);
    i0.ɵɵtext(15, " Continue shopping ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "button", 18);
    i0.ɵɵlistener("click", function CartPage_Conditional_13_Conditional_1_Template_button_click_16_listener() { i0.ɵɵrestoreView(_r3); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.clearCart()); });
    i0.ɵɵtext(17);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const currentCart_r6 = i0.ɵɵnextContext();
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵrepeater(currentCart_r6.items);
    i0.ɵɵadvance(9);
    i0.ɵɵconditional(currentCart_r6.currencyCode ? 11 : 12);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(!currentCart_r6.isCheckoutReady ? 13 : -1);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("disabled", ctx_r0.isClearing() || ctx_r0.busyListingId() !== null);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.isClearing() ? "Clearing\u2026" : "Clear cart", " ");
} }
function CartPage_Conditional_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵconditionalCreate(0, CartPage_Conditional_13_Conditional_0_Template, 7, 0, "section", 9)(1, CartPage_Conditional_13_Conditional_1_Template, 18, 4, "div", 10);
} if (rf & 2) {
    i0.ɵɵconditional(ctx.items.length === 0 ? 0 : 1);
} }
export class CartPage {
    cartApi = inject(CartApi);
    cart = signal(null, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "cart" }] : /* istanbul ignore next */ []));
    isLoading = signal(true, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "isLoading" }] : /* istanbul ignore next */ []));
    isClearing = signal(false, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "isClearing" }] : /* istanbul ignore next */ []));
    busyListingId = signal(null, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "busyListingId" }] : /* istanbul ignore next */ []));
    errorMessage = signal('', /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "errorMessage" }] : /* istanbul ignore next */ []));
    successMessage = signal('', /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "successMessage" }] : /* istanbul ignore next */ []));
    itemCount = computed(() => this.cart()?.items.reduce((total, item) => total + item.quantity, 0) ?? 0, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "itemCount" }] : /* istanbul ignore next */ []));
    ngOnInit() {
        this.loadCart();
    }
    loadCart() {
        this.isLoading.set(true);
        this.errorMessage.set('');
        this.cartApi.getCart().subscribe({
            next: (cart) => {
                this.cart.set(cart);
                this.isLoading.set(false);
            },
            error: (error) => {
                this.errorMessage.set(this.readCartError(error, 'Could not load your cart.'));
                this.isLoading.set(false);
            },
        });
    }
    updateQuantity(item, quantity) {
        const maximum = this.maximumQuantity(item);
        const normalizedQuantity = item.quantity > maximum &&
            quantity < item.quantity &&
            maximum >= 1
            ? maximum
            : quantity;
        if (normalizedQuantity === item.quantity ||
            normalizedQuantity < 1 ||
            normalizedQuantity > maximum) {
            return;
        }
        this.beginItemMutation(item.listingId);
        this.cartApi
            .setItem(item.listingId, {
            quantity: normalizedQuantity,
        })
            .subscribe({
            next: (cart) => {
                this.finishMutation(cart, 'Cart quantity updated.');
            },
            error: (error) => {
                this.failItemMutation(error, 'Could not update this cart item.');
            },
        });
    }
    removeItem(item) {
        this.beginItemMutation(item.listingId);
        this.cartApi
            .removeItem(item.listingId)
            .subscribe({
            next: (cart) => {
                this.finishMutation(cart, `${item.productTitle} was removed from your cart.`);
            },
            error: (error) => {
                this.failItemMutation(error, 'Could not remove this cart item.');
            },
        });
    }
    clearCart() {
        const cart = this.cart();
        if (!cart ||
            cart.items.length === 0 ||
            !globalThis.confirm('Remove every item from your cart?')) {
            return;
        }
        this.isClearing.set(true);
        this.errorMessage.set('');
        this.successMessage.set('');
        this.cartApi.clearCart().subscribe({
            next: (updatedCart) => {
                this.cart.set(updatedCart);
                this.isClearing.set(false);
                this.successMessage.set('Your cart was cleared.');
            },
            error: (error) => {
                this.errorMessage.set(this.readCartError(error, 'Could not clear your cart.'));
                this.isClearing.set(false);
            },
        });
    }
    maximumQuantity(item) {
        return Math.min(99, Math.max(0, item.availableQuantity));
    }
    beginItemMutation(listingId) {
        this.busyListingId.set(listingId);
        this.errorMessage.set('');
        this.successMessage.set('');
    }
    finishMutation(cart, message) {
        this.cart.set(cart);
        this.busyListingId.set(null);
        this.successMessage.set(message);
    }
    failItemMutation(error, fallback) {
        this.errorMessage.set(this.readCartError(error, fallback));
        this.busyListingId.set(null);
    }
    readCartError(error, fallback) {
        const detail = error.error?.detail;
        if (typeof detail === 'string' && detail.trim()) {
            return detail;
        }
        const errors = error.error?.errors;
        const messages = errors
            ? Object.values(errors).flat()
            : [];
        if (messages.length > 0) {
            return messages.join(' ');
        }
        if (error.status === 0) {
            return 'Cannot reach the API. Check that the API is running.';
        }
        if (error.status === 401) {
            return 'Sign in to view your cart.';
        }
        if (error.status === 403) {
            return 'This account cannot use a cart.';
        }
        if (error.status === 409) {
            return `${fallback} Refresh the cart and try again.`;
        }
        return fallback;
    }
    static ɵfac = function CartPage_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || CartPage)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CartPage, selectors: [["app-cart-page"]], decls: 14, vars: 4, consts: [[1, "page"], [1, "cart-page"], [1, "page-header"], [1, "eyebrow"], [1, "item-count"], ["role", "status", 1, "message", "success"], ["role", "alert", 1, "message", "error"], ["role", "status", 1, "state"], ["type", "button", 3, "click"], [1, "state", "empty-state"], [1, "cart-layout"], ["routerLink", "/", 1, "primary-link"], [1, "cart-items"], ["aria-labelledby", "summary-title", 1, "summary"], ["id", "summary-title"], [1, "summary-row"], [1, "checkout-warning"], ["routerLink", "/", 1, "secondary-link"], ["type", "button", 1, "clear-button", 3, "click", "disabled"], [1, "cart-item"], [1, "item-description"], [1, "seller"], [1, "variant"], [1, "unit-price"], [1, "availability-warning"], [1, "quantity-section"], [1, "control-label"], ["aria-label", "Item quantity", 1, "quantity-control"], ["type", "button", "aria-label", "Decrease quantity", 3, "click", "disabled"], ["aria-live", "polite"], ["type", "button", "aria-label", "Increase quantity", 3, "click", "disabled"], ["type", "button", 1, "remove-button", 3, "click", "disabled"], [1, "line-total"]], template: function CartPage_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelement(1, "app-navbar");
            i0.ɵɵelementStart(2, "main", 1)(3, "header", 2)(4, "div")(5, "p", 3);
            i0.ɵɵtext(6, "Shopping");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "h1");
            i0.ɵɵtext(8, "Your cart");
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(9, CartPage_Conditional_9_Template, 2, 2, "p", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(10, CartPage_Conditional_10_Template, 2, 1, "p", 5);
            i0.ɵɵconditionalCreate(11, CartPage_Conditional_11_Template, 5, 1, "div", 6);
            i0.ɵɵconditionalCreate(12, CartPage_Conditional_12_Template, 2, 0, "p", 7)(13, CartPage_Conditional_13_Template, 2, 1);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            let tmp_0_0;
            let tmp_3_0;
            i0.ɵɵadvance(9);
            i0.ɵɵconditional((tmp_0_0 = !ctx.isLoading() && ctx.cart()) ? 9 : -1, tmp_0_0);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.successMessage() ? 10 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.errorMessage() ? 11 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.isLoading() ? 12 : (tmp_3_0 = ctx.cart()) ? 13 : -1, tmp_3_0);
        } }, dependencies: [Navbar,
            RouterLink,
            CurrencyPipe], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n}\n\n.cart-page[_ngcontent-%COMP%] {\n  width: min(74rem, calc(100% - 2rem));\n  margin-inline: auto;\n  padding-block: 2.5rem 4rem;\n}\n\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: end;\n  justify-content: space-between;\n  gap: 1rem;\n  padding-bottom: 1.5rem;\n  border-bottom: 1px solid rgb(215, 215, 210);\n}\n\n.eyebrow[_ngcontent-%COMP%], \n.seller[_ngcontent-%COMP%], \n.control-label[_ngcontent-%COMP%] {\n  color: rgb(90, 90, 85);\n  font-size: 0.75rem;\n  font-weight: 700;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n}\n\n.eyebrow[_ngcontent-%COMP%] {\n  margin: 0 0 0.5rem;\n}\n\nh1[_ngcontent-%COMP%], \nh2[_ngcontent-%COMP%], \np[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n\nh1[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  font-size: 2rem;\n}\n\n.item-count[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  color: rgb(80, 80, 76);\n  font-size: 0.85rem;\n}\n\n.message[_ngcontent-%COMP%] {\n  padding: 0.8rem 1rem;\n  margin-block: 1rem 0;\n  border-left: 3px solid currentColor;\n}\n\n.message[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n\n.message[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 0;\n  color: inherit;\n  background: transparent;\n  border: 0;\n  cursor: pointer;\n  font: inherit;\n  font-weight: 700;\n  text-decoration: underline;\n}\n\n.success[_ngcontent-%COMP%] {\n  color: rgb(33, 92, 57);\n  background: rgb(239, 248, 242);\n}\n\n.error[_ngcontent-%COMP%], \n.availability-warning[_ngcontent-%COMP%], \n.checkout-warning[_ngcontent-%COMP%] {\n  color: rgb(145, 25, 25);\n}\n\n.error[_ngcontent-%COMP%] {\n  background: rgb(253, 241, 241);\n}\n\n.state[_ngcontent-%COMP%] {\n  padding-block: 2.5rem;\n  color: rgb(80, 80, 76);\n}\n\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.empty-state[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: rgb(24, 24, 24);\n}\n\n.cart-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) minmax(16rem, 20rem);\n  gap: 2rem;\n  padding-top: 1.5rem;\n}\n\n.cart-items[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n}\n\n.cart-items[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  border-bottom: 1px solid rgb(215, 215, 210);\n}\n\n.cart-items[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:first-child {\n  border-top: 1px solid rgb(215, 215, 210);\n}\n\n.cart-item[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) auto minmax(7rem, auto);\n  gap: 1.5rem;\n  align-items: start;\n  padding-block: 1.25rem;\n}\n\n.item-description[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n\n.seller[_ngcontent-%COMP%] {\n  margin-bottom: 0.4rem;\n}\n\n.cart-item[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-bottom: 0.35rem;\n  font-size: 1.1rem;\n  overflow-wrap: anywhere;\n}\n\n.variant[_ngcontent-%COMP%], \n.unit-price[_ngcontent-%COMP%], \n.availability-warning[_ngcontent-%COMP%], \n.checkout-warning[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  font-size: 0.82rem;\n  line-height: 1.5;\n}\n\n.variant[_ngcontent-%COMP%], \n.unit-price[_ngcontent-%COMP%] {\n  color: rgb(80, 80, 76);\n}\n\n.availability-warning[_ngcontent-%COMP%] {\n  margin-top: 0.75rem;\n}\n\n.quantity-section[_ngcontent-%COMP%], \n.line-total[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.6rem;\n}\n\n.quantity-control[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 2.2rem 2.5rem 2.2rem;\n  align-items: center;\n  text-align: center;\n}\n\n.quantity-control[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 2.2rem;\n  height: 2.2rem;\n  padding: 0;\n  color: rgb(24, 24, 24);\n  background: white;\n  border: 1px solid rgb(180, 180, 175);\n  cursor: pointer;\n  font: inherit;\n}\n\n.quantity-control[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  color: rgb(150, 150, 145);\n  background: rgb(240, 240, 236);\n  cursor: default;\n}\n\n.remove-button[_ngcontent-%COMP%], \n.clear-button[_ngcontent-%COMP%] {\n  width: fit-content;\n  padding: 0;\n  color: rgb(120, 35, 35);\n  background: transparent;\n  border: 0;\n  cursor: pointer;\n  font: inherit;\n  font-size: 0.8rem;\n  text-decoration: underline;\n}\n\n.remove-button[_ngcontent-%COMP%]:disabled, \n.clear-button[_ngcontent-%COMP%]:disabled {\n  cursor: wait;\n  opacity: 0.55;\n}\n\n.line-total[_ngcontent-%COMP%] {\n  justify-items: end;\n  text-align: right;\n}\n\n.summary[_ngcontent-%COMP%] {\n  height: fit-content;\n  padding: 1.25rem;\n  border: 1px solid rgb(195, 195, 190);\n}\n\n.summary[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  padding-bottom: 1rem;\n  margin-bottom: 1rem;\n  border-bottom: 1px solid rgb(215, 215, 210);\n  font-size: 1.1rem;\n}\n\n.summary-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 1rem;\n  font-size: 1rem;\n}\n\n.checkout-warning[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n\n.primary-link[_ngcontent-%COMP%], \n.secondary-link[_ngcontent-%COMP%] {\n  display: inline-block;\n  color: rgb(24, 24, 24);\n  font-weight: 700;\n}\n\n.primary-link[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n\n.secondary-link[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n  font-size: 0.85rem;\n}\n\n.clear-button[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 1rem;\n}\n\n@media (max-width: 48rem) {\n  .cart-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n\n  .summary[_ngcontent-%COMP%] {\n    order: -1;\n  }\n}\n\n@media (max-width: 36rem) {\n  .page-header[_ngcontent-%COMP%] {\n    align-items: start;\n    flex-direction: column;\n  }\n\n  .cart-item[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr auto;\n  }\n\n  .item-description[_ngcontent-%COMP%] {\n    grid-column: 1 / -1;\n  }\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CartPage, [{
        type: Component,
        args: [{ selector: 'app-cart-page', imports: [
                    CurrencyPipe,
                    Navbar,
                    RouterLink,
                ], template: "<div class=\"page\">\n  <app-navbar>\n  </app-navbar>\n\n  <main class=\"cart-page\">\n    <header class=\"page-header\">\n      <div>\n        <p class=\"eyebrow\">Shopping</p>\n        <h1>Your cart</h1>\n      </div>\n\n      @if (!isLoading() && cart(); as currentCart) {\n        <p class=\"item-count\">\n          {{ itemCount() }}\n          {{ itemCount() === 1 ? 'item' : 'items' }}\n        </p>\n      }\n    </header>\n\n    @if (successMessage()) {\n      <p class=\"message success\" role=\"status\">\n        {{ successMessage() }}\n      </p>\n    }\n\n    @if (errorMessage()) {\n      <div class=\"message error\" role=\"alert\">\n        <p>{{ errorMessage() }}</p>\n\n        <button type=\"button\" (click)=\"loadCart()\">\n          Refresh cart\n        </button>\n      </div>\n    }\n\n    @if (isLoading()) {\n      <p class=\"state\" role=\"status\">\n        Loading your cart\u2026\n      </p>\n    } @else if (cart(); as currentCart) {\n      @if (currentCart.items.length === 0) {\n        <section class=\"state empty-state\">\n          <h2>Your cart is empty</h2>\n          <p>Browse the storefront to find something to add.</p>\n\n          <a class=\"primary-link\" routerLink=\"/\">\n            Continue shopping\n          </a>\n        </section>\n      } @else {\n        <div class=\"cart-layout\">\n          <ul class=\"cart-items\">\n            @for (\n              item of currentCart.items;\n              track item.listingId\n            ) {\n              <li>\n                <article class=\"cart-item\">\n                  <div class=\"item-description\">\n                    <p class=\"seller\">\n                      {{ item.sellerDisplayName }}\n                    </p>\n\n                    <h2>{{ item.productTitle }}</h2>\n\n                    <p class=\"variant\">\n                      {{ item.variantName }}\n                    </p>\n\n                    <p class=\"unit-price\">\n                      {{\n                        item.unitPriceAmount\n                          | currency\n                            : item.currencyCode\n                            : 'symbol'\n                            : '1.0-2'\n                      }}\n                      each\n                    </p>\n\n                    @if (!item.isAvailable) {\n                      <p class=\"availability-warning\">\n                        @if (item.availableQuantity <= 0) {\n                          This listing is currently unavailable.\n                        } @else {\n                          Only {{ item.availableQuantity }} are\n                          currently available. Reduce the quantity\n                          before checkout.\n                        }\n                      </p>\n                    }\n                  </div>\n\n                  <div class=\"quantity-section\">\n                    <span class=\"control-label\">Quantity</span>\n\n                    <div\n                      class=\"quantity-control\"\n                      aria-label=\"Item quantity\"\n                    >\n                      <button\n                        type=\"button\"\n                        aria-label=\"Decrease quantity\"\n                        [disabled]=\"\n                          isClearing() ||\n                          busyListingId() !== null ||\n                          item.quantity <= 1 ||\n                          maximumQuantity(item) < 1\n                        \"\n                        (click)=\"\n                          updateQuantity(\n                            item,\n                            item.quantity - 1\n                          )\n                        \"\n                      >\n                        \u2212\n                      </button>\n\n                      <span aria-live=\"polite\">\n                        {{ item.quantity }}\n                      </span>\n\n                      <button\n                        type=\"button\"\n                        aria-label=\"Increase quantity\"\n                        [disabled]=\"\n                          isClearing() ||\n                          busyListingId() !== null ||\n                          item.quantity >= maximumQuantity(item)\n                        \"\n                        (click)=\"\n                          updateQuantity(\n                            item,\n                            item.quantity + 1\n                          )\n                        \"\n                      >\n                        +\n                      </button>\n                    </div>\n\n                    <button\n                      class=\"remove-button\"\n                      type=\"button\"\n                      [disabled]=\"\n                        isClearing() ||\n                        busyListingId() !== null\n                      \"\n                      (click)=\"removeItem(item)\"\n                    >\n                      {{\n                        busyListingId() === item.listingId\n                          ? 'Updating\u2026'\n                          : 'Remove'\n                      }}\n                    </button>\n                  </div>\n\n                  <div class=\"line-total\">\n                    <span class=\"control-label\">Subtotal</span>\n\n                    <strong>\n                      {{\n                        item.lineTotal\n                          | currency\n                            : item.currencyCode\n                            : 'symbol'\n                            : '1.0-2'\n                      }}\n                    </strong>\n                  </div>\n                </article>\n              </li>\n            }\n          </ul>\n\n          <aside class=\"summary\" aria-labelledby=\"summary-title\">\n            <h2 id=\"summary-title\">Summary</h2>\n\n            <div class=\"summary-row\">\n              <span>Total</span>\n\n              <strong>\n                @if (currentCart.currencyCode) {\n                  {{\n                    currentCart.totalAmount\n                      | currency\n                        : currentCart.currencyCode\n                        : 'symbol'\n                        : '1.0-2'\n                  }}\n                } @else {\n                  Unavailable\n                }\n              </strong>\n            </div>\n\n            @if (!currentCart.isCheckoutReady) {\n              <p class=\"checkout-warning\">\n                Resolve unavailable items before checkout.\n              </p>\n            }\n\n            <a class=\"secondary-link\" routerLink=\"/\">\n              Continue shopping\n            </a>\n\n            <button\n              class=\"clear-button\"\n              type=\"button\"\n              [disabled]=\"\n                isClearing() ||\n                busyListingId() !== null\n              \"\n              (click)=\"clearCart()\"\n            >\n              {{ isClearing() ? 'Clearing\u2026' : 'Clear cart' }}\n            </button>\n          </aside>\n        </div>\n      }\n    }\n  </main>\n</div>\n", styles: [":host {\n  display: block;\n}\n\n.page {\n  min-height: 100vh;\n}\n\n.cart-page {\n  width: min(74rem, calc(100% - 2rem));\n  margin-inline: auto;\n  padding-block: 2.5rem 4rem;\n}\n\n.page-header {\n  display: flex;\n  align-items: end;\n  justify-content: space-between;\n  gap: 1rem;\n  padding-bottom: 1.5rem;\n  border-bottom: 1px solid rgb(215, 215, 210);\n}\n\n.eyebrow,\n.seller,\n.control-label {\n  color: rgb(90, 90, 85);\n  font-size: 0.75rem;\n  font-weight: 700;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n}\n\n.eyebrow {\n  margin: 0 0 0.5rem;\n}\n\nh1,\nh2,\np {\n  margin-top: 0;\n}\n\nh1 {\n  margin-bottom: 0;\n  font-size: 2rem;\n}\n\n.item-count {\n  margin-bottom: 0;\n  color: rgb(80, 80, 76);\n  font-size: 0.85rem;\n}\n\n.message {\n  padding: 0.8rem 1rem;\n  margin-block: 1rem 0;\n  border-left: 3px solid currentColor;\n}\n\n.message p {\n  margin-bottom: 0.5rem;\n}\n\n.message button {\n  padding: 0;\n  color: inherit;\n  background: transparent;\n  border: 0;\n  cursor: pointer;\n  font: inherit;\n  font-weight: 700;\n  text-decoration: underline;\n}\n\n.success {\n  color: rgb(33, 92, 57);\n  background: rgb(239, 248, 242);\n}\n\n.error,\n.availability-warning,\n.checkout-warning {\n  color: rgb(145, 25, 25);\n}\n\n.error {\n  background: rgb(253, 241, 241);\n}\n\n.state {\n  padding-block: 2.5rem;\n  color: rgb(80, 80, 76);\n}\n\n.empty-state {\n  text-align: center;\n}\n\n.empty-state h2 {\n  color: rgb(24, 24, 24);\n}\n\n.cart-layout {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) minmax(16rem, 20rem);\n  gap: 2rem;\n  padding-top: 1.5rem;\n}\n\n.cart-items {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n}\n\n.cart-items > li {\n  border-bottom: 1px solid rgb(215, 215, 210);\n}\n\n.cart-items > li:first-child {\n  border-top: 1px solid rgb(215, 215, 210);\n}\n\n.cart-item {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) auto minmax(7rem, auto);\n  gap: 1.5rem;\n  align-items: start;\n  padding-block: 1.25rem;\n}\n\n.item-description {\n  min-width: 0;\n}\n\n.seller {\n  margin-bottom: 0.4rem;\n}\n\n.cart-item h2 {\n  margin-bottom: 0.35rem;\n  font-size: 1.1rem;\n  overflow-wrap: anywhere;\n}\n\n.variant,\n.unit-price,\n.availability-warning,\n.checkout-warning {\n  margin-bottom: 0;\n  font-size: 0.82rem;\n  line-height: 1.5;\n}\n\n.variant,\n.unit-price {\n  color: rgb(80, 80, 76);\n}\n\n.availability-warning {\n  margin-top: 0.75rem;\n}\n\n.quantity-section,\n.line-total {\n  display: grid;\n  gap: 0.6rem;\n}\n\n.quantity-control {\n  display: grid;\n  grid-template-columns: 2.2rem 2.5rem 2.2rem;\n  align-items: center;\n  text-align: center;\n}\n\n.quantity-control button {\n  width: 2.2rem;\n  height: 2.2rem;\n  padding: 0;\n  color: rgb(24, 24, 24);\n  background: white;\n  border: 1px solid rgb(180, 180, 175);\n  cursor: pointer;\n  font: inherit;\n}\n\n.quantity-control button:disabled {\n  color: rgb(150, 150, 145);\n  background: rgb(240, 240, 236);\n  cursor: default;\n}\n\n.remove-button,\n.clear-button {\n  width: fit-content;\n  padding: 0;\n  color: rgb(120, 35, 35);\n  background: transparent;\n  border: 0;\n  cursor: pointer;\n  font: inherit;\n  font-size: 0.8rem;\n  text-decoration: underline;\n}\n\n.remove-button:disabled,\n.clear-button:disabled {\n  cursor: wait;\n  opacity: 0.55;\n}\n\n.line-total {\n  justify-items: end;\n  text-align: right;\n}\n\n.summary {\n  height: fit-content;\n  padding: 1.25rem;\n  border: 1px solid rgb(195, 195, 190);\n}\n\n.summary h2 {\n  padding-bottom: 1rem;\n  margin-bottom: 1rem;\n  border-bottom: 1px solid rgb(215, 215, 210);\n  font-size: 1.1rem;\n}\n\n.summary-row {\n  display: flex;\n  justify-content: space-between;\n  gap: 1rem;\n  font-size: 1rem;\n}\n\n.checkout-warning {\n  margin-top: 1rem;\n}\n\n.primary-link,\n.secondary-link {\n  display: inline-block;\n  color: rgb(24, 24, 24);\n  font-weight: 700;\n}\n\n.primary-link {\n  margin-top: 1rem;\n}\n\n.secondary-link {\n  margin-top: 1.5rem;\n  font-size: 0.85rem;\n}\n\n.clear-button {\n  display: block;\n  margin-top: 1rem;\n}\n\n@media (max-width: 48rem) {\n  .cart-layout {\n    grid-template-columns: 1fr;\n  }\n\n  .summary {\n    order: -1;\n  }\n}\n\n@media (max-width: 36rem) {\n  .page-header {\n    align-items: start;\n    flex-direction: column;\n  }\n\n  .cart-item {\n    grid-template-columns: 1fr auto;\n  }\n\n  .item-description {\n    grid-column: 1 / -1;\n  }\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CartPage, { className: "CartPage", filePath: "src/app/cart/cart-page/cart-page.ts", lineNumber: 26 }); })();
