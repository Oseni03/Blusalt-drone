import { type Drone, DroneState } from "../types/droneTypes";
import type { Medication } from "../types/medicationTypes";
import { Drone as DroneModel } from "../models/droneModel";
import { Medication as MedicationModel } from "../models/medicationModel";

export const registerDrone = async (droneData: Drone): Promise<Drone> => {
	const drone = new DroneModel(droneData);
	return await drone.save();
};

export const loadDrone = async (
	droneId: string,
	medicationIds: string[]
): Promise<Drone> => {
	const drone = await DroneModel.findById(droneId).populate("medications");
	if (!drone) throw new Error("Drone not found");
	if (drone.batteryCapacity < 25) throw new Error("Battery level below 25%");
	if (drone.state !== DroneState.IDLE)
		throw new Error("Drone not in IDLE state");

	const medications = await MedicationModel.find({
		_id: { $in: medicationIds },
	});
	const totalWeight = medications.reduce((sum, med) => sum + med.weight, 0);
	if (totalWeight > drone.weightLimit)
		throw new Error("Medication weight exceeds drone limit");

	drone.medications = medicationIds;
	drone.state = DroneState.LOADING;
	await drone.save();
	return drone;
};

export const getLoadedMedications = async (
	droneId: string
): Promise<String[]> => {
	const drone = await DroneModel.findById(droneId).populate("medications");
	if (!drone) throw new Error("Drone not found");
	return drone.medications as String[];
};

export const getAvailableDrones = async (): Promise<Drone[]> => {
	return await DroneModel.find({
		state: DroneState.IDLE,
		batteryCapacity: { $gte: 25 },
	});
};

export const getDroneBattery = async (droneId: string): Promise<number> => {
	const drone = await DroneModel.findById(droneId);
	if (!drone) throw new Error("Drone not found");
	return drone.batteryCapacity;
};
