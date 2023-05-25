import User from '../models/User.model'
import { Response } from "express";
import { ExtendedPayloadRequest } from "../types/interfaces";

export const getFavoriteRestaurants = (req: ExtendedPayloadRequest, res: Response): void => {
    const { _id: user_id } = req.payload

    User
        .findById(user_id)
        .populate("favoriteRestaurants")
        .then(({ favoriteRestaurants }) => res.status(200).json(favoriteRestaurants))
        .catch(err => res.status(500).json({ error: err.message }))
}

export const likeRestaurant = (req: ExtendedPayloadRequest, res: Response): void => {
    const { _id: user_id } = req.payload
    const { restaurant_id } = req.params

    User
        .findByIdAndUpdate(user_id, { $addToSet: { favoriteRestaurants: restaurant_id } }, { new: true })
        .then(updatedUser => res.status(200).json(updatedUser))
        .catch(err => res.status(500).json({ error: err.message }))
}

export const dislikeRestaurant = (req: ExtendedPayloadRequest, res: Response): void => {
    const { _id: user_id } = req.payload
    const { restaurant_id } = req.params

    User
        .findByIdAndUpdate(user_id, { $pull: { favoriteRestaurants: restaurant_id } }, { new: true })
        .then(updatedUser => res.status(200).json(updatedUser))
        .catch(err => res.status(500).json({ error: err.message }))
}
