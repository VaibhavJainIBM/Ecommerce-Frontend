import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet, } from '@angular/router';
import { Navbar } from '../../shared/navbar/navbar';
import { SellerContext } from '../seller-context';
import * as i0 from "@angular/core";
const _c0 = a0 => ["/seller", a0, "overview"];
const _c1 = a0 => ["/seller", a0, "listings"];
const _c2 = a0 => ["/seller", a0, "orders"];
const _c3 = a0 => ["/seller", a0, "warehouses"];
const _c4 = a0 => ["/seller", a0, "inventory"];
const _c5 = a0 => ["/seller", a0, "team"];
function SellerWorkspace_Conditional_1_Conditional_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 6);
    i0.ɵɵtext(1, " Listings ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "a", 6);
    i0.ɵɵtext(3, " Orders ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const seller_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(2, _c1, seller_r1.sellerId));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(4, _c2, seller_r1.sellerId));
} }
function SellerWorkspace_Conditional_1_Conditional_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 6);
    i0.ɵɵtext(1, " Warehouses ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "a", 6);
    i0.ɵɵtext(3, " Inventory ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const seller_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(2, _c3, seller_r1.sellerId));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(4, _c4, seller_r1.sellerId));
} }
function SellerWorkspace_Conditional_1_Conditional_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 6);
    i0.ɵɵtext(1, " Team ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const seller_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(1, _c5, seller_r1.sellerId));
} }
function SellerWorkspace_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "main", 0)(1, "header", 1)(2, "a", 2);
    i0.ɵɵtext(3, "Seller accounts");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "h1");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 3)(7, "span");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "span");
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(11, "div", 4)(12, "nav", 5)(13, "a", 6);
    i0.ɵɵtext(14, " Overview ");
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(15, SellerWorkspace_Conditional_1_Conditional_15_Template, 4, 6);
    i0.ɵɵconditionalCreate(16, SellerWorkspace_Conditional_1_Conditional_16_Template, 4, 6);
    i0.ɵɵconditionalCreate(17, SellerWorkspace_Conditional_1_Conditional_17_Template, 2, 3, "a", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "section", 7);
    i0.ɵɵelement(19, "router-outlet");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const seller_r1 = ctx;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(seller_r1.displayName);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("Status: ", seller_r1.sellerStatus);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Roles: ", seller_r1.roles.join(", "));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(7, _c0, seller_r1.sellerId));
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r1.sellerContext.canManage() ? 15 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.sellerContext.canUseInventory() ? 16 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.sellerContext.isOwner() ? 17 : -1);
} }
export class SellerWorkspace {
    sellerContext = inject(SellerContext);
    static ɵfac = function SellerWorkspace_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SellerWorkspace)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SellerWorkspace, selectors: [["app-seller-workspace"]], decls: 2, vars: 1, consts: [[1, "workspacePage"], [1, "workspaceHeader"], ["routerLink", "/seller"], [1, "sellerMeta"], [1, "workspaceLayout"], ["aria-label", "Seller navigation", 1, "workspaceNav"], ["routerLinkActive", "active", 3, "routerLink"], [1, "workspaceContent"]], template: function SellerWorkspace_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "app-navbar");
            i0.ɵɵconditionalCreate(1, SellerWorkspace_Conditional_1_Template, 20, 9, "main", 0);
        } if (rf & 2) {
            let tmp_0_0;
            i0.ɵɵadvance();
            i0.ɵɵconditional((tmp_0_0 = ctx.sellerContext.selected()) ? 1 : -1, tmp_0_0);
        } }, dependencies: [Navbar,
            RouterLink,
            RouterLinkActive,
            RouterOutlet], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.workspacePage[_ngcontent-%COMP%] {\n  width: min(76rem, calc(100% - 2rem));\n  margin: 0 auto;\n  padding: 2rem 0 4rem;\n}\n\n.workspaceHeader[_ngcontent-%COMP%] {\n  padding-bottom: 1.5rem;\n  border-bottom: 1px solid rgb(215, 215, 210);\n}\n\n.workspaceHeader[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: rgb(65, 65, 62);\n  font-size: 0.85rem;\n}\n\n.workspaceHeader[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0.8rem 0;\n  font-size: 2rem;\n  font-weight: 600;\n}\n\n.sellerMeta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1.5rem;\n  color: rgb(80, 80, 76);\n  font-size: 0.85rem;\n}\n\n.workspaceLayout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 11rem minmax(0, 1fr);\n}\n\n.workspaceNav[_ngcontent-%COMP%] {\n  display: grid;\n  align-content: start;\n  padding: 1.5rem 1.5rem 1.5rem 0;\n  border-right: 1px solid rgb(215, 215, 210);\n}\n\n.workspaceNav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 0.6rem 0;\n  color: rgb(80, 80, 76);\n  text-decoration: none;\n}\n\n.workspaceNav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, \n.workspaceNav[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  color: rgb(20, 20, 20);\n  text-decoration: underline;\n}\n\n.workspaceContent[_ngcontent-%COMP%] {\n  min-width: 0;\n  padding: 1.5rem 0 0 1.5rem;\n}\n\n@media (max-width: 46rem) {\n  .workspaceLayout[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .workspaceNav[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 1rem;\n    padding: 1rem 0;\n    border-right: 0;\n    border-bottom: 1px solid rgb(215, 215, 210);\n  }\n\n  .workspaceContent[_ngcontent-%COMP%] {\n    padding-left: 0;\n  }\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SellerWorkspace, [{
        type: Component,
        args: [{ selector: 'app-seller-workspace', imports: [
                    Navbar,
                    RouterLink,
                    RouterLinkActive,
                    RouterOutlet,
                ], template: "<app-navbar></app-navbar>\n\n@if (sellerContext.selected(); as seller) {\n  <main class=\"workspacePage\">\n    <header class=\"workspaceHeader\">\n      <a routerLink=\"/seller\">Seller accounts</a>\n      <h1>{{ seller.displayName }}</h1>\n\n      <div class=\"sellerMeta\">\n        <span>Status: {{ seller.sellerStatus }}</span>\n        <span>Roles: {{ seller.roles.join(', ') }}</span>\n      </div>\n    </header>\n\n    <div class=\"workspaceLayout\">\n      <nav\n        class=\"workspaceNav\"\n        aria-label=\"Seller navigation\"\n      >\n        <a\n          [routerLink]=\"[\n            '/seller',\n            seller.sellerId,\n            'overview'\n          ]\"\n          routerLinkActive=\"active\"\n        >\n          Overview\n        </a>\n\n        @if (sellerContext.canManage()) {\n          <a\n            [routerLink]=\"[\n              '/seller',\n              seller.sellerId,\n              'listings'\n            ]\"\n            routerLinkActive=\"active\"\n          >\n            Listings\n          </a>\n\n          <a\n            [routerLink]=\"[\n              '/seller',\n              seller.sellerId,\n              'orders'\n            ]\"\n            routerLinkActive=\"active\"\n          >\n            Orders\n          </a>\n        }\n\n        @if (sellerContext.canUseInventory()) {\n          <a\n            [routerLink]=\"[\n              '/seller',\n              seller.sellerId,\n              'warehouses'\n            ]\"\n            routerLinkActive=\"active\"\n          >\n            Warehouses\n          </a>\n\n          <a\n            [routerLink]=\"[\n              '/seller',\n              seller.sellerId,\n              'inventory'\n            ]\"\n            routerLinkActive=\"active\"\n          >\n            Inventory\n          </a>\n        }\n\n        @if (sellerContext.isOwner()) {\n          <a\n            [routerLink]=\"[\n              '/seller',\n              seller.sellerId,\n              'team'\n            ]\"\n            routerLinkActive=\"active\"\n          >\n            Team\n          </a>\n        }\n      </nav>\n\n      <section class=\"workspaceContent\">\n        <router-outlet></router-outlet>\n      </section>\n    </div>\n  </main>\n}\n", styles: [":host {\n  display: block;\n}\n\n.workspacePage {\n  width: min(76rem, calc(100% - 2rem));\n  margin: 0 auto;\n  padding: 2rem 0 4rem;\n}\n\n.workspaceHeader {\n  padding-bottom: 1.5rem;\n  border-bottom: 1px solid rgb(215, 215, 210);\n}\n\n.workspaceHeader a {\n  color: rgb(65, 65, 62);\n  font-size: 0.85rem;\n}\n\n.workspaceHeader h1 {\n  margin: 0.8rem 0;\n  font-size: 2rem;\n  font-weight: 600;\n}\n\n.sellerMeta {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1.5rem;\n  color: rgb(80, 80, 76);\n  font-size: 0.85rem;\n}\n\n.workspaceLayout {\n  display: grid;\n  grid-template-columns: 11rem minmax(0, 1fr);\n}\n\n.workspaceNav {\n  display: grid;\n  align-content: start;\n  padding: 1.5rem 1.5rem 1.5rem 0;\n  border-right: 1px solid rgb(215, 215, 210);\n}\n\n.workspaceNav a {\n  padding: 0.6rem 0;\n  color: rgb(80, 80, 76);\n  text-decoration: none;\n}\n\n.workspaceNav a:hover,\n.workspaceNav a.active {\n  color: rgb(20, 20, 20);\n  text-decoration: underline;\n}\n\n.workspaceContent {\n  min-width: 0;\n  padding: 1.5rem 0 0 1.5rem;\n}\n\n@media (max-width: 46rem) {\n  .workspaceLayout {\n    display: block;\n  }\n\n  .workspaceNav {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 1rem;\n    padding: 1rem 0;\n    border-right: 0;\n    border-bottom: 1px solid rgb(215, 215, 210);\n  }\n\n  .workspaceContent {\n    padding-left: 0;\n  }\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SellerWorkspace, { className: "SellerWorkspace", filePath: "src/app/seller/seller-workspace/seller-workspace.ts", lineNumber: 21 }); })();
