"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpExceptionFilter = void 0;
var common_1 = require("@nestjs/common");
var HttpExceptionFilter = /** @class */ (function () {
    function HttpExceptionFilter() {
    }
    HttpExceptionFilter.prototype.catch = function (exception, host) {
        var ctx = host.switchToHttp();
        var response = ctx.getResponse();
        var status = exception.getStatus();
        var exceptionResponse = exception.getResponse();
        var error = typeof response === 'string'
            ? { message: exceptionResponse }
            : exceptionResponse;
        response.status(status).json(__assign(__assign({}, error), { timestamp: new Date().toISOString() }));
    };
    HttpExceptionFilter = __decorate([
        (0, common_1.Catch)(common_1.HttpException)
    ], HttpExceptionFilter);
    return HttpExceptionFilter;
}());
exports.HttpExceptionFilter = HttpExceptionFilter;
//# sourceMappingURL=http-exception.filter.js.map