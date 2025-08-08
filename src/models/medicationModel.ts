import { Schema, model } from "mongoose";
import type { Medication as MedicationType } from "../types/medicationTypes";

const medicationSchema = new Schema<MedicationType>({
	name: { type: String, required: true, match: /^[a-zA-Z0-9.-]+$/ },
	weight: { type: Number, required: true },
	code: { type: String, required: true, match: /^[A-Z0-9_]+$/ },
	image: { type: String, required: true },
});

export const Medication = model<MedicationType>("Medication", medicationSchema);
