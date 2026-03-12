import { Router } from "express";
import {
    deleteSubscription,
    getAllSubscriptions,
    getSubscriptionById,
    createSubscription,
    updateSubscription,
} from "../controllers/subscription.controller.js";
import {
    subscriptionValidator,
    validateRequest,
} from "../middlewares/validateSubscription.js";

const router = Router();

router.post("/", subscriptionValidator, validateRequest, createSubscription);
router.put("/:id", updateSubscription);
router.delete("/:id", deleteSubscription);
router.get("/:id", getSubscriptionById);
router.get("/", getAllSubscriptions);

export default router;
