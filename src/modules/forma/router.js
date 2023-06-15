import { Router } from "express";
import controller from "./controller.js";

const router = Router();

router.get("/forma", controller.GET);
router.get("/forma/:formId", controller.GET);
router.post("/forma",controller.POST);
router.put("/forma/:formId",controller.PUT);
router.delete("/forma/:formId", controller.DELETE);

export default router;
