import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Query, Req, Res, UploadedFiles, UseInterceptors } from "@nestjs/common";
import { FileFieldsInterceptor } from "@nestjs/platform-express";
import { Image } from "src/model/image.schema";
import { ImageService } from "src/services/image.service";

@Controller('/api/image')
export class ImageController {
  constructor(private readonly imageService: ImageService) { }
  
  @Post()
  @UseInterceptors(FileFieldsInterceptor([
    { name: 'image', maxCount: 1 }
  ]))
    
  async createImage(@Res() response: any, @Req() request: any, @Body() image: Image, @UploadedFiles() files: { image?: Express.Multer.File[] }): Promise<void> {
    const requestBody = { createdBy: request.user, filename: request.title, image: files.image[0].filename, linkRepo: request.link };
    const newImage = await this.imageService.createImage(requestBody);

    return response.status(HttpStatus.CREATED).json({ newImage });
  }

  @Get()
  async read(@Query() id: any): Promise<Object> {

    return await this.imageService.readImage(id);
  }

  @Put('/:id')
  async update(@Res() response: any, @Param('id') id: any, @Body() image: Image): Promise<any> {
    const updatedImage = await this.imageService.updateImage(id, image);

    return response.status(HttpStatus.OK).json(updatedImage);
  }

  @Delete('/:id')
  async delete(@Res() response: any, @Param('id') id: any): Promise<void> {
    await this.imageService.deleteImage(id);

    return response.status(HttpStatus.OK).json({ user: null })
  }

}