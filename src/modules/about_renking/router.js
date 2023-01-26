import { Router } from "express";
import controller from "./controller.js";

const router = Router();

router.get("/about", controller.GET);
router.get("/about/:aboutId", controller.GET);
router.post("/about",controller.POST);
router.put("/about/:aboutId",controller.PUT);
router.delete("/about/:aboutId", controller.DELETE);


export default router;