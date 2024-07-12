"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
var rl = require('readline-sync');
var Pessoa = /** @class */ (function () {
    function Pessoa(Nome, sobrenome, Nome_Do_Pai, Nome_Da_Mae, CPF, rg, nascimento, senha) {
        this.Nome = Nome;
        this.Sobrenome = sobrenome;
        this.Nome_Do_Pai = Nome_Do_Pai;
        this.Nome_Da_Mae = Nome_Da_Mae;
        this.Numero_CPF = CPF;
        this.Numero_RG = rg;
        this.Nascimento = nascimento;
        this.senha_do_cartao_de_credito = senha;
    }
    Pessoa.prototype.GetPessoa = function () {
        console.log("Cliente: ".concat(this.Nome, " \n sobrenome: ").concat(this.Sobrenome, " \n Nome do pai: ").concat(this.Nome_Do_Pai, " \n nome da m\u00E3e: ").concat(this.Nome_Da_Mae, " \n RG: ").concat(this.Numero_RG, " \n CPF: ").concat(this.Numero_CPF, " \n Nascimento: ").concat(this.Nascimento, " \n SENHA DO CART\u00C3O ").concat(this.senha_do_cartao_de_credito));
    };
    Pessoa.prototype.SetPessoa = function () {
        var NewIdade = rl.question("INSIRA SUA IDADE (Menores de idade devem inserir o nome de seus responsaveis legais.): \n");
        var NewNome = rl.question("INSIRA SEU NOME: \n");
        var NewSobrenome = rl.question("INSIRA SEU SOBRE NOME: \n");
        var NewPai = rl.question("INSIRA O NOME DE SEU PAI: \n");
        var NewMae = rl.question("INSIRA O NOME DE SUA MÃE: \n");
        var NewRG = rl.question("INSIRA SEU CPF: \n");
        var NewCPF = rl.question("INSIRA SEU RG: \n");
        var NewSenha = rl.question("INSIRA A SENHA DE SEU CARTÃO DE CRÉDITO: \n");
        this.Nome = NewNome;
        this.Sobrenome = NewSobrenome;
        this.Nascimento = NewIdade;
        this.Nome_Da_Mae = NewMae;
        this.Nome_Do_Pai = NewPai;
        this.Numero_CPF = NewCPF;
    };
    Pessoa.prototype.VerificaIdade = function () {
        if ((this.Nascimento - 2024) < 18) {
            console.log("Seus responsaveis legais s\u00E3o: ".concat(this.Nome_Da_Mae, ", ").concat(this.Nome_Do_Pai));
        }
        else {
            console.log("Você não precisa de seus responsaveis legais.");
        }
    };
    return Pessoa;
}());
exports.Pessoa = Pessoa;
