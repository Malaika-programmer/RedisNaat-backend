import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    // Connection settings jo DNS block ko bypass karti hain
    const connectionOptions = {
      serverSelectionTimeoutMS: 10000,
      family: 4, // IPv4 force karega
    };

    mongoose.connection.on("connected", () => {
      console.log("✅ MongoDB Connected Successfully");
    });

    mongoose.connection.on("error", (err) => {
      console.log("❌ MongoDB Connection Lost:", err.message);
    });

    console.log("⏳ Connecting to MongoDB Atlas...");
    await mongoose.connect(process.env.MONGO_URI, connectionOptions);
  } catch (error) {
    console.error("❌ Critical: MongoDB Connection Failed!");
    console.error("Reason:", error.message);
  }
};

export default connectDB;
