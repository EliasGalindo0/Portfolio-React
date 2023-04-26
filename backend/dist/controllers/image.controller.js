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
exports.ImageController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const image_schema_1 = require("../model/image.schema");
const image_service_1 = require("../services/image.service");
let ImageController = class ImageController {
    constructor(imageService) {
        this.imageService = imageService;
    }
    async createImage(response, request, image, files) {
        const requestBody = { createdBy: request.user, filename: request.title, image: files.image[0].filename, linkRepo: request.link };
        const newImage = await this.imageService.createImage(requestBody);
        return response.status(common_1.HttpStatus.CREATED).json({ newImage });
    }
    async read(id) {
        return await this.imageService.readImage(id);
    }
    async open(id, response, request) {
        return await this.imageService.openImage(id, response, request);
    }
    async update(response, id, image) {
        const updatedImage = await this.imageService.updateImage(id, image);
        return response.status(common_1.HttpStatus.OK).json(updatedImage);
    }
    async delete(response, id) {
        await this.imageService.deleteImage(id);
        return response.status(common_1.HttpStatus.OK).json({ user: null });
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileFieldsInterceptor)([
        { name: 'image', maxCount: 1 }
    ])),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Body)()),
    __param(3, (0, common_1.UploadedFiles)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, image_schema_1.Image, Object]),
    __metadata("design:returntype", Promise)
], ImageController.prototype, "createImage", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ImageController.prototype, "read", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], ImageController.prototype, "open", null);
__decorate([
    (0, common_1.Put)('/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, image_schema_1.Image]),
    __metadata("design:returntype", Promise)
], ImageController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ImageController.prototype, "delete", null);
ImageController = __decorate([
    (0, common_1.Controller)('/api/image'),
    __metadata("design:paramtypes", [image_service_1.ImageService])
], ImageController);
exports.ImageController = ImageController;
//# sourceMappingURL=image.controller.js.map