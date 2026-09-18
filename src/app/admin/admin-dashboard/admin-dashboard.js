import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet, } from '@angular/router';
import { AuthSession } from '../../auth/auth-session';
import { Navbar } from '../../shared/navbar/navbar';
import * as i0 from "@angular/core";
export class AdminDashboard {
    authSession = inject(AuthSession);
    static ɵfac = function AdminDashboard_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AdminDashboard)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AdminDashboard, selectors: [["app-admin-dashboard"]], decls: 19, vars: 1, consts: [[1, "workspacePage"], [1, "workspaceHeader"], [1, "workspaceLayout"], ["aria-label", "Admin navigation", 1, "workspaceNav"], ["routerLink", "/admin/overview", "routerLinkActive", "active"], ["routerLink", "/admin/catalog", "routerLinkActive", "active"], ["routerLink", "/admin/sellers", "routerLinkActive", "active"], ["routerLink", "/admin/listings", "routerLinkActive", "active"], [1, "workspaceContent"]], template: function AdminDashboard_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "app-navbar");
            i0.ɵɵelementStart(1, "main", 0)(2, "header", 1)(3, "h1");
            i0.ɵɵtext(4, "Admin dashboard");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "span");
            i0.ɵɵtext(6);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(7, "div", 2)(8, "nav", 3)(9, "a", 4);
            i0.ɵɵtext(10, " Overview ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "a", 5);
            i0.ɵɵtext(12, " Catalog ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "a", 6);
            i0.ɵɵtext(14, " Sellers ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(15, "a", 7);
            i0.ɵɵtext(16, " Listings ");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(17, "section", 8);
            i0.ɵɵelement(18, "router-outlet");
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate(ctx.authSession.user()?.email);
        } }, dependencies: [Navbar,
            RouterLink,
            RouterLinkActive,
            RouterOutlet], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.workspacePage[_ngcontent-%COMP%] {\n  width: min(76rem, calc(100% - 2rem));\n  margin: 0 auto;\n  padding: 2rem 0 4rem;\n}\n\n.workspaceHeader[_ngcontent-%COMP%] {\n  padding-bottom: 1.5rem;\n  border-bottom: 1px solid rgb(215, 215, 210);\n}\n\n.workspaceHeader[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0 0 0.8rem;\n  font-size: 2rem;\n  font-weight: 600;\n}\n\n.workspaceHeader[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: rgb(80, 80, 76);\n  font-size: 0.85rem;\n  overflow-wrap: anywhere;\n}\n\n.workspaceLayout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 11rem minmax(0, 1fr);\n}\n\n.workspaceNav[_ngcontent-%COMP%] {\n  display: grid;\n  align-content: start;\n  padding: 1.5rem 1.5rem 1.5rem 0;\n  border-right: 1px solid rgb(215, 215, 210);\n}\n\n.workspaceNav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 0.6rem 0;\n  color: rgb(80, 80, 76);\n  text-decoration: none;\n}\n\n.workspaceNav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, \n.workspaceNav[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  color: rgb(20, 20, 20);\n  text-decoration: underline;\n}\n\n.workspaceContent[_ngcontent-%COMP%] {\n  min-width: 0;\n  padding: 1.5rem 0 0 1.5rem;\n}\n\n@media (max-width: 46rem) {\n  .workspaceLayout[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .workspaceNav[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 0.4rem 1rem;\n    padding: 1rem 0;\n    border-right: 0;\n    border-bottom: 1px solid rgb(215, 215, 210);\n  }\n\n  .workspaceContent[_ngcontent-%COMP%] {\n    padding-left: 0;\n  }\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AdminDashboard, [{
        type: Component,
        args: [{ selector: 'app-admin-dashboard', imports: [
                    Navbar,
                    RouterLink,
                    RouterLinkActive,
                    RouterOutlet,
                ], template: "<app-navbar></app-navbar>\n\n<main class=\"workspacePage\">\n  <header class=\"workspaceHeader\">\n    <h1>Admin dashboard</h1>\n    <span>{{ authSession.user()?.email }}</span>\n  </header>\n\n  <div class=\"workspaceLayout\">\n    <nav\n      class=\"workspaceNav\"\n      aria-label=\"Admin navigation\"\n    >\n      <a\n        routerLink=\"/admin/overview\"\n        routerLinkActive=\"active\"\n      >\n        Overview\n      </a>\n\n      <a\n        routerLink=\"/admin/catalog\"\n        routerLinkActive=\"active\"\n      >\n        Catalog\n      </a>\n\n      <a\n        routerLink=\"/admin/sellers\"\n        routerLinkActive=\"active\"\n      >\n        Sellers\n      </a>\n\n      <a\n        routerLink=\"/admin/listings\"\n        routerLinkActive=\"active\"\n      >\n        Listings\n      </a>\n    </nav>\n\n    <section class=\"workspaceContent\">\n      <router-outlet></router-outlet>\n    </section>\n  </div>\n</main>\n", styles: [":host {\n  display: block;\n}\n\n.workspacePage {\n  width: min(76rem, calc(100% - 2rem));\n  margin: 0 auto;\n  padding: 2rem 0 4rem;\n}\n\n.workspaceHeader {\n  padding-bottom: 1.5rem;\n  border-bottom: 1px solid rgb(215, 215, 210);\n}\n\n.workspaceHeader h1 {\n  margin: 0 0 0.8rem;\n  font-size: 2rem;\n  font-weight: 600;\n}\n\n.workspaceHeader span {\n  color: rgb(80, 80, 76);\n  font-size: 0.85rem;\n  overflow-wrap: anywhere;\n}\n\n.workspaceLayout {\n  display: grid;\n  grid-template-columns: 11rem minmax(0, 1fr);\n}\n\n.workspaceNav {\n  display: grid;\n  align-content: start;\n  padding: 1.5rem 1.5rem 1.5rem 0;\n  border-right: 1px solid rgb(215, 215, 210);\n}\n\n.workspaceNav a {\n  padding: 0.6rem 0;\n  color: rgb(80, 80, 76);\n  text-decoration: none;\n}\n\n.workspaceNav a:hover,\n.workspaceNav a.active {\n  color: rgb(20, 20, 20);\n  text-decoration: underline;\n}\n\n.workspaceContent {\n  min-width: 0;\n  padding: 1.5rem 0 0 1.5rem;\n}\n\n@media (max-width: 46rem) {\n  .workspaceLayout {\n    display: block;\n  }\n\n  .workspaceNav {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 0.4rem 1rem;\n    padding: 1rem 0;\n    border-right: 0;\n    border-bottom: 1px solid rgb(215, 215, 210);\n  }\n\n  .workspaceContent {\n    padding-left: 0;\n  }\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AdminDashboard, { className: "AdminDashboard", filePath: "src/app/admin/admin-dashboard/admin-dashboard.ts", lineNumber: 21 }); })();
