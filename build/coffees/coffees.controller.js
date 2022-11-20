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
var openapi = require("@nestjs/swagger");
var common_1 = require("@nestjs/common");
var _coffees_service_1 = require("../-coffees/-coffees.service");
var create_coffee_dto_1 = require("./dto/create-coffee.dto");
var update_coffee_dto_1 = require("./dto/update-coffee.dto");
var pagination_query_dto_1 = require("../common/dto/pagination-query.dto");
var core_1 = require("@nestjs/core");
var common_2 = require("@nestjs/common");
var public_decorator_1 = require("../common/decorators/public.decorator");
var parse_int_pipe_1 = require("../common/pipes/parse-int.pipe");
var protocol_decorator_1 = require("../common/decorators/protocol.decorator");
var CoffeesController = /** @class */ (function () {
    function CoffeesController(coffeesService, request) {
        this.coffeesService = coffeesService;
        this.request = request;
        console.log('CoffeeController created');
    }
    // async
    CoffeesController.prototype.findAll = function (protocol, paginationQuery) {
        // await new Promise((resolve) => setTimeout(resolve, 5000));
        // const {limit, offset} = paginationQuery
        console.log(protocol);
        return this.coffeesService.findAll(paginationQuery);
        // return `this action return all coffees. Limit: ${limit}, offset: ${offset}`;
    };
    CoffeesController.prototype.findOne = function (id) {
        console.log(id);
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
        (0, public_decorator_1.Public)(),
        (0, common_1.Get)()
        // async
        ,
        openapi.ApiResponse({ status: 200, type: [require("../-coffees/entities/coffee.entity").Coffee] }),
        __param(0, (0, protocol_decorator_1.Protocol)('https')),
        __param(1, (0, common_1.Query)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, pagination_query_dto_1.PaginationQueryDto]),
        __metadata("design:returntype", void 0)
    ], CoffeesController.prototype, "findAll", null);
    __decorate([
        (0, common_1.Get)(':id'),
        openapi.ApiResponse({ status: 200, type: require("../-coffees/entities/coffee.entity").Coffee }),
        __param(0, (0, common_1.Param)('id', parse_int_pipe_1.ParseIntPipe)),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], CoffeesController.prototype, "findOne", null);
    __decorate([
        (0, common_1.Post)(),
        openapi.ApiResponse({ status: 201, type: require("../-coffees/entities/coffee.entity").Coffee }),
        __param(0, (0, common_1.Body)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [create_coffee_dto_1.CreateCoffeeDto]),
        __metadata("design:returntype", void 0)
    ], CoffeesController.prototype, "create", null);
    __decorate([
        (0, common_1.Patch)(':id'),
        openapi.ApiResponse({ status: 200, type: require("../-coffees/entities/coffee.entity").Coffee }),
        __param(0, (0, common_1.Param)('id')),
        __param(1, (0, common_1.Body)(common_2.ValidationPipe)),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, update_coffee_dto_1.UpdateCoffeeDto]),
        __metadata("design:returntype", void 0)
    ], CoffeesController.prototype, "update", null);
    __decorate([
        (0, common_1.Delete)(':id'),
        openapi.ApiResponse({ status: 200, type: require("../-coffees/entities/coffee.entity").Coffee }),
        __param(0, (0, common_1.Param)('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], CoffeesController.prototype, "remove", null);
    CoffeesController = __decorate([
        (0, common_1.UsePipes)(common_2.ValidationPipe),
        (0, common_1.Controller)('coffees'),
        __param(1, (0, common_1.Inject)(core_1.REQUEST)),
        __metadata("design:paramtypes", [_coffees_service_1.CoffeesService, Object])
    ], CoffeesController);
    return CoffeesController;
}());
exports.CoffeesController = CoffeesController;
//# sourceMappingURL=coffees.controller.js.map