"use strict";
exports.__esModule = true;
var express_1 = require("express");
var cors_1 = require("cors");
var routes_1 = require("./routes");
var data_source_1 = require("./data-source");
data_source_1.AppDataSource.initialize().then(function () {
    var app = (0, express_1["default"])();
    app.use((0, cors_1["default"])());
    app.use(express_1["default"].urlencoded({ extended: true }));
    var port = 3000;
    app.use('/', (0, routes_1.createRouter)());
    app.listen(port, function () {
        console.log("Listening at http://localhost:".concat(port, "/"));
    });
})["catch"](function (error) {
    console.log("".concat(error));
});
