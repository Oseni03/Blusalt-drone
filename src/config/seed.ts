import { Drone, DroneModel, DroneState } from "../types/droneTypes";
import { Drone as DroneModelDB } from "../models/droneModel";

export const seedDrones = async () => {
	const droneCount = await DroneModelDB.countDocuments();
	if (droneCount === 0) {
		const drones: Drone[] = [
			{
				serialNumber: "DRONE001",
				model: DroneModel.Lightweight,
				weightLimit: 100,
				batteryCapacity: 80,
				state: DroneState.IDLE,
			},
			{
				serialNumber: "DRONE002",
				model: DroneModel.Middleweight,
				weightLimit: 200,
				batteryCapacity: 60,
				state: DroneState.IDLE,
			},
			{
				serialNumber: "DRONE003",
				model: DroneModel.Cruiserweight,
				weightLimit: 300,
				batteryCapacity: 40,
				state: DroneState.IDLE,
			},
			{
				serialNumber: "DRONE004",
				model: DroneModel.Heavyweight,
				weightLimit: 500,
				batteryCapacity: 90,
				state: DroneState.IDLE,
			},
			{
				serialNumber: "DRONE005",
				model: DroneModel.Lightweight,
				weightLimit: 100,
				batteryCapacity: 20,
				state: DroneState.IDLE,
			},
			{
				serialNumber: "DRONE006",
				model: DroneModel.Middleweight,
				weightLimit: 200,
				batteryCapacity: 70,
				state: DroneState.IDLE,
			},
			{
				serialNumber: "DRONE007",
				model: DroneModel.Cruiserweight,
				weightLimit: 300,
				batteryCapacity: 85,
				state: DroneState.IDLE,
			},
			{
				serialNumber: "DRONE008",
				model: DroneModel.Heavyweight,
				weightLimit: 500,
				batteryCapacity: 30,
				state: DroneState.IDLE,
			},
			{
				serialNumber: "DRONE009",
				model: DroneModel.Lightweight,
				weightLimit: 100,
				batteryCapacity: 50,
				state: DroneState.IDLE,
			},
			{
				serialNumber: "DRONE010",
				model: DroneModel.Middleweight,
				weightLimit: 200,
				batteryCapacity: 95,
				state: DroneState.IDLE,
			},
		];
		await DroneModelDB.insertMany(drones);
		console.log("Preloaded 10 drones");
	}
};
