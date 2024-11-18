const Joi = require("joi");

const signupValidation = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(100).required(),
    email: Joi.string().email().min(4).max(100).required(),
    phone: Joi.string()
      .pattern(/^\d{10,15}$/)
      .required()
      .messages({
        "string.pattern.base": "Phone number should be 10 to 15 digits",
      }),
    password: Joi.string().min(4).max(100).required(),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: "Bad Request", error });
  }
  next();
};

const loginValidation = (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string().email().min(4).max(100).required(),
    password: Joi.string().min(4).max(12).required(),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(403).json({ message: "Bad Request", error });
  }
  next();
};

module.exports = { signupValidation, loginValidation };
