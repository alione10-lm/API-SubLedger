import Subscription from "../models/subscription.schema.js";

export const createSubscription = async (req, res) => {
    const { userId } = req.user;
    try {
        const subs = await Subscription.create({ ...req.body, userId });
        res.status(201).json({ status: "success", data: subs });
    } catch (err) {
        res.status(500).json({
            status: "error",
            message: "internal server error",
        });
    }
};

export const getAllSubscriptions = async (req, res) => {
    try {
        const { userId } = req.user;

        const subscriptions = await Subscription.find({
            userId,
        });
        res.status(200).json({
            status: "success",
            susbscriptions_Count: subscriptions.length,
            data: subscriptions,
        });
    } catch (err) {
        res.status(500).json({
            status: "error",
            message: "internal server error" + err.message,
        });
    }
};

export const getSubscriptionById = async (req, res) => {
    try {
        const subscription = await Subscription.findOne({
            _id: req.params.id,
            userId: req.user.userId,
        });

        if (!subscription) {
            return res.status(404).json({
                status: "error",
                message: "subscription not found ",
            });
        }

        res.status(200).json({ status: "success", data: subscription });
    } catch (err) {
        res.status(500).json({
            status: "error",
            message: "internal server error",
        });
    }
};

export const updateSubscription = async (req, res) => {
    try {
        const subscription = await Subscription.findOneAndUpdate(
            { _id: req.params.id, userId: req.user.userId },
            req.body,
            { new: true },
        );

        if (!subscription) {
            return res
                .status(404)
                .json({ status: "error", message: "subscription  not found " });
        }

        res.status(200).json({
            status: "success",
            message: "subscription updated successfully",
            data: subscription,
        });
    } catch (err) {
        res.status(500).json({
            status: "error",
            message: "internal server error",
        });
    }
};

export const deleteSubscription = async (req, res) => {
    try {
        const subscription = await Subscription.findOneAndDelete({
            _id: req.params.id,
            userId: req.user.userId,
        });

        if (!subscription) {
            return res
                .status(404)
                .json({ status: "error", message: "susbcription not found " });
        }

        res.status(204).json({
            status: "success",
            message: "subscription  deleted successfully",
        });
    } catch (err) {
        res.status(500).json({
            status: "error",
            message: "internal server error",
        });
    }
};
