import { createClient } from "redis";
import dotenv from "dotenv";

dotenv.config();

// Redis Client Configuration
const redisClient = createClient({
  url: process.env.REDIS_URL || "redis://localhost:6379",
});

// Event Listeners for Debugging
redisClient.on("connect", () => {
  console.log("✅ Redis Client Connecting...");
});

redisClient.on("ready", () => {
  console.log("✅ Redis Connected & Ready to Use");
});

redisClient.on("error", (err) => {
  console.log("❌ Redis Client Error:", err.message);
});

redisClient.on("end", () => {
  console.log("⚠️ Redis Client Disconnected");
});

// Connect to Redis
const connectRedis = async () => {
  try {
    if (!redisClient.isOpen) {
      await redisClient.connect();
    }
  } catch (err) {
    console.error("❌ Redis Connection Failed:", err.message);
  }
};

// Immediate Connection Attempt
connectRedis();

export { redisClient, connectRedis };
