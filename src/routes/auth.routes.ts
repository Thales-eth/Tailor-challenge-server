import verifyToken from '@/middleware/verifyToken'
import { Router } from "express"
import { getLoggedUser, login, signup } from "@/controllers/auth.controller"

const router = Router()

router.get("/getLoggedUser", verifyToken, getLoggedUser)
router.post("/login", login)
router.post("/signup", signup)

export default router
