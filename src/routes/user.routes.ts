import { Router } from "express"
import { getFavoriteRestaurants, likeRestaurant, dislikeRestaurant } from "@/controllers/users.controller"

const router = Router()

router.get('/getFavoriteRestaurants', getFavoriteRestaurants)
router.put('/likeRestaurant/:restaurant_id', likeRestaurant)
router.put('/dislikeRestaurant/:restaurant_id', dislikeRestaurant)

export default router