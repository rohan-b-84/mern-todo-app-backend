const UserModel = require("../../models/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "xP&@T<^U'5yVA?Lh";

const verifyCredentials = async (req, res) => {
  try {
    let user = await UserModel.findOne({ emailAddress: req.body.emailAddress });

    if (!user) {
      return res.status(400).json({
        error: "Email address not found",
      });
    }

    const comparePasswords = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!comparePasswords) {
      return res.status(400).json({
        error: "Passwords did not match",
      });
    }

    const data = {
      user: {
        id: user.id,
      },
    };

    const authToken = jwt.sign(data, JWT_SECRET);
    res.json({ authToken });
    console.log(user);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = verifyCredentials;
