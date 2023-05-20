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

export interface ReviewInterface {
    name: string,
    date: string,
    rating: number,
    comments: string
}

export interface OperatingHours {
    Monday: string,
    Tuesday: string,
    Wednesday: string,
    Thursday: string,
    Friday: string,
    Saturday: string,
    Sunday: string
}

export interface ModelAdaptedRestaurant {
    name: string,
    neighborhood: string,
    address: string,
    location: {
        type: string,
        coordinates: number[]
    },
    image: string,
    cuisine_type: string,
    operating_hours: OperatingHours,
    reviews: ReviewInterface[]
}