import { User } from "./user.schema";
import * as mongoose from "mongoose";
export type FileDocument = File & Document;
export declare class File {
    fileName: string;
    linkRepo: string;
    uploadedDate: Date;
    createdBy: User;
}
export declare const FileSchema: mongoose.Schema<File, mongoose.Model<File, any, any, any, mongoose.Document<unknown, any, File> & Omit<File & {
    _id: mongoose.Types.ObjectId;
}, never>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, File, mongoose.Document<unknown, {}, mongoose.FlatRecord<File>> & Omit<mongoose.FlatRecord<File> & {
    _id: mongoose.Types.ObjectId;
}, never>>;
