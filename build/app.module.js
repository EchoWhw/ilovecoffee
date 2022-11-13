"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
var common_1 = require("@nestjs/common");
var app_controller_1 = require("./app.controller");
var app_service_1 = require("./app.service");
var notestcoffee_controller_1 = require("./notestcoffee/notestcoffee.controller");
var coffees_module_1 = require("./coffees/coffees.module");
var typeorm_1 = require("@nestjs/typeorm");
var coffee_rating_module_1 = require("./coffee-rating/coffee-rating.module");
var database_module_1 = require("./database/database.module");
var config_1 = require("@nestjs/config");
var Joi = require("@hapi/joi");
var app_config_1 = require("./config/app.config");
var core_1 = require("@nestjs/core");
var common_module_1 = require("./common/common.module");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        (0, common_1.Module)({
            imports: [
                typeorm_1.TypeOrmModule.forRootAsync({
                    useFactory: function () { return ({
                        type: 'postgres',
                        host: process.env.DATABASE_HOST,
                        port: +process.env.DATABASE_PORT,
                        username: process.env.DATABASE_USER,
                        password: process.env.DATABASE_PASSWORD,
                        database: process.env.DATABASE_NAME,
                        autoLoadEntities: true,
                        synchronize: true,
                    }); },
                }),
                config_1.ConfigModule.forRoot({
                    load: [app_config_1.default],
                    validationSchema: Joi.object({
                        DATABASE_HOST: Joi.required(),
                        DATABASE_PORT: Joi.number().default(5432),
                    }),
                }),
                coffees_module_1.CoffeesModule,
                coffee_rating_module_1.CoffeeRatingModule,
                database_module_1.DatabaseModule,
                common_module_1.CommonModule,
            ],
            controllers: [app_controller_1.AppController, notestcoffee_controller_1.NotestcoffeeController],
            providers: [
                app_service_1.AppService,
                {
                    provide: core_1.APP_PIPE,
                    useClass: common_1.ValidationPipe,
                },
            ],
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map