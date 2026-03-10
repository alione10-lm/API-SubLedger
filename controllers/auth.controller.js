import User from "../models/user.schema.js";
import { hashPassword } from "../utils/hashPassowrd.js";

export const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const isExists = await User.findOne({ email });

        if (isExists) {
            return res.status(400).json({ message: "Email already in use !" });
        }

        const hashedPassword = await hashPassword(password);

        const user = await User.create({
            name,
            email,
            password: hashedPassword,
        });

        res.status(201).json({
            message: "User registred successfully",
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
