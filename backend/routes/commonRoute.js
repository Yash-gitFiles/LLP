const express = require("express");
const {
  signUpController,
  loginController,
} = require("../controller/userController");

const router = express.Router();

router.post("/", signUpController);
router.post("/login", loginController);

module.exports = router;
