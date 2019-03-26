"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Location = _interopRequireDefault(require("../models/Location"));

var _calculateTotal = _interopRequireDefault(require("../helpers/calculateTotal"));

var _formatLocationData = _interopRequireDefault(require("../helpers/formatLocationData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 *
 *
 * @class Location
 */
var Location =
/*#__PURE__*/
function () {
  function Location() {
    _classCallCheck(this, Location);
  }

  _createClass(Location, null, [{
    key: "createLocation",
    value: function () {
      var _createLocation = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(_ref, res) {
        var body, formattedLocationData, newLocation;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                body = _ref.body;
                _context.prev = 1;
                formattedLocationData = (0, _formatLocationData.default)(body);
                _context.next = 5;
                return _Location.default.create(formattedLocationData);

              case 5:
                newLocation = _context.sent;
                return _context.abrupt("return", res.status(201).json({
                  message: 'new location created',
                  newLocation: newLocation
                }));

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](1);
                return _context.abrupt("return", res.status(500).json({
                  message: 'an error occured',
                  error: _context.t0.message
                }));

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 9]]);
      }));

      function createLocation(_x, _x2) {
        return _createLocation.apply(this, arguments);
      }

      return createLocation;
    }()
  }, {
    key: "fetchAllLocations",
    value: function () {
      var _fetchAllLocations = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(req, res) {
        var allLocations, totalMales, totalFemales, totalPopulation;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _Location.default.find();

              case 3:
                allLocations = _context2.sent;

                if (!(allLocations.length === 0)) {
                  _context2.next = 6;
                  break;
                }

                return _context2.abrupt("return", res.status(404).json({
                  message: 'no location found'
                }));

              case 6:
                totalMales = (0, _calculateTotal.default)(allLocations, 'malePopulation');
                totalFemales = (0, _calculateTotal.default)(allLocations, 'femalePopulation');
                totalPopulation = totalFemales + totalMales;
                return _context2.abrupt("return", res.status(200).json({
                  message: 'all locations fetched',
                  allLocations: allLocations,
                  totalFemales: totalFemales,
                  totalMales: totalMales,
                  totalPopulation: totalPopulation
                }));

              case 12:
                _context2.prev = 12;
                _context2.t0 = _context2["catch"](0);
                return _context2.abrupt("return", res.status(500).json({
                  message: 'an error occured',
                  error: _context2.t0.message
                }));

              case 15:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 12]]);
      }));

      function fetchAllLocations(_x3, _x4) {
        return _fetchAllLocations.apply(this, arguments);
      }

      return fetchAllLocations;
    }()
  }, {
    key: "fetchALocation",
    value: function () {
      var _fetchALocation = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(_ref2, res) {
        var id, singleLocation;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                id = _ref2.params.id;
                _context3.prev = 1;
                _context3.next = 4;
                return _Location.default.findById(id);

              case 4:
                singleLocation = _context3.sent;

                if (singleLocation) {
                  _context3.next = 7;
                  break;
                }

                return _context3.abrupt("return", res.status(404).json({
                  message: 'location specified not found'
                }));

              case 7:
                return _context3.abrupt("return", res.status(200).json({
                  message: 'location found',
                  singleLocation: singleLocation
                }));

              case 10:
                _context3.prev = 10;
                _context3.t0 = _context3["catch"](1);
                return _context3.abrupt("return", res.status(500).json({
                  message: 'an error occured',
                  error: _context3.t0.message
                }));

              case 13:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[1, 10]]);
      }));

      function fetchALocation(_x5, _x6) {
        return _fetchALocation.apply(this, arguments);
      }

      return fetchALocation;
    }()
  }, {
    key: "updateLocation",
    value: function () {
      var _updateLocation = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4(_ref3, res) {
        var id, body, updatedLocation;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                id = _ref3.params.id, body = _ref3.body;
                _context4.prev = 1;
                _context4.next = 4;
                return _Location.default.findByIdAndUpdate(id, _objectSpread({}, body), {
                  new: true
                });

              case 4:
                updatedLocation = _context4.sent;

                if (updatedLocation) {
                  _context4.next = 7;
                  break;
                }

                return _context4.abrupt("return", res.status(404).send({
                  message: 'specified location does not exist'
                }));

              case 7:
                return _context4.abrupt("return", res.status(200).send({
                  message: 'location successfully updated',
                  updatedLocation: updatedLocation
                }));

              case 10:
                _context4.prev = 10;
                _context4.t0 = _context4["catch"](1);
                return _context4.abrupt("return", res.status(500).send({
                  message: 'an error occured',
                  error: _context4.t0.message
                }));

              case 13:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[1, 10]]);
      }));

      function updateLocation(_x7, _x8) {
        return _updateLocation.apply(this, arguments);
      }

      return updateLocation;
    }()
  }, {
    key: "deleteLocation",
    value: function () {
      var _deleteLocation = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee5(_ref4, res) {
        var id;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                id = _ref4.params.id;
                _context5.prev = 1;
                _context5.next = 4;
                return _Location.default.findByIdAndDelete(id);

              case 4:
                return _context5.abrupt("return", res.status(200).send({
                  message: 'location successfully deleted'
                }));

              case 7:
                _context5.prev = 7;
                _context5.t0 = _context5["catch"](1);
                return _context5.abrupt("return", res.status(500).send({
                  message: 'an error occured',
                  error: _context5.t0.message
                }));

              case 10:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[1, 7]]);
      }));

      function deleteLocation(_x9, _x10) {
        return _deleteLocation.apply(this, arguments);
      }

      return deleteLocation;
    }()
  }]);

  return Location;
}();

var _default = Location;
exports.default = _default;