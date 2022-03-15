import { Schema, model } from "mongoose";

const userSchema = new Schema({
    name: {
        id: String,
        type: String
    },
})

export default model("User", userSchema);