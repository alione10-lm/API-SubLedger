import express from "express";
import connectDB from "./config/db.js";

import dotenv from "dotenv";
import { registerUser } from "./controllers/auth.controller.js";
dotenv.config();

const app = express();

app.use(express.json());

connectDB();

app.listen(5000, () => {
    console.log("server runnig on ", process.env.PORT);
});
