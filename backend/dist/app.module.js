"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const serve_static_1 = require("@nestjs/serve-static");
const mongoose_1 = require("@nestjs/mongoose");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const jwt_1 = require("@nestjs/jwt");
const path_1 = require("path");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const uuid_1 = require("uuid");
const image_controller_1 = require("./controllers/image.controller");
const user_controller_1 = require("./controllers/user.controller");
const image_service_1 = require("./services/image.service");
const user_service_1 = require("./services/user.service");
const user_schema_1 = require("./model/user.schema");
const image_schema_1 = require("./model/image.schema");
const app_middleware_1 = require("./app.middleware");
let AppModule = class AppModule {
    configure(consumer) {
        consumer
            .apply(app_middleware_1.isAuthenticated)
            .exclude({
            path: '/image/:id', method: common_1.RequestMethod.GET
        })
            .forRoutes(image_controller_1.ImageController);
    }
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forRoot('mongodb://localhost:27017/Stream'),
            mongoose_1.MongooseModule.forFeature([{ name: user_schema_1.User.name, schema: user_schema_1.UserSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: image_schema_1.Image.name, schema: image_schema_1.ImageSchema }]),
            platform_express_1.MulterModule.register({
                storage: (0, multer_1.diskStorage)({
                    destination: './public',
                    filename: (req, file, cb) => {
                        const ext = file.mimetype.split('/')[1];
                        cb(null, `${(0, uuid_1.v4)()}-${Date.now()}.${ext}`);
                    }
                })
            }),
            jwt_1.JwtModule.register({
                secret: process.env.SECRET,
            }),
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: (0, path_1.join)(__dirname, '..', 'public'),
            })
        ],
        controllers: [app_controller_1.AppController, image_controller_1.ImageController, user_controller_1.UserController],
        providers: [app_service_1.AppService, image_service_1.ImageService, user_service_1.UserService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map