import { Router } from "express";
import controller from "./controller.js";

const router = Router();

router.get("/infarmatsia", controller.GET);
router.get("/infarmatsia/:inforId", controller.GET);
router.post("/infarmatsia",controller.POST);
router.put("/infarmatsia/:inforId",controller.PUT);
router.delete("/infarmatsia/:inforId", controller.DELETE);


export default router;