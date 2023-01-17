import { Router } from "express";
import controller from "./controller.js";

const router = Router();

router.get("/categories", controller.GET);
router.get("/categories/:categoryId", controller.GET);
router.post("/categories", controller.POST);
router.put("/categories/:categoryId", controller.PUT);
router.delete("/categories/:categoryId", controller.DELETE);

export default router;