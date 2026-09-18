import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthSession } from '../../auth/auth-session';
import { Roles } from '../../auth/auth.models';
import { SellerContext } from '../../seller/seller-context';
import * as i0 from "@angular/core";
function Navbar_Conditional_6_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 5);
    i0.ɵɵtext(1, " Admin ");
    i0.ɵɵelementEnd();
} }
function Navbar_Conditional_6_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 6);
    i0.ɵɵtext(1, " Seller ");
    i0.ɵɵelementEnd();
} }
function Navbar_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 4);
    i0.ɵɵtext(1, " Cart ");
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(2, Navbar_Conditional_6_Conditional_2_Template, 2, 0, "a", 5)(3, Navbar_Conditional_6_Conditional_3_Template, 2, 0, "a", 6);
    i0.ɵɵelementStart(4, "a", 7);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "button", 8);
    i0.ɵɵlistener("click", function Navbar_Conditional_6_Template_button_click_6_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.logout()); });
    i0.ɵɵtext(7, " Sign out ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r1.authSession.hasRole(ctx_r1.roles.Admin) ? 2 : 3);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.authSession.user()?.firstName || "Account", " ");
} }
function Navbar_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 9);
    i0.ɵɵtext(1, " Create account ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "a", 10);
    i0.ɵɵtext(3, " Sign in ");
    i0.ɵɵelementEnd();
} }
export class Navbar {
    authSession = inject(AuthSession);
    router = inject(Router);
    roles = Roles;
    sellerContext = inject(SellerContext);
    logout() {
        this.sellerContext.clear();
        this.authSession.logout();
        void this.router.navigate(['/']);
    }
    static ɵfac = function Navbar_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || Navbar)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: Navbar, selectors: [["app-navbar"]], decls: 8, vars: 1, consts: [[1, "navbar"], ["routerLink", "/", 1, "brand"], ["aria-label", "Primary navigation"], ["routerLink", "/"], ["routerLink", "/cart"], ["routerLink", "/admin"], ["routerLink", "/seller"], ["routerLink", "/account"], ["type", "button", 3, "click"], ["routerLink", "/register"], ["routerLink", "/login"]], template: function Navbar_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "header", 0)(1, "a", 1);
            i0.ɵɵtext(2, " IBM-Mart ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "nav", 2)(4, "a", 3);
            i0.ɵɵtext(5, " Shop ");
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(6, Navbar_Conditional_6_Template, 8, 2)(7, Navbar_Conditional_7_Template, 4, 0);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(6);
            i0.ɵɵconditional(ctx.authSession.isAuthenticated() ? 6 : 7);
        } }, dependencies: [RouterLink], styles: ["[_nghost-%COMP%] {\n  display: block;\n  border-bottom: 1px solid rgb(215, 215, 210);\n}\n.navbar[_ngcontent-%COMP%] {\n  min-height: 3.5rem;\n  padding: 0 1rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n}\n\n.brand[_ngcontent-%COMP%] {\n  color: rgb(24, 24, 24);\n  font-weight: 700;\n  text-decoration: none;\n}\n\nnav[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], \nnav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: rgb(45, 45, 43);\n  background: transparent;\n  border: 0;\n  font: inherit;\n  text-decoration: none;\n}\n\nnav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 0;\n  cursor: pointer;\n}\n\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, \nnav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n\n@media (max-width: 36rem) {\n  .navbar[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-direction: column;\n    padding-block: 0.8rem;\n  }\n\n  nav[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Navbar, [{
        type: Component,
        args: [{ selector: 'app-navbar', imports: [RouterLink], template: "<header class=\"navbar\">\n  <a class=\"brand\" routerLink=\"/\">\n    IBM-Mart\n  </a>\n\n  <nav aria-label=\"Primary navigation\">\n    <a routerLink=\"/\">\n      Shop\n    </a>\n\n    @if (authSession.isAuthenticated()) {\n      <a routerLink=\"/cart\">\n        Cart\n      </a>\n\n      @if (authSession.hasRole(roles.Admin)) {\n        <a routerLink=\"/admin\">\n          Admin\n        </a>\n      } @else {\n        <a routerLink=\"/seller\">\n          Seller\n        </a>\n      }\n\n      <a routerLink=\"/account\">\n        {{\n          authSession.user()?.firstName ||\n          'Account'\n        }}\n      </a>\n\n      <button\n        type=\"button\"\n        (click)=\"logout()\"\n      >\n        Sign out\n      </button>\n    } @else {\n      <a routerLink=\"/register\">\n        Create account\n      </a>\n\n      <a routerLink=\"/login\">\n        Sign in\n      </a>\n    }\n  </nav>\n</header>\n", styles: [":host {\n  display: block;\n  border-bottom: 1px solid rgb(215, 215, 210);\n}\n.navbar {\n  min-height: 3.5rem;\n  padding: 0 1rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n}\n\n.brand {\n  color: rgb(24, 24, 24);\n  font-weight: 700;\n  text-decoration: none;\n}\n\nnav {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n\nnav a,\nnav button {\n  color: rgb(45, 45, 43);\n  background: transparent;\n  border: 0;\n  font: inherit;\n  text-decoration: none;\n}\n\nnav button {\n  padding: 0;\n  cursor: pointer;\n}\n\nnav a:hover,\nnav button:hover {\n  text-decoration: underline;\n}\n\n@media (max-width: 36rem) {\n  .navbar {\n    align-items: flex-start;\n    flex-direction: column;\n    padding-block: 0.8rem;\n  }\n\n  nav {\n    flex-wrap: wrap;\n  }\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(Navbar, { className: "Navbar", filePath: "src/app/shared/navbar/navbar.ts", lineNumber: 14 }); })();
