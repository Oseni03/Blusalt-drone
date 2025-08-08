import { Router } from "express";
import * as droneController from "../controllers/droneController";

const router = Router();

router.post("/", droneController.registerDrone);
router.post("/load", droneController.loadDrone);
router.get("/:droneId/medications", droneController.getLoadedMedications);
router.get("/available", droneController.getAvailableDrones);
router.get("/:droneId/battery", droneController.getDroneBattery);

export default router;
