"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var calculateTotal = function calculateTotal(locations, property) {
  var add = function add(accumulator, digit) {
    return accumulator + digit;
  };

  var totalPrice = locations.map(function (item) {
    return item[property];
  }).reduce(add);
  return totalPrice;
};

var _default = calculateTotal;
exports.default = _default;