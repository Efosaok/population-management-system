"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var formaLocationData = function formaLocationData(data) {
  return _objectSpread({}, data, {
    totalPopulation: data.malePopulation + data.femalePopulation,
    sublocations: !data.sublocations ? null : data.sublocations.map(function (sublocation) {
      return _objectSpread({}, sublocation, {
        totalPopulation: sublocation.malePopulation + sublocation.femalePopulation
      });
    })
  });
};

var _default = formaLocationData;
exports.default = _default;