import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { User } from "./user.schema";
import * as mongoose from "mongoose";

export type FileDocument = File & Document;
@Schema()
export class File {
  @Prop()
  fileName: string;
  @Prop()
  linkRepo: string;
  @Prop({ default: Date.now() })
  uploadedDate: Date;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "User" })
  createdBy: User;
}

export const FileSchema = SchemaFactory.createForClass(File);