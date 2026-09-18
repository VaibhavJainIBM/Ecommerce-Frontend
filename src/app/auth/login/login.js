import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators, } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthApi } from '../auth-api';
import { AuthSession } from '../auth-session';
import { Navbar } from '../../shared/navbar/navbar';
import { Roles } from '../auth.models';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
function Login_Conditional_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 10);
    i0.ɵɵtext(1, " Email is required. ");
    i0.ɵɵelementEnd();
} }
function Login_Conditional_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 10);
    i0.ɵɵtext(1, " Enter a valid email address. ");
    i0.ɵɵelementEnd();
} }
function Login_Conditional_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 15);
    i0.ɵɵtext(1, " Password is required. ");
    i0.ɵɵelementEnd();
} }
function Login_Conditional_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 17);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.errorMessage(), " ");
} }
function Login_Conditional_28_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 18);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.statusMessage(), " ");
} }
export class Login {
    showPassword = signal(false, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "showPassword" }] : /* istanbul ignore next */ []));
    statusMessage = signal('', /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "statusMessage" }] : /* istanbul ignore next */ []));
    router = inject(Router);
    authApi = inject(AuthApi);
    authSession = inject(AuthSession);
    route = inject(ActivatedRoute);
    isSubmitting = signal(false, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "isSubmitting" }] : /* istanbul ignore next */ []));
    errorMessage = signal('', /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "errorMessage" }] : /* istanbul ignore next */ []));
    loginForm = new FormGroup({
        email: new FormControl('', {
            nonNullable: true,
            validators: [
                Validators.required,
                Validators.email,
            ],
        }),
        password: new FormControl('', {
            nonNullable: true,
            validators: [Validators.required],
        }),
    });
    get email() {
        return this.loginForm.controls.email;
    }
    get password() {
        return this.loginForm.controls.password;
    }
    togglePassword() {
        this.showPassword.update((visible) => !visible);
    }
    getDefaultRoute(roles) {
        if (roles.includes(Roles.Admin)) {
            return '/admin';
        }
        return '/account';
    }
    getDestination(roles, returnUrl) {
        const isAdmin = roles.includes(Roles.Admin);
        if (!returnUrl ||
            !returnUrl.startsWith('/') ||
            returnUrl.startsWith('//')) {
            return this.getDefaultRoute(roles);
        }
        if (isAdmin && returnUrl.startsWith('/seller')) {
            return '/admin';
        }
        if (!isAdmin && returnUrl.startsWith('/admin')) {
            return '/account';
        }
        return returnUrl;
    }
    onSubmit() {
        this.errorMessage.set('');
        if (this.loginForm.invalid) {
            this.loginForm.markAllAsTouched();
            return;
        }
        this.isSubmitting.set(true);
        const request = this.loginForm.getRawValue();
        this.authApi.login(request).subscribe({
            next: (response) => {
                this.authSession.start(response);
                this.isSubmitting.set(false);
                const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
                const destination = this.getDestination(response.platformRoles, returnUrl);
                void this.router.navigateByUrl(destination);
            },
            error: (error) => {
                if (error.status === 401) {
                    this.errorMessage.set('Incorrect email or password.');
                }
                else if (error.status === 0) {
                    this.errorMessage.set('Cannot reach the API. Check that the API is running.');
                }
                else if (error.status === 400) {
                    this.errorMessage.set('The login request was invalid.');
                }
                else {
                    this.errorMessage.set('Sign-in failed. Please try again.');
                }
                this.isSubmitting.set(false);
            },
        });
    }
    static ɵfac = function Login_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || Login)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: Login, selectors: [["app-login"]], decls: 31, vars: 13, consts: [[1, "login-page"], [1, "login-main"], ["aria-labelledby", "login-title"], [1, "eyebrow"], ["id", "login-title"], [1, "introduction"], ["novalidate", "", 3, "ngSubmit", "formGroup"], [1, "field"], ["for", "email"], ["id", "email", "type", "email", "formControlName", "email", "autocomplete", "username", "inputmode", "email", "placeholder", "you@example.com"], ["id", "email-error", 1, "error"], ["for", "password"], [1, "password-field"], ["id", "password", "formControlName", "password", "autocomplete", "current-password", "placeholder", "Enter your password", 3, "type"], ["type", "button", 1, "password-toggle", 3, "click"], ["id", "password-error", 1, "error"], ["type", "submit", 1, "submit-button", 3, "disabled"], ["role", "alert", 1, "api-error"], ["role", "status", 1, "status"], [1, "permission-note"]], template: function Login_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelement(1, "app-navbar");
            i0.ɵɵelementStart(2, "main", 1)(3, "section", 2)(4, "p", 3);
            i0.ɵɵtext(5, "Account");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "h1", 4);
            i0.ɵɵtext(7, "Sign in");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "p", 5);
            i0.ɵɵtext(9, " Enter your account details to continue. ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "form", 6);
            i0.ɵɵlistener("ngSubmit", function Login_Template_form_ngSubmit_10_listener() { return ctx.onSubmit(); });
            i0.ɵɵelementStart(11, "div", 7)(12, "label", 8);
            i0.ɵɵtext(13, "Email address");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(14, "input", 9);
            i0.ɵɵcontrolCreate();
            i0.ɵɵconditionalCreate(15, Login_Conditional_15_Template, 2, 0, "p", 10)(16, Login_Conditional_16_Template, 2, 0, "p", 10);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(17, "div", 7)(18, "label", 11);
            i0.ɵɵtext(19, "Password");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(20, "div", 12);
            i0.ɵɵelement(21, "input", 13);
            i0.ɵɵcontrolCreate();
            i0.ɵɵelementStart(22, "button", 14);
            i0.ɵɵlistener("click", function Login_Template_button_click_22_listener() { return ctx.togglePassword(); });
            i0.ɵɵtext(23);
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(24, Login_Conditional_24_Template, 2, 0, "p", 15);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(25, "button", 16);
            i0.ɵɵtext(26);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(27, Login_Conditional_27_Template, 2, 1, "p", 17);
            i0.ɵɵconditionalCreate(28, Login_Conditional_28_Template, 2, 1, "p", 18);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(29, "p", 19);
            i0.ɵɵtext(30, " Account permissions are applied automatically after sign-in. ");
            i0.ɵɵelementEnd()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(10);
            i0.ɵɵproperty("formGroup", ctx.loginForm);
            i0.ɵɵadvance(4);
            i0.ɵɵattribute("aria-invalid", ctx.email.touched && ctx.email.invalid)("aria-describedby", ctx.email.touched && ctx.email.invalid ? "email-error" : null);
            i0.ɵɵcontrol();
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.email.touched && ctx.email.hasError("required") ? 15 : ctx.email.touched && ctx.email.hasError("email") ? 16 : -1);
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("type", ctx.showPassword() ? "text" : "password");
            i0.ɵɵattribute("aria-invalid", ctx.password.touched && ctx.password.invalid)("aria-describedby", ctx.password.touched && ctx.password.invalid ? "password-error" : null);
            i0.ɵɵcontrol();
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", ctx.showPassword() ? "Hide" : "Show", " ");
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.password.touched && ctx.password.hasError("required") ? 24 : -1);
            i0.ɵɵadvance();
            i0.ɵɵproperty("disabled", ctx.isSubmitting());
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1(" ", ctx.isSubmitting() ? "Signing in\u2026" : "Sign in", " ");
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.errorMessage() ? 27 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.statusMessage() ? 28 : -1);
        } }, dependencies: [ReactiveFormsModule, i1.ɵNgNoValidate, i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.FormGroupDirective, i1.FormControlName, Navbar], styles: ["[_nghost-%COMP%] {\r\n  display: block;\r\n}\r\n\r\n.login-page[_ngcontent-%COMP%] {\r\n  min-height: 100vh;\r\n}\r\n\r\n.topbar[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  min-height: 4rem;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding-inline: clamp(1rem, 4vw, 3rem);\r\n  border-bottom: 1px solid #deded8;\r\n}\r\n\r\n.wordmark[_ngcontent-%COMP%] {\r\n  color: #171717;\r\n  font-size: 1.1rem;\r\n  font-weight: 700;\r\n  letter-spacing: -0.04em;\r\n  text-decoration: none;\r\n}\r\n\r\n.shop-link[_ngcontent-%COMP%] {\r\n  color: #171717;\r\n  font-size: 0.875rem;\r\n  text-decoration: none;\r\n}\r\n\r\n.login-main[_ngcontent-%COMP%] {\r\n  width: min(28rem, calc(100% - 2rem));\r\n  margin-inline: auto;\r\n  padding-block: clamp(4rem, 12vw, 8rem);\r\n}\r\n\r\n.eyebrow[_ngcontent-%COMP%] {\r\n  margin: 0 0 0.75rem;\r\n  color: #73736d;\r\n  font-size: 0.7rem;\r\n  font-weight: 700;\r\n  letter-spacing: 0.12em;\r\n  text-transform: uppercase;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  font-size: clamp(2.5rem, 8vw, 4rem);\r\n  font-weight: 500;\r\n  letter-spacing: -0.055em;\r\n  line-height: 1;\r\n}\r\n\r\n.introduction[_ngcontent-%COMP%] {\r\n  margin: 1rem 0 0;\r\n  color: #63635e;\r\n  line-height: 1.5;\r\n}\r\n\r\nform[_ngcontent-%COMP%] {\r\n  padding-top: 2rem;\r\n  margin-top: 2rem;\r\n  border-top: 1px solid #deded8;\r\n}\r\n\r\n.field[_ngcontent-%COMP%] {\r\n  margin-bottom: 1.5rem;\r\n}\r\n\r\nlabel[_ngcontent-%COMP%] {\r\n  display: block;\r\n  margin-bottom: 0.5rem;\r\n  font-size: 0.8rem;\r\n  font-weight: 700;\r\n}\r\n\r\ninput[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  min-height: 3rem;\r\n  padding: 0.75rem;\r\n  color: #171717;\r\n  background: white;\r\n  border: 1px solid #bdbdb6;\r\n  border-radius: 0;\r\n  outline: none;\r\n}\r\n\r\ninput[_ngcontent-%COMP%]:focus {\n  border-color: #171717;\n  outline: 1px solid #171717;\n}\n\r\ninput[aria-invalid='true'][_ngcontent-%COMP%] {\r\n  border-color: #a61b1b;\r\n}\r\n\r\n.password-field[_ngcontent-%COMP%] {\r\n  position: relative;\r\n}\r\n\r\n.password-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  padding-right: 4.5rem;\r\n}\r\n\r\n.password-toggle[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 50%;\r\n  right: 0.75rem;\r\n  padding: 0;\r\n  color: #52524e;\r\n  background: transparent;\r\n  border: 0;\r\n  cursor: pointer;\r\n  font-size: 0.75rem;\r\n  font-weight: 700;\r\n  transform: translateY(-50%);\r\n}\r\n\r\n.error[_ngcontent-%COMP%] {\r\n  margin: 0.45rem 0 0;\r\n  color: #a61b1b;\r\n  font-size: 0.75rem;\r\n}\r\n\r\n.submit-button[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  min-height: 3rem;\r\n  color: white;\r\n  background: #171717;\r\n  border: 1px solid #171717;\r\n  cursor: pointer;\r\n  font-weight: 700;\r\n}\r\n\r\n.submit-button[_ngcontent-%COMP%]:hover {\r\n  color: #171717;\r\n  background: white;\r\n}\r\n\r\n.status[_ngcontent-%COMP%] {\r\n  padding: 0.75rem;\r\n  margin-top: 1rem;\r\n  color: #215c39;\r\n  border-left: 2px solid #215c39;\r\n  font-size: 0.8rem;\r\n}\r\n\r\n.permission-note[_ngcontent-%COMP%] {\r\n  padding-top: 1.5rem;\r\n  margin-top: 2rem;\r\n  color: #85857e;\r\n  border-top: 1px solid #deded8;\r\n  font-size: 0.75rem;\r\n  line-height: 1.5;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:focus-visible, \r\na[_ngcontent-%COMP%]:focus-visible {\r\n  outline: 2px solid #171717;\r\n  outline-offset: 4px;\r\n}\r\n\r\n.api-error[_ngcontent-%COMP%] {\r\n  color: #a51d1d;\r\n  font-size: 0.875rem;\r\n}\r\n\r\n.submit-button[_ngcontent-%COMP%]:disabled {\r\n  cursor: wait;\r\n  opacity: 0.6;\r\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Login, [{
        type: Component,
        args: [{ selector: 'app-login', imports: [ReactiveFormsModule, Navbar], template: "<div class=\"login-page\">\n  <app-navbar>\n  </app-navbar>\n\n  <main class=\"login-main\">\n    <section aria-labelledby=\"login-title\">\n      <p class=\"eyebrow\">Account</p>\n      <h1 id=\"login-title\">Sign in</h1>\n\n      <p class=\"introduction\">\n        Enter your account details to continue.\n      </p>\n\n      <form\n        [formGroup]=\"loginForm\"\n        (ngSubmit)=\"onSubmit()\"\n        novalidate\n      >\n        <div class=\"field\">\n          <label for=\"email\">Email address</label>\n\n          <input\n            id=\"email\"\n            type=\"email\"\n            formControlName=\"email\"\n            autocomplete=\"username\"\n            inputmode=\"email\"\n            placeholder=\"you@example.com\"\n            [attr.aria-invalid]=\"email.touched && email.invalid\"\n            [attr.aria-describedby]=\"\n              email.touched && email.invalid\n                ? 'email-error'\n                : null\n            \"\n          />\n\n          @if (email.touched && email.hasError('required')) {\n            <p class=\"error\" id=\"email-error\">\n              Email is required.\n            </p>\n          } @else if (\n            email.touched &&\n            email.hasError('email')\n          ) {\n            <p class=\"error\" id=\"email-error\">\n              Enter a valid email address.\n            </p>\n          }\n        </div>\n\n        <div class=\"field\">\n          <label for=\"password\">Password</label>\n\n          <div class=\"password-field\">\n            <input\n              id=\"password\"\n              [type]=\"showPassword() ? 'text' : 'password'\"\n              formControlName=\"password\"\n              autocomplete=\"current-password\"\n              placeholder=\"Enter your password\"\n              [attr.aria-invalid]=\"\n                password.touched && password.invalid\n              \"\n              [attr.aria-describedby]=\"\n                password.touched && password.invalid\n                  ? 'password-error'\n                  : null\n              \"\n            />\n\n            <button\n              class=\"password-toggle\"\n              type=\"button\"\n              (click)=\"togglePassword()\"\n            >\n              {{ showPassword() ? 'Hide' : 'Show' }}\n            </button>\n          </div>\n\n          @if (\n            password.touched &&\n            password.hasError('required')\n          ) {\n            <p class=\"error\" id=\"password-error\">\n              Password is required.\n            </p>\n          }\n        </div>\n\n        <button\n          class=\"submit-button\"\n          type=\"submit\"\n          [disabled]=\"isSubmitting()\"\n        >\n          {{ isSubmitting() ? 'Signing in\u2026' : 'Sign in' }}\n        </button>\n        \n        @if (errorMessage()) {\n          <p class=\"api-error\" role=\"alert\">\n            {{ errorMessage() }}\n          </p>\n        }\n\n        @if (statusMessage()) {\n          <p class=\"status\" role=\"status\">\n            {{ statusMessage() }}\n          </p>\n        }\n      </form>\n\n      <p class=\"permission-note\">\n        Account permissions are applied automatically after\n        sign-in.\n      </p>\n    </section>\n  </main>\n</div>", styles: [":host {\r\n  display: block;\r\n}\r\n\r\n.login-page {\r\n  min-height: 100vh;\r\n}\r\n\r\n.topbar {\r\n  display: flex;\r\n  min-height: 4rem;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding-inline: clamp(1rem, 4vw, 3rem);\r\n  border-bottom: 1px solid #deded8;\r\n}\r\n\r\n.wordmark {\r\n  color: #171717;\r\n  font-size: 1.1rem;\r\n  font-weight: 700;\r\n  letter-spacing: -0.04em;\r\n  text-decoration: none;\r\n}\r\n\r\n.shop-link {\r\n  color: #171717;\r\n  font-size: 0.875rem;\r\n  text-decoration: none;\r\n}\r\n\r\n.login-main {\r\n  width: min(28rem, calc(100% - 2rem));\r\n  margin-inline: auto;\r\n  padding-block: clamp(4rem, 12vw, 8rem);\r\n}\r\n\r\n.eyebrow {\r\n  margin: 0 0 0.75rem;\r\n  color: #73736d;\r\n  font-size: 0.7rem;\r\n  font-weight: 700;\r\n  letter-spacing: 0.12em;\r\n  text-transform: uppercase;\r\n}\r\n\r\nh1 {\r\n  margin: 0;\r\n  font-size: clamp(2.5rem, 8vw, 4rem);\r\n  font-weight: 500;\r\n  letter-spacing: -0.055em;\r\n  line-height: 1;\r\n}\r\n\r\n.introduction {\r\n  margin: 1rem 0 0;\r\n  color: #63635e;\r\n  line-height: 1.5;\r\n}\r\n\r\nform {\r\n  padding-top: 2rem;\r\n  margin-top: 2rem;\r\n  border-top: 1px solid #deded8;\r\n}\r\n\r\n.field {\r\n  margin-bottom: 1.5rem;\r\n}\r\n\r\nlabel {\r\n  display: block;\r\n  margin-bottom: 0.5rem;\r\n  font-size: 0.8rem;\r\n  font-weight: 700;\r\n}\r\n\r\ninput {\r\n  width: 100%;\r\n  min-height: 3rem;\r\n  padding: 0.75rem;\r\n  color: #171717;\r\n  background: white;\r\n  border: 1px solid #bdbdb6;\r\n  border-radius: 0;\r\n  outline: none;\r\n}\r\n\r\ninput:focus {\n  border-color: #171717;\n  outline: 1px solid #171717;\n}\n\r\ninput[aria-invalid='true'] {\r\n  border-color: #a61b1b;\r\n}\r\n\r\n.password-field {\r\n  position: relative;\r\n}\r\n\r\n.password-field input {\r\n  padding-right: 4.5rem;\r\n}\r\n\r\n.password-toggle {\r\n  position: absolute;\r\n  top: 50%;\r\n  right: 0.75rem;\r\n  padding: 0;\r\n  color: #52524e;\r\n  background: transparent;\r\n  border: 0;\r\n  cursor: pointer;\r\n  font-size: 0.75rem;\r\n  font-weight: 700;\r\n  transform: translateY(-50%);\r\n}\r\n\r\n.error {\r\n  margin: 0.45rem 0 0;\r\n  color: #a61b1b;\r\n  font-size: 0.75rem;\r\n}\r\n\r\n.submit-button {\r\n  width: 100%;\r\n  min-height: 3rem;\r\n  color: white;\r\n  background: #171717;\r\n  border: 1px solid #171717;\r\n  cursor: pointer;\r\n  font-weight: 700;\r\n}\r\n\r\n.submit-button:hover {\r\n  color: #171717;\r\n  background: white;\r\n}\r\n\r\n.status {\r\n  padding: 0.75rem;\r\n  margin-top: 1rem;\r\n  color: #215c39;\r\n  border-left: 2px solid #215c39;\r\n  font-size: 0.8rem;\r\n}\r\n\r\n.permission-note {\r\n  padding-top: 1.5rem;\r\n  margin-top: 2rem;\r\n  color: #85857e;\r\n  border-top: 1px solid #deded8;\r\n  font-size: 0.75rem;\r\n  line-height: 1.5;\r\n}\r\n\r\nbutton:focus-visible,\r\na:focus-visible {\r\n  outline: 2px solid #171717;\r\n  outline-offset: 4px;\r\n}\r\n\r\n.api-error {\r\n  color: #a51d1d;\r\n  font-size: 0.875rem;\r\n}\r\n\r\n.submit-button:disabled {\r\n  cursor: wait;\r\n  opacity: 0.6;\r\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(Login, { className: "Login", filePath: "src/app/auth/login/login.ts", lineNumber: 23 }); })();
