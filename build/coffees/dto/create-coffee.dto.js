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
exports.CreateCoffeeDto = void 0;
var openapi = require("@nestjs/swagger");
var swagger_1 = require("@nestjs/swagger");
var class_validator_1 = require("class-validator");
var CreateCoffeeDto = /** @class */ (function () {
    function CreateCoffeeDto() {
    }
    CreateCoffeeDto._OPENAPI_METADATA_FACTORY = function () {
        return { name: { required: true, type: function () { return String; } }, brand: { required: true, type: function () { return String; } }, flavors: { required: true, type: function () { return [String]; } } };
    };
    __decorate([
        (0, swagger_1.ApiProperty)({ description: 'The name of a coffee.' }),
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], CreateCoffeeDto.prototype, "name", void 0);
    __decorate([
        (0, swagger_1.ApiProperty)({ description: 'The brand of a coffee.' }),
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], CreateCoffeeDto.prototype, "brand", void 0);
    __decorate([
        (0, swagger_1.ApiProperty)({ example: [] }),
        (0, class_validator_1.IsString)({ each: true }),
        __metadata("design:type", Array)
    ], CreateCoffeeDto.prototype, "flavors", void 0);
    return CreateCoffeeDto;
}());
exports.CreateCoffeeDto = CreateCoffeeDto;
//# sourceMappingURL=create-coffee.dto.js.map