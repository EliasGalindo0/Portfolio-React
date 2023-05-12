import { Model } from "mongoose";
import { Request, Response } from 'express';
import { ImageDocument, Image } from "src/model/image.schema";
export declare class ImageService {
    private imageModel;
    constructor(imageModel: Model<ImageDocument>);
    createImage(image: Object): Promise<Image>;
    readImage(id: any): Promise<any>;
    openImage(id: string, response: Response, request: Request): Promise<void>;
    updateImage(id: any, image: Image): Promise<Image>;
    deleteImage(id: any): Promise<any>;
}
