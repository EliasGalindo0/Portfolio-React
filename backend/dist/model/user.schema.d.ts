import * as mongoose from "mongoose";
export type UserDocument = User & Document;
export declare class User {
    username: string;
    email: string;
    role: string;
    password: string;
    createdAt: Date;
}
export declare const UserSchema: mongoose.Schema<User, mongoose.Model<User, any, any, any, mongoose.Document<unknown, any, User> & Omit<User & {
    _id: mongoose.Types.ObjectId;
}, never>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, User, mongoose.Document<unknown, {}, mongoose.FlatRecord<User>> & Omit<mongoose.FlatRecord<User> & {
    _id: mongoose.Types.ObjectId;
}, never>>;
