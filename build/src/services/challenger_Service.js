"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Challeger_Service = /** @class */ (function () {
    function Challeger_Service() {
    }
    Challeger_Service.prototype.challenger_01_Service = function (data) {
        var sortSalaN = this.selectSort_Service(data.lista.salaN);
        var sortSalaS = this.selectSort_String_Service(data.lista.salaS);
        var listas = {
            salaN: sortSalaN,
            salaS: sortSalaS
        };
        return listas;
    };
    Challeger_Service.prototype.challenger_02_Service = function (data) {
        var result = this.interlace({
            intervaloA: data.intervaloA,
            intervaloB: data.intervaloB
        });
        return result;
    };
    Challeger_Service.prototype.selectSort_Service = function (data) {
        var n = data.length;
        for (var x = 0; x < n; x++) {
            var min = x;
            for (var i = x + 1; i < n; i++) {
                if (data[min] > data[i]) {
                    min = i;
                }
            }
            if (data[x] > data[min]) {
                var aux = data[x];
                data[x] = data[min];
                data[min] = aux;
            }
        }
        return data;
    };
    Challeger_Service.prototype.selectSort_String_Service = function (data) {
        return data.sort();
    };
    Challeger_Service.prototype.interlace = function (data) {
        var result = false;
        var n = data.intervaloA.length;
        for (var x = 0; x < n; x++) {
            for (var i = 0; i < 2; i++) {
                if (data.intervaloA[x] == data.intervaloB[i]) {
                    return result = true;
                }
            }
        }
        return result;
    };
    return Challeger_Service;
}());
exports.default = new Challeger_Service;
