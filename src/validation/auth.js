import Joi from 'joi';

// Validation schema for users registration
export const registerUserSchema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

// \Validation schema for user login
export const loginUserSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

// Validation schema for reset password email
export const requestResetEmailSchema = Joi.object({
  email: Joi.string().email().required(),
});

// Validation schema for password fore reset
export const resetPasswordSchema = Joi.object({
  password: Joi.string().required(),
  token: Joi.string().required(),
});
