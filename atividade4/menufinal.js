"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.alunos = void 0;
var ATVFINAL_1 = require("./ATVFINAL");
var ATVFINAL_2 = require("./ATVFINAL");
var rl = require('readline-sync');
var alunos = /** @class */ (function () {
    function alunos(nome, idade, nomeDaMatricula) {
        this.nome = nome;
        this.idade = idade;
        this.nomeDaMatricula = nomeDaMatricula;
    }
    return alunos;
}());
exports.alunos = alunos;
var menu = true;
var gabe = new ATVFINAL_2.Gabarito([]);
var atividade = new ATVFINAL_1.Prova(gabe);
while (menu) {
    console.log("\n        ESCOLHA\n        1- Construir o Gabarito.\n        2- Receber As Respostas.\n        3- Contabilizar Acertos.\n        4- Verificar Nota.\n        5- Cadastrar Aluno.\n        0- Sair.\n    ");
    var escolha = rl.questionInt("ESCOLHA: \n");
    switch (escolha) {
        case 1:
            for (var i = 0; i < 16; i++) {
                gabe.resposta[i] = rl.question("Insira a resposta da questao ".concat(i));
            }
            break;
        case 2:
            console.log("O gabarito \u00E9: ".concat(gabe.resposta));
            break;
        case 3:
            var respostas = void 0;
            for (var i = 0; i < 16; i++) {
                respostas[i] = rl.question("Insira suas respostas");
            }
            atividade.respostaAluno(respostas);
            break;
        case 4:
            console.log("Você acertou: ", atividade.acertos(), "questões!");
            break;
        case 5:
            var nome = rl.question("Insira seu nome. \n");
            var idade = rl.questionInt("Insira sua idade. \n");
            var nomeDeMatricula = rl.question("Insira o nome de matricula. \n");
            var alunow = new alunos(nome, idade, nomeDeMatricula);
            break;
        case 0:
            menu = false;
            break;
        default:
            console.log("Opção não reconhecida.");
            break;
    }
}
