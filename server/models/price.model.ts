import { Schema, model } from "mongoose";

const PriceSchema = new Schema({
    pastPrice: String,
    price: String,
    timeStamp: String,
});

export const Price = model("Price", PriceSchema);