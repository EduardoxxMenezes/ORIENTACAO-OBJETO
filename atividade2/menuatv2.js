"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var atv2_1 = require("./atv2");
var rl = require('readline-sync');
var menu = true;
var listaDatas = [new atv2_1.Data(0, 0, 0)];
while (menu) { // enquanto o "MENU" for TRUE ele vai repetir o menu dentro.
    console.log("\n        -------------\n        1- Criar Datas.\n        2- Comparar Datas.\n        3- Apresentar Dia/M\u00EAs/Ano.\n        4- Verificar se \u00E9 Bissexto.\n        5- Clonar Data.\n        0- SAIR.\n    ");
    var pergunta = rl.questionInt("RESPOSTA: \n"); //pergunta base do menu.
    switch (pergunta) {
        case 1: //cria uma nova data e insere em uma lista.
            var dia = rl.questionInt("INSIRA UM DIA: \n");
            var mes = rl.questionInt("INSIRA UM MES: \n");
            var ano = rl.questionInt("INSIRA UM ANO: \n");
            listaDatas.push(new atv2_1.Data(dia, mes, ano));
            console.log(listaDatas, '\n');
            break;
        case 2: //compara datas.
            if (listaDatas.length < 2) {
                throw new Error("DATAS NÃO REGISTRADAS. \n");
            }
            else { //verifica se a data foi criada
                console.log(listaDatas, '\n');
                var escolhaData = rl.questionInt("\n Escolha o número da data: \n");
                var escolhaData2 = rl.questionInt("\n Escolha a segunda data: \n");
                if (escolhaData > listaDatas.length - 1 || escolhaData2 > listaDatas.length - 1 || escolhaData < 0 || escolhaData2 < 0) {
                    throw new Error("DATA INVALIDA");
                }
                console.log(listaDatas[escolhaData - 1].compara(listaDatas[escolhaData2 - 1]));
            }
            break;
        case 3: //apresenta a data
            if (listaDatas.length == 0) {
                throw new Error("DATAS NÃO REGISTRADAS.\n");
            }
            else {
                console.log(listaDatas, '\n');
                var escolhaDatas = rl.questionInt("\n Escolha o número da data: \n");
                if (escolhaDatas > listaDatas.length - 1 || escolhaDatas < 0) {
                    throw new Error("DATA INVALIDA.");
                }
                console.log(listaDatas[escolhaDatas - 1].getdia, '/', listaDatas[escolhaDatas - 1].getmes, '/', listaDatas[escolhaDatas - 1].getano);
            }
            break;
        case 4: // testa se a data existe e se é bissexto.
            if (listaDatas.length == 0) {
                throw new Error("DATAS NÃO REGISTRADAS. \n");
            }
            else {
                var escolhaDatas = rl.questionInt("\n Escolha o número da data: \n");
                if (escolhaDatas > listaDatas.length - 1 || escolhaDatas < 0) {
                    throw new Error("DATA INVALIDA.");
                }
                if (listaDatas[escolhaDatas - 1].isbissexto() == true) {
                    console.log("O ano é bissexto.");
                }
                else {
                    console.log("O ano não é bissexto.");
                }
            }
            break;
        case 5: // clona uma data especifica.
            if (listaDatas.length == 0) {
                throw new Error("DATAS NÃO REGISTRADAS. \n");
            }
            else {
                var escolhaDatas = rl.questionInt("\n Escolha o número da data: \n");
                if (escolhaDatas > listaDatas.length - 1 || escolhaDatas < 0) {
                    throw new Error("DATA INVALIDA.");
                }
                listaDatas.push(listaDatas[escolhaDatas - 1].clone()); //vai salvar o clone.
            }
            break;
        case 0: //fecha o loop.
            console.log(" \n Fechando...");
            menu = false;
            break;
        default:
            console.log(" \n Opção não reconhecida.");
            break;
    }
}
