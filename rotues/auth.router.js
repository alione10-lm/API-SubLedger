import { Router } from "express";
import { login, registerUser } from "../controllers/auth.controller.js";
import {
    loginValidator,
    registerValidator,
    validateRequest,
} from "../middlewares/validateUserFields.js";

const router = Router();

router
    .post("/auth/register", registerValidator, validateRequest, registerUser)
    .post("/auth/login", loginValidator, validateRequest, login);

export default router;
