import { Router } from "express";
import controller from "./controller.js";

const router = Router();

router.get("/banks", controller.GET);
router.get("/banks/:bankId", controller.GET);
router.post("/banks",controller.POST);
router.put("/banks/:bankId",controller.PUT);
router.delete("/banks/:bankId", controller.DELETE);

export default router;
