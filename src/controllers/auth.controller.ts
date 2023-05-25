import User from '../models/User.model'
import { Request, Response, NextFunction } from "express";
import { ExtendedPayloadRequest, UserModel } from '../types/interfaces'

export const getLoggedUser = (req: ExtendedPayloadRequest, res: Response) => {
    const { _id: user_id } = req.payload

    User
        .findById(user_id)
        .select("-createdAt -updatedAt -__v")
        .then(user => {
            res.status(200).json(user)
        })
        .catch(err => res.status(500).json({ error: err.message }))
}

export const login = (req: Request, res: Response, next: NextFunction) => {
    const { email, password: plainPassword } = req.body

    if (email === '' || plainPassword === '') {
        res.status(400).json({ err: ["Provide email and password."] });
        return;
    }

    User
        .findOne<UserModel>({ email })
        .then((user: UserModel) => {
            if (!user || !user.comparePassword(plainPassword)) {
                res.status(401).json({ err: ["Wrong User or Password"] })
                return
            }

            const authToken = user.signToken()
            res.status(200).json({ authToken })
        })
        .catch(err => next(err))
}

export const signup = (req: Request, res: Response, next: NextFunction) => {
    const { username, email, password, avatar }: { username: string, email: string, password: string, avatar: string } = req.body

    // I have not been able to cast createdUser directly to be a UserModel type document
    // That's why I needed a second query using findById :(
    User
        .create({ username, email, password, avatar })
        .then((createdUser) => {
            return User.findById<UserModel>(createdUser._id)
        })
        .then((foundUser: UserModel) => {
            const authToken = foundUser.signToken()
            res.status(200).json({ authToken })
        })
        .catch(err => next(err))
}
