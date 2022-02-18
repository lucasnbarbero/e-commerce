import mongoose from "mongoose";

async function connect() {
  try {
    mongoose.connect("mongodb://localhost/test");
    console.log("Database connected");
    
  } catch (error) {
    console.log(error);
  }
}

export default connect;