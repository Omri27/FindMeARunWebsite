"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var RunService = (function () {
    function RunService(af, authService) {
        this.af = af;
        this.authService = authService;
        userId = this.authService.currentUser;
    }
    RunService.prototype.getFeedRuns = function () {
        return this.af.database.list('/runs');
    };
    RunService.prototype.getRun = function (id) {
        return this.af.database.object('/runs/' + id);
    };
    RunService.prototype.getHistoryRuns = function () {
        console.log(this.authService.currentUser);
    };
    return RunService;
}());
RunService = __decorate([
    core_1.Injectable()
], RunService);
exports.RunService = RunService;
