"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.produtos = void 0;
var readline = require('readline-sync');
var produtos = /** @class */ (function () {
    function produtos(nome, precoinicial, marca, precofinal, quantidadeMax) {
        this.nome = nome;
        this.precoInicial = precoinicial;
        this.marca = marca;
        this.precoFinal = precofinal;
        this.quantidadeMax;
    }
    produtos.prototype.lucro = function () {
        var precoTotal = this.precoFinal - this.precoInicial;
        console.log("O lucro do produto ser\u00E1: ".concat(precoTotal));
    };
    produtos.prototype.getProduto = function () {
        console.log("O produto \u00E9 um ".concat(this.nome, ", da marca ").concat(this.marca, ", o pre\u00E7o \u00E9: ").concat(this.precoFinal, " "));
    };
    produtos.prototype.setProduto = function () {
        this.nome = readline.question("Qual será o produto?");
        this.marca = readline.question("qual será a marca?");
        this.precoFinal = readline.questionInt("Qual o preço do produto?");
        this.precoInicial = readline.questionInt("Qual foi o valor que você comprou o produto inicialmente?");
        this.quantidadeMax = readline.questionInt("Quantos produtos haviam inicialmente no estoque");
    };
    return produtos;
}());
exports.produtos = produtos;
