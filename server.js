import express from "express";
import connectDB from "./config/db.js";

import authRoutes from "./rotues/auth.router.js";

import dotenv from "dotenv";
import { login, registerUser } from "./controllers/auth.controller.js";
import { authMiddleware } from "./middlewares/authMiddleware.js";
dotenv.config();

const app = express();

app.use(express.json());

connectDB();

app.get("/", (req, res) => {
    res.json({ message: "done" });
});

app.use("/api", authRoutes);

app.use("/", authMiddleware, (req, res) => {
    res.json({ message: "success message !" });
});

app.listen(5000, () => {
    console.log("server runnig on ", process.env.PORT);
});
