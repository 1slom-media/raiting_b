import { Router } from "express";
import controller from "./controller.js";

const router = Router();

router.get("/press-center", controller.GET);
router.get("/press-center/:pressId", controller.GET);
router.post("/press-center",controller.POST);
router.put("/press-center/:pressId",controller.PUT);
router.delete("/press-center/:pressId", controller.DELETE);


export default router;