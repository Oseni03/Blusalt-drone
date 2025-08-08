import express, { type Application } from "express";
import droneRoutes from "./api/routers/droneRoutes";

const app: Application = express();

app.use(express.json());
app.use("/api/drones", droneRoutes);

export default app;
