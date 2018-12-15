"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var routing_controllers_1 = require("routing-controllers");
var WordController = (function () {
    function UserController() {
    }
    UserController.prototype.getAll = function () {
        return "This action returns all users";
    };
    UserController.prototype.getOne = function (id) {
        return "This action returns user #" + id;
    };
    __decorate([
        routing_controllers_1.Get("/users")
    ], UserController.prototype, "getAll", null);
    __decorate([
        routing_controllers_1.Get("/users/:id"),
        __param(0, routing_controllers_1.Param("id"))
    ], UserController.prototype, "getOne", null);
    UserController = __decorate([
        routing_controllers_1.Controller()
    ], UserController);
    return UserController;
}());
exports.UserController = WordController;
//# sourceMappingURL=UserController.js.map
