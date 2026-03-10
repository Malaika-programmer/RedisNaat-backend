import { createClient } from "redis";
import dotenv from "dotenv";

dotenv.config();

// Redis Client Configuration
const redisClient = createClient({
  // Vercel par REDIS_URL zaroori hai, localhost sirf fallback ke liye hai
  url: process.env.REDIS_URL,
  socket: {
    // 5 seconds timeout taaki loading loop na bane
    connectTimeout: 5000,
    // Serverless functions ke liye behtar reconnection strategy
    reconnectStrategy: (retries) => {
      if (retries > 5) return new Error("Redis connection retries exhausted");
      return Math.min(retries * 100, 3000);
    },
    // SSL configuration (Zaroori hai Upstash/Cloud Redis ke liye)
    tls: process.env.REDIS_URL?.startsWith("rediss://") ? true : false,
  },
});

// Event Listeners for Debugging
redisClient.on("connect", () => {
  console.log("⏳ Redis: Connection initiated...");
});

redisClient.on("ready", () => {
  console.log("✅ Redis: Connected & Ready to Use");
});

redisClient.on("error", (err) => {
  console.log("❌ Redis Client Error:", err.message);
});

redisClient.on("end", () => {
  console.log("⚠️ Redis: Connection closed");
});

// Connect to Redis (Singleton Pattern for Serverless)
export const connectRedis = async () => {
  try {
    if (!redisClient.isOpen) {
      // 5 seconds ka sakht timeout check
      const connectionTimeout = setTimeout(() => {
        if (!redisClient.isOpen) {
          console.error("❌ Redis: Connection timed out after 5s");
        }
      }, 5000);

      await redisClient.connect();
      clearTimeout(connectionTimeout);
    }
  } catch (err) {
    console.error("❌ Redis Connection Failed:", err.message);
    throw err; // Isay throw karna zaroori hai taaki server.js ko pata chale
  }
};

export { redisClient };
