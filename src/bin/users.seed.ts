import mongoose from 'mongoose';
import User from '@/models/User.model'
import { UserInterface } from '@/types/interfaces';
import '../db'

const popino: UserInterface = {
    username: "Popino",
    email: "popino@gmail.com",
    password: 1234,
}

User
    .create(popino)
    .then((user): void => console.log(`ENHORABUENA, TU PRIMER USUARIO EN TS, DANI: ${user}`))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close())