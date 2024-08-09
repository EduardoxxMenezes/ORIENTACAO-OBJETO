"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Prova = void 0;
var Gabarito = /** @class */ (function () {
    function Gabarito(resposta) {
        this.resposta = resposta;
    }
    return Gabarito;
}());
var Prova = /** @class */ (function () {
    function Prova(gabarito) {
        this.gabarito = gabarito;
        this.acertos2 = new Array(gabarito.resposta.length);
    }
    Prova.prototype.respostaAluno = function (resposta) {
        resposta = resposta.toUpperCase();
        var resposta2 = resposta.split(' ');
        for (var i = 0; i < this.gabarito.resposta.length; i++) {
            if (resposta2[i] === this.gabarito.resposta[i].toUpperCase()) {
                this.acertos2[i] = true;
            }
        }
    };
    Prova.prototype.acertos = function () {
        var acertou = 0;
        for (var i = 0; i < this.acertos2.length; i++) {
            if (this.acertos2[i] === true) {
                acertou += 1;
            }
        }
        return acertou;
    };
    Prova.prototype.nota = function () {
        var notafinal = 0;
        var valor;
        for (var i = 0; i < this.acertos2.length; i++) {
            if (i < 11) {
                valor = 0.5;
            }
            else if (i > 10) {
                valor = 1;
            }
            if (this.acertos2[i] === true) {
                notafinal += valor;
            }
        }
        return notafinal;
    };
    Prova.prototype.maior = function (outraProva) {
        if (outraProva.acertos() > this.acertos()) {
            return 1;
        }
        else if (outraProva.acertos() < this.acertos()) {
            return 2;
        }
        else {
            return -1;
        }
    };
    return Prova;
}());
exports.Prova = Prova;
var gab1 = new Gabarito(['A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A']);
var prov1 = new Prova(gab1);
var prov2 = new Prova(gab1);
prov1.respostaAluno('A B C D E A B C D E A B C D E');
console.log(prov1.acertos());
console.log(prov1.nota());
prov2.respostaAluno('A A A A A A A A A A A A A A A');
console.log(prov2.acertos());
console.log(prov2.nota());
console.log(prov1.maior(prov2));
