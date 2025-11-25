import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI); //Provides Abstracted connection to MongoDB
    console.log("MongoDB Connected Successfully ");
  } catch (error) {
    console.error("MongoDB Connection Failed ", error);
    process.exit(1);
  }
};

export default connectDB;