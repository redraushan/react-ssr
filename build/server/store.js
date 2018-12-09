"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fetchData = exports.initializeSession = undefined;

var _redux = require("redux");

var _reduxThunk = require("redux-thunk");

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _api = require("./api");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initializeSession = exports.initializeSession = function initializeSession() {
    return {
        type: "INITIALIZE_SESSION"
    };
};

var storeData = function storeData(data) {
    return {
        type: "STORE_DATA",
        data: data
    };
};

var fetchData = exports.fetchData = function fetchData() {
    return function (dispatch) {
        return (0, _api.fetchCircuits)().then(function (res) {
            return dispatch(storeData(res));
        });
    };
};

var sessionReducer = function sessionReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var action = arguments[1];

    switch (action.type) {
        case "INITIALIZE_SESSION":
            return true;
        default:
            return state;
    }
};

var dataReducer = function dataReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments[1];

    switch (action.type) {
        case "STORE_DATA":
            return action.data;
        default:
            return state;
    }
};

var reducer = (0, _redux.combineReducers)({
    loggedIn: sessionReducer,
    data: dataReducer
});

exports.default = function (initialState) {
    return (0, _redux.createStore)(reducer, initialState, (0, _redux.applyMiddleware)(_reduxThunk2.default));
};