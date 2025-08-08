import mongoose from "mongoose";
import { config } from "./env";

export const connectDB = async () => {
	try {
		await mongoose.connect(config.mongoUri, {
			serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of 30s
			socketTimeoutMS: 45000, // Close sockets after 45s of inactivity
		});
		console.log("MongoDB Connected");
	} catch (error) {
		console.error("MongoDB connection error:", error);
		console.log("Please ensure MongoDB is running locally on port 27017");
		process.exit(1);
	}
};
