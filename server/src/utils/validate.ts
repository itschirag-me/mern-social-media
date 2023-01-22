import Joi from 'joi';

export const userSchema = Joi.object({
  name: Joi.string()
    .regex(/^[a-zA-Z ]*$/, 'Provided invalid name')
    .required(),
  email: Joi.string().email().required(),
  contactNumber: Joi.string()
    .regex(
      /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
      'Provided invalid contact number'
    )
    .required(),
  password: Joi.string().min(8).max(20).required(),
  address: Joi.object({
    addressLineOne: Joi.string().required(),
    addressLineTwo: Joi.string(),
    city: Joi.string().required(),
    state: Joi.string().required(),
    country: Joi.string().required(),
    pincode: Joi.number().min(6).max(6).required(),
  }),
  isVerified: Joi.boolean(),
});

export const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).max(20).required(),
});
