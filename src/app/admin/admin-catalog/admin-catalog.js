import { DatePipe } from '@angular/common';
import { Component, inject, signal, } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators, } from '@angular/forms';
import { AdminApi } from '../admin-api';
import { readAdminError } from '../admin-error';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
const _forTrack0 = ($index, $item) => $item.productId;
const _forTrack1 = ($index, $item) => $item.variantId;
function AdminCatalog_Conditional_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 3);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.errorMessage(), " ");
} }
function AdminCatalog_Conditional_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 4);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.successMessage(), " ");
} }
function AdminCatalog_For_31_Conditional_11_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 14);
    i0.ɵɵlistener("click", function AdminCatalog_For_31_Conditional_11_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r2); const $index_r3 = i0.ɵɵnextContext().$index; const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.removeVariant($index_r3)); });
    i0.ɵɵtext(1, " Remove ");
    i0.ɵɵelementEnd();
} }
function AdminCatalog_For_31_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 12)(1, "div", 24)(2, "label");
    i0.ɵɵtext(3, " Name ");
    i0.ɵɵelement(4, "input", 25);
    i0.ɵɵcontrolCreate();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "label");
    i0.ɵɵtext(6, " Code ");
    i0.ɵɵelement(7, "input", 26);
    i0.ɵɵcontrolCreate();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "label");
    i0.ɵɵtext(9, " GTIN ");
    i0.ɵɵelement(10, "input", 27);
    i0.ɵɵcontrolCreate();
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(11, AdminCatalog_For_31_Conditional_11_Template, 2, 0, "button", 28);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const $index_r3 = ctx.$index;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("formGroupName", $index_r3);
    i0.ɵɵadvance(4);
    i0.ɵɵcontrol();
    i0.ɵɵadvance(3);
    i0.ɵɵcontrol();
    i0.ɵɵadvance(3);
    i0.ɵɵcontrol();
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r0.variants.length > 1 ? 11 : -1);
} }
function AdminCatalog_Conditional_49_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const result_r4 = ctx;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate3(" ", result_r4.rowsProcessed, " rows, ", result_r4.productsCreated, " products, ", result_r4.variantsCreated, " variants ");
} }
function AdminCatalog_For_63_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 23);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    i0.ɵɵproperty("value", item_r5);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r5);
} }
function AdminCatalog_Conditional_66_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1, "Loading");
    i0.ɵɵelementEnd();
} }
function AdminCatalog_Conditional_67_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1, "No products");
    i0.ɵɵelementEnd();
} }
function AdminCatalog_Conditional_68_For_2_Conditional_8_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 2);
    i0.ɵɵlistener("click", function AdminCatalog_Conditional_68_For_2_Conditional_8_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r6); const product_r7 = i0.ɵɵnextContext().$implicit; const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.activate(product_r7)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const product_r7 = i0.ɵɵnextContext().$implicit;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("disabled", ctx_r0.busyProductId() !== null);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.busyProductId() === product_r7.productId ? "Activating" : "Activate", " ");
} }
function AdminCatalog_Conditional_68_For_2_Conditional_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const product_r7 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(product_r7.description);
} }
function AdminCatalog_Conditional_68_For_2_For_12_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const variant_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(variant_r8.gtin);
} }
function AdminCatalog_Conditional_68_For_2_For_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li")(1, "strong");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(7, AdminCatalog_Conditional_68_For_2_For_12_Conditional_7_Template, 2, 1, "span");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const variant_r8 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(variant_r8.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(variant_r8.variantCode);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(variant_r8.status);
    i0.ɵɵadvance();
    i0.ɵɵconditional(variant_r8.gtin ? 7 : -1);
} }
function AdminCatalog_Conditional_68_For_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "article", 30)(1, "div", 32)(2, "div")(3, "h4");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "small");
    i0.ɵɵtext(6);
    i0.ɵɵpipe(7, "date");
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(8, AdminCatalog_Conditional_68_For_2_Conditional_8_Template, 2, 2, "button", 33);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(9, AdminCatalog_Conditional_68_For_2_Conditional_9_Template, 2, 1, "p");
    i0.ɵɵelementStart(10, "ul", 34);
    i0.ɵɵrepeaterCreate(11, AdminCatalog_Conditional_68_For_2_For_12_Template, 8, 4, "li", null, _forTrack1);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const product_r7 = ctx.$implicit;
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate2(" ", product_r7.brandName, " ", product_r7.title, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2(" ", product_r7.status, " \u00B7 ", i0.ɵɵpipeBind2(7, 6, product_r7.createdAtUtc, "mediumDate"), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(product_r7.status === "Draft" ? 8 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(product_r7.description ? 9 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵrepeater(product_r7.variants);
} }
function AdminCatalog_Conditional_68_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 31)(1, "button", 2);
    i0.ɵɵlistener("click", function AdminCatalog_Conditional_68_Conditional_3_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r9); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.loadProducts(ctx_r0.page() - 1)); });
    i0.ɵɵtext(2, " Previous ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "button", 2);
    i0.ɵɵlistener("click", function AdminCatalog_Conditional_68_Conditional_3_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r9); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.loadProducts(ctx_r0.page() + 1)); });
    i0.ɵɵtext(6, " Next ");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r0.page() <= 1);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate2("", ctx_r0.page(), " of ", ctx_r0.totalPages());
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r0.page() >= ctx_r0.totalPages());
} }
function AdminCatalog_Conditional_68_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 29);
    i0.ɵɵrepeaterCreate(1, AdminCatalog_Conditional_68_For_2_Template, 13, 9, "article", 30, _forTrack0);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(3, AdminCatalog_Conditional_68_Conditional_3_Template, 7, 4, "div", 31);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r0.products());
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r0.totalPages() > 1 ? 3 : -1);
} }
export class AdminCatalog {
    api = inject(AdminApi);
    fileInput = null;
    statuses = [
        'Draft',
        'Active',
        'Archived',
    ];
    search = new FormControl('', {
        nonNullable: true,
    });
    status = signal('', /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "status" }] : /* istanbul ignore next */ []));
    products = signal([], /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "products" }] : /* istanbul ignore next */ []));
    page = signal(1, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "page" }] : /* istanbul ignore next */ []));
    totalPages = signal(0, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "totalPages" }] : /* istanbul ignore next */ []));
    totalCount = signal(0, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "totalCount" }] : /* istanbul ignore next */ []));
    isLoading = signal(false, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "isLoading" }] : /* istanbul ignore next */ []));
    isCreating = signal(false, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "isCreating" }] : /* istanbul ignore next */ []));
    busyProductId = signal(null, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "busyProductId" }] : /* istanbul ignore next */ []));
    selectedFile = signal(null, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "selectedFile" }] : /* istanbul ignore next */ []));
    activateImport = signal(false, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "activateImport" }] : /* istanbul ignore next */ []));
    isImporting = signal(false, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "isImporting" }] : /* istanbul ignore next */ []));
    importResult = signal(null, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "importResult" }] : /* istanbul ignore next */ []));
    errorMessage = signal('', /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "errorMessage" }] : /* istanbul ignore next */ []));
    successMessage = signal('', /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "successMessage" }] : /* istanbul ignore next */ []));
    productForm = new FormGroup({
        title: new FormControl('', {
            nonNullable: true,
            validators: [
                Validators.required,
                Validators.maxLength(250),
            ],
        }),
        brandName: new FormControl('', {
            nonNullable: true,
            validators: [
                Validators.required,
                Validators.maxLength(150),
            ],
        }),
        description: new FormControl('', {
            nonNullable: true,
            validators: [Validators.maxLength(4000)],
        }),
        variants: new FormArray([
            this.createVariantForm(),
        ]),
    });
    get variants() {
        return this.productForm.controls.variants;
    }
    ngOnInit() {
        this.loadProducts(1);
    }
    loadProducts(page) {
        this.isLoading.set(true);
        this.errorMessage.set('');
        this.api.getCatalogProducts({
            search: this.search.value,
            status: this.status(),
            page,
            pageSize: 20,
        }).subscribe({
            next: (response) => {
                this.products.set(response.items);
                this.page.set(response.page);
                this.totalPages.set(response.totalPages);
                this.totalCount.set(response.totalCount);
                this.isLoading.set(false);
            },
            error: (error) => {
                this.errorMessage.set(readAdminError(error, 'Could not load catalog products.'));
                this.isLoading.set(false);
            },
        });
    }
    changeStatus(event) {
        this.status.set(event.target.value);
        this.loadProducts(1);
    }
    addVariant() {
        if (this.variants.length >= 100) {
            return;
        }
        this.variants.push(this.createVariantForm());
    }
    removeVariant(index) {
        if (this.variants.length <= 1) {
            return;
        }
        this.variants.removeAt(index);
    }
    createProduct() {
        if (this.productForm.invalid) {
            this.productForm.markAllAsTouched();
            this.errorMessage.set('Complete the required product fields.');
            return;
        }
        const value = this.productForm.getRawValue();
        this.isCreating.set(true);
        this.errorMessage.set('');
        this.successMessage.set('');
        this.api.createCatalogProduct({
            title: value.title.trim(),
            brandName: value.brandName.trim(),
            description: value.description.trim() || null,
            variants: value.variants.map((variant) => ({
                name: variant['name'].trim(),
                variantCode: variant['variantCode'].trim().toUpperCase(),
                gtin: variant['gtin'].trim() || null,
            })),
        }).subscribe({
            next: () => {
                this.resetProductForm();
                this.successMessage.set('Product created.');
                this.isCreating.set(false);
                this.loadProducts(1);
            },
            error: (error) => {
                this.errorMessage.set(readAdminError(error, 'Could not create the product.'));
                this.isCreating.set(false);
            },
        });
    }
    activate(product) {
        this.busyProductId.set(product.productId);
        this.errorMessage.set('');
        this.successMessage.set('');
        this.api
            .activateCatalogProduct(product.productId)
            .subscribe({
            next: () => {
                this.busyProductId.set(null);
                this.successMessage.set('Product activated.');
                this.loadProducts(this.page());
            },
            error: (error) => {
                this.errorMessage.set(readAdminError(error, 'Could not activate the product.'));
                this.busyProductId.set(null);
            },
        });
    }
    chooseFile(event) {
        const input = event.target;
        this.fileInput = input;
        const file = input.files?.[0] ?? null;
        if (file && file.size > 2 * 1024 * 1024) {
            this.selectedFile.set(null);
            this.errorMessage.set('The file is too large.');
            input.value = '';
            return;
        }
        this.selectedFile.set(file);
        this.errorMessage.set('');
        this.importResult.set(null);
    }
    changeImportActivation(event) {
        this.activateImport.set(event.target.checked);
    }
    importCatalog() {
        const file = this.selectedFile();
        if (!file) {
            this.errorMessage.set('Choose a CSV file.');
            return;
        }
        this.isImporting.set(true);
        this.errorMessage.set('');
        this.successMessage.set('');
        this.importResult.set(null);
        this.api
            .importCatalog(file, this.activateImport())
            .subscribe({
            next: (result) => {
                this.importResult.set(result);
                this.selectedFile.set(null);
                if (this.fileInput) {
                    this.fileInput.value = '';
                }
                this.successMessage.set('Catalog imported.');
                this.isImporting.set(false);
                this.loadProducts(1);
            },
            error: (error) => {
                this.errorMessage.set(readAdminError(error, 'Could not import the catalog.'));
                this.isImporting.set(false);
            },
        });
    }
    downloadTemplate() {
        const header = 'ProductKey,Title,BrandName,Description,' +
            'VariantName,VariantCode,Gtin\r\n';
        const blob = new Blob([header], {
            type: 'text/csv;charset=utf-8',
        });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'catalog-template.csv';
        link.click();
        URL.revokeObjectURL(url);
    }
    createVariantForm() {
        return new FormGroup({
            name: new FormControl('', {
                nonNullable: true,
                validators: [
                    Validators.required,
                    Validators.maxLength(150),
                ],
            }),
            variantCode: new FormControl('', {
                nonNullable: true,
                validators: [
                    Validators.required,
                    Validators.maxLength(64),
                    Validators.pattern(/^[A-Za-z0-9._-]+$/),
                ],
            }),
            gtin: new FormControl('', {
                nonNullable: true,
                validators: [
                    Validators.pattern(/^(?:\d{8}|\d{12}|\d{13}|\d{14})?$/),
                ],
            }),
        });
    }
    resetProductForm() {
        while (this.variants.length > 1) {
            this.variants.removeAt(this.variants.length - 1);
        }
        this.productForm.reset({
            title: '',
            brandName: '',
            description: '',
            variants: [
                {
                    name: '',
                    variantCode: '',
                    gtin: '',
                },
            ],
        });
    }
    static ɵfac = function AdminCatalog_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AdminCatalog)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AdminCatalog, selectors: [["app-admin-catalog"]], decls: 69, vars: 16, consts: [[1, "pageHeader"], [1, "muted"], ["type", "button", 3, "click", "disabled"], ["role", "alert", 1, "message", "error"], ["role", "status", 1, "message", "success"], [1, "productForm", 3, "ngSubmit", "formGroup"], [1, "formGrid"], ["type", "text", "formControlName", "title", "maxlength", "250"], ["type", "text", "formControlName", "brandName", "maxlength", "150"], ["formControlName", "description", "maxlength", "4000"], [1, "sectionHeader"], ["formArrayName", "variants", 1, "variantList"], [1, "variantRow", 3, "formGroupName"], ["type", "submit", 3, "disabled"], ["type", "button", 3, "click"], [1, "importForm", 3, "ngSubmit"], ["type", "file", "accept", ".csv,text/csv", 3, "change"], [1, "checkLabel"], ["type", "checkbox", 3, "change", "checked"], [1, "filterForm", 3, "ngSubmit"], ["type", "search", "maxlength", "100", 3, "formControl"], [3, "change", "value"], ["value", ""], [3, "value"], [1, "variantFields"], ["type", "text", "formControlName", "name", "maxlength", "150"], ["type", "text", "formControlName", "variantCode", "maxlength", "64"], ["type", "text", "formControlName", "gtin", "inputmode", "numeric", "maxlength", "14"], ["type", "button"], [1, "records"], [1, "record"], [1, "pagination"], [1, "recordHeader"], ["type", "button", 3, "disabled"], [1, "variants"]], template: function AdminCatalog_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "header", 0)(1, "div")(2, "h2");
            i0.ɵɵtext(3, "Catalog");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "p", 1);
            i0.ɵɵtext(5);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(6, "button", 2);
            i0.ɵɵlistener("click", function AdminCatalog_Template_button_click_6_listener() { return ctx.loadProducts(ctx.page()); });
            i0.ɵɵtext(7, " Refresh ");
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(8, AdminCatalog_Conditional_8_Template, 2, 1, "p", 3);
            i0.ɵɵconditionalCreate(9, AdminCatalog_Conditional_9_Template, 2, 1, "p", 4);
            i0.ɵɵelementStart(10, "section")(11, "h3");
            i0.ɵɵtext(12, "Create product");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "form", 5);
            i0.ɵɵlistener("ngSubmit", function AdminCatalog_Template_form_ngSubmit_13_listener() { return ctx.createProduct(); });
            i0.ɵɵelementStart(14, "div", 6)(15, "label");
            i0.ɵɵtext(16, " Title ");
            i0.ɵɵelement(17, "input", 7);
            i0.ɵɵcontrolCreate();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(18, "label");
            i0.ɵɵtext(19, " Brand ");
            i0.ɵɵelement(20, "input", 8);
            i0.ɵɵcontrolCreate();
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(21, "label");
            i0.ɵɵtext(22, " Description ");
            i0.ɵɵelement(23, "textarea", 9);
            i0.ɵɵcontrolCreate();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(24, "div", 10)(25, "h4");
            i0.ɵɵtext(26, "Variants");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(27, "button", 2);
            i0.ɵɵlistener("click", function AdminCatalog_Template_button_click_27_listener() { return ctx.addVariant(); });
            i0.ɵɵtext(28, " Add variant ");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(29, "div", 11);
            i0.ɵɵrepeaterCreate(30, AdminCatalog_For_31_Template, 12, 2, "div", 12, i0.ɵɵrepeaterTrackByIndex);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(32, "button", 13);
            i0.ɵɵtext(33);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(34, "section")(35, "div", 10)(36, "h3");
            i0.ɵɵtext(37, "Import CSV");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(38, "button", 14);
            i0.ɵɵlistener("click", function AdminCatalog_Template_button_click_38_listener() { return ctx.downloadTemplate(); });
            i0.ɵɵtext(39, " Download template ");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(40, "form", 15);
            i0.ɵɵlistener("ngSubmit", function AdminCatalog_Template_form_ngSubmit_40_listener() { return ctx.importCatalog(); });
            i0.ɵɵelementStart(41, "label");
            i0.ɵɵtext(42, " CSV file ");
            i0.ɵɵelementStart(43, "input", 16);
            i0.ɵɵlistener("change", function AdminCatalog_Template_input_change_43_listener($event) { return ctx.chooseFile($event); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(44, "label", 17)(45, "input", 18);
            i0.ɵɵlistener("change", function AdminCatalog_Template_input_change_45_listener($event) { return ctx.changeImportActivation($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵtext(46, " Activate imported products ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(47, "button", 13);
            i0.ɵɵtext(48);
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(49, AdminCatalog_Conditional_49_Template, 2, 3, "p");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(50, "section")(51, "h3");
            i0.ɵɵtext(52, "Products");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(53, "form", 19);
            i0.ɵɵlistener("ngSubmit", function AdminCatalog_Template_form_ngSubmit_53_listener() { return ctx.loadProducts(1); });
            i0.ɵɵelementStart(54, "label");
            i0.ɵɵtext(55, " Search ");
            i0.ɵɵelement(56, "input", 20);
            i0.ɵɵcontrolCreate();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(57, "label");
            i0.ɵɵtext(58, " Status ");
            i0.ɵɵelementStart(59, "select", 21);
            i0.ɵɵlistener("change", function AdminCatalog_Template_select_change_59_listener($event) { return ctx.changeStatus($event); });
            i0.ɵɵelementStart(60, "option", 22);
            i0.ɵɵtext(61, "All");
            i0.ɵɵelementEnd();
            i0.ɵɵrepeaterCreate(62, AdminCatalog_For_63_Template, 2, 2, "option", 23, i0.ɵɵrepeaterTrackByIdentity);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(64, "button", 13);
            i0.ɵɵtext(65, " Search ");
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(66, AdminCatalog_Conditional_66_Template, 2, 0, "p")(67, AdminCatalog_Conditional_67_Template, 2, 0, "p")(68, AdminCatalog_Conditional_68_Template, 4, 1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            let tmp_15_0;
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate1("", ctx.totalCount(), " products");
            i0.ɵɵadvance();
            i0.ɵɵproperty("disabled", ctx.isLoading());
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.errorMessage() ? 8 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.successMessage() ? 9 : -1);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("formGroup", ctx.productForm);
            i0.ɵɵadvance(4);
            i0.ɵɵcontrol();
            i0.ɵɵadvance(3);
            i0.ɵɵcontrol();
            i0.ɵɵadvance(3);
            i0.ɵɵcontrol();
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("disabled", ctx.variants.length >= 100);
            i0.ɵɵadvance(3);
            i0.ɵɵrepeater(ctx.variants.controls);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("disabled", ctx.isCreating());
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1(" ", ctx.isCreating() ? "Creating" : "Create product", " ");
            i0.ɵɵadvance(12);
            i0.ɵɵproperty("checked", ctx.activateImport());
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("disabled", ctx.isImporting() || !ctx.selectedFile());
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1(" ", ctx.isImporting() ? "Importing" : "Import", " ");
            i0.ɵɵadvance();
            i0.ɵɵconditional((tmp_15_0 = ctx.importResult()) ? 49 : -1, tmp_15_0);
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("formControl", ctx.search);
            i0.ɵɵcontrol();
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("value", ctx.status());
            i0.ɵɵadvance(3);
            i0.ɵɵrepeater(ctx.statuses);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("disabled", ctx.isLoading());
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.isLoading() ? 66 : ctx.products().length === 0 ? 67 : 68);
        } }, dependencies: [ReactiveFormsModule, i1.ɵNgNoValidate, i1.NgSelectOption, i1.ɵNgSelectMultipleOption, i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.MaxLengthValidator, i1.FormControlDirective, i1.FormGroupDirective, i1.FormControlName, i1.FormGroupName, i1.FormArrayName, DatePipe], styles: ["[_nghost-%COMP%] {\n  display: block;\n  min-width: 0;\n}\n\n.pageHeader[_ngcontent-%COMP%], \n.sectionHeader[_ngcontent-%COMP%], \n.pagination[_ngcontent-%COMP%], \n.actions[_ngcontent-%COMP%], \n.inlineFields[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n}\n\n.pageHeader[_ngcontent-%COMP%], \n.sectionHeader[_ngcontent-%COMP%], \n.pagination[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n\nh2[_ngcontent-%COMP%], \nh3[_ngcontent-%COMP%], \nh4[_ngcontent-%COMP%], \np[_ngcontent-%COMP%] {\n  overflow-wrap: anywhere;\n}\n\nh2[_ngcontent-%COMP%], \nh3[_ngcontent-%COMP%], \nh4[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 600;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n\nh3[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n}\n\nh4[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n\nsection[_ngcontent-%COMP%] {\n  padding-top: 1.5rem;\n  margin-top: 1.5rem;\n  border-top: 1px solid rgb(215, 215, 210);\n}\n\nform[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n\n.formGrid[_ngcontent-%COMP%], \n.filterForm[_ngcontent-%COMP%], \n.variantFields[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns:\n    repeat(auto-fit, minmax(min(100%, 13rem), 1fr));\n  gap: 1rem;\n  align-items: end;\n}\n\n.filterForm[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n\nlabel[_ngcontent-%COMP%] {\n  display: grid;\n  min-width: 0;\n  gap: 0.4rem;\n  font-size: 0.8rem;\n  font-weight: 600;\n}\n\ninput[_ngcontent-%COMP%], \nselect[_ngcontent-%COMP%], \ntextarea[_ngcontent-%COMP%], \nbutton[_ngcontent-%COMP%], \n.buttonLink[_ngcontent-%COMP%] {\n  min-width: 0;\n  min-height: 2.4rem;\n  padding: 0.5rem 0.65rem;\n  color: rgb(24, 24, 24);\n  background: white;\n  border: 1px solid rgb(165, 165, 160);\n  border-radius: 0;\n  font: inherit;\n}\n\ninput[_ngcontent-%COMP%], \nselect[_ngcontent-%COMP%], \ntextarea[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  min-height: 6rem;\n  resize: vertical;\n}\n\nbutton[_ngcontent-%COMP%], \n.buttonLink[_ngcontent-%COMP%] {\n  width: fit-content;\n  cursor: pointer;\n  text-decoration: none;\n}\n\nbutton[_ngcontent-%COMP%]:disabled {\n  cursor: default;\n  opacity: 0.55;\n}\n\n.message[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  border-left: 2px solid;\n}\n\n.error[_ngcontent-%COMP%] {\n  color: rgb(145, 25, 25);\n}\n\n.success[_ngcontent-%COMP%] {\n  color: rgb(30, 100, 55);\n}\n\n.records[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0;\n  margin-top: 1rem;\n  border-top: 1px solid rgb(215, 215, 210);\n}\n\n.record[_ngcontent-%COMP%] {\n  min-width: 0;\n  padding: 1rem 0;\n  border-bottom: 1px solid rgb(215, 215, 210);\n}\n\n.recordGrid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns:\n    minmax(0, 1.4fr)\n    minmax(0, 1fr)\n    minmax(7rem, 0.6fr)\n    auto;\n  gap: 1rem;\n  align-items: start;\n}\n\n.recordGrid[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%], \n.recordHeader[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n\n.recordHeader[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: start;\n  gap: 1rem;\n}\n\n.muted[_ngcontent-%COMP%], \nsmall[_ngcontent-%COMP%] {\n  color: rgb(80, 80, 76);\n}\n\n.metaLabel[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 0.25rem;\n  color: rgb(80, 80, 76);\n  font-size: 0.75rem;\n}\n\n.variants[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.5rem;\n  padding: 0;\n  margin: 0.8rem 0 0;\n  list-style: none;\n}\n\n.variants[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding-top: 0.5rem;\n  border-top: 1px solid rgb(230, 230, 225);\n  overflow-wrap: anywhere;\n}\n\n.pagination[_ngcontent-%COMP%] {\n  padding-top: 1rem;\n}\n\ndl[_ngcontent-%COMP%] {\n  margin: 1rem 0 0;\n  border-top: 1px solid rgb(215, 215, 210);\n}\n\ndl[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(7rem, 10rem) minmax(0, 1fr);\n  gap: 1rem;\n  padding: 0.7rem 0;\n  border-bottom: 1px solid rgb(220, 220, 215);\n}\n\ndt[_ngcontent-%COMP%] {\n  color: rgb(80, 80, 76);\n}\n\ndd[_ngcontent-%COMP%] {\n  min-width: 0;\n  margin: 0;\n  overflow-wrap: anywhere;\n}\n\n@media (max-width: 52rem) {\n  .recordGrid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n\n@media (max-width: 36rem) {\n  .pageHeader[_ngcontent-%COMP%], \n   .sectionHeader[_ngcontent-%COMP%], \n   .recordHeader[_ngcontent-%COMP%] {\n    align-items: stretch;\n    flex-direction: column;\n  }\n\n  .recordGrid[_ngcontent-%COMP%], \n   dl[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 0.4rem;\n  }\n}", ".pageHeader[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.4rem 0 0;\n}\n\n.productForm[_ngcontent-%COMP%], \n.importForm[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1rem;\n  margin-top: 1rem;\n}\n\n.importForm[_ngcontent-%COMP%] {\n  grid-template-columns:\n    minmax(0, 1fr) minmax(0, auto) auto;\n  align-items: end;\n}\n\n.variantList[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1rem;\n}\n\n.variantRow[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) auto;\n  gap: 0.75rem;\n  align-items: end;\n  padding: 1rem 0;\n  border-top: 1px solid rgb(220, 220, 215);\n}\n\n.checkLabel[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  min-height: 2.4rem;\n  font-weight: 400;\n}\n\n.checkLabel[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: auto;\n  min-height: auto;\n}\n\n.variants[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns:\n    minmax(0, 1.5fr)\n    minmax(0, 1fr)\n    minmax(0, 0.7fr)\n    minmax(0, 1fr);\n  gap: 0.75rem;\n}\n\n@media (max-width: 46rem) {\n  .importForm[_ngcontent-%COMP%], \n   .variantRow[_ngcontent-%COMP%], \n   .variants[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AdminCatalog, [{
        type: Component,
        args: [{ selector: 'app-admin-catalog', imports: [DatePipe, ReactiveFormsModule], template: "<header class=\"pageHeader\">\n  <div>\n    <h2>Catalog</h2>\n    <p class=\"muted\">{{ totalCount() }} products</p>\n  </div>\n\n  <button\n    type=\"button\"\n    [disabled]=\"isLoading()\"\n    (click)=\"loadProducts(page())\"\n  >\n    Refresh\n  </button>\n</header>\n\n@if (errorMessage()) {\n  <p class=\"message error\" role=\"alert\">\n    {{ errorMessage() }}\n  </p>\n}\n\n@if (successMessage()) {\n  <p class=\"message success\" role=\"status\">\n    {{ successMessage() }}\n  </p>\n}\n\n<section>\n  <h3>Create product</h3>\n\n  <form\n    class=\"productForm\"\n    [formGroup]=\"productForm\"\n    (ngSubmit)=\"createProduct()\"\n  >\n    <div class=\"formGrid\">\n      <label>\n        Title\n        <input\n          type=\"text\"\n          formControlName=\"title\"\n          maxlength=\"250\"\n        />\n      </label>\n\n      <label>\n        Brand\n        <input\n          type=\"text\"\n          formControlName=\"brandName\"\n          maxlength=\"150\"\n        />\n      </label>\n    </div>\n\n    <label>\n      Description\n      <textarea\n        formControlName=\"description\"\n        maxlength=\"4000\"\n      ></textarea>\n    </label>\n\n    <div class=\"sectionHeader\">\n      <h4>Variants</h4>\n\n      <button\n        type=\"button\"\n        [disabled]=\"variants.length >= 100\"\n        (click)=\"addVariant()\"\n      >\n        Add variant\n      </button>\n    </div>\n\n    <div formArrayName=\"variants\" class=\"variantList\">\n      @for (\n        variant of variants.controls;\n        track $index\n      ) {\n        <div\n          class=\"variantRow\"\n          [formGroupName]=\"$index\"\n        >\n          <div class=\"variantFields\">\n            <label>\n              Name\n              <input\n                type=\"text\"\n                formControlName=\"name\"\n                maxlength=\"150\"\n              />\n            </label>\n\n            <label>\n              Code\n              <input\n                type=\"text\"\n                formControlName=\"variantCode\"\n                maxlength=\"64\"\n              />\n            </label>\n\n            <label>\n              GTIN\n              <input\n                type=\"text\"\n                formControlName=\"gtin\"\n                inputmode=\"numeric\"\n                maxlength=\"14\"\n              />\n            </label>\n          </div>\n\n          @if (variants.length > 1) {\n            <button\n              type=\"button\"\n              (click)=\"removeVariant($index)\"\n            >\n              Remove\n            </button>\n          }\n        </div>\n      }\n    </div>\n\n    <button\n      type=\"submit\"\n      [disabled]=\"isCreating()\"\n    >\n      {{ isCreating() ? 'Creating' : 'Create product' }}\n    </button>\n  </form>\n</section>\n\n<section>\n  <div class=\"sectionHeader\">\n    <h3>Import CSV</h3>\n\n    <button\n      type=\"button\"\n      (click)=\"downloadTemplate()\"\n    >\n      Download template\n    </button>\n  </div>\n\n  <form class=\"importForm\" (ngSubmit)=\"importCatalog()\">\n    <label>\n      CSV file\n      <input\n        type=\"file\"\n        accept=\".csv,text/csv\"\n        (change)=\"chooseFile($event)\"\n      />\n    </label>\n\n    <label class=\"checkLabel\">\n      <input\n        type=\"checkbox\"\n        [checked]=\"activateImport()\"\n        (change)=\"changeImportActivation($event)\"\n      />\n      Activate imported products\n    </label>\n\n    <button\n      type=\"submit\"\n      [disabled]=\"isImporting() || !selectedFile()\"\n    >\n      {{ isImporting() ? 'Importing' : 'Import' }}\n    </button>\n  </form>\n\n  @if (importResult(); as result) {\n    <p>\n      {{ result.rowsProcessed }} rows,\n      {{ result.productsCreated }} products,\n      {{ result.variantsCreated }} variants\n    </p>\n  }\n</section>\n\n<section>\n  <h3>Products</h3>\n\n  <form\n    class=\"filterForm\"\n    (ngSubmit)=\"loadProducts(1)\"\n  >\n    <label>\n      Search\n      <input\n        type=\"search\"\n        [formControl]=\"search\"\n        maxlength=\"100\"\n      />\n    </label>\n\n    <label>\n      Status\n      <select\n        [value]=\"status()\"\n        (change)=\"changeStatus($event)\"\n      >\n        <option value=\"\">All</option>\n\n        @for (item of statuses; track item) {\n          <option [value]=\"item\">{{ item }}</option>\n        }\n      </select>\n    </label>\n\n    <button type=\"submit\" [disabled]=\"isLoading()\">\n      Search\n    </button>\n  </form>\n\n  @if (isLoading()) {\n    <p>Loading</p>\n  } @else if (products().length === 0) {\n    <p>No products</p>\n  } @else {\n    <div class=\"records\">\n      @for (\n        product of products();\n        track product.productId\n      ) {\n        <article class=\"record\">\n          <div class=\"recordHeader\">\n            <div>\n              <h4>\n                {{ product.brandName }}\n                {{ product.title }}\n              </h4>\n              <small>\n                {{ product.status }}\n                \u00B7\n                {{ product.createdAtUtc | date: 'mediumDate' }}\n              </small>\n            </div>\n\n            @if (product.status === 'Draft') {\n              <button\n                type=\"button\"\n                [disabled]=\"busyProductId() !== null\"\n                (click)=\"activate(product)\"\n              >\n                {{\n                  busyProductId() === product.productId\n                    ? 'Activating'\n                    : 'Activate'\n                }}\n              </button>\n            }\n          </div>\n\n          @if (product.description) {\n            <p>{{ product.description }}</p>\n          }\n\n          <ul class=\"variants\">\n            @for (\n              variant of product.variants;\n              track variant.variantId\n            ) {\n              <li>\n                <strong>{{ variant.name }}</strong>\n                <span>{{ variant.variantCode }}</span>\n                <span>{{ variant.status }}</span>\n                @if (variant.gtin) {\n                  <span>{{ variant.gtin }}</span>\n                }\n              </li>\n            }\n          </ul>\n        </article>\n      }\n    </div>\n\n    @if (totalPages() > 1) {\n      <div class=\"pagination\">\n        <button\n          type=\"button\"\n          [disabled]=\"page() <= 1\"\n          (click)=\"loadProducts(page() - 1)\"\n        >\n          Previous\n        </button>\n\n        <span>{{ page() }} of {{ totalPages() }}</span>\n\n        <button\n          type=\"button\"\n          [disabled]=\"page() >= totalPages()\"\n          (click)=\"loadProducts(page() + 1)\"\n        >\n          Next\n        </button>\n      </div>\n    }\n  }\n</section>\n", styles: [":host {\n  display: block;\n  min-width: 0;\n}\n\n.pageHeader,\n.sectionHeader,\n.pagination,\n.actions,\n.inlineFields {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n}\n\n.pageHeader,\n.sectionHeader,\n.pagination {\n  justify-content: space-between;\n}\n\nh2,\nh3,\nh4,\np {\n  overflow-wrap: anywhere;\n}\n\nh2,\nh3,\nh4 {\n  margin: 0;\n  font-weight: 600;\n}\n\nh2 {\n  font-size: 1.5rem;\n}\n\nh3 {\n  font-size: 1.05rem;\n}\n\nh4 {\n  font-size: 1rem;\n}\n\nsection {\n  padding-top: 1.5rem;\n  margin-top: 1.5rem;\n  border-top: 1px solid rgb(215, 215, 210);\n}\n\nform {\n  min-width: 0;\n}\n\n.formGrid,\n.filterForm,\n.variantFields {\n  display: grid;\n  grid-template-columns:\n    repeat(auto-fit, minmax(min(100%, 13rem), 1fr));\n  gap: 1rem;\n  align-items: end;\n}\n\n.filterForm {\n  margin-top: 1rem;\n}\n\nlabel {\n  display: grid;\n  min-width: 0;\n  gap: 0.4rem;\n  font-size: 0.8rem;\n  font-weight: 600;\n}\n\ninput,\nselect,\ntextarea,\nbutton,\n.buttonLink {\n  min-width: 0;\n  min-height: 2.4rem;\n  padding: 0.5rem 0.65rem;\n  color: rgb(24, 24, 24);\n  background: white;\n  border: 1px solid rgb(165, 165, 160);\n  border-radius: 0;\n  font: inherit;\n}\n\ninput,\nselect,\ntextarea {\n  width: 100%;\n}\n\ntextarea {\n  min-height: 6rem;\n  resize: vertical;\n}\n\nbutton,\n.buttonLink {\n  width: fit-content;\n  cursor: pointer;\n  text-decoration: none;\n}\n\nbutton:disabled {\n  cursor: default;\n  opacity: 0.55;\n}\n\n.message {\n  padding: 0.75rem;\n  border-left: 2px solid;\n}\n\n.error {\n  color: rgb(145, 25, 25);\n}\n\n.success {\n  color: rgb(30, 100, 55);\n}\n\n.records {\n  display: grid;\n  gap: 0;\n  margin-top: 1rem;\n  border-top: 1px solid rgb(215, 215, 210);\n}\n\n.record {\n  min-width: 0;\n  padding: 1rem 0;\n  border-bottom: 1px solid rgb(215, 215, 210);\n}\n\n.recordGrid {\n  display: grid;\n  grid-template-columns:\n    minmax(0, 1.4fr)\n    minmax(0, 1fr)\n    minmax(7rem, 0.6fr)\n    auto;\n  gap: 1rem;\n  align-items: start;\n}\n\n.recordGrid > *,\n.recordHeader > * {\n  min-width: 0;\n}\n\n.recordHeader {\n  display: flex;\n  justify-content: space-between;\n  align-items: start;\n  gap: 1rem;\n}\n\n.muted,\nsmall {\n  color: rgb(80, 80, 76);\n}\n\n.metaLabel {\n  display: block;\n  margin-bottom: 0.25rem;\n  color: rgb(80, 80, 76);\n  font-size: 0.75rem;\n}\n\n.variants {\n  display: grid;\n  gap: 0.5rem;\n  padding: 0;\n  margin: 0.8rem 0 0;\n  list-style: none;\n}\n\n.variants li {\n  padding-top: 0.5rem;\n  border-top: 1px solid rgb(230, 230, 225);\n  overflow-wrap: anywhere;\n}\n\n.pagination {\n  padding-top: 1rem;\n}\n\ndl {\n  margin: 1rem 0 0;\n  border-top: 1px solid rgb(215, 215, 210);\n}\n\ndl div {\n  display: grid;\n  grid-template-columns: minmax(7rem, 10rem) minmax(0, 1fr);\n  gap: 1rem;\n  padding: 0.7rem 0;\n  border-bottom: 1px solid rgb(220, 220, 215);\n}\n\ndt {\n  color: rgb(80, 80, 76);\n}\n\ndd {\n  min-width: 0;\n  margin: 0;\n  overflow-wrap: anywhere;\n}\n\n@media (max-width: 52rem) {\n  .recordGrid {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n\n@media (max-width: 36rem) {\n  .pageHeader,\n  .sectionHeader,\n  .recordHeader {\n    align-items: stretch;\n    flex-direction: column;\n  }\n\n  .recordGrid,\n  dl div {\n    grid-template-columns: 1fr;\n    gap: 0.4rem;\n  }\n}\n", ".pageHeader p {\n  margin: 0.4rem 0 0;\n}\n\n.productForm,\n.importForm {\n  display: grid;\n  gap: 1rem;\n  margin-top: 1rem;\n}\n\n.importForm {\n  grid-template-columns:\n    minmax(0, 1fr) minmax(0, auto) auto;\n  align-items: end;\n}\n\n.variantList {\n  display: grid;\n  gap: 1rem;\n}\n\n.variantRow {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) auto;\n  gap: 0.75rem;\n  align-items: end;\n  padding: 1rem 0;\n  border-top: 1px solid rgb(220, 220, 215);\n}\n\n.checkLabel {\n  display: flex;\n  align-items: center;\n  min-height: 2.4rem;\n  font-weight: 400;\n}\n\n.checkLabel input {\n  width: auto;\n  min-height: auto;\n}\n\n.variants li {\n  display: grid;\n  grid-template-columns:\n    minmax(0, 1.5fr)\n    minmax(0, 1fr)\n    minmax(0, 0.7fr)\n    minmax(0, 1fr);\n  gap: 0.75rem;\n}\n\n@media (max-width: 46rem) {\n  .importForm,\n  .variantRow,\n  .variants li {\n    grid-template-columns: 1fr;\n  }\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AdminCatalog, { className: "AdminCatalog", filePath: "src/app/admin/admin-catalog/admin-catalog.ts", lineNumber: 32 }); })();
