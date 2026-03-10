import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { redisClient, connectRedis } from "./config/redis.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const app = express();

// --- MIDDLEWARES ---
app.use(cors());
app.use(express.json());

// 🚀 VERCEL SPECIFIC MIDDLEWARE: Har request se pehle Redis connect karein
app.use(async (req, res, next) => {
  try {
    await connectRedis();
    next();
  } catch (err) {
    console.error("Redis Middleware Error:", err.message);
    res
      .status(500)
      .json({ error: "Database Connection Failed", details: err.message });
  }
});

// --- ROUTES ---
app.use("/api/auth", authRoutes);

// 1. Get All Naats
app.get("/api/naats", async (req, res) => {
  try {
    const naats = await redisClient.get("naats_list");
    res.json(JSON.parse(naats) || []);
  } catch (err) {
    res.status(500).json({ error: "Redis Fetch Error" });
  }
});

// 2. Toggle Favorite
app.post("/api/favorites/toggle", async (req, res) => {
  try {
    const { naatId, userId } = req.body;
    const key = `user:${userId}:favorites`;

    const isFav = await redisClient.sIsMember(key, naatId);

    if (isFav) {
      await redisClient.sRem(key, naatId);
      res.json({ message: "Removed", status: false });
    } else {
      await redisClient.sAdd(key, naatId);
      res.json({ message: "Added", status: true });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 3. Get User Favorites
app.get("/api/favorites/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const favIds = await redisClient.sMembers(`user:${userId}:favorites`);

    const allNaatsData = await redisClient.get("naats_list");
    const allNaats = JSON.parse(allNaatsData) || [];

    const userFavs = allNaats.filter((n) => favIds.includes(n.id));
    res.json(userFavs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 4. TODO / PLANNER
app.get("/api/todo/:userId", async (req, res) => {
  try {
    const data = await redisClient.get(`user:${req.params.userId}:todo`);
    res.json(JSON.parse(data) || []);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/api/todo/save", async (req, res) => {
  try {
    const { userId, tasks } = req.body;
    await redisClient.set(`user:${userId}:todo`, JSON.stringify(tasks));
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Root Route
app.get("/", (req, res) => {
  res.send("🚀 Noor Al-Iman API is Live and Running!");
});

// --- ERROR HANDLING ---
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong on the server!" });
});

// PORT Logic for Local & Vercel
const PORT = process.env.PORT || 5000;
if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => {
    console.log(`\n====================================`);
    console.log(`🔥 Server started on port ${PORT}`);
    console.log(`🌍 URL: http://localhost:${PORT}`);
    console.log(`====================================\n`);
  });
}

// Vercel Entry Point Export
export default app;
