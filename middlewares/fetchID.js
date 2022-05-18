const jwt = require("jsonwebtoken");
const JWT_SECRET = "xP&@T<^U'5yVA?Lh";

const fetchID = async (req, res, next) => {
  try {
    const token = req.header("auth-token");
    if (!token) {
      return res.status(400).send("Please authenticate yourself");
    }

    let data = jwt.verify(token, JWT_SECRET);

    req.user = data.user;
    next();
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = fetchID;
