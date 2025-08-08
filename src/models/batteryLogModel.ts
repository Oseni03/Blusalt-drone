import { Schema, model } from "mongoose";

interface BatteryLog {
	droneId: string;
	batteryCapacity: number;
	timestamp: Date;
}

const batteryLogSchema = new Schema<BatteryLog>({
	droneId: { type: String, required: true },
	batteryCapacity: { type: Number, required: true },
	timestamp: { type: Date, default: Date.now },
});

export const BatteryLog = model<BatteryLog>("BatteryLog", batteryLogSchema);
