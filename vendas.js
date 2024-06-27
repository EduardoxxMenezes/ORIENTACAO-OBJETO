"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.venda = void 0;
var readline = require('readline-sync');
var venda = /** @class */ (function () {
    function venda(produto, data, quantidadeVendida, cliente, pagamento, parcelado) {
        this.data = data;
        this.quantidadeVendida = quantidadeVendida;
        this.cliente = cliente;
        this.Pagamento = pagamento;
        this.parcelado = parcelado;
    }
    venda.prototype.getvenda = function () {
        console.log("O valor do  ".concat(this.produto.nome, ", foi: ").concat(this.produto.precoFinal, ", vendido em ").concat(this.data, ", foram vendidos ").concat(this.quantidadeVendida, ", e restam: ").concat(this.produto.quantidadeMax - this.quantidadeVendida, " disponiveis."));
    };
    venda.prototype.setvenda = function () {
        this.produto.setProduto();
        this.data = readline.question("Qual a data que ele foi vendido?");
        this.quantidadeVendida = readline.questionInt("Qual a quantidade já vendida?");
        this.parcelado = readline.question("Foi comprado parcelado?");
        this.Pagamento = readline.question("O cliente pagou em crédito ou débito?");
        this.cliente = readline.question("Qual o nome do cliente?");
    };
    venda.prototype.desconto = function () {
        var disc = (readline("Qual a porcentagem de desconto?") / 100);
        var discFinal = disc * this.produto.precoFinal;
        console.log("O valor final do produto com ".concat(disc, "% de disconto ser\u00E1 de ").concat(discFinal));
    };
    venda.prototype.Total = function () {
        var quanTotal = this.produto.precoFinal * this.quantidadeVendida;
        console.log("O valor total de ".concat(this.quantidadeVendida, " do produto: ").concat(this.produto, ", ser\u00E1: ").concat(quanTotal));
    };
    return venda;
}());
exports.venda = venda;
