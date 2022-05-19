const TaskModel = require("../../models/TaskModel");

const deleteTask = async (req, res) => {
  try {
    let taskID = await req.params.id;
    console.log(taskID);
    let myTask = await TaskModel.findByIdAndDelete(taskID);
    res.send("deleted");
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = deleteTask;
