const express = require("express");

const router = express.Router();

const addNewTask = require("../controllers/task-controllers/addNewTask");
const getAllTasks = require("../controllers/task-controllers/getAllTasks");
const updateTask = require("../controllers/task-controllers/updateTask");
const deleteTask = require("../controllers/task-controllers/deleteTask");
const fetchID = require("../middlewares/fetchID");
const deleteAll = require("../controllers/task-controllers/deleteAll");
const getCompleted = require("../controllers/task-controllers/getCompletedTasks");
const getActive = require("../controllers/task-controllers/getActiveTasks");

router.get("/get-all-tasks", fetchID, getAllTasks);
router.get("/get-completed", fetchID, getCompleted);
router.get("/get-active", fetchID, getActive);
router.post("/add-new-task", fetchID, addNewTask);
router.put("/update-task/:id", fetchID, updateTask);
router.delete("/delete-task/:id", fetchID, deleteTask);
router.delete("/delete-all/", fetchID, deleteAll);

module.exports = router;
