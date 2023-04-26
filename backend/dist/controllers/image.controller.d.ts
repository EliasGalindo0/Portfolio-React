/// <reference types="multer" />
import { Image } from "src/model/image.schema";
import { ImageService } from "src/services/image.service";
export declare class ImageController {
    private readonly imageService;
    constructor(imageService: ImageService);
    createImage(response: any, request: any, image: Image, files: {
        image?: Express.Multer.File[];
    }): Promise<void>;
    read(id: any): Promise<Object>;
    update(response: any, id: any, image: Image): Promise<any>;
    delete(response: any, id: any): Promise<void>;
}
