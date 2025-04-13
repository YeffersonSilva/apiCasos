import { Router } from "express";
import caseRoutes from "./routes/caseRoutes";

const router = Router();

router.use(caseRoutes);

export default router;
