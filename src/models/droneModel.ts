import { Schema, model } from "mongoose";
import type { Drone as DroneType } from "../types/droneTypes";
import { DroneModel, DroneState } from "../types/droneTypes";

const droneSchema = new Schema<DroneType>(
	{
		serialNumber: { type: String, required: true, maxlength: 100 },
		model: {
			type: String,
			enum: Object.values(DroneModel),
			required: true,
		},
		weightLimit: { type: Number, required: true, max: 500 },
		batteryCapacity: { type: Number, required: true, min: 0, max: 100 },
		state: {
			type: String,
			enum: Object.values(DroneState),
			default: DroneState.IDLE,
		},
		medications: [{ type: Schema.Types.ObjectId, ref: "Medication" }],
	},
	{
		timestamps: true, // This adds createdAt and updatedAt fields automatically
	}
);

export const Drone = model<DroneType>("Drone", droneSchema);
