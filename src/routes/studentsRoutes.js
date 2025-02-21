import { Router } from "express";
import StudentController from "../controllers/StudentController";
const router = new Router();

router.get("/", StudentController.index);
router.post("/", StudentController.store);
router.patch("/:id", StudentController.update);
router.get("/:id", StudentController.show);
router.delete("/:id", StudentController.delete);

export default router;
