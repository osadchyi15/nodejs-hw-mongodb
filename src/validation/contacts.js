import Joi from 'joi';

export const createContactsSchema = Joi.object({
  name: Joi.string().min(3).max(30).required().messages({
    'string.base': 'Username should be a string',
    'string.min': 'Username should have at least 3 characters',
    'string.max': 'Username should have at most 30 characters',
    'any.required': 'Username is required',
  }),
  phoneNumber: Joi.string()
    .regex(/^[0-9]{3}-[0-9]{4}$/)
    .required()
    .messages({
      'string.base': 'Phone number should be contain "+" and numbers',
      'object.regex': 'Phone number must contain 12 characters',
      'any.required': 'Username is required',
    }),
  email: Joi.string().email().trim(true).messages({
    'string.email': '"email" must be a valid email address',
  }),
  isFavourite: Joi.boolean().messages({
    'boolean.base': 'true or false',
  }),
  contactType: Joi.string()
    .valid('work', 'home', 'personal')
    .required()
    .messages({
      'string.valid': 'Contact type should be "work", "home" or "personal"',
    }),
});
