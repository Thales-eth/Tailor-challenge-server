import { Router } from "express"
import { imageUploadMiddleware } from "../middleware/upload"
import { uploadPicture } from "../controllers/upload.controller"

const router = Router()

router.post("/", imageUploadMiddleware, uploadPicture)

export default router
