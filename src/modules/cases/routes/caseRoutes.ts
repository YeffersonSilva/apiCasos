import { Router } from "express";
import { CaseController } from "../controllers/CaseController";

const router = Router();
const caseController = new CaseController();

// Rutas de casos
router.get("/cases", caseController.findAll.bind(caseController));
router.get("/cases/:id", caseController.findById.bind(caseController));
router.post("/cases", caseController.create.bind(caseController));
router.put("/cases/:id", caseController.update.bind(caseController));
router.delete("/cases/:id", caseController.delete.bind(caseController));

export default router;
