import jwt, { decode } from "jsonwebtoken";

import dotenv from "dotenv";
dotenv.config();

const generateToken = (payload) => {
    return jwt.sign(payload, process.env.JWT_SECRET_KEY);
};
const verfiryToken = (token) => {
    return jwt.verify(token, process.env.JWT_SECRET_KEY);
};

export { generateToken, verfiryToken };
