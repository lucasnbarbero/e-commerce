import { Schema, model } from "mongoose";

const paymentConditionSchema = new Schema({
    name: String,
    amount: Number
});

export default model("paymentConditionSchema", paymentConditionSchema);