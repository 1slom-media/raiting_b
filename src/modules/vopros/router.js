import { Router } from "express";
import controller from "./controller.js";

const router = Router();

router.get("/vopros", controller.GET);
router.get("/vopros/:voprosId", controller.GET);
router.post("/vopros",controller.POST);
router.put("/vopros/:voprosId",controller.PUT);
router.delete("/vopros/:voprosId", controller.DELETE);


export default router;