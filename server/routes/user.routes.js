import express from "express"
import { getAllUsers, createUser, getAllSuppliers , signInUser} from "../controllers/user.controller.js"


const router = express.Router()

router.post('/', createUser)
router.post('/signin', signInUser)
router.get('/', getAllUsers)


router.get('/s', getAllSuppliers)

export const userRoute = router; 