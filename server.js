import express from "express";
import connectDB from "./config/db.js";

import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.json);

connectDB();

app.listen(() => {
    console.log("server runnig on ", process.env.PORT);
});
