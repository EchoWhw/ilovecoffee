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
exports.ApiKeyGuard = void 0;
var common_1 = require("@nestjs/common");
var core_1 = require("@nestjs/core");
var public_decorator_1 = require("../decorators/public.decorator");
var config_1 = require("@nestjs/config");
var ApiKeyGuard = /** @class */ (function () {
    function ApiKeyGuard(reflector, configService) {
        this.reflector = reflector;
        this.configService = configService;
    }
    ApiKeyGuard.prototype.canActivate = function (context) {
        var isPublic = this.reflector.get(public_decorator_1.IS_PUBLIC_KEY, context.getHandler());
        if (isPublic) {
            return true;
        }
        var request = context.switchToHttp().getRequest();
        var authHeader = request.header('Authorization');
        return authHeader === this.configService.get('API_KEY');
    };
    ApiKeyGuard = __decorate([
        (0, common_1.Injectable)(),
        __metadata("design:paramtypes", [core_1.Reflector,
            config_1.ConfigService])
    ], ApiKeyGuard);
    return ApiKeyGuard;
}());
exports.ApiKeyGuard = ApiKeyGuard;
//# sourceMappingURL=api-key.guard.js.map