import { Schema, model } from "mongoose";

const typeTaxesSchema = new Schema({
    description: {
        type: String,
        maxlength: 50,
        required: true
    }
});

export default model("typeTaxesSchema", typeTaxesSchema);
