import { Component, inject, signal, } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthApi } from '../auth-api';
import { Roles, } from '../auth.models';
import { Navbar } from '../../shared/navbar/navbar';
import { AuthSession } from '../auth-session';
import * as i0 from "@angular/core";
function Account_Conditional_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1, "Loading");
    i0.ɵɵelementEnd();
} }
function Account_Conditional_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 4);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.errorMessage(), " ");
} }
function Account_Conditional_12_Conditional_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 7);
    i0.ɵɵtext(1, "Admin dashboard");
    i0.ɵɵelementEnd();
} }
function Account_Conditional_12_Conditional_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 8);
    i0.ɵɵtext(1, "Seller accounts");
    i0.ɵɵelementEnd();
} }
function Account_Conditional_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section")(1, "dl")(2, "div")(3, "dt");
    i0.ɵɵtext(4, "Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "dd");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "div")(8, "dt");
    i0.ɵɵtext(9, "Email");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "dd");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "div")(13, "dt");
    i0.ɵɵtext(14, "Role");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "dd");
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(17, "div", 6);
    i0.ɵɵconditionalCreate(18, Account_Conditional_12_Conditional_18_Template, 2, 0, "a", 7)(19, Account_Conditional_12_Conditional_19_Template, 2, 0, "a", 8);
    i0.ɵɵelementStart(20, "a", 9);
    i0.ɵɵtext(21, "Shop");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const currentUser_r2 = ctx;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate2(" ", currentUser_r2.firstName, " ", currentUser_r2.lastName, " ");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(currentUser_r2.email);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r0.roleLabel(currentUser_r2));
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(currentUser_r2.platformRoles.includes(ctx_r0.roles.Admin) ? 18 : 19);
} }
function Account_Conditional_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 5);
    i0.ɵɵtext(1, "Sign in");
    i0.ɵɵelementEnd();
} }
export class Account {
    authApi = inject(AuthApi);
    authSession = inject(AuthSession);
    roles = Roles;
    user = signal(this.authSession.user(), /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "user" }] : /* istanbul ignore next */ []));
    isLoading = signal(true, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "isLoading" }] : /* istanbul ignore next */ []));
    errorMessage = signal('', /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "errorMessage" }] : /* istanbul ignore next */ []));
    ngOnInit() {
        this.load();
    }
    load() {
        this.isLoading.set(true);
        this.errorMessage.set('');
        this.authApi.getCurrentUser().subscribe({
            next: (user) => {
                this.user.set(user);
                this.isLoading.set(false);
            },
            error: (error) => {
                if (error.status === 401) {
                    this.errorMessage.set('Your session is missing or expired. Please sign in.');
                }
                else {
                    this.errorMessage.set('Could not load your account.');
                }
                this.isLoading.set(false);
            },
        });
    }
    roleLabel(user) {
        return user.platformRoles.length > 0
            ? user.platformRoles.join(', ')
            : 'User';
    }
    static ɵfac = function Account_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || Account)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: Account, selectors: [["app-account"]], decls: 14, vars: 4, consts: [[1, "accountPage"], [1, "pageHeader"], [1, "eyebrow"], ["type", "button", 3, "click", "disabled"], ["role", "alert", 1, "message", "error"], ["routerLink", "/login"], [1, "actions"], ["routerLink", "/admin"], ["routerLink", "/seller"], ["routerLink", "/"]], template: function Account_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "app-navbar");
            i0.ɵɵelementStart(1, "main", 0)(2, "header", 1)(3, "div")(4, "p", 2);
            i0.ɵɵtext(5, "Account");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "h1");
            i0.ɵɵtext(7, "Your account");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(8, "button", 3);
            i0.ɵɵlistener("click", function Account_Template_button_click_8_listener() { return ctx.load(); });
            i0.ɵɵtext(9, " Refresh ");
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(10, Account_Conditional_10_Template, 2, 0, "p");
            i0.ɵɵconditionalCreate(11, Account_Conditional_11_Template, 2, 1, "p", 4);
            i0.ɵɵconditionalCreate(12, Account_Conditional_12_Template, 22, 5, "section")(13, Account_Conditional_13_Template, 2, 0, "a", 5);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            let tmp_3_0;
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("disabled", ctx.isLoading());
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.isLoading() ? 10 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.errorMessage() ? 11 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional((tmp_3_0 = ctx.user()) ? 12 : !ctx.isLoading() ? 13 : -1, tmp_3_0);
        } }, dependencies: [RouterLink, Navbar], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.accountPage[_ngcontent-%COMP%] {\n  width: min(44rem, calc(100% - 2rem));\n  margin: 0 auto;\n  padding: 2rem 0 4rem;\n}\n\n.pageHeader[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: start;\n  justify-content: space-between;\n  gap: 1rem;\n  padding-bottom: 1.5rem;\n  border-bottom: 1px solid rgb(215, 215, 210);\n}\n\n.eyebrow[_ngcontent-%COMP%] {\n  margin: 0 0 0.5rem;\n  color: rgb(80, 80, 76);\n  font-size: 0.8rem;\n}\n\nh1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 2rem;\n  font-weight: 600;\n}\n\nsection[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n}\n\nbutton[_ngcontent-%COMP%], \n.actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  min-height: 2.4rem;\n  padding: 0.5rem 0.65rem;\n  color: rgb(24, 24, 24);\n  background: white;\n  border: 1px solid rgb(165, 165, 160);\n  border-radius: 0;\n  font: inherit;\n}\n\nbutton[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\nbutton[_ngcontent-%COMP%]:disabled {\n  cursor: default;\n  opacity: 0.55;\n}\n\ndl[_ngcontent-%COMP%] {\n  margin: 0;\n  border-top: 1px solid rgb(215, 215, 210);\n}\n\ndl[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 9rem minmax(0, 1fr);\n  gap: 1rem;\n  padding: 0.9rem 0;\n  border-bottom: 1px solid rgb(220, 220, 215);\n}\n\ndt[_ngcontent-%COMP%] {\n  color: rgb(80, 80, 76);\n}\n\ndd[_ngcontent-%COMP%] {\n  min-width: 0;\n  margin: 0;\n  overflow-wrap: anywhere;\n}\n\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n  margin-top: 1.5rem;\n}\n\n.actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\n.actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n\n.message[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  border-left: 2px solid;\n}\n\n.error[_ngcontent-%COMP%] {\n  color: rgb(145, 25, 25);\n}\n\n@media (max-width: 34rem) {\n  .pageHeader[_ngcontent-%COMP%] {\n    align-items: stretch;\n    flex-direction: column;\n  }\n\n  dl[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 0.3rem;\n  }\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Account, [{
        type: Component,
        args: [{ selector: 'app-account', imports: [RouterLink, Navbar], template: "<app-navbar></app-navbar>\n\n<main class=\"accountPage\">\n  <header class=\"pageHeader\">\n    <div>\n      <p class=\"eyebrow\">Account</p>\n      <h1>Your account</h1>\n    </div>\n\n    <button\n      type=\"button\"\n      [disabled]=\"isLoading()\"\n      (click)=\"load()\"\n    >\n      Refresh\n    </button>\n  </header>\n\n  @if (isLoading()) {\n    <p>Loading</p>\n  }\n\n  @if (errorMessage()) {\n    <p class=\"message error\" role=\"alert\">\n      {{ errorMessage() }}\n    </p>\n  }\n\n  @if (user(); as currentUser) {\n    <section>\n      <dl>\n        <div>\n          <dt>Name</dt>\n          <dd>\n            {{ currentUser.firstName }}\n            {{ currentUser.lastName }}\n          </dd>\n        </div>\n\n        <div>\n          <dt>Email</dt>\n          <dd>{{ currentUser.email }}</dd>\n        </div>\n\n        <div>\n          <dt>Role</dt>\n          <dd>{{ roleLabel(currentUser) }}</dd>\n        </div>\n      </dl>\n\n      <div class=\"actions\">\n        @if (\n          currentUser.platformRoles.includes(roles.Admin)\n        ) {\n          <a routerLink=\"/admin\">Admin dashboard</a>\n        } @else {\n          <a routerLink=\"/seller\">Seller accounts</a>\n        }\n\n        <a routerLink=\"/\">Shop</a>\n      </div>\n    </section>\n  } @else if (!isLoading()) {\n    <a routerLink=\"/login\">Sign in</a>\n  }\n</main>\n", styles: [":host {\n  display: block;\n}\n\n.accountPage {\n  width: min(44rem, calc(100% - 2rem));\n  margin: 0 auto;\n  padding: 2rem 0 4rem;\n}\n\n.pageHeader {\n  display: flex;\n  align-items: start;\n  justify-content: space-between;\n  gap: 1rem;\n  padding-bottom: 1.5rem;\n  border-bottom: 1px solid rgb(215, 215, 210);\n}\n\n.eyebrow {\n  margin: 0 0 0.5rem;\n  color: rgb(80, 80, 76);\n  font-size: 0.8rem;\n}\n\nh1 {\n  margin: 0;\n  font-size: 2rem;\n  font-weight: 600;\n}\n\nsection {\n  margin-top: 1.5rem;\n}\n\nbutton,\n.actions a {\n  min-height: 2.4rem;\n  padding: 0.5rem 0.65rem;\n  color: rgb(24, 24, 24);\n  background: white;\n  border: 1px solid rgb(165, 165, 160);\n  border-radius: 0;\n  font: inherit;\n}\n\nbutton {\n  cursor: pointer;\n}\n\nbutton:disabled {\n  cursor: default;\n  opacity: 0.55;\n}\n\ndl {\n  margin: 0;\n  border-top: 1px solid rgb(215, 215, 210);\n}\n\ndl div {\n  display: grid;\n  grid-template-columns: 9rem minmax(0, 1fr);\n  gap: 1rem;\n  padding: 0.9rem 0;\n  border-bottom: 1px solid rgb(220, 220, 215);\n}\n\ndt {\n  color: rgb(80, 80, 76);\n}\n\ndd {\n  min-width: 0;\n  margin: 0;\n  overflow-wrap: anywhere;\n}\n\n.actions {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n  margin-top: 1.5rem;\n}\n\n.actions a {\n  text-decoration: none;\n}\n\n.actions a:hover {\n  text-decoration: underline;\n}\n\n.message {\n  padding: 0.75rem;\n  border-left: 2px solid;\n}\n\n.error {\n  color: rgb(145, 25, 25);\n}\n\n@media (max-width: 34rem) {\n  .pageHeader {\n    align-items: stretch;\n    flex-direction: column;\n  }\n\n  dl div {\n    grid-template-columns: 1fr;\n    gap: 0.3rem;\n  }\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(Account, { className: "Account", filePath: "src/app/auth/account/account.ts", lineNumber: 25 }); })();
