import { Schema, model } from "mongoose";

const supplierSchema = new Schema({
    businessName: {
        type: String,
        required: [true, 'The businessName is required'],
    },
    tradename: {
        type: String,
    },
    cuit: {
        type: String,
        length: 11,
    },
    address: String,
    country: String,
    province: String,
    city: String,
    postalCode: String,
    phone: String,
    cellPhone: String,
    email: String,
    web: String,
    observations: String,
    wayToPay: String,
    taxable: String,
    condition: Boolean
});

export default model("Supplier", supplierSchema);