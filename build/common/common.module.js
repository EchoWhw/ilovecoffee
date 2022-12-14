"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonModule = void 0;
var common_1 = require("@nestjs/common");
var core_1 = require("@nestjs/core");
var api_key_guard_1 = require("./guards/api-key.guard");
var config_1 = require("@nestjs/config");
var logging_middleware_1 = require("./middleware/logging.middleware");
var CommonModule = /** @class */ (function () {
    function CommonModule() {
    }
    CommonModule.prototype.configure = function (consumer) {
        consumer
            .apply(logging_middleware_1.LoggingMiddleware)
            .forRoutes({ path: 'coffees', method: common_1.RequestMethod.GET });
    };
    CommonModule = __decorate([
        (0, common_1.Module)({
            imports: [config_1.ConfigModule],
            providers: [{ provide: core_1.APP_GUARD, useClass: api_key_guard_1.ApiKeyGuard }],
        })
    ], CommonModule);
    return CommonModule;
}());
exports.CommonModule = CommonModule;
//# sourceMappingURL=common.module.js.map