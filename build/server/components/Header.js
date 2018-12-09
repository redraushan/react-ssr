"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require("react-router-dom");

var _reactRedux = require("react-redux");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header(_ref) {
    var loggedIn = _ref.loggedIn;
    return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
            _reactRouterDom.Link,
            { to: "/" },
            "Home"
        ),
        _react2.default.createElement(
            _reactRouterDom.Link,
            { to: "/about" },
            "About"
        ),
        _react2.default.createElement(
            _reactRouterDom.Link,
            { to: "/contact" },
            "Contact"
        ),
        loggedIn && _react2.default.createElement(
            _reactRouterDom.Link,
            { to: "/secret" },
            "Secret"
        )
    );
};

var mapStateToProps = function mapStateToProps(state) {
    return {
        loggedIn: state.loggedIn
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Header);