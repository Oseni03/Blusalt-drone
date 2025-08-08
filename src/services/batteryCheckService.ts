import { scheduleJob } from "node-schedule";
import { Drone } from "../models/droneModel";
import { BatteryLog } from "../models/batteryLogModel";

// Run every 5 minutes
export const startBatteryCheck = () => {
	scheduleJob("*/5 * * * *", async () => {
		const drones = await Drone.find();
		for (const drone of drones) {
			const log = new BatteryLog({
				droneId: drone._id,
				batteryCapacity: drone.batteryCapacity,
			});
			await log.save();
			console.log(
				`Logged battery for drone ${drone.serialNumber}: ${drone.batteryCapacity}%`
			);
		}
	});
};
