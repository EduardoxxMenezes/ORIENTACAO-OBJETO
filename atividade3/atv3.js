"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.voo = void 0;
var atv2_1 = require("../atividade2/atv2");
var voo = /** @class */ (function () {
    function voo(numerovoo, data) {
        this.numerovoo = numerovoo;
        this.data = data;
        this.lugare = Array(100).fill(false);
    }
    voo.prototype.proximoliver = function () {
        var a;
        for (var i = 0; i < this.lugare.length; i++) {
            if (!this.lugare[i]) {
                a = i;
            }
        }
        return a;
    };
    voo.prototype.verifica = function (cadeira) {
        if (cadeira < 0 || cadeira >= this.lugare.length) {
            throw new Error("Numero invalido");
        }
        return this.lugare[cadeira];
    };
    voo.prototype.ocupa = function (cadeira) {
        if (cadeira < 0 || cadeira >= this.lugare.length) {
            throw new Error("Numero invalido");
        }
        if (this.lugare[cadeira]) {
            return false;
        }
        else {
            return true;
        }
    };
    voo.prototype.vagas = function () {
        return this.lugare.filter(function (lugar) { return !lugar; }).length;
    };
    voo.prototype.getvoo = function () {
        return "O voo \u00E9 do n\u00FAmero ".concat(this.numerovoo);
    };
    voo.prototype.getdata = function () {
        return this.data;
    };
    voo.prototype.clone = function () {
        var newvoo = new voo("quatorze", new atv2_1.Data(22, 12, 2004));
        return newvoo;
    };
    return voo;
}());
exports.voo = voo;
var Desgraca = new voo("jefersom", new atv2_1.Data(22, 8, 2013));
Desgraca.clone();
Desgraca.getdata();
Desgraca.getvoo();
Desgraca.ocupa(24);
Desgraca.proximoliver();
Desgraca.vagas();
Desgraca.verifica(36);
