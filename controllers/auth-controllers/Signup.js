const UserModel = require("../../models/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "xP&@T<^U'5yVA?Lh";

const genSecPass = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const securePassword = await bcrypt.hash(password, salt);
  return securePassword;
};

const CreateNewUser = async (req, res) => {
  try {
    let user = await UserModel.findOne({ emailAddress: req.body.emailAddress });
    if (user) {
      return res.status(500).send("A user with this email already exists");
    }
    const securePassword = await genSecPass(req.body.password);
    user = await UserModel.create({
      name: req.body.name,
      emailAddress: req.body.emailAddress,
      password: securePassword,
    });

    const data = {
      user: {
        id: user.id,
      },
    };
    const token = await jwt.sign(data, JWT_SECRET);

    res.json({ token });
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server error");
  }
};

module.exports = CreateNewUser;
