import Joi from "joi";

const userValidationSchema=Joi.object({
    id: Joi.string()
    .required()
    .messages({
      'string.base': 'ID should be a type of text',
      'string.empty': 'ID cannot be an empty field',
      'any.required': 'ID is a required field'
    }),
  password: Joi.string()
    .required()
    .messages({
      'string.base': 'Password should be a type of text',
      'string.empty': 'Password cannot be an empty field',
      'any.required': 'Password is a required field'
    }),
  needsPasswordChange: Joi.boolean()
    .required()
    .messages({
      'boolean.base': 'NeedsPasswordChange should be a boolean value',
      'any.required': 'NeedsPasswordChange is a required field'
    }),
  role: Joi.string()
    .valid('admin', 'student', 'faculty')
    .required()
    .messages({
      'string.base': 'Role should be a type of text',
      'any.only': 'Role must be one of admin, student, or faculty',
      'any.required': 'Role is a required field'
    }),
  status: Joi.string()
    .valid('in-progress', 'blocked')
    .required()
    .messages({
      'string.base': 'Status should be a type of text',
      'any.only': 'Status must be one of in-progress or blocked',
      'any.required': 'Status is a required field'
    }),
  isDeleted: Joi.boolean()
    .required()
    .messages({
      'boolean.base': 'IsDeleted should be a boolean value',
      'any.required': 'IsDeleted is a required field'
    })
})

export default userValidationSchema