import express from "express"
import "dotenv/config"
import "./db"

const app = express()

import config from './config'
config(app)

import indexRoutes from "./routes/index"
app.use("/api", indexRoutes)

import errorHandler from './error-handling'
errorHandler(app)

export default app