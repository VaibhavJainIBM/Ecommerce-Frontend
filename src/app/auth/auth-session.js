import { computed, Injectable, signal } from '@angular/core';
import * as i0 from "@angular/core";
export class AuthSession {
    tokenState = signal(null, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "tokenState" }] : /* istanbul ignore next */ []));
    userState = signal(null, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "userState" }] : /* istanbul ignore next */ []));
    user = this.userState.asReadonly();
    isAuthenticated = computed(() => this.tokenState() !== null, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "isAuthenticated" }] : /* istanbul ignore next */ []));
    start(response) {
        this.tokenState.set(response.accessToken);
        this.userState.set({
            userId: response.userId,
            firstName: response.firstName,
            lastName: response.lastName,
            email: response.email,
            platformRoles: response.platformRoles,
        });
    }
    getAccessToken() {
        return this.tokenState();
    }
    hasRole(role) {
        return (this.userState()?.platformRoles.includes(role)
            ?? false);
    }
    hasAnyRole(roles) {
        return roles.some((role) => this.hasRole(role));
    }
    logout() {
        this.tokenState.set(null);
        this.userState.set(null);
    }
    static ɵfac = function AuthSession_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AuthSession)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AuthSession, factory: AuthSession.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AuthSession, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();
