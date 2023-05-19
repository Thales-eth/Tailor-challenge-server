import { Request } from "express";
import { Document } from "mongoose"
import { Types } from 'mongoose'

export interface extendedPayloadRequest extends Request {
    payload: {
        _id: string;
    }
}

export interface UserModel extends Document {
    signToken: () => string;
    comparePassword: (plainPwd: string) => boolean
    username: string;
    email: string;
    password: string;
    avatar: string;
}

export interface UserInterface {
    username: string,
    email: string,
    password: number,
    avatar?: string,
    friends?: Types.ObjectId[];
    personalPhotos?: Types.ObjectId[];
    favoritePhotos?: Types.ObjectId[];
}
