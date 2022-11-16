"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggingMiddleware = void 0;
var common_1 = require("@nestjs/common");
var LoggingMiddleware = /** @class */ (function () {
    function LoggingMiddleware() {
    }
    LoggingMiddleware.prototype.use = function (req, res, next) {
        console.time('Request-response time');
        console.log('Hi from middleware ');
        res.on('finish', function () { return console.timeEnd('Request-response time'); });
        next();
    };
    LoggingMiddleware = __decorate([
        (0, common_1.Injectable)()
    ], LoggingMiddleware);
    return LoggingMiddleware;
}());
exports.LoggingMiddleware = LoggingMiddleware;
//# sourceMappingURL=logging.middleware.js.map