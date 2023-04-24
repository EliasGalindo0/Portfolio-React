import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JwtModule } from '@nestjs/jwt';
import { join } from 'path';

@Module({
  imports: [
    // MongooseModule.forRoot('mongodb://localhost:27017/Stream'),
    ConfigModule.forRoot({
      isGlobal: true,
    }), 
    JwtModule.register({
      secret: process.env.SECRET,
    }), 
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
