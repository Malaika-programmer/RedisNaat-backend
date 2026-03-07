import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { redisClient } from "../config/redis.js";

const router = express.Router(); // <--- Ye line missing thi

// --- SIGNUP ROUTE ---
router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const existingUser = await redisClient.hGet(`user:${email}`, "email");
    if (existingUser) {
      return res.status(400).json({ message: "Email already registered!" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const userData = {
      name,
      email: email.toLowerCase(),
      password: hashedPassword,
      createdAt: new Date().toISOString(),
    };

    await redisClient.hSet(`user:${email}`, userData);
    res.status(201).json({ message: "User created successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Signup failed on server." });
  }
});

// --- LOGIN ROUTE ---
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await redisClient.hGetAll(`user:${email}`);
    if (!user.email)
      return res.status(400).json({ message: "User not found!" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Wrong password!" });

    const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.json({ token, user: { name: user.name, email: user.email } });
  } catch (error) {
    res.status(500).json({ message: "Login failed." });
  }
});

export default router;
