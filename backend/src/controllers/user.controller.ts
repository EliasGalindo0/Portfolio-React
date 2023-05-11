import { Body, Controller, HttpStatus, Post, Res, Get, Query } from "@nestjs/common";
import { JwtService } from '@nestjs/jwt';
import { User } from "src/model/user.schema";
import { UserService } from "src/services/user.service";

@Controller('/api/v1/user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private jwtService: JwtService) { }

  @Post('/signup')
  async Signup(@Res() response: any, @Body() user: User): Promise<any> {
    try {
      const newUser: User = await this.userService.signup(user);
      return response.status(HttpStatus.CREATED).json({
        newUser
      })
    } catch (error) {
      return error.status
      ? response.status(error.status).json({message: error.message})
      : response.status(500).json({message: error.message});
    }
  }
  @Post('/signin')
  async SignIn(@Res() response: any, @Body() user: User): Promise<any> {
    try {
      const token: any = await this.userService.signin(user, this.jwtService);
      return response.status(HttpStatus.OK).json(token)
    } catch (error) {
      return error.status
      ? response.status(error.status).json({message: error.message})
      : response.status(500).json({message: error.message});
    }
  }

  @Get('/users:id')
  async getUser(@Query() id: any, @Res() response: any): Promise<any> {
    try {
      return await this.userService.findOne(id);
    } catch (error) {
      return error.status
      ? response.status(error.status).json({message: error.message})
      : response.status(500).json({message: error.message});
    }
  }
}