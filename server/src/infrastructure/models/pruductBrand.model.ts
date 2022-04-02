import { Schema, model } from "mongoose";

const brandSchema = new Schema({
    description: {
        type: String,
        maxlength: 50,
        required: true
    }
});

export default model("brandSchema", brandSchema);
