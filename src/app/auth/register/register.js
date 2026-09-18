import { Component, inject, signal, } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators, } from '@angular/forms';
import { Router, RouterLink, } from '@angular/router';
import { Navbar } from '../../shared/navbar/navbar';
import { AuthApi } from '../auth-api';
import { AuthSession } from '../auth-session';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
function Register_Conditional_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 11);
    i0.ɵɵtext(1, " First name is required. ");
    i0.ɵɵelementEnd();
} }
function Register_Conditional_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 11);
    i0.ɵɵtext(1, " First name cannot exceed 100 characters. ");
    i0.ɵɵelementEnd();
} }
function Register_Conditional_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 14);
    i0.ɵɵtext(1, " Last name is required. ");
    i0.ɵɵelementEnd();
} }
function Register_Conditional_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 14);
    i0.ɵɵtext(1, " Last name cannot exceed 100 characters. ");
    i0.ɵɵelementEnd();
} }
function Register_Conditional_28_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 17);
    i0.ɵɵtext(1, " Email is required. ");
    i0.ɵɵelementEnd();
} }
function Register_Conditional_29_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 17);
    i0.ɵɵtext(1, " Enter a valid email address. ");
    i0.ɵɵelementEnd();
} }
function Register_Conditional_30_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 17);
    i0.ɵɵtext(1, " An account with this email already exists. ");
    i0.ɵɵelementEnd();
} }
function Register_Conditional_40_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 23);
    i0.ɵɵtext(1, " Password is required. ");
    i0.ɵɵelementEnd();
} }
function Register_Conditional_41_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 23);
    i0.ɵɵtext(1, " Password does not meet the required rules. ");
    i0.ɵɵelementEnd();
} }
function Register_Conditional_49_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 26);
    i0.ɵɵtext(1, " Confirm your password. ");
    i0.ɵɵelementEnd();
} }
function Register_Conditional_50_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 26);
    i0.ɵɵtext(1, " Passwords do not match. ");
    i0.ɵɵelementEnd();
} }
function Register_Conditional_53_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 28);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.errorMessage(), " ");
} }
const nonWhitespaceValidator = (control) => {
    const value = String(control.value ?? '');
    return value.trim().length > 0
        ? null
        : { whitespace: true };
};
const passwordPolicyValidator = (control) => {
    const value = String(control.value ?? '');
    if (!value) {
        return null;
    }
    const isValid = value.length >= 8 &&
        new Set(value).size >= 4 &&
        /[A-Z]/.test(value) &&
        /[a-z]/.test(value) &&
        /\d/.test(value) &&
        /[^A-Za-z0-9]/.test(value);
    return isValid
        ? null
        : { passwordPolicy: true };
};
const passwordsMatchValidator = (control) => {
    const password = control.get('password')?.value;
    const confirmation = control.get('confirmPassword')?.value;
    return password === confirmation
        ? null
        : { passwordsMismatch: true };
};
export class Register {
    authApi = inject(AuthApi);
    authSession = inject(AuthSession);
    router = inject(Router);
    showPassword = signal(false, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "showPassword" }] : /* istanbul ignore next */ []));
    showConfirmPassword = signal(false, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "showConfirmPassword" }] : /* istanbul ignore next */ []));
    isSubmitting = signal(false, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "isSubmitting" }] : /* istanbul ignore next */ []));
    errorMessage = signal('', /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "errorMessage" }] : /* istanbul ignore next */ []));
    registerForm = new FormGroup({
        firstName: new FormControl('', {
            nonNullable: true,
            validators: [
                Validators.required,
                nonWhitespaceValidator,
                Validators.maxLength(100),
            ],
        }),
        lastName: new FormControl('', {
            nonNullable: true,
            validators: [
                Validators.required,
                nonWhitespaceValidator,
                Validators.maxLength(100),
            ],
        }),
        email: new FormControl('', {
            nonNullable: true,
            validators: [
                Validators.required,
                Validators.email,
            ],
        }),
        password: new FormControl('', {
            nonNullable: true,
            validators: [
                Validators.required,
                passwordPolicyValidator,
            ],
        }),
        confirmPassword: new FormControl('', {
            nonNullable: true,
            validators: [
                Validators.required,
            ],
        }),
    }, {
        validators: passwordsMatchValidator,
    });
    get firstName() {
        return this.registerForm.controls.firstName;
    }
    get lastName() {
        return this.registerForm.controls.lastName;
    }
    get email() {
        return this.registerForm.controls.email;
    }
    get password() {
        return this.registerForm.controls.password;
    }
    get confirmPassword() {
        return this.registerForm.controls
            .confirmPassword;
    }
    togglePassword() {
        this.showPassword.update((visible) => !visible);
    }
    toggleConfirmPassword() {
        this.showConfirmPassword.update((visible) => !visible);
    }
    onSubmit() {
        this.errorMessage.set('');
        if (this.registerForm.invalid) {
            this.registerForm.markAllAsTouched();
            return;
        }
        this.isSubmitting.set(true);
        const value = this.registerForm.getRawValue();
        const request = {
            firstName: value.firstName.trim(),
            lastName: value.lastName.trim(),
            email: value.email.trim(),
            password: value.password,
        };
        this.authApi.register(request).subscribe({
            next: (response) => {
                this.authSession.start(response);
                this.isSubmitting.set(false);
                void this.router.navigateByUrl('/account');
            },
            error: (error) => {
                if (error.status === 409) {
                    this.email.setErrors({
                        ...this.email.errors,
                        duplicateEmail: true,
                    });
                }
                this.errorMessage.set(this.readRegistrationError(error));
                this.isSubmitting.set(false);
            },
        });
    }
    readRegistrationError(error) {
        if (error.status === 409) {
            return 'An account with this email already exists.';
        }
        if (error.status === 400) {
            const errors = error.error?.errors;
            const messages = errors
                ? Object.values(errors).flat()
                : [];
            return messages.length > 0
                ? messages.join(' ')
                : 'Check your registration details.';
        }
        if (error.status === 0) {
            return ('Cannot reach the API. ' +
                'Check that the API is running.');
        }
        return ('Account creation failed. ' +
            'Please try again.');
    }
    static ɵfac = function Register_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || Register)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: Register, selectors: [["app-register"]], decls: 58, vars: 23, consts: [[1, "register-page"], [1, "register-main"], ["aria-labelledby", "register-title"], [1, "eyebrow"], ["id", "register-title"], [1, "introduction"], ["novalidate", "", 3, "ngSubmit", "formGroup"], [1, "name-fields"], [1, "field"], ["for", "firstName"], ["id", "firstName", "type", "text", "formControlName", "firstName", "autocomplete", "given-name", "maxlength", "100", "placeholder", "First name"], ["id", "first-name-error", 1, "error"], ["for", "lastName"], ["id", "lastName", "type", "text", "formControlName", "lastName", "autocomplete", "family-name", "maxlength", "100", "placeholder", "Last name"], ["id", "last-name-error", 1, "error"], ["for", "email"], ["id", "email", "type", "email", "formControlName", "email", "autocomplete", "email", "inputmode", "email", "placeholder", "you@example.com"], ["id", "email-error", 1, "error"], ["for", "password"], [1, "password-field"], ["id", "password", "formControlName", "password", "autocomplete", "new-password", "placeholder", "Create a password", 3, "type"], ["type", "button", 1, "password-toggle", 3, "click"], ["id", "password-help", 1, "password-help"], ["id", "password-error", 1, "error"], ["for", "confirmPassword"], ["id", "confirmPassword", "formControlName", "confirmPassword", "autocomplete", "new-password", "placeholder", "Enter the password again", 3, "type"], ["id", "confirm-password-error", 1, "error"], ["type", "submit", 1, "submit-button", 3, "disabled"], ["role", "alert", 1, "api-error"], [1, "account-link"], ["routerLink", "/login"]], template: function Register_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelement(1, "app-navbar");
            i0.ɵɵelementStart(2, "main", 1)(3, "section", 2)(4, "p", 3);
            i0.ɵɵtext(5, "Account");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "h1", 4);
            i0.ɵɵtext(7, " Create account ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "p", 5);
            i0.ɵɵtext(9, " Create your customer account to shop, place orders, or become a seller. ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "form", 6);
            i0.ɵɵlistener("ngSubmit", function Register_Template_form_ngSubmit_10_listener() { return ctx.onSubmit(); });
            i0.ɵɵelementStart(11, "div", 7)(12, "div", 8)(13, "label", 9);
            i0.ɵɵtext(14, " First name ");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(15, "input", 10);
            i0.ɵɵcontrolCreate();
            i0.ɵɵconditionalCreate(16, Register_Conditional_16_Template, 2, 0, "p", 11)(17, Register_Conditional_17_Template, 2, 0, "p", 11);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(18, "div", 8)(19, "label", 12);
            i0.ɵɵtext(20, " Last name ");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(21, "input", 13);
            i0.ɵɵcontrolCreate();
            i0.ɵɵconditionalCreate(22, Register_Conditional_22_Template, 2, 0, "p", 14)(23, Register_Conditional_23_Template, 2, 0, "p", 14);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(24, "div", 8)(25, "label", 15);
            i0.ɵɵtext(26, " Email address ");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(27, "input", 16);
            i0.ɵɵcontrolCreate();
            i0.ɵɵconditionalCreate(28, Register_Conditional_28_Template, 2, 0, "p", 17)(29, Register_Conditional_29_Template, 2, 0, "p", 17)(30, Register_Conditional_30_Template, 2, 0, "p", 17);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(31, "div", 8)(32, "label", 18);
            i0.ɵɵtext(33, " Password ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(34, "div", 19);
            i0.ɵɵelement(35, "input", 20);
            i0.ɵɵcontrolCreate();
            i0.ɵɵelementStart(36, "button", 21);
            i0.ɵɵlistener("click", function Register_Template_button_click_36_listener() { return ctx.togglePassword(); });
            i0.ɵɵtext(37);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(38, "p", 22);
            i0.ɵɵtext(39, " Use at least 8 characters with uppercase, lowercase, number, symbol, and 4 unique characters. ");
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(40, Register_Conditional_40_Template, 2, 0, "p", 23)(41, Register_Conditional_41_Template, 2, 0, "p", 23);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(42, "div", 8)(43, "label", 24);
            i0.ɵɵtext(44, " Confirm password ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(45, "div", 19);
            i0.ɵɵelement(46, "input", 25);
            i0.ɵɵcontrolCreate();
            i0.ɵɵelementStart(47, "button", 21);
            i0.ɵɵlistener("click", function Register_Template_button_click_47_listener() { return ctx.toggleConfirmPassword(); });
            i0.ɵɵtext(48);
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(49, Register_Conditional_49_Template, 2, 0, "p", 26)(50, Register_Conditional_50_Template, 2, 0, "p", 26);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(51, "button", 27);
            i0.ɵɵtext(52);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(53, Register_Conditional_53_Template, 2, 1, "p", 28);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(54, "p", 29);
            i0.ɵɵtext(55, " Already have an account? ");
            i0.ɵɵelementStart(56, "a", 30);
            i0.ɵɵtext(57, " Sign in ");
            i0.ɵɵelementEnd()()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(10);
            i0.ɵɵproperty("formGroup", ctx.registerForm);
            i0.ɵɵadvance(5);
            i0.ɵɵattribute("aria-invalid", ctx.firstName.touched && ctx.firstName.invalid)("aria-describedby", ctx.firstName.touched && ctx.firstName.invalid ? "first-name-error" : null);
            i0.ɵɵcontrol();
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.firstName.touched && (ctx.firstName.hasError("required") || ctx.firstName.hasError("whitespace")) ? 16 : ctx.firstName.touched && ctx.firstName.hasError("maxlength") ? 17 : -1);
            i0.ɵɵadvance(5);
            i0.ɵɵattribute("aria-invalid", ctx.lastName.touched && ctx.lastName.invalid)("aria-describedby", ctx.lastName.touched && ctx.lastName.invalid ? "last-name-error" : null);
            i0.ɵɵcontrol();
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.lastName.touched && (ctx.lastName.hasError("required") || ctx.lastName.hasError("whitespace")) ? 22 : ctx.lastName.touched && ctx.lastName.hasError("maxlength") ? 23 : -1);
            i0.ɵɵadvance(5);
            i0.ɵɵattribute("aria-invalid", ctx.email.touched && ctx.email.invalid)("aria-describedby", ctx.email.touched && ctx.email.invalid ? "email-error" : null);
            i0.ɵɵcontrol();
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.email.touched && ctx.email.hasError("required") ? 28 : ctx.email.touched && ctx.email.hasError("email") ? 29 : ctx.email.touched && ctx.email.hasError("duplicateEmail") ? 30 : -1);
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("type", ctx.showPassword() ? "text" : "password");
            i0.ɵɵattribute("aria-invalid", ctx.password.touched && ctx.password.invalid)("aria-describedby", ctx.password.touched && ctx.password.invalid ? "password-error password-help" : "password-help");
            i0.ɵɵcontrol();
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", ctx.showPassword() ? "Hide" : "Show", " ");
            i0.ɵɵadvance(3);
            i0.ɵɵconditional(ctx.password.touched && ctx.password.hasError("required") ? 40 : ctx.password.touched && ctx.password.hasError("passwordPolicy") ? 41 : -1);
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("type", ctx.showConfirmPassword() ? "text" : "password");
            i0.ɵɵattribute("aria-invalid", ctx.confirmPassword.touched && (ctx.confirmPassword.invalid || ctx.registerForm.hasError("passwordsMismatch")))("aria-describedby", ctx.confirmPassword.touched && (ctx.confirmPassword.invalid || ctx.registerForm.hasError("passwordsMismatch")) ? "confirm-password-error" : null);
            i0.ɵɵcontrol();
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", ctx.showConfirmPassword() ? "Hide" : "Show", " ");
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.confirmPassword.touched && ctx.confirmPassword.hasError("required") ? 49 : ctx.confirmPassword.touched && ctx.registerForm.hasError("passwordsMismatch") ? 50 : -1);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("disabled", ctx.isSubmitting());
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1(" ", ctx.isSubmitting() ? "Creating account\u2026" : "Create account", " ");
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.errorMessage() ? 53 : -1);
        } }, dependencies: [ReactiveFormsModule, i1.ɵNgNoValidate, i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.MaxLengthValidator, i1.FormGroupDirective, i1.FormControlName, RouterLink,
            Navbar], styles: ["[_nghost-%COMP%] {\r\n  display: block;\r\n}\r\n\r\n.register-page[_ngcontent-%COMP%] {\r\n  min-height: 100vh;\r\n}\r\n\r\n.register-main[_ngcontent-%COMP%] {\r\n  width: min(36rem, calc(100% - 2rem));\r\n  margin-inline: auto;\r\n  padding-block: clamp(4rem, 10vw, 7rem);\r\n}\r\n\r\n.eyebrow[_ngcontent-%COMP%] {\r\n  margin: 0 0 0.75rem;\r\n  color: #73736d;\r\n  font-size: 0.7rem;\r\n  font-weight: 700;\r\n  letter-spacing: 0.12em;\r\n  text-transform: uppercase;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  font-size: clamp(2.5rem, 8vw, 4rem);\r\n  font-weight: 500;\r\n  letter-spacing: -0.055em;\r\n  line-height: 1;\r\n}\r\n\r\n.introduction[_ngcontent-%COMP%] {\r\n  margin: 1rem 0 0;\r\n  color: #63635e;\r\n  line-height: 1.5;\r\n}\r\n\r\nform[_ngcontent-%COMP%] {\r\n  padding-top: 2rem;\r\n  margin-top: 2rem;\r\n  border-top: 1px solid #deded8;\r\n}\r\n\r\n.name-fields[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  gap: 1rem;\r\n}\r\n\r\n.field[_ngcontent-%COMP%] {\r\n  margin-bottom: 1.5rem;\r\n}\r\n\r\nlabel[_ngcontent-%COMP%] {\r\n  display: block;\r\n  margin-bottom: 0.5rem;\r\n  font-size: 0.8rem;\r\n  font-weight: 700;\r\n}\r\n\r\ninput[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  min-height: 3rem;\r\n  padding: 0.75rem;\r\n  color: #171717;\r\n  background: white;\r\n  border: 1px solid #bdbdb6;\r\n  border-radius: 0;\r\n  outline: none;\r\n}\r\n\r\ninput[_ngcontent-%COMP%]:focus {\r\n  border-color: #171717;\r\n  outline: 1px solid #171717;\r\n}\r\n\r\ninput[aria-invalid='true'][_ngcontent-%COMP%] {\r\n  border-color: #a61b1b;\r\n}\r\n\r\n.password-field[_ngcontent-%COMP%] {\r\n  position: relative;\r\n}\r\n\r\n.password-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  padding-right: 4.5rem;\r\n}\r\n\r\n.password-toggle[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 50%;\r\n  right: 0.75rem;\r\n  padding: 0;\r\n  color: #52524e;\r\n  background: transparent;\r\n  border: 0;\r\n  cursor: pointer;\r\n  font-size: 0.75rem;\r\n  font-weight: 700;\r\n  transform: translateY(-50%);\r\n}\r\n\r\n.password-help[_ngcontent-%COMP%] {\r\n  margin: 0.5rem 0 0;\r\n  color: #73736d;\r\n  font-size: 0.75rem;\r\n  line-height: 1.5;\r\n}\r\n\r\n.error[_ngcontent-%COMP%] {\r\n  margin: 0.45rem 0 0;\r\n  color: #a61b1b;\r\n  font-size: 0.75rem;\r\n}\r\n\r\n.api-error[_ngcontent-%COMP%] {\r\n  padding: 0.75rem;\r\n  margin-top: 1rem;\r\n  color: #a51d1d;\r\n  border-left: 2px solid #a51d1d;\r\n  font-size: 0.875rem;\r\n}\r\n\r\n.submit-button[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  min-height: 3rem;\r\n  color: white;\r\n  background: #171717;\r\n  border: 1px solid #171717;\r\n  cursor: pointer;\r\n  font-weight: 700;\r\n}\r\n\r\n.submit-button[_ngcontent-%COMP%]:hover:not(:disabled) {\r\n  color: #171717;\r\n  background: white;\r\n}\r\n\r\n.submit-button[_ngcontent-%COMP%]:disabled {\r\n  cursor: wait;\r\n  opacity: 0.6;\r\n}\r\n\r\n.account-link[_ngcontent-%COMP%] {\r\n  padding-top: 1.5rem;\r\n  margin-top: 2rem;\r\n  color: #63635e;\r\n  border-top: 1px solid #deded8;\r\n  font-size: 0.875rem;\r\n}\r\n\r\n.account-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  color: #171717;\r\n  font-weight: 700;\r\n  text-decoration: underline;\r\n  text-underline-offset: 0.2rem;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:focus-visible, \r\na[_ngcontent-%COMP%]:focus-visible {\r\n  outline: 2px solid #171717;\r\n  outline-offset: 4px;\r\n}\r\n\r\n@media (min-width: 36rem) {\r\n  .name-fields[_ngcontent-%COMP%] {\r\n    grid-template-columns:\r\n      repeat(2, minmax(0, 1fr));\r\n  }\r\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Register, [{
        type: Component,
        args: [{ selector: 'app-register', imports: [
                    ReactiveFormsModule,
                    RouterLink,
                    Navbar,
                ], template: "<div class=\"register-page\">\n  <app-navbar>\n  </app-navbar>\n\n  <main class=\"register-main\">\n    <section aria-labelledby=\"register-title\">\n      <p class=\"eyebrow\">Account</p>\n\n      <h1 id=\"register-title\">\n        Create account\n      </h1>\n\n      <p class=\"introduction\">\n        Create your customer account to shop,\n        place orders, or become a seller.\n      </p>\n\n      <form\n        [formGroup]=\"registerForm\"\n        (ngSubmit)=\"onSubmit()\"\n        novalidate\n      >\n        <div class=\"name-fields\">\n          <div class=\"field\">\n            <label for=\"firstName\">\n              First name\n            </label>\n\n            <input\n              id=\"firstName\"\n              type=\"text\"\n              formControlName=\"firstName\"\n              autocomplete=\"given-name\"\n              maxlength=\"100\"\n              placeholder=\"First name\"\n              [attr.aria-invalid]=\"\n                firstName.touched &&\n                firstName.invalid\n              \"\n              [attr.aria-describedby]=\"\n                firstName.touched &&\n                firstName.invalid\n                  ? 'first-name-error'\n                  : null\n              \"\n            />\n\n            @if (\n              firstName.touched &&\n              (\n                firstName.hasError('required') ||\n                firstName.hasError('whitespace')\n              )\n            ) {\n              <p\n                class=\"error\"\n                id=\"first-name-error\"\n              >\n                First name is required.\n              </p>\n            } @else if (\n              firstName.touched &&\n              firstName.hasError('maxlength')\n            ) {\n              <p\n                class=\"error\"\n                id=\"first-name-error\"\n              >\n                First name cannot exceed\n                100 characters.\n              </p>\n            }\n          </div>\n\n          <div class=\"field\">\n            <label for=\"lastName\">\n              Last name\n            </label>\n\n            <input\n              id=\"lastName\"\n              type=\"text\"\n              formControlName=\"lastName\"\n              autocomplete=\"family-name\"\n              maxlength=\"100\"\n              placeholder=\"Last name\"\n              [attr.aria-invalid]=\"\n                lastName.touched &&\n                lastName.invalid\n              \"\n              [attr.aria-describedby]=\"\n                lastName.touched &&\n                lastName.invalid\n                  ? 'last-name-error'\n                  : null\n              \"\n            />\n\n            @if (\n              lastName.touched &&\n              (\n                lastName.hasError('required') ||\n                lastName.hasError('whitespace')\n              )\n            ) {\n              <p\n                class=\"error\"\n                id=\"last-name-error\"\n              >\n                Last name is required.\n              </p>\n            } @else if (\n              lastName.touched &&\n              lastName.hasError('maxlength')\n            ) {\n              <p\n                class=\"error\"\n                id=\"last-name-error\"\n              >\n                Last name cannot exceed\n                100 characters.\n              </p>\n            }\n          </div>\n        </div>\n\n        <div class=\"field\">\n          <label for=\"email\">\n            Email address\n          </label>\n\n          <input\n            id=\"email\"\n            type=\"email\"\n            formControlName=\"email\"\n            autocomplete=\"email\"\n            inputmode=\"email\"\n            placeholder=\"you@example.com\"\n            [attr.aria-invalid]=\"\n              email.touched && email.invalid\n            \"\n            [attr.aria-describedby]=\"\n              email.touched && email.invalid\n                ? 'email-error'\n                : null\n            \"\n          />\n\n          @if (\n            email.touched &&\n            email.hasError('required')\n          ) {\n            <p class=\"error\" id=\"email-error\">\n              Email is required.\n            </p>\n          } @else if (\n            email.touched &&\n            email.hasError('email')\n          ) {\n            <p class=\"error\" id=\"email-error\">\n              Enter a valid email address.\n            </p>\n          } @else if (\n            email.touched &&\n            email.hasError('duplicateEmail')\n          ) {\n            <p class=\"error\" id=\"email-error\">\n              An account with this email\n              already exists.\n            </p>\n          }\n        </div>\n\n        <div class=\"field\">\n          <label for=\"password\">\n            Password\n          </label>\n\n          <div class=\"password-field\">\n            <input\n              id=\"password\"\n              [type]=\"\n                showPassword()\n                  ? 'text'\n                  : 'password'\n              \"\n              formControlName=\"password\"\n              autocomplete=\"new-password\"\n              placeholder=\"Create a password\"\n              [attr.aria-invalid]=\"\n                password.touched &&\n                password.invalid\n              \"\n              [attr.aria-describedby]=\"\n                password.touched &&\n                password.invalid\n                  ? 'password-error password-help'\n                  : 'password-help'\n              \"\n            />\n\n            <button\n              class=\"password-toggle\"\n              type=\"button\"\n              (click)=\"togglePassword()\"\n            >\n              {{\n                showPassword()\n                  ? 'Hide'\n                  : 'Show'\n              }}\n            </button>\n          </div>\n\n          <p\n            class=\"password-help\"\n            id=\"password-help\"\n          >\n            Use at least 8 characters with\n            uppercase, lowercase, number,\n            symbol, and 4 unique characters.\n          </p>\n\n          @if (\n            password.touched &&\n            password.hasError('required')\n          ) {\n            <p\n              class=\"error\"\n              id=\"password-error\"\n            >\n              Password is required.\n            </p>\n          } @else if (\n            password.touched &&\n            password.hasError(\n              'passwordPolicy'\n            )\n          ) {\n            <p\n              class=\"error\"\n              id=\"password-error\"\n            >\n              Password does not meet the\n              required rules.\n            </p>\n          }\n        </div>\n\n        <div class=\"field\">\n          <label for=\"confirmPassword\">\n            Confirm password\n          </label>\n\n          <div class=\"password-field\">\n            <input\n              id=\"confirmPassword\"\n              [type]=\"\n                showConfirmPassword()\n                  ? 'text'\n                  : 'password'\n              \"\n              formControlName=\"confirmPassword\"\n              autocomplete=\"new-password\"\n              placeholder=\"Enter the password again\"\n              [attr.aria-invalid]=\"\n                confirmPassword.touched &&\n                (\n                  confirmPassword.invalid ||\n                  registerForm.hasError(\n                    'passwordsMismatch'\n                  )\n                )\n              \"\n              [attr.aria-describedby]=\"\n                confirmPassword.touched &&\n                (\n                  confirmPassword.invalid ||\n                  registerForm.hasError(\n                    'passwordsMismatch'\n                  )\n                )\n                  ? 'confirm-password-error'\n                  : null\n              \"\n            />\n\n            <button\n              class=\"password-toggle\"\n              type=\"button\"\n              (click)=\"toggleConfirmPassword()\"\n            >\n              {{\n                showConfirmPassword()\n                  ? 'Hide'\n                  : 'Show'\n              }}\n            </button>\n          </div>\n\n          @if (\n            confirmPassword.touched &&\n            confirmPassword.hasError('required')\n          ) {\n            <p\n              class=\"error\"\n              id=\"confirm-password-error\"\n            >\n              Confirm your password.\n            </p>\n          } @else if (\n            confirmPassword.touched &&\n            registerForm.hasError(\n              'passwordsMismatch'\n            )\n          ) {\n            <p\n              class=\"error\"\n              id=\"confirm-password-error\"\n            >\n              Passwords do not match.\n            </p>\n          }\n        </div>\n\n        <button\n          class=\"submit-button\"\n          type=\"submit\"\n          [disabled]=\"isSubmitting()\"\n        >\n          {{\n            isSubmitting()\n              ? 'Creating account\u2026'\n              : 'Create account'\n          }}\n        </button>\n\n        @if (errorMessage()) {\n          <p class=\"api-error\" role=\"alert\">\n            {{ errorMessage() }}\n          </p>\n        }\n      </form>\n\n      <p class=\"account-link\">\n        Already have an account?\n\n        <a routerLink=\"/login\">\n          Sign in\n        </a>\n      </p>\n    </section>\n  </main>\n</div>", styles: [":host {\r\n  display: block;\r\n}\r\n\r\n.register-page {\r\n  min-height: 100vh;\r\n}\r\n\r\n.register-main {\r\n  width: min(36rem, calc(100% - 2rem));\r\n  margin-inline: auto;\r\n  padding-block: clamp(4rem, 10vw, 7rem);\r\n}\r\n\r\n.eyebrow {\r\n  margin: 0 0 0.75rem;\r\n  color: #73736d;\r\n  font-size: 0.7rem;\r\n  font-weight: 700;\r\n  letter-spacing: 0.12em;\r\n  text-transform: uppercase;\r\n}\r\n\r\nh1 {\r\n  margin: 0;\r\n  font-size: clamp(2.5rem, 8vw, 4rem);\r\n  font-weight: 500;\r\n  letter-spacing: -0.055em;\r\n  line-height: 1;\r\n}\r\n\r\n.introduction {\r\n  margin: 1rem 0 0;\r\n  color: #63635e;\r\n  line-height: 1.5;\r\n}\r\n\r\nform {\r\n  padding-top: 2rem;\r\n  margin-top: 2rem;\r\n  border-top: 1px solid #deded8;\r\n}\r\n\r\n.name-fields {\r\n  display: grid;\r\n  gap: 1rem;\r\n}\r\n\r\n.field {\r\n  margin-bottom: 1.5rem;\r\n}\r\n\r\nlabel {\r\n  display: block;\r\n  margin-bottom: 0.5rem;\r\n  font-size: 0.8rem;\r\n  font-weight: 700;\r\n}\r\n\r\ninput {\r\n  width: 100%;\r\n  min-height: 3rem;\r\n  padding: 0.75rem;\r\n  color: #171717;\r\n  background: white;\r\n  border: 1px solid #bdbdb6;\r\n  border-radius: 0;\r\n  outline: none;\r\n}\r\n\r\ninput:focus {\r\n  border-color: #171717;\r\n  outline: 1px solid #171717;\r\n}\r\n\r\ninput[aria-invalid='true'] {\r\n  border-color: #a61b1b;\r\n}\r\n\r\n.password-field {\r\n  position: relative;\r\n}\r\n\r\n.password-field input {\r\n  padding-right: 4.5rem;\r\n}\r\n\r\n.password-toggle {\r\n  position: absolute;\r\n  top: 50%;\r\n  right: 0.75rem;\r\n  padding: 0;\r\n  color: #52524e;\r\n  background: transparent;\r\n  border: 0;\r\n  cursor: pointer;\r\n  font-size: 0.75rem;\r\n  font-weight: 700;\r\n  transform: translateY(-50%);\r\n}\r\n\r\n.password-help {\r\n  margin: 0.5rem 0 0;\r\n  color: #73736d;\r\n  font-size: 0.75rem;\r\n  line-height: 1.5;\r\n}\r\n\r\n.error {\r\n  margin: 0.45rem 0 0;\r\n  color: #a61b1b;\r\n  font-size: 0.75rem;\r\n}\r\n\r\n.api-error {\r\n  padding: 0.75rem;\r\n  margin-top: 1rem;\r\n  color: #a51d1d;\r\n  border-left: 2px solid #a51d1d;\r\n  font-size: 0.875rem;\r\n}\r\n\r\n.submit-button {\r\n  width: 100%;\r\n  min-height: 3rem;\r\n  color: white;\r\n  background: #171717;\r\n  border: 1px solid #171717;\r\n  cursor: pointer;\r\n  font-weight: 700;\r\n}\r\n\r\n.submit-button:hover:not(:disabled) {\r\n  color: #171717;\r\n  background: white;\r\n}\r\n\r\n.submit-button:disabled {\r\n  cursor: wait;\r\n  opacity: 0.6;\r\n}\r\n\r\n.account-link {\r\n  padding-top: 1.5rem;\r\n  margin-top: 2rem;\r\n  color: #63635e;\r\n  border-top: 1px solid #deded8;\r\n  font-size: 0.875rem;\r\n}\r\n\r\n.account-link a {\r\n  color: #171717;\r\n  font-weight: 700;\r\n  text-decoration: underline;\r\n  text-underline-offset: 0.2rem;\r\n}\r\n\r\nbutton:focus-visible,\r\na:focus-visible {\r\n  outline: 2px solid #171717;\r\n  outline-offset: 4px;\r\n}\r\n\r\n@media (min-width: 36rem) {\r\n  .name-fields {\r\n    grid-template-columns:\r\n      repeat(2, minmax(0, 1fr));\r\n  }\r\n}"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(Register, { className: "Register", filePath: "src/app/auth/register/register.ts", lineNumber: 82 }); })();
