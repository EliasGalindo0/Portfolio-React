import { Model } from "mongoose";
import { ImageDocument, Image } from "src/model/image.schema";
export declare class ImageService {
    private imageModel;
    constructor(imageModel: Model<ImageDocument>);
    createImage(image: Object): Promise<Image>;
    readImage(id: any): Promise<Object>;
    updateImage(id: any, image: any): Promise<void>;
    deleteImage(id: any): Promise<void>;
}
