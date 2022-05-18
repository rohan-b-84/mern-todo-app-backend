const express = require("express");
const verifyCredentials = require("../controllers/auth-controllers/Login");
const CreateNewUser = require("../controllers/auth-controllers/Signup");
const fetchID = require("../middlewares/fetchID");
const getUser = require("../controllers/auth-controllers/getUser");
const router = express.Router();

router.post("/sign-up", CreateNewUser);
router.post("/verify-user", verifyCredentials);
router.post("/login-user", fetchID, getUser);

module.exports = router;
