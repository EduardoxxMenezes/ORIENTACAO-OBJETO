"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carro = void 0;
var rl = require('readline-sync');
var Carro = /** @class */ (function () {
    function Carro(Gasolina, Marca, KML, nome) {
        this.Gasolina = Gasolina;
        this.Marca = Marca;
        this.KML = KML;
        this.nome = nome;
    }
    Carro.prototype.GetCarro = function () {
        console.log("O carro \u00E9 um ".concat(this.nome, " da marca ").concat(this.Marca, " \n ainda tem ").concat(this.Gasolina, " litros de gasolina e consome ").concat(this.KML, " litros por kilom\u00EAtros."));
    };
    Carro.prototype.SetCarro = function () {
        var NewNome = rl.question("Qual o carro?");
        var NewGasolina = rl.questionInt("Quantos litros de gasolina seu carro tem?");
        var NewMarca = rl.question("Qual a marca de seu carro?");
        var newKML = rl.questionInt("Quantos litros se vão por kilometro?");
        this.Marca = NewMarca;
        this.Gasolina = NewGasolina;
        this.KML = newKML;
    };
    Carro.prototype.Dirigir = function (distancia) {
        var calculo = this.Gasolina - (this.KML / distancia);
        if (calculo < 0) {
            console.log("Encha o tanque primeiro");
        }
        else {
            console.log("Voc\u00EA andou ".concat(distancia, " kilometros, restam ").concat(this.Gasolina, " li3tros de gasolina."));
        }
    };
    Carro.prototype.ObterGasolina = function () {
        var frase = "o seu carro tem ".concat(this.Gasolina, " litros de gasolina restante");
        return frase;
    };
    Carro.prototype.AdicionarGasolina = function () {
        var ADDGasolina = rl.questionInt("Quantos litros de gasolina deseja adicionar?");
        this.Gasolina = this.Gasolina + ADDGasolina;
    };
    return Carro;
}());
exports.Carro = Carro;
