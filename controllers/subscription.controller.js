import subscriptionSchema from "../models/subscription.schema.js";

export const createSubscription = async (req, res) => {
    const { userId } = req.user;
    try {
        const subs = await subscriptionSchema.create({ ...req.body, userId });
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
        const subscriptions = await subscriptionSchema.find({
            userId: req.user.usreId,
        });
        res.status(200).json({
            status: "success",
            susbscriptions_Count: subscriptions.length,
            data: subscriptions,
        });
    } catch (err) {
        res.status(500).json({ status: "error", message: "Erreur serveur" });
    }
};

export const getSubscriptionById = async (req, res) => {
    try {
        const subscription = await subscriptionSchema.findOne({
            _id: req.params.id,
            userId: req.user.usreId,
        });

        if (!subscription) {
            return res.status(404).json({
                status: "error",
                message: "Abonnement non trouvé ou accès non autorisé",
            });
        }

        res.status(200).json({ status: "success", data: subscription });
    } catch (err) {
        res.status(500).json({ status: "error", message: "Erreur serveur" });
    }
};

export const updateSubscription = async (req, res) => {
    try {
        const { error } = subscriptionSchema.validate(req.body);
        if (error) {
            return res
                .status(400)
                .json({ status: "error", message: error.details[0].message });
        }

        const subscription = await subscriptionSchema.findOneAndUpdate(
            { _id: req.params.id, userId: req.user.userId },
            req.body,
            { new: true, runValidators: true },
        );

        if (!subscription) {
            return res
                .status(404)
                .json({ status: "error", message: "Abonnement non trouvé" });
        }

        res.status(200).json({ status: "success", data: subscription });
    } catch (err) {
        res.status(500).json({ status: "error", message: "Erreur serveur" });
    }
};

export const deleteSubscription = async (req, res) => {
    try {
        const subscription = await subscriptionSchema.findOneAndDelete({
            _id: req.params.userId,
            userId: req.user.id,
        });

        if (!subscription) {
            return res
                .status(404)
                .json({ status: "error", message: "Abonnement non trouvé" });
        }

        res.status(200).json({
            status: "success",
            message: "Abonnement supprimé avec succès",
        });
    } catch (err) {
        res.status(500).json({ status: "error", message: "Erreur serveur" });
    }
};
