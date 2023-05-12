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
exports.ImageService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const fs_1 = require("fs");
const path_1 = require("path");
const image_schema_1 = require("../model/image.schema");
let ImageService = class ImageService {
    constructor(imageModel) {
        this.imageModel = imageModel;
    }
    async createImage(image) {
        const newImage = new this.imageModel(image);
        return newImage.save();
    }
    async readImage(id) {
        if (id.id) {
            return this.imageModel.findOne({ id: id.id }).populate("createdBy").exec();
        }
        return this.imageModel.find().populate("createdBy").exec();
    }
    async openImage(id, response, request) {
        try {
            const data = await this.imageModel.findOne({ _id: id });
            if (!data) {
                throw new common_1.NotFoundException(null, "No image found");
            }
            const { file } = request.headers;
            if (file) {
                const { fileName } = data;
                const imageStream = (0, fs_1.createReadStream)((0, path_1.join)(process.cwd(), `./public/${fileName}`));
                imageStream.pipe(response);
            }
            else {
                throw new common_1.NotFoundException(null, 'size not found');
            }
        }
        catch (e) {
            console.error(e);
            throw new common_1.ServiceUnavailableException();
        }
    }
    async updateImage(id, image) {
        return await this.imageModel.findByIdAndUpdate(id, image, { new: true });
    }
    async deleteImage(id) {
        return await this.imageModel.findByIdAndDelete(id);
    }
};
ImageService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(image_schema_1.Image.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ImageService);
exports.ImageService = ImageService;
//# sourceMappingURL=image.service.js.map