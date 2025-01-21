import express from "express"
import { getAllUsers, createUser } from "../controllers/user.controller.js"


const router = express.Router()

router.post('/', createUser)
router.get('/', getAllUsers)

export const userRoute = router; 