import { DatePipe } from '@angular/common';
import { Component, inject, signal, } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators, } from '@angular/forms';
import { finalize, forkJoin, of, } from 'rxjs';
import { SellerApi } from '../seller-api';
import { SellerContext } from '../seller-context';
import { getSellerError } from '../seller-error';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
const _forTrack0 = ($index, $item) => $item.warehouseId;
const _forTrack1 = ($index, $item) => $item.listingId;
const _forTrack2 = ($index, $item) => $item.inventoryItemId;
function SellerInventory_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 2);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.errorMessage(), " ");
} }
function SellerInventory_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 3);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.successMessage(), " ");
} }
function SellerInventory_Conditional_7_For_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 8);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const warehouse_r3 = ctx.$implicit;
    i0.ɵɵproperty("value", warehouse_r3.warehouseId);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2(" ", warehouse_r3.name, " ", warehouse_r3.code, " ");
} }
function SellerInventory_Conditional_7_For_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 8);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const listing_r4 = ctx.$implicit;
    i0.ɵɵproperty("value", listing_r4.listingId);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate3(" ", listing_r4.productTitle, " ", listing_r4.variantName, " ", listing_r4.sellerSku, " ");
} }
function SellerInventory_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section")(1, "h3");
    i0.ɵɵtext(2, "Create inventory item");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "form", 5);
    i0.ɵɵlistener("ngSubmit", function SellerInventory_Conditional_7_Template_form_ngSubmit_3_listener() { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.createInventory()); });
    i0.ɵɵelementStart(4, "label");
    i0.ɵɵtext(5, " Warehouse ");
    i0.ɵɵelementStart(6, "select", 6)(7, "option", 7);
    i0.ɵɵtext(8, "Select");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(9, SellerInventory_Conditional_7_For_10_Template, 2, 3, "option", 8, _forTrack0);
    i0.ɵɵelementEnd();
    i0.ɵɵcontrolCreate();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "label");
    i0.ɵɵtext(12, " Listing ");
    i0.ɵɵelementStart(13, "select", 9)(14, "option", 7);
    i0.ɵɵtext(15, "Select");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(16, SellerInventory_Conditional_7_For_17_Template, 2, 4, "option", 8, _forTrack1);
    i0.ɵɵelementEnd();
    i0.ɵɵcontrolCreate();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "label");
    i0.ɵɵtext(19, " Initial quantity ");
    i0.ɵɵelement(20, "input", 10);
    i0.ɵɵcontrolCreate();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "button", 11);
    i0.ɵɵtext(22);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("formGroup", ctx_r0.createForm);
    i0.ɵɵadvance(3);
    i0.ɵɵcontrol();
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r0.warehouses());
    i0.ɵɵadvance(4);
    i0.ɵɵcontrol();
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r0.listingOptions());
    i0.ɵɵadvance(4);
    i0.ɵɵcontrol();
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r0.isSaving() || !ctx_r0.canCreateInventory());
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.isSaving() ? "Saving" : "Create", " ");
} }
function SellerInventory_Conditional_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1, "Loading");
    i0.ɵɵelementEnd();
} }
function SellerInventory_Conditional_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1, "No inventory");
    i0.ɵɵelementEnd();
} }
function SellerInventory_Conditional_13_For_22_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr")(1, "td", 12);
    i0.ɵɵtext(2);
    i0.ɵɵelementStart(3, "small");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "td", 13);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "td", 14);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "td", 15);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "td", 16);
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "td", 17)(14, "div", 18)(15, "input", 19);
    i0.ɵɵlistener("input", function SellerInventory_Conditional_13_For_22_Template_input_input_15_listener($event) { const item_r6 = i0.ɵɵrestoreView(_r5).$implicit; const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.changeQuantityDraft(item_r6, "receive", $event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "button", 1);
    i0.ɵɵlistener("click", function SellerInventory_Conditional_13_For_22_Template_button_click_16_listener() { const item_r6 = i0.ɵɵrestoreView(_r5).$implicit; const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.receive(item_r6)); });
    i0.ɵɵtext(17, " Receive ");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(18, "td", 20)(19, "div", 18)(20, "input", 21);
    i0.ɵɵlistener("input", function SellerInventory_Conditional_13_For_22_Template_input_input_20_listener($event) { const item_r6 = i0.ɵɵrestoreView(_r5).$implicit; const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.changeQuantityDraft(item_r6, "adjust", $event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "button", 1);
    i0.ɵɵlistener("click", function SellerInventory_Conditional_13_For_22_Template_button_click_21_listener() { const item_r6 = i0.ɵɵrestoreView(_r5).$implicit; const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.adjust(item_r6)); });
    i0.ɵɵtext(22, " Set ");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(23, "td", 22)(24, "button", 23);
    i0.ɵɵlistener("click", function SellerInventory_Conditional_13_For_22_Template_button_click_24_listener() { const item_r6 = i0.ɵɵrestoreView(_r5).$implicit; const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.loadItem(item_r6.inventoryItemId)); });
    i0.ɵɵtext(25, " Open ");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", item_r6.warehouseName, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r6.warehouseCode);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r6.sellerSku);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", item_r6.onHandQuantity, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", item_r6.reservedQuantity, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", item_r6.availableQuantity, " ");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("disabled", ctx_r0.busyItemId() !== null || !ctx_r0.sellerIsActive());
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("min", item_r6.reservedQuantity)("value", item_r6.onHandQuantity);
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r0.busyItemId() !== null || !ctx_r0.sellerIsActive());
} }
function SellerInventory_Conditional_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4)(1, "table")(2, "thead")(3, "tr")(4, "th");
    i0.ɵɵtext(5, "Warehouse");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "th");
    i0.ɵɵtext(7, "SKU");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "th");
    i0.ɵɵtext(9, "On hand");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "th");
    i0.ɵɵtext(11, "Reserved");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "th");
    i0.ɵɵtext(13, "Available");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "th");
    i0.ɵɵtext(15, "Receive");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "th");
    i0.ɵɵtext(17, "Adjust");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "th");
    i0.ɵɵtext(19, "Details");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(20, "tbody");
    i0.ɵɵrepeaterCreate(21, SellerInventory_Conditional_13_For_22_Template, 26, 10, "tr", null, _forTrack2);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(21);
    i0.ɵɵrepeater(ctx_r0.inventory());
} }
function SellerInventory_Conditional_14_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section")(1, "div", 24)(2, "h3");
    i0.ɵɵtext(3, "Inventory details");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "button", 23);
    i0.ɵɵlistener("click", function SellerInventory_Conditional_14_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r7); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.selectedItem.set(null)); });
    i0.ɵɵtext(5, " Close ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "dl")(7, "div")(8, "dt");
    i0.ɵɵtext(9, "Warehouse");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "dd");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "div")(13, "dt");
    i0.ɵɵtext(14, "Warehouse code");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "dd");
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(17, "div")(18, "dt");
    i0.ɵɵtext(19, "SKU");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "dd");
    i0.ɵɵtext(21);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(22, "div")(23, "dt");
    i0.ɵɵtext(24, "On hand");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "dd");
    i0.ɵɵtext(26);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(27, "div")(28, "dt");
    i0.ɵɵtext(29, "Reserved");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "dd");
    i0.ɵɵtext(31);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(32, "div")(33, "dt");
    i0.ɵɵtext(34, "Available");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(35, "dd");
    i0.ɵɵtext(36);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(37, "div")(38, "dt");
    i0.ɵɵtext(39, "Created");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(40, "dd");
    i0.ɵɵtext(41);
    i0.ɵɵpipe(42, "date");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const item_r8 = ctx;
    i0.ɵɵadvance(11);
    i0.ɵɵtextInterpolate(item_r8.warehouseName);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(item_r8.warehouseCode);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(item_r8.sellerSku);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(item_r8.onHandQuantity);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(item_r8.reservedQuantity);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(item_r8.availableQuantity);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(42, 7, item_r8.createdAtUtc, "medium"), " ");
} }
export class SellerInventory {
    sellerApi = inject(SellerApi);
    sellerContext = inject(SellerContext);
    inventory = signal([], /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "inventory" }] : /* istanbul ignore next */ []));
    warehouses = signal([], /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "warehouses" }] : /* istanbul ignore next */ []));
    listingOptions = signal([], /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "listingOptions" }] : /* istanbul ignore next */ []));
    selectedItem = signal(null, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "selectedItem" }] : /* istanbul ignore next */ []));
    isLoading = signal(false, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "isLoading" }] : /* istanbul ignore next */ []));
    isSaving = signal(false, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "isSaving" }] : /* istanbul ignore next */ []));
    busyItemId = signal(null, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "busyItemId" }] : /* istanbul ignore next */ []));
    receiveDrafts = new Map();
    adjustDrafts = new Map();
    errorMessage = signal('', /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "errorMessage" }] : /* istanbul ignore next */ []));
    successMessage = signal('', /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "successMessage" }] : /* istanbul ignore next */ []));
    createForm = new FormGroup({
        warehouseId: new FormControl('', {
            nonNullable: true,
            validators: [Validators.required],
        }),
        sellerListingId: new FormControl('', {
            nonNullable: true,
            validators: [Validators.required],
        }),
        initialQuantity: new FormControl(0, {
            nonNullable: true,
            validators: [
                Validators.required,
                Validators.min(0),
                Validators.pattern(/^\d+$/),
            ],
        }),
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
    sellerIsActive() {
        return (this.sellerContext.selected()
            ?.sellerStatus === 'Active');
    }
    canCreateInventory() {
        return (this.sellerContext.canManage() &&
            this.sellerIsActive());
    }
    load() {
        this.isLoading.set(true);
        this.errorMessage.set('');
        const emptyListings = {
            items: [],
            page: 1,
            pageSize: 100,
            totalCount: 0,
            totalPages: 0,
        };
        const listingsRequest = this.sellerContext.canManage()
            ? this.sellerApi.getListings(this.sellerId, {
                page: 1,
                pageSize: 100,
            })
            : of(emptyListings);
        forkJoin({
            inventory: this.sellerApi.getInventory(this.sellerId),
            warehouses: this.sellerApi.getWarehouses(this.sellerId),
            listings: listingsRequest,
        })
            .pipe(finalize(() => this.isLoading.set(false)))
            .subscribe({
            next: ({ inventory, warehouses, listings, }) => {
                this.inventory.set(inventory);
                this.warehouses.set(warehouses.filter((warehouse) => warehouse.status === 'Active'));
                this.listingOptions.set(listings.items.filter((listing) => listing.status !== 'Archived'));
            },
            error: (error) => {
                this.errorMessage.set(getSellerError(error, 'Could not load inventory.'));
            },
        });
    }
    loadItem(inventoryItemId) {
        this.errorMessage.set('');
        this.sellerApi
            .getInventoryItem(this.sellerId, inventoryItemId)
            .subscribe({
            next: (item) => {
                this.selectedItem.set(item);
            },
            error: (error) => {
                this.errorMessage.set(getSellerError(error, 'Could not load the inventory item.'));
            },
        });
    }
    createInventory() {
        this.errorMessage.set('');
        this.successMessage.set('');
        if (this.createForm.invalid ||
            !this.canCreateInventory()) {
            this.createForm.markAllAsTouched();
            this.errorMessage.set('Complete the inventory form.');
            return;
        }
        const value = this.createForm.getRawValue();
        this.isSaving.set(true);
        this.sellerApi
            .createInventoryItem(this.sellerId, value)
            .pipe(finalize(() => this.isSaving.set(false)))
            .subscribe({
            next: (item) => {
                this.selectedItem.set(item);
                this.successMessage.set('Inventory item created.');
                this.createForm.reset({
                    warehouseId: '',
                    sellerListingId: '',
                    initialQuantity: 0,
                });
                this.load();
            },
            error: (error) => {
                this.errorMessage.set(getSellerError(error, 'Could not create inventory.'));
            },
        });
    }
    receive(item) {
        const quantityText = this.receiveDrafts.get(item.inventoryItemId) ?? '1';
        const quantity = Number(quantityText);
        if (!Number.isInteger(quantity) ||
            quantity <= 0) {
            this.errorMessage.set('Receive quantity must be a positive whole number.');
            return;
        }
        this.runStockAction(item, this.sellerApi.receiveInventory(this.sellerId, item.inventoryItemId, {
            quantity,
            rowVersion: item.rowVersion,
        }), 'Stock received.');
    }
    adjust(item) {
        const quantityText = this.adjustDrafts.get(item.inventoryItemId) ?? String(item.onHandQuantity);
        const quantity = Number(quantityText);
        if (!Number.isInteger(quantity) ||
            quantity < item.reservedQuantity) {
            this.errorMessage.set('On hand quantity cannot be below reserved quantity.');
            return;
        }
        this.runStockAction(item, this.sellerApi.adjustInventory(this.sellerId, item.inventoryItemId, {
            quantity,
            rowVersion: item.rowVersion,
        }), 'Stock adjusted.');
    }
    changeQuantityDraft(item, kind, event) {
        const value = event.target.value;
        const drafts = kind === 'receive'
            ? this.receiveDrafts
            : this.adjustDrafts;
        drafts.set(item.inventoryItemId, value);
    }
    runStockAction(item, request, message) {
        if (!this.sellerIsActive()) {
            return;
        }
        this.busyItemId.set(item.inventoryItemId);
        this.errorMessage.set('');
        this.successMessage.set('');
        request
            .pipe(finalize(() => this.busyItemId.set(null)))
            .subscribe({
            next: (updated) => {
                this.replaceItem(updated);
                this.selectedItem.set(updated);
                this.receiveDrafts.set(updated.inventoryItemId, '1');
                this.adjustDrafts.set(updated.inventoryItemId, String(updated.onHandQuantity));
                this.successMessage.set(message);
            },
            error: (error) => {
                this.errorMessage.set(getSellerError(error, 'Could not update stock.'));
                if (error.status === 409) {
                    this.load();
                }
            },
        });
    }
    replaceItem(updated) {
        this.inventory.update((items) => items.map((item) => item.inventoryItemId ===
            updated.inventoryItemId
            ? updated
            : item));
    }
    static ɵfac = function SellerInventory_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SellerInventory)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SellerInventory, selectors: [["app-seller-inventory"]], decls: 15, vars: 6, consts: [[1, "pageHeader"], ["type", "button", 3, "click", "disabled"], ["role", "alert", 1, "message", "error"], ["role", "status", 1, "message", "success"], [1, "tableWrap"], [1, "createForm", 3, "ngSubmit", "formGroup"], ["formControlName", "warehouseId"], ["value", ""], [3, "value"], ["formControlName", "sellerListingId"], ["type", "number", "formControlName", "initialQuantity", "min", "0", "step", "1"], ["type", "submit", 3, "disabled"], ["data-label", "Warehouse"], ["data-label", "SKU"], ["data-label", "On hand"], ["data-label", "Reserved"], ["data-label", "Available"], ["data-label", "Receive"], [1, "quantityAction"], ["type", "number", "min", "1", "step", "1", "value", "1", 3, "input"], ["data-label", "Adjust"], ["type", "number", "step", "1", 3, "input", "min", "value"], ["data-label", "Details"], ["type", "button", 3, "click"], [1, "sectionHeader"]], template: function SellerInventory_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "header", 0)(1, "h2");
            i0.ɵɵtext(2, "Inventory");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "button", 1);
            i0.ɵɵlistener("click", function SellerInventory_Template_button_click_3_listener() { return ctx.load(); });
            i0.ɵɵtext(4, " Refresh ");
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(5, SellerInventory_Conditional_5_Template, 2, 1, "p", 2);
            i0.ɵɵconditionalCreate(6, SellerInventory_Conditional_6_Template, 2, 1, "p", 3);
            i0.ɵɵconditionalCreate(7, SellerInventory_Conditional_7_Template, 23, 3, "section");
            i0.ɵɵelementStart(8, "section")(9, "h3");
            i0.ɵɵtext(10, "Stock");
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(11, SellerInventory_Conditional_11_Template, 2, 0, "p")(12, SellerInventory_Conditional_12_Template, 2, 0, "p")(13, SellerInventory_Conditional_13_Template, 23, 0, "div", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(14, SellerInventory_Conditional_14_Template, 43, 10, "section");
        } if (rf & 2) {
            let tmp_5_0;
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("disabled", ctx.isLoading());
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.errorMessage() ? 5 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.successMessage() ? 6 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.sellerContext.canManage() ? 7 : -1);
            i0.ɵɵadvance(4);
            i0.ɵɵconditional(ctx.isLoading() ? 11 : ctx.inventory().length === 0 ? 12 : 13);
            i0.ɵɵadvance(3);
            i0.ɵɵconditional((tmp_5_0 = ctx.selectedItem()) ? 14 : -1, tmp_5_0);
        } }, dependencies: [ReactiveFormsModule, i1.ɵNgNoValidate, i1.NgSelectOption, i1.ɵNgSelectMultipleOption, i1.DefaultValueAccessor, i1.NumberValueAccessor, i1.SelectControlValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.MinValidator, i1.FormGroupDirective, i1.FormControlName, DatePipe], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.pageHeader[_ngcontent-%COMP%], \n.sectionHeader[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n}\n\nh2[_ngcontent-%COMP%], \nh3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 600;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n\nh3[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n}\n\nsection[_ngcontent-%COMP%] {\n  padding-top: 1.5rem;\n  margin-top: 1.5rem;\n  border-top: 1px solid rgb(215, 215, 210);\n}\n\n.createForm[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1.5fr 9rem auto;\n  gap: 1rem;\n  align-items: end;\n  margin-top: 1rem;\n}\n\nlabel[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.4rem;\n  font-size: 0.8rem;\n  font-weight: 600;\n}\n\ninput[_ngcontent-%COMP%], \nselect[_ngcontent-%COMP%], \nbutton[_ngcontent-%COMP%] {\n  min-height: 2.4rem;\n  padding: 0.5rem 0.65rem;\n  color: rgb(24, 24, 24);\n  background: white;\n  border: 1px solid rgb(165, 165, 160);\n  border-radius: 0;\n  font: inherit;\n}\n\nbutton[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\nbutton[_ngcontent-%COMP%]:disabled {\n  cursor: default;\n  opacity: 0.55;\n}\n\n.message[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  border-left: 2px solid;\n}\n\n.error[_ngcontent-%COMP%] {\n  color: rgb(145, 25, 25);\n}\n\n.success[_ngcontent-%COMP%] {\n  color: rgb(30, 100, 55);\n}\n\n.tableWrap[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  min-width: 0;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n\nth[_ngcontent-%COMP%], \ntd[_ngcontent-%COMP%] {\n  padding: 0.65rem;\n  border-bottom: 1px solid rgb(220, 220, 215);\n  text-align: left;\n  vertical-align: top;\n}\n\nth[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n}\n\ntd[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n  color: rgb(80, 80, 76);\n}\n\n.quantityAction[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.4rem;\n}\n\n.quantityAction[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 5rem;\n}\n\ndl[_ngcontent-%COMP%] {\n  border-top: 1px solid rgb(215, 215, 210);\n}\n\ndl[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 10rem 1fr;\n  gap: 1rem;\n  padding: 0.7rem 0;\n  border-bottom: 1px solid rgb(220, 220, 215);\n}\n\ndt[_ngcontent-%COMP%] {\n  color: rgb(80, 80, 76);\n}\n\ndd[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n@media (max-width: 56rem) {\n  .createForm[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n\n@media (max-width: 40rem) {\n  .createForm[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SellerInventory, [{
        type: Component,
        args: [{ selector: 'app-seller-inventory', imports: [
                    ReactiveFormsModule,
                    DatePipe,
                ], template: "<header class=\"pageHeader\">\n  <h2>Inventory</h2>\n\n  <button\n    type=\"button\"\n    [disabled]=\"isLoading()\"\n    (click)=\"load()\"\n  >\n    Refresh\n  </button>\n</header>\n\n@if (errorMessage()) {\n  <p class=\"message error\" role=\"alert\">\n    {{ errorMessage() }}\n  </p>\n}\n\n@if (successMessage()) {\n  <p class=\"message success\" role=\"status\">\n    {{ successMessage() }}\n  </p>\n}\n\n@if (sellerContext.canManage()) {\n  <section>\n    <h3>Create inventory item</h3>\n\n    <form\n      class=\"createForm\"\n      [formGroup]=\"createForm\"\n      (ngSubmit)=\"createInventory()\"\n    >\n      <label>\n        Warehouse\n        <select formControlName=\"warehouseId\">\n          <option value=\"\">Select</option>\n\n          @for (\n            warehouse of warehouses();\n            track warehouse.warehouseId\n          ) {\n            <option\n              [value]=\"warehouse.warehouseId\"\n            >\n              {{ warehouse.name }}\n              {{ warehouse.code }}\n            </option>\n          }\n        </select>\n      </label>\n\n      <label>\n        Listing\n        <select formControlName=\"sellerListingId\">\n          <option value=\"\">Select</option>\n\n          @for (\n            listing of listingOptions();\n            track listing.listingId\n          ) {\n            <option [value]=\"listing.listingId\">\n              {{ listing.productTitle }}\n              {{ listing.variantName }}\n              {{ listing.sellerSku }}\n            </option>\n          }\n        </select>\n      </label>\n\n      <label>\n        Initial quantity\n        <input\n          type=\"number\"\n          formControlName=\"initialQuantity\"\n          min=\"0\"\n          step=\"1\"\n        />\n      </label>\n\n      <button\n        type=\"submit\"\n        [disabled]=\"\n          isSaving() ||\n          !canCreateInventory()\n        \"\n      >\n        {{ isSaving() ? 'Saving' : 'Create' }}\n      </button>\n    </form>\n  </section>\n}\n\n<section>\n  <h3>Stock</h3>\n\n  @if (isLoading()) {\n    <p>Loading</p>\n  } @else if (inventory().length === 0) {\n    <p>No inventory</p>\n  } @else {\n    <div class=\"tableWrap\">\n      <table>\n        <thead>\n          <tr>\n            <th>Warehouse</th>\n            <th>SKU</th>\n            <th>On hand</th>\n            <th>Reserved</th>\n            <th>Available</th>\n            <th>Receive</th>\n            <th>Adjust</th>\n            <th>Details</th>\n          </tr>\n        </thead>\n\n        <tbody>\n          @for (\n            item of inventory();\n            track item.inventoryItemId\n          ) {\n            <tr>\n              <td data-label=\"Warehouse\">\n                {{ item.warehouseName }}\n                <small>{{ item.warehouseCode }}</small>\n              </td>\n              <td data-label=\"SKU\">{{ item.sellerSku }}</td>\n              <td data-label=\"On hand\">\n                {{ item.onHandQuantity }}\n              </td>\n              <td data-label=\"Reserved\">\n                {{ item.reservedQuantity }}\n              </td>\n              <td data-label=\"Available\">\n                {{ item.availableQuantity }}\n              </td>\n              <td data-label=\"Receive\">\n                <div class=\"quantityAction\">\n                  <input\n                    type=\"number\"\n                    min=\"1\"\n                    step=\"1\"\n                    value=\"1\"\n                    (input)=\"\n                      changeQuantityDraft(\n                        item,\n                        'receive',\n                        $event\n                      )\n                    \"\n                  />\n\n                  <button\n                    type=\"button\"\n                    [disabled]=\"\n                      busyItemId() !== null ||\n                      !sellerIsActive()\n                    \"\n                    (click)=\"receive(item)\"\n                  >\n                    Receive\n                  </button>\n                </div>\n              </td>\n              <td data-label=\"Adjust\">\n                <div class=\"quantityAction\">\n                  <input\n                    type=\"number\"\n                    [min]=\"item.reservedQuantity\"\n                    step=\"1\"\n                    [value]=\"item.onHandQuantity\"\n                    (input)=\"\n                      changeQuantityDraft(\n                        item,\n                        'adjust',\n                        $event\n                      )\n                    \"\n                  />\n\n                  <button\n                    type=\"button\"\n                    [disabled]=\"\n                      busyItemId() !== null ||\n                      !sellerIsActive()\n                    \"\n                    (click)=\"adjust(item)\"\n                  >\n                    Set\n                  </button>\n                </div>\n              </td>\n              <td data-label=\"Details\">\n                <button\n                  type=\"button\"\n                  (click)=\"\n                    loadItem(item.inventoryItemId)\n                  \"\n                >\n                  Open\n                </button>\n              </td>\n            </tr>\n          }\n        </tbody>\n      </table>\n    </div>\n  }\n</section>\n\n@if (selectedItem(); as item) {\n  <section>\n    <div class=\"sectionHeader\">\n      <h3>Inventory details</h3>\n\n      <button\n        type=\"button\"\n        (click)=\"selectedItem.set(null)\"\n      >\n        Close\n      </button>\n    </div>\n\n    <dl>\n      <div>\n        <dt>Warehouse</dt>\n        <dd>{{ item.warehouseName }}</dd>\n      </div>\n      <div>\n        <dt>Warehouse code</dt>\n        <dd>{{ item.warehouseCode }}</dd>\n      </div>\n      <div>\n        <dt>SKU</dt>\n        <dd>{{ item.sellerSku }}</dd>\n      </div>\n      <div>\n        <dt>On hand</dt>\n        <dd>{{ item.onHandQuantity }}</dd>\n      </div>\n      <div>\n        <dt>Reserved</dt>\n        <dd>{{ item.reservedQuantity }}</dd>\n      </div>\n      <div>\n        <dt>Available</dt>\n        <dd>{{ item.availableQuantity }}</dd>\n      </div>\n      <div>\n        <dt>Created</dt>\n        <dd>\n          {{ item.createdAtUtc | date: 'medium' }}\n        </dd>\n      </div>\n    </dl>\n  </section>\n}\n", styles: [":host {\n  display: block;\n}\n\n.pageHeader,\n.sectionHeader {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n}\n\nh2,\nh3 {\n  margin: 0;\n  font-weight: 600;\n}\n\nh2 {\n  font-size: 1.5rem;\n}\n\nh3 {\n  font-size: 1.05rem;\n}\n\nsection {\n  padding-top: 1.5rem;\n  margin-top: 1.5rem;\n  border-top: 1px solid rgb(215, 215, 210);\n}\n\n.createForm {\n  display: grid;\n  grid-template-columns: 1fr 1.5fr 9rem auto;\n  gap: 1rem;\n  align-items: end;\n  margin-top: 1rem;\n}\n\nlabel {\n  display: grid;\n  gap: 0.4rem;\n  font-size: 0.8rem;\n  font-weight: 600;\n}\n\ninput,\nselect,\nbutton {\n  min-height: 2.4rem;\n  padding: 0.5rem 0.65rem;\n  color: rgb(24, 24, 24);\n  background: white;\n  border: 1px solid rgb(165, 165, 160);\n  border-radius: 0;\n  font: inherit;\n}\n\nbutton {\n  cursor: pointer;\n}\n\nbutton:disabled {\n  cursor: default;\n  opacity: 0.55;\n}\n\n.message {\n  padding: 0.75rem;\n  border-left: 2px solid;\n}\n\n.error {\n  color: rgb(145, 25, 25);\n}\n\n.success {\n  color: rgb(30, 100, 55);\n}\n\n.tableWrap {\n  margin-top: 1rem;\n  min-width: 0;\n}\n\ntable {\n  width: 100%;\n  border-collapse: collapse;\n}\n\nth,\ntd {\n  padding: 0.65rem;\n  border-bottom: 1px solid rgb(220, 220, 215);\n  text-align: left;\n  vertical-align: top;\n}\n\nth {\n  font-size: 0.75rem;\n}\n\ntd small {\n  display: block;\n  color: rgb(80, 80, 76);\n}\n\n.quantityAction {\n  display: flex;\n  gap: 0.4rem;\n}\n\n.quantityAction input {\n  width: 5rem;\n}\n\ndl {\n  border-top: 1px solid rgb(215, 215, 210);\n}\n\ndl div {\n  display: grid;\n  grid-template-columns: 10rem 1fr;\n  gap: 1rem;\n  padding: 0.7rem 0;\n  border-bottom: 1px solid rgb(220, 220, 215);\n}\n\ndt {\n  color: rgb(80, 80, 76);\n}\n\ndd {\n  margin: 0;\n}\n\n@media (max-width: 56rem) {\n  .createForm {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n\n@media (max-width: 40rem) {\n  .createForm {\n    grid-template-columns: 1fr;\n  }\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SellerInventory, { className: "SellerInventory", filePath: "src/app/seller/seller-inventory/seller-inventory.ts", lineNumber: 41 }); })();
