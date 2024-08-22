"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var atv3_1 = require("./atv3");
var atv2_1 = require("../atividade2/atv2");
var rl = require('readline-sync');
var menu = true;
var datas = new atv2_1.Data(11, 9, 2001);
var NovoVôo = new atv3_1.voo('1A 79', datas);
var ocupados = 0;
while (menu) {
    console.log("\n        ESCOLHA:\n        1- Cadastrar passageiro;\n        2- Verificar Pr\u00F3xima Cadeira Livre;\n        3- Verificar cadeira;\n        4- Ocupar Cadeira;\n        5- Verificar Vagas;\n        6- Verificar V\u00F4o;\n        7- Verificar Data Do V\u00F4o;\n        0- Sair;\n\n    ");
    var escolha = rl.questionInt("ESCOLHA: \n");
    switch (escolha) {
        case 1:
            var nome = rl.question("Insira seu nome completo: \n");
            var idade = rl.questionInt("Insira sua idade");
            var genero = rl.question("Insira seu genero");
            break;
        case 2:
            console.log("foi");
            if (NovoVôo.proximoliver() == 0) {
                console.log("Não há cadeiras livres.");
            }
            else {
                console.log("o pr\u00F3ximo lugar ocupado \u00E9 o n\u00FAmero : ".concat(NovoVôo.proximoliver()));
            }
            break;
        case 3:
            var cadeira = rl.questionInt("Insira o número da cadeira. \n");
            if (NovoVôo.verifica(cadeira) == true) {
                console.log("A cadeira está ocupada.");
            }
            else {
                console.log("A cadeira está livre.");
            }
            break;
        case 4:
            var cadeira2 = rl.questionInt("Insira o número da cadeira. \n");
            if (NovoVôo.ocupa(cadeira2) == false) {
                console.log("Este assento não pode ser ocupado.");
            }
            else {
                console.log("assento ocupado com sucesso.");
                ocupados += 1;
            }
            break;
        case 5:
            console.log("Há ", NovoVôo.vagas() - ocupados, " Vagas disponiveis neste vôo");
            break;
        case 6:
            console.log(NovoVôo.getvoo());
            break;
        case 7:
            console.log(NovoVôo.getdata());
            break;
        case 0:
            console.log("Fechando...");
            menu = false;
            break;
        default:
            console.log("Opção não reconhecida.");
            break;
    }
}
