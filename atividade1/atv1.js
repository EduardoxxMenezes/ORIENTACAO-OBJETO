"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aluno = void 0;
var Aluno = /** @class */ (function () {
    function Aluno(matricula, nome, notaprova1, notaprova2, notatrabalho) {
        this.matricula = matricula;
        this.nome = nome;
        this.notaprova1 = notaprova1;
        this.notaprova2 = notaprova2;
        this.notatrabalho = notatrabalho;
    }
    Aluno.prototype.media = function () {
        var media = (this.notaprova1 + this.notaprova2) / 2;
        return media;
    };
    Aluno.prototype.final = function () {
        var media = (this.notaprova1 + this.notaprova2 + this.notatrabalho) / 3;
        return media;
    };
    return Aluno;
}());
exports.Aluno = Aluno;
var alunow = new Aluno(1, 'jefersom', 3, 5, 9);
console.log(alunow.media());
console.log(alunow.final);
