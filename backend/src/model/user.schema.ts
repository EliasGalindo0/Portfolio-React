import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from "mongoose";

export type UserDocument = User & Document;
@Schema()
export class User {
  @Prop({ required: true })
  username: string;
  @Prop({ required: true, unique: true, lowercase: true })
  email: string;
  @Prop()
  role: string;
  @Prop({ required: true, unique: true})
  password: string;
  @Prop({ default: Date.now() })
  createdAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);