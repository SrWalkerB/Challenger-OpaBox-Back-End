"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var challenger_Service_1 = __importDefault(require("../services/challenger_Service"));
exports.default = new /** @class */ (function () {
    function Challenger_Controllers() {
    }
    Challenger_Controllers.prototype.challenger_01 = function (Request, Response) {
        try {
            var lista = Request.body.lista;
            var result = challenger_Service_1.default.challenger_01_Service({
                lista: {
                    salaN: lista.salaN,
                    salaS: lista.salaS
                }
            });
            return Response.status(200).json(result);
        }
        catch (error) {
            console.log(error);
            return Response.status(500).json({ err: error });
        }
    };
    Challenger_Controllers.prototype.challenger_02 = function (Request, Response) {
        try {
            var _a = Request.body, intervaloA = _a.intervaloA, intervaloB = _a.intervaloB;
            var result = challenger_Service_1.default.challenger_02_Service({
                intervaloA: intervaloA,
                intervaloB: intervaloB
            });
            return Response.status(200).json({ msg: result });
        }
        catch (error) {
            console.log(error);
            return Response.status(500).json({ err: error });
        }
    };
    return Challenger_Controllers;
}());
