import { Router } from "express";
import controller from "./controller.js";

const router = Router();

router.get("/renkingi", controller.GET);
router.get("/renkingi/:renkId", controller.GET);
router.post("/renkingi",controller.POST);
router.put("/renkingi/:renkId",controller.PUT);
router.delete("/renkingi/:renkId", controller.DELETE);


export default router;