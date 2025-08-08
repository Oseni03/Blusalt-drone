import { Router } from "express";
import * as droneController from "../controllers/droneController";

const router = Router();

router.get("/", droneController.getAvailableDrones);
router.post("/", droneController.registerDrone);
router.post("/:droneId/load", droneController.loadDrone);
router.get("/:droneId/medications", droneController.getLoadedMedications);
router.get("/:droneId/battery", droneController.getDroneBattery);

export default router;
