"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = require("react-helmet");

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Contact = function Contact() {
    return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
            "h2",
            null,
            "This is the contact page"
        ),
        _react2.default.createElement(
            _reactHelmet2.default,
            null,
            _react2.default.createElement(
                "title",
                null,
                "Contact Page"
            ),
            _react2.default.createElement("meta", { name: "description", content: "This is a proof of concept for React SSR" })
        )
    );
};

exports.default = Contact;