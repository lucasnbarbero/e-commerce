import { Schema, model } from "mongoose";

const supplierSchema = new Schema({
    name: {
        type: String,
        lowercase: true,
        maxlength: 50,
        required: [true, 'The name is required'],
    },
    cuit: {
        type: String,
        length: 11,
        required: [true, 'The C.U.I.T. is required'],
    },
    email: {
        type: String,
        required: [true, 'The email is required'],
    },
    customerType: {
        type: String
    },
    cityId: {
        type: String,
    },
    phone: {
        type: String,
    },
    web: {
        type: String,
    },
});

export default model("Supplier", supplierSchema);