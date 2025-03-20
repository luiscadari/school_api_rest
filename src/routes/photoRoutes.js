import { Router } from "express";

import PhotoController from "../controllers/PhotoController";
import loginMiddleware from "../middlewares/loginMiddleware";

const router = new Router();

router.post("/", loginMiddleware, PhotoController.store);

export default router;
