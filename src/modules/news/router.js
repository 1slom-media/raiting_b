import { Router } from "express";
import controller from "./controller.js";

const router = Router();

router.get("/news", controller.GET);
router.get("/news/:newsId", controller.GET);
router.post("/news",controller.POST);
router.put("/news/:newsId",controller.PUT);
router.delete("/news/:newsId", controller.DELETE);


export default router;