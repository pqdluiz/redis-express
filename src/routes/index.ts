import { Router } from "express";
import { MainController } from "../controllers/main.controller";
import { checkCache } from "../middleware";

const router = Router();
const mainController = new MainController();

router.get("/cache", mainController.getCache);
router.get("/verify", checkCache, mainController.verify);

export { router };
