import Validator from 'validatorjs';

const errorMessages = {
  required: 'this field is required',
  alpha: 'this field can only be alphabets',
  email: 'your email is not valid',
  min: 'this field should be at least eight characters long',
  alpha_num: 'this field should contain alphabets and numbers',
  numeric: 'this field can only be numeric characters',
  string: 'this field should be a string',
  url: 'the url parsed is not valid',
  array: 'this field should be an array',
};

const validateRequestBody = (req, res, next, rule) => {
  const validation = new Validator(req.body, rule, errorMessages);
  if (validation.passes()) {
    return next();
  }
  const errors = validation.errors.all();
  return res.status(400).json({
    message: 'Invalid Credentials',
    errors,
  });
};

export const validateLocationCreation = (req, res, next) => {
  const rule = {
    name: 'required|string',
    malePopulation: 'required|numeric',
    femalePopulation: 'required|numeric',
    sublocations: 'array',
  };

  return validateRequestBody(req, res, next, rule);
};

export const validateUpdateLocation = (req, res, next) => {
  const rule = {
    name: 'string',
    malePopulation: 'numeric',
    femalePopulation: 'numeric',
    sublocations: 'array',
  };

  return validateRequestBody(req, res, next, rule);
};
