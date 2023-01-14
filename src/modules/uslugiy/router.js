import { Router } from "express";
import controller from "./controller.js";

const router = Router();

router.get("/uslugiy", controller.GET);
router.get("/uslugiy/:uslugaId", controller.GET);
router.post("/uslugiy",controller.POST);
router.put("/uslugiy/:uslugaId",controller.PUT);
router.delete("/uslugiy/:uslugaId", controller.DELETE);


export default router;