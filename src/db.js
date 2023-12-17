import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/testdb");
    console.log("--> DB connected");
  } catch (err) {
    console.log(err);
    console.log("Problema en db");
  }
};


