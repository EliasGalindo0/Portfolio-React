import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { join } from 'path';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { v4 as uuidv4 } from 'uuid';
import { ImageController } from './controllers/image.controller';
import { UserController } from './controllers/user.controller';
import { ImageService } from './services/image.service';
import { UserService } from './services/user.service';
import { User, UserSchema } from './model/user.schema';
import { Image, ImageSchema } from './model/image.schema';
import { isAuthenticated } from './app.middleware';
require("dotenv").config();

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/Portfolio-React'),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    MongooseModule.forFeature([{ name: Image.name, schema: ImageSchema }]),
    MulterModule.register({
      storage: diskStorage({
        destination: './public',
        filename: (req, file, cb): void => {
          const ext = file.mimetype.split('/')[1];
          cb(null, `${uuidv4()}-${Date.now()}.${ext}`);
        }
      })
    }),
    JwtModule.register({
      secret: " " + process.env.SECRET,
    }), 
    
    ServeStaticModule.forRoot({
      rootPath: join('*', '.', 'public'),
    })
  ],
  controllers: [ImageController, UserController],
  providers: [ImageService, UserService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
    .apply(isAuthenticated)
    .exclude(
      { path: '/image', method: RequestMethod.GET }, 
      { path: '/user', method: RequestMethod.POST })
    .forRoutes(ImageController);
  }
}