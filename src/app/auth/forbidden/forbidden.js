import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Navbar } from '../../shared/navbar/navbar';
import * as i0 from "@angular/core";
export class Forbidden {
    static ɵfac = function Forbidden_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || Forbidden)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: Forbidden, selectors: [["app-forbidden"]], decls: 10, vars: 0, consts: [[1, "content-page"], [1, "eyebrow"], ["routerLink", "/account"]], template: function Forbidden_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "app-navbar");
            i0.ɵɵelementStart(1, "main", 0)(2, "p", 1);
            i0.ɵɵtext(3, "Access denied");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "h1");
            i0.ɵɵtext(5, "You cannot access this page");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "p");
            i0.ɵɵtext(7, " Your account does not have the required permission. ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "a", 2);
            i0.ɵɵtext(9, "Return to your account");
            i0.ɵɵelementEnd()();
        } }, dependencies: [Navbar, RouterLink], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Forbidden, [{
        type: Component,
        args: [{ selector: 'app-forbidden', imports: [Navbar, RouterLink], template: "<app-navbar></app-navbar>\n\n<main class=\"content-page\">\n  <p class=\"eyebrow\">Access denied</p>\n  <h1>You cannot access this page</h1>\n\n  <p>\n    Your account does not have the required permission.\n  </p>\n\n  <a routerLink=\"/account\">Return to your account</a>\n</main>" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(Forbidden, { className: "Forbidden", filePath: "src/app/auth/forbidden/forbidden.ts", lineNumber: 11 }); })();
