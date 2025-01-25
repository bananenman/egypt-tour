import { Schema, model } from "mongoose";

const PriceSchema = new Schema({
    name: String,
    pastPrice: String,
    price: String,
    timeStamp: String,
});

export const Price = model("Price", PriceSchema);