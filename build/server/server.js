"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _server = require("react-dom/server");

var _reactRouterDom = require("react-router-dom");

var _reactRedux = require("react-redux");

var _reactHelmet = require("react-helmet");

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _routes = require("./routes");

var _routes2 = _interopRequireDefault(_routes);

var _Layout = require("./components/Layout");

var _Layout2 = _interopRequireDefault(_Layout);

var _store = require("./store");

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use(_express2.default.static(_path2.default.resolve(__dirname, "../dist")));

app.get("/*", function (req, res) {
    var context = {};
    var store = (0, _store2.default)();

    store.dispatch((0, _store.initializeSession)());

    var dataRequirements = _routes2.default.filter(function (route) {
        return (0, _reactRouterDom.matchPath)(req.url, route);
    }) // filter matching paths
    .map(function (route) {
        return route.component;
    }) // map to components
    .filter(function (comp) {
        return comp.serverFetch;
    }) // check if components have data requirement
    .map(function (comp) {
        return store.dispatch(comp.serverFetch());
    }); // dispatch data requirement

    Promise.all(dataRequirements).then(function () {
        var jsx = _react2.default.createElement(
            _reactRedux.Provider,
            { store: store },
            _react2.default.createElement(
                _reactRouterDom.StaticRouter,
                { context: context, location: req.url },
                _react2.default.createElement(_Layout2.default, null)
            )
        );
        var reactDom = (0, _server.renderToString)(jsx);
        var reduxState = store.getState();
        var helmetData = _reactHelmet2.default.renderStatic();

        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(htmlTemplate(reactDom, reduxState, helmetData));
    });
});

app.listen(2048);

function htmlTemplate(reactDom, reduxState, helmetData) {
    return "\n        <!DOCTYPE html>\n        <html>\n        <head>\n            <meta charset=\"utf-8\">\n            " + helmetData.title.toString() + "\n            " + helmetData.meta.toString() + "\n            <title>React SSR</title>\n        </head>\n        \n        <body>\n            <div id=\"app\">" + reactDom + "</div>\n            <script>\n                window.REDUX_DATA = " + JSON.stringify(reduxState) + "\n            </script>\n            <script src=\"./app.bundle.js\"></script>\n        </body>\n        </html>\n    ";
}