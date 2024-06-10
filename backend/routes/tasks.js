const express = require("express");
const {
  getAllTasks,
  createTask,
  updateTask,
  getTask,
  deleteTask,
} = require("../controllers/tasks");
const router = express.Router();

router.get("/", getAllTasks);
router.post("/", createTask);
router.put("/:id", updateTask);
router.get("/:id", getTask);
router.delete("/:id", deleteTask);

module.exports = router;
