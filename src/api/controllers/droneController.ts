import type { Request, Response, NextFunction } from "express";
import * as droneService from "../../services/droneService";

export const registerDrone = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const drone = await droneService.registerDrone(req.body);
		res.status(201).json({ success: true, data: drone });
	} catch (error) {
		next(error);
	}
};

export const loadDrone = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const droneId = req.params.droneId;
		if (!droneId) throw new Error("Drone ID is required");
		const { medicationIds } = req.body;
		const drone = await droneService.loadDrone(droneId, medicationIds);
		res.json({ success: true, data: drone });
	} catch (error) {
		next(error);
	}
};

export const getLoadedMedications = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const droneId = req.params.droneId;
		if (!droneId) throw new Error("Drone ID is required");
		const medications = await droneService.getLoadedMedications(droneId);
		res.json({ success: true, data: medications });
	} catch (error) {
		next(error);
	}
};

export const getAvailableDrones = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const drones = await droneService.getAvailableDrones();
		res.json({ success: true, data: drones });
	} catch (error) {
		next(error);
	}
};

export const getDroneBattery = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const droneId = req.params.droneId;
		if (!droneId) throw new Error("Drone ID is required");
		const battery = await droneService.getDroneBattery(droneId);
		res.json({ success: true, data: { batteryCapacity: battery } });
	} catch (error) {
		next(error);
	}
};
