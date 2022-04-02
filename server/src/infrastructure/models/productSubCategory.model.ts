import { Schema, model } from "mongoose";
import SubCategory from "./productSubCategory.model";

const productSubCategorySchema = new Schema({
    description: {
        type: String,
        maxlength: 50,
        required: true
    }
});

export default model("productSubCategorySchema", productSubCategorySchema);
