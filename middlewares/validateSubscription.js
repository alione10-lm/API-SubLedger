import { validationResult, body } from "express-validator";
import mongoose from "mongoose";

export const validateRequest = (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res
            .status(400)
            .json({ errors: errors.array().map((el) => el.msg) });
    }
    next();
};

export const subscriptionValidator = [
    body("name").notEmpty().withMessage("Name is required"),
    body("billingCycle")
        .notEmpty()
        .withMessage("The billing cycle is required")
        .isIn(["monthly", "yearly"])
        .withMessage("The billing cycle  must be either 'monthly' or 'yearly'"),
    body("price")
        .notEmpty()
        .withMessage("price is required")
        .isInt({ min: 0.1 })
        .withMessage("The transaction amount must greater than '0'"),

    body("userId").custom((value, { req }) => {
        if (!mongoose.Types.ObjectId.isValid(req.user.userId))
            throw new error("invalid user id ");

        return true;
    }),
];
