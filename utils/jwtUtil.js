import jwt, { decode } from "jsonwebtoken";

import dotenv from "dotenv";
dotenv.config();

const generateToken = (payload) => {
    return jwt.sign(payload, process.env.JWT_SECRET_KEY);
};
const verfiryToken = (token) => {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    console.log(decode);

    return decoded;
};

export { generateToken, verfiryToken };
