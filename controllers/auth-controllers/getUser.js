const UserModel = require("../../models/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "xP&@T<^U'5yVA?Lh";

const getUser = async (req, res) => {
  try {
    let userID = req.user.id;
    let user = await UserModel.findById(userID).select("-password");
    res.send(user);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = getUser;
