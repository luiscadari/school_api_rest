import { Router } from "express";
import StudentController from "../controllers/StudentController";
import loginMiddleware from "../middlewares/loginMiddleware";
const router = new Router();

router.get("/", StudentController.index);
router.post("/", loginMiddleware, StudentController.store);
router.patch("/:id", loginMiddleware, StudentController.update);
router.get("/:id", StudentController.show);
router.delete("/:id", loginMiddleware, StudentController.delete);

export default router;
