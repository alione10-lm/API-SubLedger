import { Router } from "express";
import {
    login,
    registerUser,
    getAllUsers,
    getProfileDetails,
} from "../controllers/auth.controller.js";
import {
    loginValidator,
    registerValidator,
    validateRequest,
} from "../middlewares/validateUserFields.js";
import {
    authMiddleware,
    protectedRoutes,
} from "../middlewares/authMiddleware.js";

const router = Router();

router
    .post("/register", registerValidator, validateRequest, registerUser)
    .post("/login", loginValidator, validateRequest, login)
    .get("/users", authMiddleware, protectedRoutes, getAllUsers)
    .get("/profile", authMiddleware, getProfileDetails);

export default router;
