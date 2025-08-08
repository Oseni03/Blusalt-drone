import type { Request, Response, NextFunction } from "express";
import * as droneService from "../services/droneService";

export const registerDrone = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const drone = await droneService.registerDrone(req.body);
		res.status(201).json(drone);
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
		const { droneId, medicationIds } = req.body;
		const drone = await droneService.loadDrone(droneId, medicationIds);
		res.json(drone);
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
		const medications = await droneService.getLoadedMedications(
			req.params.droneId
		);
		res.json(medications);
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
		res.json(drones);
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
		const battery = await droneService.getDroneBattery(req.params.droneId);
		res.json({ batteryCapacity: battery });
	} catch (error) {
		next(error);
	}
};
