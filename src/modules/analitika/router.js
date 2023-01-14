import { Router } from "express";
import controller from "./controller.js";

const router = Router();

router.get("/analitika", controller.GET);
router.get("/analitika/:analitikaId", controller.GET);
router.post("/analitika",controller.POST);
router.put("/analitika/:analitikaId",controller.PUT);
router.delete("/analitika/:analitikaId", controller.DELETE);


export default router;