import { Request, Response, NextFunction } from "express";
import Restaurant from "@/models/Restaurant.model";
import { ModelAdaptedRestaurant } from "@/types/interfaces";
import User from "@/models/User.model";

export const listAllRestaurants = (req: Request, res: Response) => {
    Restaurant
        .find()
        .sort({ createdAt: -1 })
        .lean()
        .then(restaurants => {
            res.status(200).json(restaurants)
        })
        .catch(err => res.status(500).json({ err: err.message }))
}

export const getOneRestaurant = (req: Request, res: Response) => {
    const { restaurant_id } = req.params

    Restaurant
        .findById(restaurant_id)
        .select("-createdAt -updatedAt -__v")
        .then(restaurant => res.status(200).json(restaurant))
        .catch(err => res.status(500).json({ err: err.message }))
}

export const createOneRestaurant = (req: Request, res: Response, next: NextFunction) => {
    const { name, neighborhood, address, location, image, cuisine_type, operating_hours, reviews }: ModelAdaptedRestaurant = req.body
    const { user_id } = req.params

    Restaurant
        .create({ name, neighborhood, address, location, image, cuisine_type, operating_hours, reviews })
        .then(createdRestaurant => User.findByIdAndUpdate(user_id, { $addToSet: { createdRestaurants: createdRestaurant._id } }))
        .then(() => res.sendStatus(201))
        .catch(err => next(err))
}

export const editOneRestaurant = (req: Request, res: Response, next: NextFunction) => {
    const { restaurant_id } = req.params
    const { name, neighborhood, address, location, image, cuisine_type, operating_hours, reviews }: ModelAdaptedRestaurant = req.body

    Restaurant
        .findByIdAndUpdate(restaurant_id, { name, neighborhood, address, location, image, cuisine_type, operating_hours, reviews }, { new: true })
        .select("-createdAt -updatedAt -__v")
        .then(editedRestaurant => res.status(200).json(editedRestaurant))
        .catch(err => next(err))
}

export const deleteOneRestaurant = (req: Request, res: Response) => {
    const { restaurant_id, user_id } = req.params

    Restaurant
        .findByIdAndDelete(restaurant_id)
        .then(deletedRestaurant => User.findByIdAndUpdate(user_id, { $pull: { createdRestaurants: deletedRestaurant._id } }))
        .then(() => res.status(200).json({ msg: "Restaurant successfully deleted!" }))
        .catch(err => res.status(500).json({ err: err.message }))
}
