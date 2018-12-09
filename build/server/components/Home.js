"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require("react-redux");

var _store = require("../store");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_React$Component) {
    _inherits(Home, _React$Component);

    function Home() {
        _classCallCheck(this, Home);

        return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
    }

    _createClass(Home, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            if (this.props.circuits.length <= 0) {
                this.props.fetchData();
            }
        }
    }, {
        key: "render",
        value: function render() {
            var circuits = this.props.circuits;


            return _react2.default.createElement(
                "div",
                { className: "home" },
                _react2.default.createElement(
                    "h2",
                    null,
                    "F1 2018 Season Calendar"
                ),
                _react2.default.createElement(
                    "ul",
                    null,
                    circuits.map(function (_ref) {
                        var circuitId = _ref.circuitId,
                            circuitName = _ref.circuitName,
                            Location = _ref.Location;
                        return _react2.default.createElement(
                            "li",
                            { key: circuitId },
                            circuitName,
                            " - ",
                            Location.locality,
                            ", ",
                            Location.country
                        );
                    })
                )
            );
        }
    }]);

    return Home;
}(_react2.default.Component);

Home.serverFetch = _store.fetchData; // static declaration of data requirements

var mapStateToProps = function mapStateToProps(state) {
    return {
        circuits: state.data
    };
};

var mapDispatchToProps = {
    fetchData: _store.fetchData
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Home);