import { verfiryToken } from "../utils/jwtUtil.js";

export const authMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ message: "No token provided" });
    }

    const token = authHeader.split(" ")[1];

    try {
        const decoded = verfiryToken(token);
        console.log(decoded);

        req.user = decoded;

        next();
    } catch (error) {
        return res.status(401).json({ message: "Invalid token" });
    }
};

export const protectedRoutes = async (req, res, next) => {
    {
        try {
            const { role } = req.user;

            if (role !== "admin") {
                return res.status(403).json("not authorized !");
            }
            next();
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
};
