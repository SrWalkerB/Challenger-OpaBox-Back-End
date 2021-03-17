"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var challenger_Controllers_1 = __importDefault(require("../controllers/challenger_Controllers"));
var challenger_Router = express_1.Router();
challenger_Router.post("/ordernaLista", challenger_Controllers_1.default.challenger_01);
challenger_Router.post("/interlace", challenger_Controllers_1.default.challenger_02);
exports.default = challenger_Router;
