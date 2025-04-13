import { Router } from "express";
import { UserController } from "../controllers/UserController";

const router = Router();
const userController = new UserController();

// Rutas de usuarios
router.get("/users", userController.findAll.bind(userController));
router.get("/users/:id", userController.findById.bind(userController));
router.post("/users", userController.create.bind(userController));
router.put("/users/:id", userController.update.bind(userController));
router.delete("/users/:id", userController.delete.bind(userController));

export default router;
