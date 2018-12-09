"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fetchCircuits = fetchCircuits;

var _isomorphicFetch = require("isomorphic-fetch");

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function fetchCircuits() {
    return (0, _isomorphicFetch2.default)("http://ergast.com/api/f1/2018/circuits.json").then(function (res) {
        return res.json();
    }).then(function (res) {
        return res.MRData.CircuitTable.Circuits;
    });
}