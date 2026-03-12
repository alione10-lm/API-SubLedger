import User from "../models/user.schema.js";
import { comparePassword, hashPassword } from "../utils/hashPassowrd.js";
import { generateToken } from "../utils/jwtUtil.js";

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

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            res.status(400).json({
                message: "invalid email  , no user found with this email !",
            });
        }

        const isMatch = await comparePassword(password, user.password);
        if (!isMatch) {
            res.status(400).json({
                message: "password incorrect !",
            });
        }

        const token = generateToken({ userId: user._id, role: user.role });

        res.status(200).json({ message: "logged in ", token });
    } catch (error) {
        res.status(500).json("something went wrong , try again later !");
    }
};

export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({
            _id: { $ne: req.user.userId },
        }).select("-password");

        res.status(200).json({ users });
    } catch (error) {
        res.status(500).json({ message: "failed to get all users" });
    }
};
