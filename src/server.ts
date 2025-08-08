import app from "./app";
import { config } from "./config/env";
import { connectDB } from "./config/database";

const startServer = async () => {
	await connectDB();
	app.listen(config.port, () => {
		console.log(`Server running on port ${config.port}`);
	});
};

startServer();
