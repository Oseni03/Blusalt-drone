export enum DroneModel {
	Lightweight = "Lightweight",
	Middleweight = "Middleweight",
	Cruiserweight = "Cruiserweight",
	Heavyweight = "Heavyweight",
}

export enum DroneState {
	IDLE = "IDLE",
	LOADING = "LOADING",
	LOADED = "LOADED",
	DELEIVERING = "DELEIVERING",
	DELEIVERED = "DELEIVERED",
	RETURNING = "RETURNING",
}

export interface Drone {
	serialNumber: string;
	model: DroneModel;
	weightLimit: number; // in grams
	state: DroneState;
	batteryCapacity: number; // Percentage from 0 to 100
	medications?: string[]; // Reference to medication IDs
	createdAt?: Date;
	updatedAt?: Date;
}
