const UserModel = require("../model/userModel");
const jwt = require("jsonwebtoken");

const signUpController = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const user = await UserModel.findOne({ email });
    if (user) {
      return res
        .status(409)
        .json({ message: "Email already exists", success: false });
    }
    const userModal = new UserModel({ name, email, password });
    await userModal.save();
    res.status(201).json({ message: "User registered", success: true });
  } catch (err) {
    res.status(500).json({ message: "Internal server error", success: false });
  }
};

async function loginController(req, res) {
  const { email, password } = req.body;

  try {
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(403).json({
        message: "Auth Failed email",
        success: false,
      });
    }
    if (password !== user.password) {
      return res.status(403).json({
        message: "password is wrong",
        success: false,
      });
    }

    const token = jwt.sign({ email: user.email, _id: user._id }, "Key", {
      expiresIn: "1d",
    });
    res.status(200).json({
      message: "Login Successful",
      success: true,
      token,
      email,
      name: user.name,
    });
  } catch (err) {
    res.status(500).json({ message: "internal server error", success: false });
  }
}
module.exports = {
  signUpController,
  loginController,
};
