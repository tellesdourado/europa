import { Router } from "express";
import { GasController } from "../controllers/GasController";

const router = Router();

const gasController = new GasController();

router.use("/find/:lat/:lng", gasController.find);

export default router;
