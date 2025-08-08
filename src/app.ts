import express, { type Application } from "express";
import droneRoutes from "./api/routers/droneRoutes";
import { errorMiddleware } from "./api/middlewares/errorMiddleware";

const app: Application = express();

app.use(express.json());
app.use("/api/drones", droneRoutes);

app.use(errorMiddleware);

export default app;
