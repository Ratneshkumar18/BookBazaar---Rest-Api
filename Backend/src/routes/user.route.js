import express from "express"
import {userRegister} from "../controllers/users.controller.js"

const userRoutes = express.Router();

userRoutes.post("/register", userRegister)


export default userRoutes