import { User } from "./user.schema";
import * as mongoose from "mongoose";
export type ImageDocument = Image & Document;
export declare class Image {
    fileName: string;
    linkRepo: string;
    uploadedDate: Date;
    createdBy: User;
}
export declare const ImageSchema: mongoose.Schema<Image, mongoose.Model<Image, any, any, any, mongoose.Document<unknown, any, Image> & Omit<Image & {
    _id: mongoose.Types.ObjectId;
}, never>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Image, mongoose.Document<unknown, {}, mongoose.FlatRecord<Image>> & Omit<mongoose.FlatRecord<Image> & {
    _id: mongoose.Types.ObjectId;
}, never>>;
