import { JwtService } from '@nestjs/jwt';
import { User } from "src/model/user.schema";
import { UserService } from "src/services/user.service";
export declare class UserController {
    private readonly userService;
    private jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    Signup(response: any, user: User): Promise<any>;
    SignIn(response: any, user: User): Promise<any>;
}
