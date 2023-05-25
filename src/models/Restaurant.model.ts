import { DEFAULT_RESTAURANT_PIC } from "@/consts"
import { Schema, model } from "mongoose"

const restaurantSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, "A Restaurant name is required!"],
            unique: true,
            trim: true
        },
        neighborhood: { type: String },
        address: {
            type: String,
            required: true,
            trim: true
        },
        location: {
            type: {
                type: String,
                enum: ["Point"],
                default: "Point"
            },
            coordinates: {
                type: [Number],
                default: [0, 0],
            }
        },
        image: {
            type: String,
            default: DEFAULT_RESTAURANT_PIC,
            set: (value: string) => !value ? DEFAULT_RESTAURANT_PIC
                :
                value
        },
        cuisine_type: {
            type: String,
            required: true,
            trim: true
        },
        operating_hours: {
            Monday: { type: String },
            Tuesday: { type: String },
            Wednesday: { type: String },
            Thursday: { type: String },
            Friday: { type: String },
            Saturday: { type: String },
            Sunday: { type: String },
        },
        reviews: [
            {
                name: { type: String },
                date: { type: Date },
                rating: { type: Number },
                comments: { type: String }
            }
        ]
    },
    {
        timestamps: true
    }
)

const Restaurant = model("Restaurant", restaurantSchema)

export default Restaurant