import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const KnownMealsSchema = new Schema({
    title: String
})