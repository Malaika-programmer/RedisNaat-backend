// backend/routes/todoRoutes.js
const express = require("express");
const router = express.Router();
const {
  addTask,
  getTasks,
  toggleTask,
  deleteTask,
} = require("../controllers/todoController");

router.get("/:userId", getTasks);
router.post("/add", addTask);
router.post("/toggle", toggleTask);
router.post("/delete", deleteTask);

module.exports = router;
