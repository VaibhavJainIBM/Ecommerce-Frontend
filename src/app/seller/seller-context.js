import { computed, Injectable, signal, } from '@angular/core';
import * as i0 from "@angular/core";
export class SellerContext {
    selectedState = signal(null, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "selectedState" }] : /* istanbul ignore next */ []));
    selected = this.selectedState.asReadonly();
    isOwner = computed(() => this.hasRole('Owner'), /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "isOwner" }] : /* istanbul ignore next */ []));
    canManage = computed(() => this.hasRole('Owner') ||
        this.hasRole('Manager'), /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "canManage" }] : /* istanbul ignore next */ []));
    canUseInventory = computed(() => this.hasRole('Owner') ||
        this.hasRole('Manager') ||
        this.hasRole('WarehouseStaff'), /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "canUseInventory" }] : /* istanbul ignore next */ []));
    select(seller) {
        this.selectedState.set(seller);
    }
    clear() {
        this.selectedState.set(null);
    }
    hasRole(role) {
        return (this.selectedState()?.roles.includes(role)
            ?? false);
    }
    static ɵfac = function SellerContext_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SellerContext)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: SellerContext, factory: SellerContext.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SellerContext, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();
