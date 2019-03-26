"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Location = _interopRequireDefault(require("../controllers/Location"));

var _validateRequestBody = require("../middlewares/validateRequestBody");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createLocation = _Location.default.createLocation,
    updateLocation = _Location.default.updateLocation,
    fetchAllLocations = _Location.default.fetchAllLocations,
    fetchALocation = _Location.default.fetchALocation,
    deleteLocation = _Location.default.deleteLocation;

var _default = function _default(app) {
  app.route('/api/v1/location').post(_validateRequestBody.validateLocationCreation, createLocation).get(fetchAllLocations);
  app.route('/api/v1/location/:id').put(_validateRequestBody.validateUpdateLocation, updateLocation).delete(deleteLocation).get(fetchALocation);
};

exports.default = _default;