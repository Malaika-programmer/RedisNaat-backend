import { createClient } from "redis";

let redisClient;

export const connectRedis = async () => {
  // Agar pehle se connected hai to dobara connect na karein
  if (redisClient && redisClient.isOpen) {
    return redisClient;
  }

  redisClient = createClient({
    url: process.env.REDIS_URL,
    socket: {
      connectTimeout: 10000,
      keepAlive: 5000,
      tls: true, // Forcefully SSL on kar rahe hain
    },
  });

  redisClient.on("error", (err) => console.log("❌ Redis Error:", err.message));

  try {
    await redisClient.connect();
    console.log("✅ Redis Connected Successfully");
    return redisClient;
  } catch (err) {
    console.error("❌ Redis Connection Failed:", err.message);
    throw err;
  }
};

export { redisClient };
