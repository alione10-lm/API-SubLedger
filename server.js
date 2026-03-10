import express from "express";
import connectDB from "./config/db.js";

import dotenv from "dotenv";
import { login, registerUser } from "./controllers/auth.controller.js";
dotenv.config();

const app = express();

app.use(express.json());

connectDB();

app.get("/", (req, res) => {
    res.json({ message: "done" });
});

app.post("/api/auth/register", registerUser);
app.post("/api/auth/login", login);

app.listen(5000, () => {
    console.log("server runnig on ", process.env.PORT);
});
