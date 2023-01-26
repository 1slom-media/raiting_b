import { Router } from "express";
import controller from "./controller.js";

const router = Router();

router.get("/raiting", controller.GET);
router.get("/raiting/:raitingId", controller.GET);
router.post("/raiting",controller.POST);
router.put("/raiting/:raitingId",controller.PUT);
router.delete("/raiting/:raitingId", controller.DELETE);


export default router;