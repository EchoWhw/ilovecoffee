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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoffeesService = void 0;
var common_1 = require("@nestjs/common");
var typeorm_1 = require("@nestjs/typeorm");
var typeorm_2 = require("typeorm");
var coffee_entity_1 = require("../-coffees/entities/coffee.entity");
var flavor_entity_1 = require("./entities/flavor.entity");
var event_entity_1 = require("../events/entities/event.entity");
var coffees_constants_1 = require("../coffees/coffees.constants");
var config_1 = require("@nestjs/config");
var coffees_config_1 = require("./config/coffees.config");
var CoffeesService = /** @class */ (function () {
    function CoffeesService(coffeeRepository, flavorRepository, connection, configService, coffeeBrands, coffeesConfigration) {
        this.coffeeRepository = coffeeRepository;
        this.flavorRepository = flavorRepository;
        this.connection = connection;
        this.configService = configService;
        this.coffeesConfigration = coffeesConfigration;
        // const coffeesConfig = this.configService.get('coffees.foo');
        console.log(coffeesConfigration.foo);
    }
    CoffeesService.prototype.findAll = function (paginationQuery) {
        var offset = paginationQuery.offset, limit = paginationQuery.limit;
        return this.coffeeRepository.find({
            relations: ['flavors'],
            skip: offset,
            take: limit,
        });
    };
    CoffeesService.prototype.findOne = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var coffee;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.coffeeRepository.findOne({
                            where: { id: +id },
                            relations: ['flavors'],
                        })];
                    case 1:
                        coffee = _a.sent();
                        if (!coffee) {
                            throw new common_1.NotFoundException("coffee #".concat(id, " not found"));
                        }
                        return [2 /*return*/, coffee];
                }
            });
        });
    };
    CoffeesService.prototype.create = function (createCoffeeDto) {
        return __awaiter(this, void 0, void 0, function () {
            var flavors, coffee;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Promise.all(createCoffeeDto.flavors.map(function (name) { return _this.preloadFlavorByName(name); }))];
                    case 1:
                        flavors = _a.sent();
                        coffee = this.coffeeRepository.create(__assign(__assign({}, createCoffeeDto), { flavors: flavors }));
                        return [2 /*return*/, this.coffeeRepository.save(coffee)];
                }
            });
        });
    };
    CoffeesService.prototype.update = function (id, updateCoffeeDto) {
        return __awaiter(this, void 0, void 0, function () {
            var flavors, _a, coffee;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = updateCoffeeDto.flavors;
                        if (!_a) return [3 /*break*/, 2];
                        return [4 /*yield*/, Promise.all(updateCoffeeDto.flavors.map(function (name) { return _this.preloadFlavorByName(name); }))];
                    case 1:
                        _a = (_b.sent());
                        _b.label = 2;
                    case 2:
                        flavors = _a;
                        return [4 /*yield*/, this.coffeeRepository.preload(__assign(__assign({ id: +id }, updateCoffeeDto), { flavors: flavors }))];
                    case 3:
                        coffee = _b.sent();
                        if (!coffee) {
                            throw new common_1.NotFoundException("Coffee #".concat(id, " not found"));
                        }
                        return [2 /*return*/, this.coffeeRepository.save(coffee)];
                }
            });
        });
    };
    CoffeesService.prototype.remove = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var coffee;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.findOne(id)];
                    case 1:
                        coffee = _a.sent();
                        return [2 /*return*/, this.coffeeRepository.remove(coffee)];
                }
            });
        });
    };
    CoffeesService.prototype.recommendCoffee = function (coffee) {
        return __awaiter(this, void 0, void 0, function () {
            var queryRunner, recommendEvent, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        queryRunner = this.connection.createQueryRunner();
                        return [4 /*yield*/, queryRunner.connect()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.startTransaction()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 7, 9, 11]);
                        coffee.recommendations++;
                        recommendEvent = new event_entity_1.Event();
                        recommendEvent.name = 'recommend_coffee';
                        recommendEvent.type = 'coffee';
                        recommendEvent.payload = { coffeeId: coffee.id };
                        return [4 /*yield*/, queryRunner.manager.save(coffee)];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.manager.save(recommendEvent)];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.commitTransaction()];
                    case 6:
                        _a.sent();
                        return [3 /*break*/, 11];
                    case 7:
                        err_1 = _a.sent();
                        return [4 /*yield*/, queryRunner.rollbackTransaction()];
                    case 8:
                        _a.sent();
                        return [3 /*break*/, 11];
                    case 9: return [4 /*yield*/, queryRunner.release()];
                    case 10:
                        _a.sent();
                        return [7 /*endfinally*/];
                    case 11: return [2 /*return*/];
                }
            });
        });
    };
    CoffeesService.prototype.preloadFlavorByName = function (name) {
        return __awaiter(this, void 0, void 0, function () {
            var existingFlavor;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.flavorRepository.findOne({
                            where: { name: name },
                        })];
                    case 1:
                        existingFlavor = _a.sent();
                        if (existingFlavor) {
                            return [2 /*return*/, existingFlavor];
                        }
                        return [2 /*return*/, this.flavorRepository.create({ name: name })];
                }
            });
        });
    };
    CoffeesService = __decorate([
        (0, common_1.Injectable)({ scope: common_1.Scope.REQUEST }),
        __param(0, (0, typeorm_1.InjectRepository)(coffee_entity_1.Coffee)),
        __param(1, (0, typeorm_1.InjectRepository)(flavor_entity_1.Flavor)),
        __param(4, (0, common_1.Inject)(coffees_constants_1.COFFEE_BRANDS)),
        __param(5, (0, common_1.Inject)(coffees_config_1.default.KEY)),
        __metadata("design:paramtypes", [typeorm_2.Repository,
            typeorm_2.Repository,
            typeorm_2.Connection,
            config_1.ConfigService, Array, void 0])
    ], CoffeesService);
    return CoffeesService;
}());
exports.CoffeesService = CoffeesService;
//# sourceMappingURL=-coffees.service.js.map