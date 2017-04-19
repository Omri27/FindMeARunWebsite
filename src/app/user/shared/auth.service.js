"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var angularfire2_1 = require("angularfire2");
var Observable_1 = require("rxjs/Observable");
var AuthService = (function () {
    function AuthService(af) {
        this.af = af;
    }
    AuthService.prototype.loginUser = function (email, password) {
        var _this = this;
        var credentials = { email: email, password: password };
        return Observable_1.Observable.create(function (observer) {
            _this.af.auth.login(credentials, {
                provider: angularfire2_1.AuthProviders.Password,
                method: angularfire2_1.AuthMethods.Password
            }).then(function (authData) {
                _this.currentUser = authData;
                observer.next(authData);
            }).catch(function (error) {
                observer.error(error);
            });
        });
    };
    AuthService.prototype.isAuthenticated = function () {
        return !!this.currentUser;
    };
    AuthService.prototype.checkAuthenticationStatus = function () {
        var _this = this;
        return this.af.auth.subscribe(function (user) {
            if (user) {
                _this.currentUser = user;
                return true;
            }
            else {
                _this.currentUser = null;
                return {};
            }
        });
    };
    AuthService.prototype.logOut = function () {
        this.af.auth.logout();
    };
    return AuthService;
}());
AuthService = __decorate([
    core_1.Injectable()
], AuthService);
exports.AuthService = AuthService;
