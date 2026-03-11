import { Router } from "express";
import {
    deleteSubscription,
    getAllSubscriptions,
    getSubscriptionById,
    createSubscription,
    updateSubscription,
} from "../controllers/subscription.controller.js";

const router = Router();

router.post("/", createSubscription);
router.put("/", updateSubscription);
router.delete("/:id", deleteSubscription);
router.get("/:id", getSubscriptionById);
router.get("/", getAllSubscriptions);

export default router;
