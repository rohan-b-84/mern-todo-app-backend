const TaskModel = require("../../models/TaskModel");

const getAllTasks = async (req, res) => {
  try {
    let userID = req.user.id;
    let tasks = await TaskModel.find({ user: userID });
    console.log(tasks);
    res.send(tasks);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = getAllTasks;
