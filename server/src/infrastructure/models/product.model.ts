import { Schema, model } from "mongoose";
// import Supplier from "./supplier.model";
// import PruductBrand from "./pruductBrand.model";
// import ProductCategory from "./productCategory.model";
// import productSubCategory from "./productSubCategory.model";
// import TypeTaxes from "./typeTaxes.model";

const productSchema = new Schema({
    description: {
        type: String,
        maxlength: 50,
        required: true
    },
    price: Number,
    costMediumPrice: Number,
    marginPercentage: Number,
    salesPriceWithoutTaxes: Number,
    quantity: Number,
    amount: Number,
    minimalExistence: Number,
    code: String,
    salesPriceWithTaxes: Number

    // PruductBrand:{
    //     type: PruductBrand,
    //     ref: "PruductBrand"
    // },
    // ProductCategory:{
    //     type: ProductCategory,
    //     ref: "ProductCategory"
    // },
    // productSubCategory:{
    //     type: productSubCategory,
    //     ref: "productSubCategory"
    // },
    // typeTaxes: {
    //     type: TypeTaxes,
    //     ref: "TypeTaxes"
    // },
    // supplier: {
    //     type: Supplier,
    //     ref: "Supplier"
    // }
});

export default model("Product", productSchema);
