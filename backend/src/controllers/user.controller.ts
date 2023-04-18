import { Body, Controller, HttpStatus, Post, Res } from "@nestjs/common";
import { JwtService } from '@nestjs/jwt';
import { User } from "src/model/user.schema";
import { UserService } from "src/services/user.service";

@Controller('api/v1/user')
export class UserController {
  constructor(private readonly userService: UserService,
    private jwtService: JwtService) { }

  @Post('/signup')
  async Signup(@Res() response: any, @Body() user: User): Promise<any> {
    const newUSer = await this.userService.signup(user);
    return response.status(HttpStatus.CREATED).json({
      newUSer
    })
  }
  @Post('/signin')
  async SignIn(@Res() response: any, @Body() user: User): Promise<any> {
    const token = await this.userService.signin(user, this.jwtService);
    return response.status(HttpStatus.OK).json(token)
  }
}