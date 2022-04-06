import { model, Schema } from "mongoose";

const TaxableSchema = new Schema({
  name: String,
  percentage: Number
});

export default model('taxableSchema',TaxableSchema);
