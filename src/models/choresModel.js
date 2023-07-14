import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const ChoresSchema = new Schema({
    name: {
        type: String,
        required: 'Entrer un nom'
    },
    frequency: {
        type: Number,
        default: 30
    },
    category: {
        type: Number,
        required: 'Entrer une categorie'
    },
    lastDone: {
        type: Date
    }
})

