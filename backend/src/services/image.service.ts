import { Injectable, NotFoundException,  ServiceUnavailableException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { ReadStream, createReadStream, statSync } from 'fs';
import { join } from 'path';
import { Request, Response } from 'express';
import { ImageDocument, Image } from "src/model/image.schema";

@Injectable()
export class ImageService {
  constructor(@InjectModel(Image.name) private imageModel: Model<ImageDocument>){}

  async createImage(image: Object): Promise<Image> {
  const newImage = new this.imageModel(image);

    return newImage.save();
  }

  async readImage(id: any): Promise<any> {
    if (id.id) {
      return this.imageModel.findOne({ id: id.id }).populate("createdBy").exec();
    }
    return this.imageModel.find().populate("createdBy").exec();
  }

  async openImage(id: string,  response: Response, request: Request): Promise<void> {
    try {
      const data = await this.imageModel.findOne({ _id: id })

      if (!data) {
        throw new NotFoundException(null, "No image found")
    }
    const { file } = request.headers;
            if (file) {
                const { fileName } = data;
                // const imagePath = statSync(join(process.cwd(), `./public/${image}`))
                // const CHUNK_SIZE = 1 * 1e6;
                // const start = Number(range.replace(/\D/g, ''));
                // const end = Math.min(start + CHUNK_SIZE, videoPath.size - 1);
                // const videoLength = end - start + 1;
                // response.status(206)
                // response.header({
                //     'Content-Range': `bytes ${start}-${end}/${videoPath.size}`,
                //     'Accept-Ranges': 'bytes',
                //     'Content-length': videoLength,
                //     'Content-Type': 'video/mp4',
                // })
                const imageStream: ReadStream = createReadStream(join(process.cwd(), `./public/${fileName}`));
                imageStream.pipe(response);
            } else {
                throw new NotFoundException(null, 'size not found')
            }

        } catch (e) {
            console.error(e)
            throw new ServiceUnavailableException()
        }
  }

  async updateImage(id, image: Image): Promise<Image> {

    return await this.imageModel.findByIdAndUpdate(id, image, { new: true })
  }

  async deleteImage(id): Promise<any> {

    return await this.imageModel.findByIdAndDelete(id);
  }

}