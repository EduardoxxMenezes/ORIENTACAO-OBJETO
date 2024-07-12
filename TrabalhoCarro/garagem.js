"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Garagem = void 0;
var rl = require('readline-sync');
var Garagem = /** @class */ (function () {
    function Garagem() {
        this.carro = [];
    }
    Garagem.prototype.ListarCarros = function () {
        for (var _i = 0, _a = this.carro; _i < _a.length; _i++) {
            var a = _a[_i];
            a.GetCarro();
        }
    };
    Garagem.prototype.AdicionarCarro = function (carro2) {
        var a = this.carro.length;
        if (a < 10) {
            this.carro.push(carro2);
        }
        else {
            this.carro.splice(0, 1);
            this.carro.push(carro2);
        }
    };
    Garagem.prototype.RemoverCarro = function (carro3) {
        var lugar = 0;
        for (var _i = 0, _a = this.carro; _i < _a.length; _i++) {
            var a = _a[_i];
            if (a == carro3) {
                this.carro.splice(lugar, 1);
            }
            lugar += 1;
        }
    };
    return Garagem;
}());
exports.Garagem = Garagem;
