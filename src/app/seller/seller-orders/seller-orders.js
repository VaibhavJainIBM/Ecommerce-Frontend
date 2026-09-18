import { CurrencyPipe, DatePipe, } from '@angular/common';
import { Component, inject, signal, } from '@angular/core';
import { finalize } from 'rxjs';
import { SellerApi } from '../seller-api';
import { SellerContext } from '../seller-context';
import { getSellerError } from '../seller-error';
import * as i0 from "@angular/core";
const _forTrack0 = ($index, $item) => $item.orderId;
const _forTrack1 = ($index, $item) => $item.orderItemId;
function SellerOrders_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵdomElementStart(0, "p", 2);
    i0.ɵɵtext(1);
    i0.ɵɵdomElementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.errorMessage(), " ");
} }
function SellerOrders_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵdomElementStart(0, "p", 3);
    i0.ɵɵtext(1);
    i0.ɵɵdomElementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.successMessage(), " ");
} }
function SellerOrders_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵdomElementStart(0, "p");
    i0.ɵɵtext(1, "Loading");
    i0.ɵɵdomElementEnd();
} }
function SellerOrders_Conditional_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵdomElementStart(0, "p");
    i0.ɵɵtext(1, "No orders");
    i0.ɵɵdomElementEnd();
} }
function SellerOrders_Conditional_9_For_2_Conditional_10_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵdomElementStart(0, "button", 1);
    i0.ɵɵdomListener("click", function SellerOrders_Conditional_9_For_2_Conditional_10_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r3); const order_r4 = i0.ɵɵnextContext().$implicit; const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.ship(order_r4)); });
    i0.ɵɵtext(1, " Ship ");
    i0.ɵɵdomElementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵdomProperty("disabled", ctx_r0.busyOrderId() !== null);
} }
function SellerOrders_Conditional_9_For_2_For_54_Conditional_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
    i0.ɵɵpipe(1, "date");
} if (rf & 2) {
    const item_r5 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(1, 1, item_r5.shippedAtUtc, "medium"), " ");
} }
function SellerOrders_Conditional_9_For_2_For_54_Conditional_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " Pending ");
} }
function SellerOrders_Conditional_9_For_2_For_54_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵdomElementStart(0, "tr")(1, "td", 11);
    i0.ɵɵtext(2);
    i0.ɵɵdomElementStart(3, "small");
    i0.ɵɵtext(4);
    i0.ɵɵdomElementEnd()();
    i0.ɵɵdomElementStart(5, "td", 12);
    i0.ɵɵtext(6);
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(7, "td", 13);
    i0.ɵɵtext(8);
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(9, "td", 14);
    i0.ɵɵtext(10);
    i0.ɵɵpipe(11, "currency");
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(12, "td", 15);
    i0.ɵɵconditionalCreate(13, SellerOrders_Conditional_9_For_2_For_54_Conditional_13_Template, 2, 4)(14, SellerOrders_Conditional_9_For_2_For_54_Conditional_14_Template, 1, 0);
    i0.ɵɵdomElementEnd()();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", item_r5.productTitle, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", item_r5.variantName, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r5.sellerSku);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r5.quantity);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(11, 6, item_r5.lineTotal, item_r5.currencyCode), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵconditional(item_r5.shippedAtUtc ? 13 : 14);
} }
function SellerOrders_Conditional_9_For_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵdomElementStart(0, "article", 5)(1, "header", 7)(2, "div")(3, "h3");
    i0.ɵɵtext(4);
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(5, "span");
    i0.ɵɵtext(6);
    i0.ɵɵdomElementEnd()();
    i0.ɵɵdomElementStart(7, "div", 8);
    i0.ɵɵtext(8);
    i0.ɵɵpipe(9, "currency");
    i0.ɵɵdomElementEnd();
    i0.ɵɵconditionalCreate(10, SellerOrders_Conditional_9_For_2_Conditional_10_Template, 2, 1, "button", 9);
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(11, "dl")(12, "div")(13, "dt");
    i0.ɵɵtext(14, "Customer");
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(15, "dd");
    i0.ɵɵtext(16);
    i0.ɵɵdomElementEnd()();
    i0.ɵɵdomElementStart(17, "div")(18, "dt");
    i0.ɵɵtext(19, "Phone");
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(20, "dd");
    i0.ɵɵtext(21);
    i0.ɵɵdomElementEnd()();
    i0.ɵɵdomElementStart(22, "div")(23, "dt");
    i0.ɵɵtext(24, "Address");
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(25, "dd");
    i0.ɵɵtext(26);
    i0.ɵɵdomElementEnd()();
    i0.ɵɵdomElementStart(27, "div")(28, "dt");
    i0.ɵɵtext(29, "Created");
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(30, "dd");
    i0.ɵɵtext(31);
    i0.ɵɵpipe(32, "date");
    i0.ɵɵdomElementEnd()();
    i0.ɵɵdomElementStart(33, "div")(34, "dt");
    i0.ɵɵtext(35, "Payment mode");
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(36, "dd");
    i0.ɵɵtext(37);
    i0.ɵɵdomElementEnd()()();
    i0.ɵɵdomElementStart(38, "div", 10)(39, "table")(40, "thead")(41, "tr")(42, "th");
    i0.ɵɵtext(43, "Product");
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(44, "th");
    i0.ɵɵtext(45, "SKU");
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(46, "th");
    i0.ɵɵtext(47, "Quantity");
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(48, "th");
    i0.ɵɵtext(49, "Price");
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(50, "th");
    i0.ɵɵtext(51, "Shipment");
    i0.ɵɵdomElementEnd()()();
    i0.ɵɵdomElementStart(52, "tbody");
    i0.ɵɵrepeaterCreate(53, SellerOrders_Conditional_9_For_2_For_54_Template, 15, 9, "tr", null, _forTrack1);
    i0.ɵɵdomElementEnd()()()();
} if (rf & 2) {
    const order_r4 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(order_r4.orderNumber);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(order_r4.status);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(9, 9, order_r4.sellerSubtotal, order_r4.currencyCode), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r0.canShip(order_r4) ? 10 : -1);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(order_r4.recipientName);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(order_r4.phone);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.formatAddress(order_r4.shippingAddress), " ");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(32, 12, order_r4.createdAtUtc, "medium"), " ");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(order_r4.paymentMode || "None");
    i0.ɵɵadvance(16);
    i0.ɵɵrepeater(order_r4.items);
} }
function SellerOrders_Conditional_9_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵdomElementStart(0, "div", 4);
    i0.ɵɵrepeaterCreate(1, SellerOrders_Conditional_9_For_2_Template, 55, 15, "article", 5, _forTrack0);
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(3, "div", 6)(4, "button", 1);
    i0.ɵɵdomListener("click", function SellerOrders_Conditional_9_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.loadOrders(ctx_r0.page() - 1)); });
    i0.ɵɵtext(5, " Previous ");
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(6, "span");
    i0.ɵɵtext(7);
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(8, "button", 1);
    i0.ɵɵdomListener("click", function SellerOrders_Conditional_9_Template_button_click_8_listener() { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.loadOrders(ctx_r0.page() + 1)); });
    i0.ɵɵtext(9, " Next ");
    i0.ɵɵdomElementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r0.orders());
    i0.ɵɵadvance(3);
    i0.ɵɵdomProperty("disabled", ctx_r0.page() <= 1);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("Page ", ctx_r0.page());
    i0.ɵɵadvance();
    i0.ɵɵdomProperty("disabled", !ctx_r0.hasNextPage());
} }
export class SellerOrders {
    sellerApi = inject(SellerApi);
    sellerContext = inject(SellerContext);
    orders = signal([], /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "orders" }] : /* istanbul ignore next */ []));
    page = signal(1, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "page" }] : /* istanbul ignore next */ []));
    totalCount = signal(0, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "totalCount" }] : /* istanbul ignore next */ []));
    pageSize = 20;
    isLoading = signal(false, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "isLoading" }] : /* istanbul ignore next */ []));
    busyOrderId = signal(null, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "busyOrderId" }] : /* istanbul ignore next */ []));
    errorMessage = signal('', /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "errorMessage" }] : /* istanbul ignore next */ []));
    successMessage = signal('', /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "successMessage" }] : /* istanbul ignore next */ []));
    ngOnInit() {
        this.loadOrders();
    }
    get sellerId() {
        const sellerId = this.sellerContext.selected()?.sellerId;
        if (!sellerId) {
            throw new Error('No seller is selected.');
        }
        return sellerId;
    }
    loadOrders(page = 1) {
        if (page < 1) {
            return;
        }
        this.isLoading.set(true);
        this.errorMessage.set('');
        this.sellerApi
            .getOrders(this.sellerId, page, this.pageSize)
            .pipe(finalize(() => this.isLoading.set(false)))
            .subscribe({
            next: (response) => {
                this.orders.set(response.items);
                this.page.set(response.page);
                this.totalCount.set(response.totalCount);
            },
            error: (error) => {
                this.errorMessage.set(getSellerError(error, 'Could not load orders.'));
            },
        });
    }
    hasNextPage() {
        return (this.page() * this.pageSize <
            this.totalCount());
    }
    canShip(order) {
        return ((order.status === 'Paid' ||
            order.status === 'PartiallyShipped') &&
            order.items.some((item) => item.shippedAtUtc === null));
    }
    ship(order) {
        if (!this.canShip(order) ||
            !window.confirm('Ship all unshipped items in this order?')) {
            return;
        }
        this.busyOrderId.set(order.orderId);
        this.errorMessage.set('');
        this.successMessage.set('');
        this.sellerApi
            .shipOrder(this.sellerId, order.orderId)
            .pipe(finalize(() => this.busyOrderId.set(null)))
            .subscribe({
            next: (updated) => {
                this.orders.update((orders) => orders.map((current) => current.orderId === updated.orderId
                    ? updated
                    : current));
                this.successMessage.set('Order items shipped.');
            },
            error: (error) => {
                this.errorMessage.set(getSellerError(error, 'Could not ship the order.'));
            },
        });
    }
    formatAddress(address) {
        return [
            address.line1,
            address.line2,
            address.city,
            address.stateOrProvince,
            address.postalCode,
            address.countryCode,
        ]
            .filter((value) => Boolean(value))
            .join(', ');
    }
    static ɵfac = function SellerOrders_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SellerOrders)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SellerOrders, selectors: [["app-seller-orders"]], decls: 10, vars: 4, consts: [[1, "pageHeader"], ["type", "button", 3, "click", "disabled"], ["role", "alert", 1, "message", "error"], ["role", "status", 1, "message", "success"], [1, "orderList"], [1, "order"], [1, "pagination"], [1, "orderHeader"], [1, "orderTotal"], ["type", "button", 3, "disabled"], [1, "tableWrap"], ["data-label", "Product"], ["data-label", "SKU"], ["data-label", "Quantity"], ["data-label", "Price"], ["data-label", "Shipment"]], template: function SellerOrders_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵdomElementStart(0, "header", 0)(1, "h2");
            i0.ɵɵtext(2, "Orders");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(3, "button", 1);
            i0.ɵɵdomListener("click", function SellerOrders_Template_button_click_3_listener() { return ctx.loadOrders(ctx.page()); });
            i0.ɵɵtext(4, " Refresh ");
            i0.ɵɵdomElementEnd()();
            i0.ɵɵconditionalCreate(5, SellerOrders_Conditional_5_Template, 2, 1, "p", 2);
            i0.ɵɵconditionalCreate(6, SellerOrders_Conditional_6_Template, 2, 1, "p", 3);
            i0.ɵɵconditionalCreate(7, SellerOrders_Conditional_7_Template, 2, 0, "p")(8, SellerOrders_Conditional_8_Template, 2, 0, "p")(9, SellerOrders_Conditional_9_Template, 10, 3);
        } if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵdomProperty("disabled", ctx.isLoading());
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.errorMessage() ? 5 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.successMessage() ? 6 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.isLoading() ? 7 : ctx.orders().length === 0 ? 8 : 9);
        } }, dependencies: [CurrencyPipe,
            DatePipe], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.pageHeader[_ngcontent-%COMP%], \n.orderHeader[_ngcontent-%COMP%], \n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n}\n\nh2[_ngcontent-%COMP%], \nh3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 600;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n\nh3[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n}\n\nbutton[_ngcontent-%COMP%] {\n  min-height: 2.4rem;\n  padding: 0.5rem 0.65rem;\n  color: rgb(24, 24, 24);\n  background: white;\n  border: 1px solid rgb(165, 165, 160);\n  border-radius: 0;\n  font: inherit;\n  cursor: pointer;\n}\n\nbutton[_ngcontent-%COMP%]:disabled {\n  cursor: default;\n  opacity: 0.55;\n}\n\n.message[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  border-left: 2px solid;\n}\n\n.error[_ngcontent-%COMP%] {\n  color: rgb(145, 25, 25);\n}\n\n.success[_ngcontent-%COMP%] {\n  color: rgb(30, 100, 55);\n}\n\n.orderList[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n}\n\n.order[_ngcontent-%COMP%] {\n  padding: 1.25rem 0;\n  border-top: 1px solid rgb(200, 200, 195);\n}\n\n.orderHeader[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child {\n  display: grid;\n  gap: 0.25rem;\n}\n\n.orderHeader[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: rgb(80, 80, 76);\n  font-size: 0.85rem;\n}\n\n.orderTotal[_ngcontent-%COMP%] {\n  margin-left: auto;\n  font-weight: 700;\n}\n\ndl[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0;\n  margin: 1rem 0;\n  border-top: 1px solid rgb(220, 220, 215);\n}\n\ndl[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 7rem 1fr;\n  gap: 0.7rem;\n  padding: 0.6rem;\n  border-bottom: 1px solid rgb(220, 220, 215);\n}\n\ndt[_ngcontent-%COMP%] {\n  color: rgb(80, 80, 76);\n}\n\ndd[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.tableWrap[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n\nth[_ngcontent-%COMP%], \ntd[_ngcontent-%COMP%] {\n  padding: 0.65rem;\n  border-bottom: 1px solid rgb(220, 220, 215);\n  text-align: left;\n  vertical-align: top;\n}\n\nth[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n}\n\ntd[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n  color: rgb(80, 80, 76);\n}\n\n.pagination[_ngcontent-%COMP%] {\n  padding-top: 1rem;\n}\n\n@media (max-width: 44rem) {\n  dl[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n\n  .orderHeader[_ngcontent-%COMP%] {\n    align-items: start;\n    flex-wrap: wrap;\n  }\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SellerOrders, [{
        type: Component,
        args: [{ selector: 'app-seller-orders', imports: [
                    CurrencyPipe,
                    DatePipe,
                ], template: "<header class=\"pageHeader\">\n  <h2>Orders</h2>\n\n  <button\n    type=\"button\"\n    [disabled]=\"isLoading()\"\n    (click)=\"loadOrders(page())\"\n  >\n    Refresh\n  </button>\n</header>\n\n@if (errorMessage()) {\n  <p class=\"message error\" role=\"alert\">\n    {{ errorMessage() }}\n  </p>\n}\n\n@if (successMessage()) {\n  <p class=\"message success\" role=\"status\">\n    {{ successMessage() }}\n  </p>\n}\n\n@if (isLoading()) {\n  <p>Loading</p>\n} @else if (orders().length === 0) {\n  <p>No orders</p>\n} @else {\n  <div class=\"orderList\">\n    @for (\n      order of orders();\n      track order.orderId\n    ) {\n      <article class=\"order\">\n        <header class=\"orderHeader\">\n          <div>\n            <h3>{{ order.orderNumber }}</h3>\n            <span>{{ order.status }}</span>\n          </div>\n\n          <div class=\"orderTotal\">\n            {{\n              order.sellerSubtotal\n                | currency: order.currencyCode\n            }}\n          </div>\n\n          @if (canShip(order)) {\n            <button\n              type=\"button\"\n              [disabled]=\"\n                busyOrderId() !== null\n              \"\n              (click)=\"ship(order)\"\n            >\n              Ship\n            </button>\n          }\n        </header>\n\n        <dl>\n          <div>\n            <dt>Customer</dt>\n            <dd>{{ order.recipientName }}</dd>\n          </div>\n          <div>\n            <dt>Phone</dt>\n            <dd>{{ order.phone }}</dd>\n          </div>\n          <div>\n            <dt>Address</dt>\n            <dd>\n              {{\n                formatAddress(\n                  order.shippingAddress\n                )\n              }}\n            </dd>\n          </div>\n          <div>\n            <dt>Created</dt>\n            <dd>\n              {{\n                order.createdAtUtc\n                  | date: 'medium'\n              }}\n            </dd>\n          </div>\n          <div>\n            <dt>Payment mode</dt>\n            <dd>{{ order.paymentMode || 'None' }}</dd>\n          </div>\n        </dl>\n\n        <div class=\"tableWrap\">\n          <table>\n            <thead>\n              <tr>\n                <th>Product</th>\n                <th>SKU</th>\n                <th>Quantity</th>\n                <th>Price</th>\n                <th>Shipment</th>\n              </tr>\n            </thead>\n\n            <tbody>\n              @for (\n                item of order.items;\n                track item.orderItemId\n              ) {\n                <tr>\n                  <td data-label=\"Product\">\n                    {{ item.productTitle }}\n                    <small>\n                      {{ item.variantName }}\n                    </small>\n                  </td>\n                  <td data-label=\"SKU\">{{ item.sellerSku }}</td>\n                  <td data-label=\"Quantity\">{{ item.quantity }}</td>\n                  <td data-label=\"Price\">\n                    {{\n                      item.lineTotal\n                        | currency:\n                          item.currencyCode\n                    }}\n                  </td>\n                  <td data-label=\"Shipment\">\n                    @if (item.shippedAtUtc) {\n                      {{\n                        item.shippedAtUtc\n                          | date: 'medium'\n                      }}\n                    } @else {\n                      Pending\n                    }\n                  </td>\n                </tr>\n              }\n            </tbody>\n          </table>\n        </div>\n      </article>\n    }\n  </div>\n\n  <div class=\"pagination\">\n    <button\n      type=\"button\"\n      [disabled]=\"page() <= 1\"\n      (click)=\"loadOrders(page() - 1)\"\n    >\n      Previous\n    </button>\n\n    <span>Page {{ page() }}</span>\n\n    <button\n      type=\"button\"\n      [disabled]=\"!hasNextPage()\"\n      (click)=\"loadOrders(page() + 1)\"\n    >\n      Next\n    </button>\n  </div>\n}\n", styles: [":host {\n  display: block;\n}\n\n.pageHeader,\n.orderHeader,\n.pagination {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n}\n\nh2,\nh3 {\n  margin: 0;\n  font-weight: 600;\n}\n\nh2 {\n  font-size: 1.5rem;\n}\n\nh3 {\n  font-size: 1.05rem;\n}\n\nbutton {\n  min-height: 2.4rem;\n  padding: 0.5rem 0.65rem;\n  color: rgb(24, 24, 24);\n  background: white;\n  border: 1px solid rgb(165, 165, 160);\n  border-radius: 0;\n  font: inherit;\n  cursor: pointer;\n}\n\nbutton:disabled {\n  cursor: default;\n  opacity: 0.55;\n}\n\n.message {\n  padding: 0.75rem;\n  border-left: 2px solid;\n}\n\n.error {\n  color: rgb(145, 25, 25);\n}\n\n.success {\n  color: rgb(30, 100, 55);\n}\n\n.orderList {\n  margin-top: 1.5rem;\n}\n\n.order {\n  padding: 1.25rem 0;\n  border-top: 1px solid rgb(200, 200, 195);\n}\n\n.orderHeader > div:first-child {\n  display: grid;\n  gap: 0.25rem;\n}\n\n.orderHeader span {\n  color: rgb(80, 80, 76);\n  font-size: 0.85rem;\n}\n\n.orderTotal {\n  margin-left: auto;\n  font-weight: 700;\n}\n\ndl {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0;\n  margin: 1rem 0;\n  border-top: 1px solid rgb(220, 220, 215);\n}\n\ndl div {\n  display: grid;\n  grid-template-columns: 7rem 1fr;\n  gap: 0.7rem;\n  padding: 0.6rem;\n  border-bottom: 1px solid rgb(220, 220, 215);\n}\n\ndt {\n  color: rgb(80, 80, 76);\n}\n\ndd {\n  margin: 0;\n}\n\n.tableWrap {\n  min-width: 0;\n}\n\ntable {\n  width: 100%;\n  border-collapse: collapse;\n}\n\nth,\ntd {\n  padding: 0.65rem;\n  border-bottom: 1px solid rgb(220, 220, 215);\n  text-align: left;\n  vertical-align: top;\n}\n\nth {\n  font-size: 0.75rem;\n}\n\ntd small {\n  display: block;\n  color: rgb(80, 80, 76);\n}\n\n.pagination {\n  padding-top: 1rem;\n}\n\n@media (max-width: 44rem) {\n  dl {\n    grid-template-columns: 1fr;\n  }\n\n  .orderHeader {\n    align-items: start;\n    flex-wrap: wrap;\n  }\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SellerOrders, { className: "SellerOrders", filePath: "src/app/seller/seller-orders/seller-orders.ts", lineNumber: 31 }); })();
