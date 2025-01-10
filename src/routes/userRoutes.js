import { Router } from "express";
import UserController from "../controllers/UserController";
import loginMiddleware from "../middlewares/loginMiddleware";
const router = new Router();

router.post("/", UserController.create);
router.get("/", loginMiddleware, UserController.index);
router.get("/:id", UserController.show);
router.put("/:id", UserController.update);
router.delete("/:id", UserController.delete);

export default router;
