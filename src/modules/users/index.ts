import { Router } from "express";
import userRoutes from "./routes/userRoutes";

const router = Router();

router.use(userRoutes);

export default router;
