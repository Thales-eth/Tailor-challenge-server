import { Router } from "express";
const router = Router();
import authRoutes from './auth.routes'
import restaurantRoutes from './restaurant.routes'

router.use("/auth", authRoutes)
router.use("/restaurants", restaurantRoutes)

export default router