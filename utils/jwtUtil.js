import jwt from "jsonwebtoken";

import dotenv from "dotenv";
dotenv.config();

const generateToken = (payload) => {
    return jwt.sign(payload, process.env.JWT_SECRET_KEY, {
        expiresIn: process.env.TOKEN_EXPIRATION,
    });
};
const verfiryToken = (token) => {
    return jwt.verify(token, process.env.JWT_SECRET_KEY);
};

export { generateToken, verfiryToken };
