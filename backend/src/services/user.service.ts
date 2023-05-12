import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, Query } from "mongoose";
import { User, UserDocument } from "src/model/user.schema";
import * as bcrypt from 'bcrypt';
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) { }
  
  async signup(user: User): Promise<User> {
    const salt: string = await bcrypt.genSalt();
    const hash: string = await bcrypt.hash(user.password, salt);

    const reqBody = {
      username: user.username,
      role: user.role,  
      email: user.email,
      password: hash
    }
    const newUser = new this.userModel(reqBody);
    return newUser.save();
  }

  async signin(user: User, jwt: JwtService): Promise<any> {

    const { email, password } = user;
    
    const foundUser = await this.userModel.findOne({ email }).exec();
        if (foundUser) {
          const verified = await bcrypt.compare(password, foundUser.password)
            if (verified) {
                const payload = { email: foundUser.email, password: foundUser.password };
                return {
                  token: jwt.sign(payload),
                };
            }
          return new HttpException('Incorrect username or password', HttpStatus.UNAUTHORIZED)
        }
    return new HttpException('User Not found', HttpStatus.UNAUTHORIZED)  
  } 

  async getOne(email): Promise<User> {
    return await this.userModel.findOne({ email }).exec();
  }

  async findOne(id): Promise<User> {
    return await this.userModel.findOne({id}).exec();
  }
};