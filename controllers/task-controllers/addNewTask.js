const TaskModel = require("../../models/TaskModel");

const addNewTask = async (req, res) => {
  try {
    let userID = req.user.id;
    let task = await TaskModel.findOne({ task: req.body.task, user: userID });

    if (task) {
      return res.status(500).send("This task already exists");
    }

    task = new TaskModel({
      task: req.body.task,
      user: req.user.id,
    });

    task.save();
    res.json(task);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = addNewTask;
