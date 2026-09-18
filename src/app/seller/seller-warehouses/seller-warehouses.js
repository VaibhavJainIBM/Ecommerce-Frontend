import { Component, inject, signal, } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators, } from '@angular/forms';
import { finalize } from 'rxjs';
import { SellerApi } from '../seller-api';
import { SellerContext } from '../seller-context';
import { getSellerError } from '../seller-error';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
const _forTrack0 = ($index, $item) => $item.warehouseId;
function SellerWarehouses_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 2);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.errorMessage(), " ");
} }
function SellerWarehouses_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 3);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.successMessage(), " ");
} }
function SellerWarehouses_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section")(1, "h3");
    i0.ɵɵtext(2, "Create warehouse");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "form", 5);
    i0.ɵɵlistener("ngSubmit", function SellerWarehouses_Conditional_7_Template_form_ngSubmit_3_listener() { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.createWarehouse()); });
    i0.ɵɵelementStart(4, "label");
    i0.ɵɵtext(5, " Name ");
    i0.ɵɵelement(6, "input", 6);
    i0.ɵɵcontrolCreate();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "label");
    i0.ɵɵtext(8, " Code ");
    i0.ɵɵelement(9, "input", 7);
    i0.ɵɵcontrolCreate();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "label", 8);
    i0.ɵɵtext(11, " Address line 1 ");
    i0.ɵɵelement(12, "input", 9);
    i0.ɵɵcontrolCreate();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "label", 8);
    i0.ɵɵtext(14, " Address line 2 ");
    i0.ɵɵelement(15, "input", 10);
    i0.ɵɵcontrolCreate();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "label");
    i0.ɵɵtext(17, " City ");
    i0.ɵɵelement(18, "input", 11);
    i0.ɵɵcontrolCreate();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "label");
    i0.ɵɵtext(20, " State ");
    i0.ɵɵelement(21, "input", 12);
    i0.ɵɵcontrolCreate();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "label");
    i0.ɵɵtext(23, " Postal code ");
    i0.ɵɵelement(24, "input", 13);
    i0.ɵɵcontrolCreate();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "label");
    i0.ɵɵtext(26, " Country ");
    i0.ɵɵelement(27, "input", 14);
    i0.ɵɵcontrolCreate();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "button", 15);
    i0.ɵɵtext(29);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("formGroup", ctx_r0.createForm);
    i0.ɵɵadvance(3);
    i0.ɵɵcontrol();
    i0.ɵɵadvance(3);
    i0.ɵɵcontrol();
    i0.ɵɵadvance(3);
    i0.ɵɵcontrol();
    i0.ɵɵadvance(3);
    i0.ɵɵcontrol();
    i0.ɵɵadvance(3);
    i0.ɵɵcontrol();
    i0.ɵɵadvance(3);
    i0.ɵɵcontrol();
    i0.ɵɵadvance(3);
    i0.ɵɵcontrol();
    i0.ɵɵadvance(3);
    i0.ɵɵcontrol();
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r0.isSaving() || !ctx_r0.canManageWarehouses());
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.isSaving() ? "Saving" : "Create", " ");
} }
function SellerWarehouses_Conditional_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1, "Loading");
    i0.ɵɵelementEnd();
} }
function SellerWarehouses_Conditional_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1, "No warehouses");
    i0.ɵɵelementEnd();
} }
function SellerWarehouses_Conditional_13_For_16_Conditional_13_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 1);
    i0.ɵɵlistener("click", function SellerWarehouses_Conditional_13_For_16_Conditional_13_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r5); const warehouse_r4 = i0.ɵɵnextContext().$implicit; const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.activateWarehouse(warehouse_r4)); });
    i0.ɵɵtext(1, " Activate ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("disabled", ctx_r0.busyWarehouseId() !== null || !ctx_r0.canManageWarehouses());
} }
function SellerWarehouses_Conditional_13_For_16_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr")(1, "td", 16);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td", 17);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "td", 18);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "td", 19);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "td", 20)(10, "div", 21)(11, "button", 22);
    i0.ɵɵlistener("click", function SellerWarehouses_Conditional_13_For_16_Template_button_click_11_listener() { const warehouse_r4 = i0.ɵɵrestoreView(_r3).$implicit; const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.loadWarehouse(warehouse_r4.warehouseId)); });
    i0.ɵɵtext(12, " Details ");
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(13, SellerWarehouses_Conditional_13_For_16_Conditional_13_Template, 2, 1, "button", 23);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const warehouse_r4 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(warehouse_r4.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(warehouse_r4.code);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(warehouse_r4.status);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", warehouse_r4.address.city, " ");
    i0.ɵɵadvance(5);
    i0.ɵɵconditional(ctx_r0.sellerContext.canManage() && warehouse_r4.status !== "Active" ? 13 : -1);
} }
function SellerWarehouses_Conditional_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4)(1, "table")(2, "thead")(3, "tr")(4, "th");
    i0.ɵɵtext(5, "Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "th");
    i0.ɵɵtext(7, "Code");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "th");
    i0.ɵɵtext(9, "Status");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "th");
    i0.ɵɵtext(11, "City");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "th");
    i0.ɵɵtext(13, "Actions");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(14, "tbody");
    i0.ɵɵrepeaterCreate(15, SellerWarehouses_Conditional_13_For_16_Template, 14, 5, "tr", null, _forTrack0);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(15);
    i0.ɵɵrepeater(ctx_r0.warehouses());
} }
function SellerWarehouses_Conditional_14_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section")(1, "div", 24)(2, "h3");
    i0.ɵɵtext(3, "Warehouse details");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "button", 22);
    i0.ɵɵlistener("click", function SellerWarehouses_Conditional_14_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r6); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.selectedWarehouse.set(null)); });
    i0.ɵɵtext(5, " Close ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "dl")(7, "div")(8, "dt");
    i0.ɵɵtext(9, "Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "dd");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "div")(13, "dt");
    i0.ɵɵtext(14, "Code");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "dd");
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(17, "div")(18, "dt");
    i0.ɵɵtext(19, "Status");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "dd");
    i0.ɵɵtext(21);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(22, "div")(23, "dt");
    i0.ɵɵtext(24, "Address");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "dd");
    i0.ɵɵtext(26);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(27, "div")(28, "dt");
    i0.ɵɵtext(29, "Created");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "dd");
    i0.ɵɵtext(31);
    i0.ɵɵpipe(32, "date");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const warehouse_r7 = ctx;
    i0.ɵɵadvance(11);
    i0.ɵɵtextInterpolate(warehouse_r7.name);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(warehouse_r7.code);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(warehouse_r7.status);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate6(" ", warehouse_r7.address.line1, " ", warehouse_r7.address.line2, " ", warehouse_r7.address.city, " ", warehouse_r7.address.stateOrProvince, " ", warehouse_r7.address.postalCode, " ", warehouse_r7.address.countryCode, " ");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(32, 10, warehouse_r7.createdAtUtc, "medium"), " ");
} }
export class SellerWarehouses {
    sellerApi = inject(SellerApi);
    sellerContext = inject(SellerContext);
    warehouses = signal([], /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "warehouses" }] : /* istanbul ignore next */ []));
    selectedWarehouse = signal(null, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "selectedWarehouse" }] : /* istanbul ignore next */ []));
    isLoading = signal(false, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "isLoading" }] : /* istanbul ignore next */ []));
    isSaving = signal(false, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "isSaving" }] : /* istanbul ignore next */ []));
    busyWarehouseId = signal(null, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "busyWarehouseId" }] : /* istanbul ignore next */ []));
    errorMessage = signal('', /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "errorMessage" }] : /* istanbul ignore next */ []));
    successMessage = signal('', /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "successMessage" }] : /* istanbul ignore next */ []));
    createForm = new FormGroup({
        name: new FormControl('', {
            nonNullable: true,
            validators: [
                Validators.required,
                Validators.maxLength(150),
            ],
        }),
        code: new FormControl('', {
            nonNullable: true,
            validators: [
                Validators.required,
                Validators.maxLength(50),
                Validators.pattern(/^[A-Za-z0-9_-]+$/),
            ],
        }),
        line1: new FormControl('', {
            nonNullable: true,
            validators: [
                Validators.required,
                Validators.maxLength(200),
            ],
        }),
        line2: new FormControl('', {
            nonNullable: true,
            validators: [Validators.maxLength(200)],
        }),
        city: new FormControl('', {
            nonNullable: true,
            validators: [
                Validators.required,
                Validators.maxLength(100),
            ],
        }),
        stateOrProvince: new FormControl('', {
            nonNullable: true,
            validators: [
                Validators.required,
                Validators.maxLength(100),
            ],
        }),
        postalCode: new FormControl('', {
            nonNullable: true,
            validators: [
                Validators.required,
                Validators.maxLength(20),
            ],
        }),
        countryCode: new FormControl('IN', {
            nonNullable: true,
            validators: [
                Validators.required,
                Validators.pattern(/^[A-Za-z]{2}$/),
            ],
        }),
    });
    ngOnInit() {
        this.loadWarehouses();
    }
    get sellerId() {
        const sellerId = this.sellerContext.selected()?.sellerId;
        if (!sellerId) {
            throw new Error('No seller is selected.');
        }
        return sellerId;
    }
    canManageWarehouses() {
        return (this.sellerContext.canManage() &&
            this.sellerContext.selected()
                ?.sellerStatus === 'Active');
    }
    loadWarehouses() {
        this.isLoading.set(true);
        this.errorMessage.set('');
        this.sellerApi
            .getWarehouses(this.sellerId)
            .pipe(finalize(() => this.isLoading.set(false)))
            .subscribe({
            next: (warehouses) => {
                this.warehouses.set(warehouses);
            },
            error: (error) => {
                this.errorMessage.set(getSellerError(error, 'Could not load warehouses.'));
            },
        });
    }
    loadWarehouse(warehouseId) {
        this.errorMessage.set('');
        this.sellerApi
            .getWarehouse(this.sellerId, warehouseId)
            .subscribe({
            next: (warehouse) => {
                this.selectedWarehouse.set(warehouse);
            },
            error: (error) => {
                this.errorMessage.set(getSellerError(error, 'Could not load the warehouse.'));
            },
        });
    }
    createWarehouse() {
        this.errorMessage.set('');
        this.successMessage.set('');
        if (this.createForm.invalid ||
            !this.canManageWarehouses()) {
            this.createForm.markAllAsTouched();
            this.errorMessage.set('Complete the warehouse form.');
            return;
        }
        const value = this.createForm.getRawValue();
        this.isSaving.set(true);
        this.sellerApi
            .createWarehouse(this.sellerId, {
            name: value.name.trim(),
            code: value.code.trim().toUpperCase(),
            address: {
                line1: value.line1.trim(),
                line2: value.line2.trim() || null,
                city: value.city.trim(),
                stateOrProvince: value.stateOrProvince.trim(),
                postalCode: value.postalCode.trim(),
                countryCode: value.countryCode.trim().toUpperCase(),
            },
        })
            .pipe(finalize(() => this.isSaving.set(false)))
            .subscribe({
            next: (warehouse) => {
                this.selectedWarehouse.set(warehouse);
                this.successMessage.set('Warehouse created.');
                this.createForm.reset({
                    name: '',
                    code: '',
                    line1: '',
                    line2: '',
                    city: '',
                    stateOrProvince: '',
                    postalCode: '',
                    countryCode: 'IN',
                });
                this.loadWarehouses();
            },
            error: (error) => {
                this.errorMessage.set(getSellerError(error, 'Could not create the warehouse.'));
            },
        });
    }
    activateWarehouse(warehouse) {
        this.errorMessage.set('');
        this.successMessage.set('');
        this.busyWarehouseId.set(warehouse.warehouseId);
        this.sellerApi
            .activateWarehouse(this.sellerId, warehouse.warehouseId)
            .pipe(finalize(() => this.busyWarehouseId.set(null)))
            .subscribe({
            next: (updated) => {
                this.replaceWarehouse(updated);
                this.selectedWarehouse.set(updated);
                this.successMessage.set('Warehouse activated.');
            },
            error: (error) => {
                this.errorMessage.set(getSellerError(error, 'Could not activate the warehouse.'));
            },
        });
    }
    replaceWarehouse(updated) {
        this.warehouses.update((warehouses) => warehouses.map((warehouse) => warehouse.warehouseId ===
            updated.warehouseId
            ? updated
            : warehouse));
    }
    static ɵfac = function SellerWarehouses_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SellerWarehouses)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SellerWarehouses, selectors: [["app-seller-warehouses"]], decls: 15, vars: 6, consts: [[1, "pageHeader"], ["type", "button", 3, "click", "disabled"], ["role", "alert", 1, "message", "error"], ["role", "status", 1, "message", "success"], [1, "tableWrap"], [1, "warehouseForm", 3, "ngSubmit", "formGroup"], ["type", "text", "formControlName", "name", "maxlength", "150"], ["type", "text", "formControlName", "code", "maxlength", "50"], [1, "wide"], ["type", "text", "formControlName", "line1", "maxlength", "200"], ["type", "text", "formControlName", "line2", "maxlength", "200"], ["type", "text", "formControlName", "city", "maxlength", "100"], ["type", "text", "formControlName", "stateOrProvince", "maxlength", "100"], ["type", "text", "formControlName", "postalCode", "maxlength", "20"], ["type", "text", "formControlName", "countryCode", "maxlength", "2"], ["type", "submit", 3, "disabled"], ["data-label", "Name"], ["data-label", "Code"], ["data-label", "Status"], ["data-label", "City"], ["data-label", "Actions"], [1, "actions"], ["type", "button", 3, "click"], ["type", "button", 3, "disabled"], [1, "sectionHeader"]], template: function SellerWarehouses_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "header", 0)(1, "h2");
            i0.ɵɵtext(2, "Warehouses");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "button", 1);
            i0.ɵɵlistener("click", function SellerWarehouses_Template_button_click_3_listener() { return ctx.loadWarehouses(); });
            i0.ɵɵtext(4, " Refresh ");
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(5, SellerWarehouses_Conditional_5_Template, 2, 1, "p", 2);
            i0.ɵɵconditionalCreate(6, SellerWarehouses_Conditional_6_Template, 2, 1, "p", 3);
            i0.ɵɵconditionalCreate(7, SellerWarehouses_Conditional_7_Template, 30, 3, "section");
            i0.ɵɵelementStart(8, "section")(9, "h3");
            i0.ɵɵtext(10, "Warehouse list");
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(11, SellerWarehouses_Conditional_11_Template, 2, 0, "p")(12, SellerWarehouses_Conditional_12_Template, 2, 0, "p")(13, SellerWarehouses_Conditional_13_Template, 17, 0, "div", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(14, SellerWarehouses_Conditional_14_Template, 33, 13, "section");
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
            i0.ɵɵconditional(ctx.isLoading() ? 11 : ctx.warehouses().length === 0 ? 12 : 13);
            i0.ɵɵadvance(3);
            i0.ɵɵconditional((tmp_5_0 = ctx.selectedWarehouse()) ? 14 : -1, tmp_5_0);
        } }, dependencies: [ReactiveFormsModule, i1.ɵNgNoValidate, i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.MaxLengthValidator, i1.FormGroupDirective, i1.FormControlName, DatePipe], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.pageHeader[_ngcontent-%COMP%], \n.sectionHeader[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n}\n\nh2[_ngcontent-%COMP%], \nh3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 600;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n\nh3[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n}\n\nsection[_ngcontent-%COMP%] {\n  padding-top: 1.5rem;\n  margin-top: 1.5rem;\n  border-top: 1px solid rgb(215, 215, 210);\n}\n\n.warehouseForm[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n  align-items: end;\n  margin-top: 1rem;\n}\n\n.wide[_ngcontent-%COMP%] {\n  grid-column: 1 / 3;\n}\n\nlabel[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.4rem;\n  font-size: 0.8rem;\n  font-weight: 600;\n}\n\ninput[_ngcontent-%COMP%], \nbutton[_ngcontent-%COMP%] {\n  min-height: 2.4rem;\n  padding: 0.5rem 0.65rem;\n  color: rgb(24, 24, 24);\n  background: white;\n  border: 1px solid rgb(165, 165, 160);\n  border-radius: 0;\n  font: inherit;\n}\n\nbutton[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\nbutton[_ngcontent-%COMP%]:disabled {\n  cursor: default;\n  opacity: 0.55;\n}\n\n.message[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  border-left: 2px solid;\n}\n\n.error[_ngcontent-%COMP%] {\n  color: rgb(145, 25, 25);\n}\n\n.success[_ngcontent-%COMP%] {\n  color: rgb(30, 100, 55);\n}\n\n.tableWrap[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  min-width: 0;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n\nth[_ngcontent-%COMP%], \ntd[_ngcontent-%COMP%] {\n  padding: 0.7rem;\n  border-bottom: 1px solid rgb(220, 220, 215);\n  text-align: left;\n  vertical-align: top;\n}\n\nth[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n}\n\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.4rem;\n}\n\ndl[_ngcontent-%COMP%] {\n  border-top: 1px solid rgb(215, 215, 210);\n}\n\ndl[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 10rem 1fr;\n  gap: 1rem;\n  padding: 0.7rem 0;\n  border-bottom: 1px solid rgb(220, 220, 215);\n}\n\ndt[_ngcontent-%COMP%] {\n  color: rgb(80, 80, 76);\n}\n\ndd[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n@media (max-width: 40rem) {\n  .warehouseForm[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n\n  .wide[_ngcontent-%COMP%] {\n    grid-column: auto;\n  }\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SellerWarehouses, [{
        type: Component,
        args: [{ selector: 'app-seller-warehouses', imports: [
                    ReactiveFormsModule,
                    DatePipe,
                ], template: "<header class=\"pageHeader\">\n  <h2>Warehouses</h2>\n\n  <button\n    type=\"button\"\n    [disabled]=\"isLoading()\"\n    (click)=\"loadWarehouses()\"\n  >\n    Refresh\n  </button>\n</header>\n\n@if (errorMessage()) {\n  <p class=\"message error\" role=\"alert\">\n    {{ errorMessage() }}\n  </p>\n}\n\n@if (successMessage()) {\n  <p class=\"message success\" role=\"status\">\n    {{ successMessage() }}\n  </p>\n}\n\n@if (sellerContext.canManage()) {\n  <section>\n    <h3>Create warehouse</h3>\n\n    <form\n      class=\"warehouseForm\"\n      [formGroup]=\"createForm\"\n      (ngSubmit)=\"createWarehouse()\"\n    >\n      <label>\n        Name\n        <input\n          type=\"text\"\n          formControlName=\"name\"\n          maxlength=\"150\"\n        />\n      </label>\n\n      <label>\n        Code\n        <input\n          type=\"text\"\n          formControlName=\"code\"\n          maxlength=\"50\"\n        />\n      </label>\n\n      <label class=\"wide\">\n        Address line 1\n        <input\n          type=\"text\"\n          formControlName=\"line1\"\n          maxlength=\"200\"\n        />\n      </label>\n\n      <label class=\"wide\">\n        Address line 2\n        <input\n          type=\"text\"\n          formControlName=\"line2\"\n          maxlength=\"200\"\n        />\n      </label>\n\n      <label>\n        City\n        <input\n          type=\"text\"\n          formControlName=\"city\"\n          maxlength=\"100\"\n        />\n      </label>\n\n      <label>\n        State\n        <input\n          type=\"text\"\n          formControlName=\"stateOrProvince\"\n          maxlength=\"100\"\n        />\n      </label>\n\n      <label>\n        Postal code\n        <input\n          type=\"text\"\n          formControlName=\"postalCode\"\n          maxlength=\"20\"\n        />\n      </label>\n\n      <label>\n        Country\n        <input\n          type=\"text\"\n          formControlName=\"countryCode\"\n          maxlength=\"2\"\n        />\n      </label>\n\n      <button\n        type=\"submit\"\n        [disabled]=\"\n          isSaving() ||\n          !canManageWarehouses()\n        \"\n      >\n        {{ isSaving() ? 'Saving' : 'Create' }}\n      </button>\n    </form>\n  </section>\n}\n\n<section>\n  <h3>Warehouse list</h3>\n\n  @if (isLoading()) {\n    <p>Loading</p>\n  } @else if (warehouses().length === 0) {\n    <p>No warehouses</p>\n  } @else {\n    <div class=\"tableWrap\">\n      <table>\n        <thead>\n          <tr>\n            <th>Name</th>\n            <th>Code</th>\n            <th>Status</th>\n            <th>City</th>\n            <th>Actions</th>\n          </tr>\n        </thead>\n\n        <tbody>\n          @for (\n            warehouse of warehouses();\n            track warehouse.warehouseId\n          ) {\n            <tr>\n              <td data-label=\"Name\">{{ warehouse.name }}</td>\n              <td data-label=\"Code\">{{ warehouse.code }}</td>\n              <td data-label=\"Status\">{{ warehouse.status }}</td>\n              <td data-label=\"City\">\n                {{ warehouse.address.city }}\n              </td>\n              <td data-label=\"Actions\">\n                <div class=\"actions\">\n                  <button\n                    type=\"button\"\n                    (click)=\"\n                      loadWarehouse(\n                        warehouse.warehouseId\n                      )\n                    \"\n                  >\n                    Details\n                  </button>\n\n                  @if (\n                    sellerContext.canManage() &&\n                    warehouse.status !== 'Active'\n                  ) {\n                    <button\n                      type=\"button\"\n                      [disabled]=\"\n                        busyWarehouseId() !== null ||\n                        !canManageWarehouses()\n                      \"\n                      (click)=\"\n                        activateWarehouse(warehouse)\n                      \"\n                    >\n                      Activate\n                    </button>\n                  }\n                </div>\n              </td>\n            </tr>\n          }\n        </tbody>\n      </table>\n    </div>\n  }\n</section>\n\n@if (selectedWarehouse(); as warehouse) {\n  <section>\n    <div class=\"sectionHeader\">\n      <h3>Warehouse details</h3>\n\n      <button\n        type=\"button\"\n        (click)=\"selectedWarehouse.set(null)\"\n      >\n        Close\n      </button>\n    </div>\n\n    <dl>\n      <div>\n        <dt>Name</dt>\n        <dd>{{ warehouse.name }}</dd>\n      </div>\n      <div>\n        <dt>Code</dt>\n        <dd>{{ warehouse.code }}</dd>\n      </div>\n      <div>\n        <dt>Status</dt>\n        <dd>{{ warehouse.status }}</dd>\n      </div>\n      <div>\n        <dt>Address</dt>\n        <dd>\n          {{ warehouse.address.line1 }}\n          {{ warehouse.address.line2 }}\n          {{ warehouse.address.city }}\n          {{ warehouse.address.stateOrProvince }}\n          {{ warehouse.address.postalCode }}\n          {{ warehouse.address.countryCode }}\n        </dd>\n      </div>\n      <div>\n        <dt>Created</dt>\n        <dd>\n          {{ warehouse.createdAtUtc | date: 'medium' }}\n        </dd>\n      </div>\n    </dl>\n  </section>\n}\n", styles: [":host {\n  display: block;\n}\n\n.pageHeader,\n.sectionHeader {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n}\n\nh2,\nh3 {\n  margin: 0;\n  font-weight: 600;\n}\n\nh2 {\n  font-size: 1.5rem;\n}\n\nh3 {\n  font-size: 1.05rem;\n}\n\nsection {\n  padding-top: 1.5rem;\n  margin-top: 1.5rem;\n  border-top: 1px solid rgb(215, 215, 210);\n}\n\n.warehouseForm {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n  align-items: end;\n  margin-top: 1rem;\n}\n\n.wide {\n  grid-column: 1 / 3;\n}\n\nlabel {\n  display: grid;\n  gap: 0.4rem;\n  font-size: 0.8rem;\n  font-weight: 600;\n}\n\ninput,\nbutton {\n  min-height: 2.4rem;\n  padding: 0.5rem 0.65rem;\n  color: rgb(24, 24, 24);\n  background: white;\n  border: 1px solid rgb(165, 165, 160);\n  border-radius: 0;\n  font: inherit;\n}\n\nbutton {\n  cursor: pointer;\n}\n\nbutton:disabled {\n  cursor: default;\n  opacity: 0.55;\n}\n\n.message {\n  padding: 0.75rem;\n  border-left: 2px solid;\n}\n\n.error {\n  color: rgb(145, 25, 25);\n}\n\n.success {\n  color: rgb(30, 100, 55);\n}\n\n.tableWrap {\n  margin-top: 1rem;\n  min-width: 0;\n}\n\ntable {\n  width: 100%;\n  border-collapse: collapse;\n}\n\nth,\ntd {\n  padding: 0.7rem;\n  border-bottom: 1px solid rgb(220, 220, 215);\n  text-align: left;\n  vertical-align: top;\n}\n\nth {\n  font-size: 0.75rem;\n}\n\n.actions {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.4rem;\n}\n\ndl {\n  border-top: 1px solid rgb(215, 215, 210);\n}\n\ndl div {\n  display: grid;\n  grid-template-columns: 10rem 1fr;\n  gap: 1rem;\n  padding: 0.7rem 0;\n  border-bottom: 1px solid rgb(220, 220, 215);\n}\n\ndt {\n  color: rgb(80, 80, 76);\n}\n\ndd {\n  margin: 0;\n}\n\n@media (max-width: 40rem) {\n  .warehouseForm {\n    grid-template-columns: 1fr;\n  }\n\n  .wide {\n    grid-column: auto;\n  }\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SellerWarehouses, { className: "SellerWarehouses", filePath: "src/app/seller/seller-warehouses/seller-warehouses.ts", lineNumber: 31 }); })();
