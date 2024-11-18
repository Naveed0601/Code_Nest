const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const UserModel = require("../models/User");

const signup = async (req, res) => {
  try {
    const { name, phone, email, password } = req.body;
    const user = await UserModel.findOne({
      email,
    });
    if (user) {
      return res.status(409).json({
        message: "User is already exist, you can login",
        success: false,
      });
    }
    const userModel = new UserModel({ name, phone, email, password });
    userModel.password = await bcrypt.hash(password, 10);
    await userModel.save();
    res.status(201).json({ message: "Signup successfully ", success: true });
  } catch (error) {
    res.status(500).json({ message: "Interval server error", success: false  , error: error });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const errorMsg = "Auth Failed: email or password is incorrect";

    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(403).json({ errorMsg, success: false });
    }

    const isPassEqual = await bcrypt.compare(password, user.password);
    if (!isPassEqual) {
      return res.status(403).json({ errorMsg, success: false });
    }

    const jwtToken = jwt.sign(
      { email: user.email, _id: user._id },
      process.env.JWT_TOKEN,
      { expiresIn: "24h" }
    );

    res.status(200).json({
      message: "Login Success",
      success: true,
      jwtToken,
      email,
      name: user.name,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", success: false });
  }
};

module.exports = { signup, login };
