"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Home = require("./components/Home");

var _Home2 = _interopRequireDefault(_Home);

var _About = require("./components/About");

var _About2 = _interopRequireDefault(_About);

var _Contact = require("./components/Contact");

var _Contact2 = _interopRequireDefault(_Contact);

var _Secret = require("./components/Secret");

var _Secret2 = _interopRequireDefault(_Secret);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [{
    path: "/",
    component: _Home2.default,
    exact: true
}, {
    path: "/about",
    component: _About2.default,
    exact: true
}, {
    path: "/contact",
    component: _Contact2.default,
    exact: true
}, {
    path: "/secret",
    component: _Secret2.default,
    exact: true
}];