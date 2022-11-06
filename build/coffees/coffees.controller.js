"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoffeesController = void 0;
var common_1 = require("@nestjs/common");
var _coffees_service_1 = require("../-coffees/-coffees.service");
var create_coffee_dto_1 = require("./dto/create-coffee.dto");
var update_coffee_dto_1 = require("./dto/update-coffee.dto");
var pagination_query_dto_1 = require("../common/dto/pagination-query.dto");
var CoffeesController = /** @class */ (function () {
    function CoffeesController(coffeesService) {
        this.coffeesService = coffeesService;
    }
    CoffeesController.prototype.findAll = function (paginationQuery) {
        // const {limit, offset} = paginationQuery
        return this.coffeesService.findAll(paginationQuery);
        // return `this action return all coffees. Limit: ${limit}, offset: ${offset}`;
    };
    CoffeesController.prototype.findOne = function (id) {
        console.log(typeof id);
        return this.coffeesService.findOne('' + id);
        // return `this action return #${id} coffee`;
    };
    CoffeesController.prototype.create = function (createCoffeeDto) {
        console.log(createCoffeeDto instanceof create_coffee_dto_1.CreateCoffeeDto);
        return this.coffeesService.create(createCoffeeDto);
    };
    CoffeesController.prototype.update = function (id, UpdateCoffeeDto) {
        // return `this action updates #${id} coffee`;
        return this.coffeesService.update(id, UpdateCoffeeDto);
    };
    CoffeesController.prototype.remove = function (id) {
        // rereturn this.coffeesService.update(id, body)
        return this.coffeesService.remove(id);
    };
    __decorate([
        (0, common_1.Get)(),
        __param(0, (0, common_1.Query)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [pagination_query_dto_1.PaginationQueryDto]),
        __metadata("design:returntype", void 0)
    ], CoffeesController.prototype, "findAll", null);
    __decorate([
        (0, common_1.Get)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], CoffeesController.prototype, "findOne", null);
    __decorate([
        (0, common_1.Post)(),
        __param(0, (0, common_1.Body)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [create_coffee_dto_1.CreateCoffeeDto]),
        __metadata("design:returntype", void 0)
    ], CoffeesController.prototype, "create", null);
    __decorate([
        (0, common_1.Patch)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __param(1, (0, common_1.Body)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, update_coffee_dto_1.UpdateCoffeeDto]),
        __metadata("design:returntype", void 0)
    ], CoffeesController.prototype, "update", null);
    __decorate([
        (0, common_1.Delete)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], CoffeesController.prototype, "remove", null);
    CoffeesController = __decorate([
        (0, common_1.Controller)('coffees'),
        __metadata("design:paramtypes", [_coffees_service_1.CoffeesService])
    ], CoffeesController);
    return CoffeesController;
}());
exports.CoffeesController = CoffeesController;
//# sourceMappingURL=coffees.controller.js.map