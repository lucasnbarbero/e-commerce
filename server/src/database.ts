import mongoose from "mongoose";

export async function connect() {
  try {
    await mongoose.connect("mongodb://localhost/control-stock");
    console.log(">>>Database connected");
    
  } catch (error) {
    console.log(error);
  }
}
