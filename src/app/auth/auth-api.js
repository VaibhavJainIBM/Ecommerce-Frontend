import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class AuthApi {
    http = inject(HttpClient);
    authUrl = 'http://localhost:5167/api/auth';
    login(request) {
        return this.http.post(`${this.authUrl}/login`, request);
    }
    getCurrentUser() {
        return this.http.get(`${this.authUrl}/me`);
    }
    register(request) {
        return this.http.post(`${this.authUrl}/register`, request);
    }
    static ɵfac = function AuthApi_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AuthApi)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AuthApi, factory: AuthApi.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AuthApi, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();
