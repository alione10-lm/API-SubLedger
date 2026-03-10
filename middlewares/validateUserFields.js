import { body } from "express-validator";
import { validationResult } from "express-validator";

export const validateRequest = (req, res, next) => {
    const errors = validationResult(req);

    console.log(errors);
    if (!errors.isEmpty()) {
        return res
            .status(400)
            .json({ errors: errors.array().map((el) => el.msg) });
    }
    next();
};

export const registerValidator = [
    body("name").notEmpty().withMessage("Name is required"),

    body("email")
        .notEmpty()
        .withMessage("Email is required")
        .isEmail()
        .withMessage("Invalid email format"),

    body("password")
        .notEmpty()
        .withMessage("Password is required")
        .isLength({ min: 6 })
        .withMessage("Password must be at least 6 characters"),
];

export const loginValidator = [
    body("email")
        .notEmpty()
        .withMessage("Email is required")
        .isEmail()
        .withMessage("Invalid email format"),

    body("password").notEmpty().withMessage("Password is required"),
];
