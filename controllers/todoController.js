const { redisClient } = require("../server");

// 1. Add Task
exports.addTask = async (req, res) => {
  try {
    const { userId, taskText, priority } = req.body;
    const taskId = Date.now().toString(); // Unique ID for each task

    const taskData = {
      id: taskId,
      text: taskText,
      completed: "false",
      priority: priority || "medium",
      createdAt: new Date().toISOString(),
    };

    // Redis Hash mein task save karein: todos:userId -> taskId -> JSON string
    await redisClient.hSet(`todos:${userId}`, taskId, JSON.stringify(taskData));

    res.json({ message: "Task added to Redis", task: taskData });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 2. Get All Tasks
exports.getTasks = async (req, res) => {
  try {
    const { userId } = req.params;
    const allTasks = await redisClient.hGetAll(`todos:${userId}`);

    // Redis object ko array mein convert karein
    const taskList = Object.values(allTasks).map((t) => JSON.parse(t));

    // Newest tasks first
    taskList.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    res.json(taskList);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 3. Toggle Task Status (Complete/Incomplete)
exports.toggleTask = async (req, res) => {
  try {
    const { userId, taskId } = req.body;

    const taskJson = await redisClient.hGet(`todos:${userId}`, taskId);
    if (!taskJson) return res.status(404).json({ message: "Task not found" });

    let task = JSON.parse(taskJson);
    task.completed = task.completed === "true" ? "false" : "true";

    await redisClient.hSet(`todos:${userId}`, taskId, JSON.stringify(task));
    res.json(task);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 4. Delete Task
exports.deleteTask = async (req, res) => {
  try {
    const { userId, taskId } = req.body;
    await redisClient.hDel(`todos:${userId}`, taskId);
    res.json({ message: "Task deleted from Redis" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
