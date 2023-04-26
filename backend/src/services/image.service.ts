import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { ImageDocument, Image } from "src/model/image.schema";

@Injectable()
export class ImageService {
  constructor(@InjectModel(Image.name) private imageModel: Model<ImageDocument>){}

  async createImage(image: Object): Promise<Image> {
  const newImage = new this.imageModel(image);

    return newImage.save();
  }

  async readImage(id): Promise<Object> {
    return 
  }

  async updateImage(id, image): Promise<void> {

  }

  async deleteImage(id): Promise<void> {

  }

}