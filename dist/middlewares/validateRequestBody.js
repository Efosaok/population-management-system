"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateUpdateLocation = exports.validateLocationCreation = void 0;

var _validatorjs = _interopRequireDefault(require("validatorjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var errorMessages = {
  required: 'this field is required',
  alpha: 'this field can only be alphabets',
  email: 'your email is not valid',
  min: 'this field should be at least eight characters long',
  alpha_num: 'this field should contain alphabets and numbers',
  numeric: 'this field can only be numeric characters',
  string: 'this field should be a string',
  url: 'the url parsed is not valid',
  array: 'this field should be an array'
};

var validateRequestBody = function validateRequestBody(req, res, next, rule) {
  var validation = new _validatorjs.default(req.body, rule, errorMessages);

  if (validation.passes()) {
    return next();
  }

  var errors = validation.errors.all();
  return res.status(400).json({
    message: 'Invalid Credentials',
    errors: errors
  });
};

var validateLocationCreation = function validateLocationCreation(req, res, next) {
  var rule = {
    name: 'required|string',
    malePopulation: 'required|numeric',
    femalePopulation: 'required|numeric',
    sublocations: 'array'
  };
  return validateRequestBody(req, res, next, rule);
};

exports.validateLocationCreation = validateLocationCreation;

var validateUpdateLocation = function validateUpdateLocation(req, res, next) {
  var rule = {
    name: 'string',
    malePopulation: 'numeric',
    femalePopulation: 'numeric',
    sublocations: 'array'
  };
  return validateRequestBody(req, res, next, rule);
};

exports.validateUpdateLocation = validateUpdateLocation;