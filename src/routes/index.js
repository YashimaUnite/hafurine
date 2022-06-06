"use strict";
exports.__esModule = true;
exports.createRouter = void 0;
var express_1 = require("express");
var wish_1 = require("./wish");
var createRouter = function () {
    var router = (0, express_1.Router)();
    router.use('/wish', (0, wish_1.wishesRouter)());
    return router;
};
exports.createRouter = createRouter;
