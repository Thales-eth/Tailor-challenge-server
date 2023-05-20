import { Router } from "express"
import { listAllRestaurants, getOneRestaurant, createOneRestaurant, editOneRestaurant, deleteOneRestaurant } from "@/controllers/restaurants.controller"
const router = Router()

router.get("/list", listAllRestaurants)
router.get("/getOne/:restaurant_id", getOneRestaurant)
router.post("/create", createOneRestaurant)
router.put("/edit/:restaurant_id", editOneRestaurant)
router.delete("/delete/:restaurant_id", deleteOneRestaurant)

export default router
