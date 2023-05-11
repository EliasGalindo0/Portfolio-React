import { HttpException, HttpStatus, Injectable, NestMiddleware } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { NextFunction, Request, Response } from "express";
import { UserService } from "./services/user.service";

interface UserRequest extends Request {
  user: any
}

@Injectable()
export class isAuthenticated implements NestMiddleware {
  constructor(private readonly jwt: JwtService, private readonly userService: UserService) {}

  async use(req: UserRequest, _res: Response, next: NextFunction) {
    try {
      if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        const token: string = req.headers.authorization.split(' ')[1];
        const decoded: any = await this.jwt.verify(token);
        const user: any = await this.userService.getOne(decoded.email);
        
        if(user) {
          req.user = user
          next()
        } else {
          throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED)
        }
      } else {
        throw new HttpException('No token found', HttpStatus.NOT_FOUND)
      }
    } catch (Error) {
      throw new HttpException(Error.message, HttpStatus.UNAUTHORIZED)
    }
  }
}