"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _schemaObject = _interopRequireDefault(require("./schemaObject"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose.default.Schema;
var sublocationSchema = new Schema(_schemaObject.default);
var _default = sublocationSchema;
exports.default = _default;