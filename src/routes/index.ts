import authRoutes from './auth.routes'
import restaurantRoutes from './restaurant.routes'
import userRoutes from './user.routes'
import uploadRoutes from './upload.routes'
import verifyToken from "../middleware/verifyToken";
import { Router } from "express";

const router = Router();

router.use("/auth", authRoutes)
router.use("/upload", uploadRoutes)
router.use("/restaurants", restaurantRoutes)
router.use("/users", verifyToken, userRoutes)

export default router