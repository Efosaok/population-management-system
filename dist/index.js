"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("idempotent-babel-polyfill");

var _mongoose = _interopRequireDefault(require("mongoose"));

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _winston = _interopRequireDefault(require("winston"));

var _swaggerUiExpress = _interopRequireDefault(require("swagger-ui-express"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _routes = _interopRequireDefault(require("./routes"));

var _swagger = _interopRequireDefault(require("../swagger.json"));

var _config = _interopRequireDefault(require("./config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

_dotenv.default.config();

var databaseUrl = _config.default.databaseUrl,
    env = _config.default.env;
var app = (0, _express.default)();
var port = process.env.PORT || 1298;

var swaggerDocument = _objectSpread({}, _swagger.default, {
  host: process.env.NODE_ENV === 'production' ? 'pms-efosa.herokuapp.com' : "localhost:".concat(port)
});

if (env !== 'test') {
  _mongoose.default.set('useCreateIndex', true);

  _mongoose.default.connect(databaseUrl, {
    useNewUrlParser: true
  });
}

app.use(_bodyParser.default.raw());
app.use(_bodyParser.default.json());
app.use(_bodyParser.default.urlencoded({
  extended: false
}));
app.use('/api-docs', _swaggerUiExpress.default.serve, _swaggerUiExpress.default.setup(swaggerDocument));
(0, _routes.default)(app);
app.get('/', function (req, res) {
  return res.status(200).send({
    message: 'welcome to the population-management api'
  });
});
app.all('*', function (req, res) {
  return res.status(200).send({
    message: 'oops, seems like you hit the wrong endpoint'
  });
});

var logger = _winston.default.createLogger({
  transports: [new _winston.default.transports.Console(), new _winston.default.transports.File({
    filename: 'combined.log'
  })]
});

app.listen(port, function () {
  return logger.info("API running on PORT ".concat(port));
});
var _default = app;
exports.default = _default;