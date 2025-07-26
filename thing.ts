import mongoose, { Document, Types, type ObjectId } from "mongoose";

export interface Lock444 extends Document<Types.ObjectId> {
    expiresAt: Date
    createTime: number
    build: string
}

const lockSchema = new mongoose.Schema({
    _id: { type: String, required: true },
    expiresAt: { type: Date, required: true },
    createTime: { type: Number, required: true },
    build: { type: String, required: true }
});

export const model: mongoose.Model<Lock444> = mongoose.model<Lock444>("lock", lockSchema);