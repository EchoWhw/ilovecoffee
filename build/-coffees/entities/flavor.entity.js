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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Flavor = void 0;
var openapi = require("@nestjs/swagger");
var typeorm_1 = require("typeorm");
var coffee_entity_1 = require("./coffee.entity");
var Flavor = /** @class */ (function () {
    function Flavor() {
    }
    Flavor._OPENAPI_METADATA_FACTORY = function () {
        return { id: { required: true, type: function () { return Number; } }, name: { required: true, type: function () { return String; } }, coffees: { required: true, type: function () { return [require("./coffee.entity").Coffee]; } } };
    };
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], Flavor.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Flavor.prototype, "name", void 0);
    __decorate([
        (0, typeorm_1.ManyToMany)(function (type) { return coffee_entity_1.Coffee; }, function (coffee) { return coffee.flavors; }),
        __metadata("design:type", Array)
    ], Flavor.prototype, "coffees", void 0);
    Flavor = __decorate([
        (0, typeorm_1.Entity)()
    ], Flavor);
    return Flavor;
}());
exports.Flavor = Flavor;
//# sourceMappingURL=flavor.entity.js.map