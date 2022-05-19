const TaskModel = require("../../models/TaskModel");

const deleteAll = async (req, res) => {
  try {
    let myTask = await TaskModel.deleteMany({});
    res.send("deleted");
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = deleteAll;
