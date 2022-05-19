const TaskModel = require("../../models/TaskModel");

const updateTask = async (req, res) => {
  try {
    let taskID = req.params.id;
    let myTask = await TaskModel.findByIdAndUpdate(taskID, req.body);
    res.send("Updated");
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = updateTask;
