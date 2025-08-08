import app from "./app";
import { config } from "./config/env";
import { connectDB } from "./config/database";
import { startBatteryCheck } from "./services/batteryCheckService";

const startServer = async () => {
	await connectDB();
	startBatteryCheck();
	app.listen(config.port, () => {
		console.log(
			`Blusalt Drone Service API is running on http://localhost:${config.port}`
		);
	});
};

startServer();
