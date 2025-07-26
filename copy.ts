import mongoose from "mongoose";

const lockSchema = new mongoose.Schema({
    _id: { type: String, required: true },
    expiresAt: { type: Date, required: true },
    createTime: { type: Number, required: true },
    build: { type: String, required: true }
});

// Copy `mongoose.Model<Lock444>` from thing.ts to here
export const model = mongoose.model<any>("lock2", lockSchema);