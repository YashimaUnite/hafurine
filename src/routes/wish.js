"use strict";
exports.__esModule = true;
exports.wishesRouter = void 0;
var express_1 = require("express");
var wishesRouter = function () {
    var router = (0, express_1.Router)();
    router.get('/new', function (req, res) {
    });
    router.get('/delete', function (req, res) {
    });
    router.get('/list', function (req, res) {
    });
    return router;
};
exports.wishesRouter = wishesRouter;
