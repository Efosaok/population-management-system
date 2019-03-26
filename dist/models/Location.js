"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("idempotent-babel-polyfill");

var _mongoose = _interopRequireDefault(require("mongoose"));

var _sublocationSchema = _interopRequireDefault(require("./sublocationSchema"));

var _schemaObject = _interopRequireDefault(require("./schemaObject"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Schema = _mongoose.default.Schema;
var locationSchema = new Schema(_objectSpread({}, _schemaObject.default, {
  sublocations: [_sublocationSchema.default]
}));

var Location = _mongoose.default.model('Location', locationSchema);

var _default = Location;
exports.default = _default;