const crypto = require("crypto");
const nodemailer = require("nodemailer");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const forget_password = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const token = crypto.randomBytes(32).toString("hex");
    const hashedToken = await bcrypt.hash(token, 10);

    user.resetToken = hashedToken;
    user.resetTokenExpiration = Date.now() + 3600000;
    await user.save();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.email,
        pass: process.env.app_password,
      },
    });

    const mailOptions = {
      from: "your-email@gmail.com",
      to: user.email,
      subject: "Password Reset Request",
      text: `You requested a password reset. Click here to reset your password: http://localhost:3000/resetpassword/${token}`,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Password reset email sent" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

const reset_password = async (req, res) => {
  const { token } = req.params;
  const { password } = req.body;

  console.log({ token, password });

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_TOKEN); 

    const user = await User.findOne({ email: decodedToken.email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (user.resetTokenExpiration < Date.now()) {
      return res.status(400).json({ message: "Token is expired" });
    }

    user.password = await bcrypt.hash(password, 10);
    user.resetToken = undefined;
    user.resetTokenExpiration = undefined;

    await user.save();
    res.status(200).json({ message: "Password has been reset successfully" });
  } catch (error) {
    console.error("Error occurred:", error.message);
    res.status(500).json({ message: "Invalid token or server error" });
  }
};


module.exports = { forget_password, reset_password };
