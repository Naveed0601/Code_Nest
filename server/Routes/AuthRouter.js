const express = require("express");
const {
  signupValidation,
  loginValidation,
} = require("../middleware/AuthValidation");
const { signup, login } = require("../controllers/AuthController");
const {
  forget_password,
  reset_password,
} = require("../controllers/PasswordController");
const router = express.Router();

router.post("/login", loginValidation, login);

router.post("/signup", signupValidation, signup);

router.post("/forget-password", forget_password);
router.post("/reset-password/:token", reset_password);

module.exports = router;
