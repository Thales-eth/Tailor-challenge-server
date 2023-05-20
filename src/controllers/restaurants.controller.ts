import { Request, Response, NextFunction } from "express";
import Restaurant from "@/models/Restaurant.model";
import { ModelAdaptedRestaurant } from "@/types/interfaces";

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
        .then(restaurant => res.status(200).json(restaurant))
        .catch(err => res.status(500).json({ err: err.message }))
}

export const createOneRestaurant = (req: Request, res: Response, next: NextFunction) => {
    const { name, neighborhood, address, location, image, cuisine_type, operating_hours, reviews }: ModelAdaptedRestaurant = req.body

    Restaurant
        .create({ name, neighborhood, address, location, image, cuisine_type, operating_hours, reviews })
        .then(createdRestaurant => res.status(200).json(createdRestaurant))
        .catch(err => res.status(500).json({ err: err.message }))
}

export const editOneRestaurant = (req: Request, res: Response, next: NextFunction) => {
    const { restaurant_id } = req.params
    const { name, neighborhood, address, location, image, cuisine_type, operating_hours, reviews }: ModelAdaptedRestaurant = req.body

    Restaurant
        .findByIdAndUpdate(restaurant_id, { name, neighborhood, address, location, image, cuisine_type, operating_hours, reviews }, { new: true })
        .then(editedRestaurant => res.status(200).json(editedRestaurant))
        .catch(err => res.status(500).json({ err: err.message }))
}

export const deleteOneRestaurant = (req: Request, res: Response) => {
    const { restaurant_id } = req.params

    Restaurant
        .findByIdAndDelete(restaurant_id)
        .then(() => res.status(200).json({ msg: "Restaurant successfully deleted!" }))
        .catch(err => res.status(500).json({ err: err.message }))
}
