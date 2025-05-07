import { Router } from "express";

import EventController from "../controllers/EventController";
import ResetController from "../controllers/ResetController";
import BalanceController from "../controllers/BalanceController";

const router = Router();

router.get("/balance", BalanceController.getBalance);

router.post("/events", EventController.handleEvent);

router.post("/reset", ResetController.handleReset);

export default router;
