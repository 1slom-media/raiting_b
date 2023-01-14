import { Router } from "express";
import controller from "./controller.js";

const router = Router();

router.get("/metadalogia", controller.GET);
router.get("/metadalogia/:metaId", controller.GET);
router.post("/metadalogia",controller.POST);
router.put("/metadalogia/:metaId",controller.PUT);
router.delete("/metadalogia/:metaId", controller.DELETE);


export default router;