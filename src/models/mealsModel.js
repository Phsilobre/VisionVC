import mongoose from "mongoose";
import { ObjectId } from "mongodb";

const Schema = mongoose.Schema;

export const MealsSchema = new Schema({
    menuId: {type: ObjectId, ref: "Meal"},
    lunchDinner: String,
    date: Date
});