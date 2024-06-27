"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TRABALHO_1 = require("./TRABALHO");
var vendas_1 = require("./vendas");
var readline = require('readline-sync');
var TV = new TRABALHO_1.produtos("TV", 2500, "Apple", 3000, 10);
var celular = new TRABALHO_1.produtos("Celular", 1000, "LG", 1600, 20);
var Notebook = new TRABALHO_1.produtos("Notebook", 2500, "cavalos", 80000, 32);
var crianca = new TRABALHO_1.produtos("crianca", 10, "asiatica", 20, 18);
var vendaTV = new vendas_1.venda(TV, "22/5/2008", 4, "angela", "crédito", false);
var vendaCelular = new vendas_1.venda(celular, "15/9/2016", 3, "cristina", "débito", true);
var novoProduto = [];
var novavenda = [];
var tamanho = novoProduto.length - 1;
console.log(vendaTV);
console.log(TV);
var menu;
do {
    menu = readline.questionInt("\n    1- VER PRODUTOS DISPONIVEIS.\n    2- CADASTRAR PRODUTO.\n    3- ANALISAR INFORMA\u00C7\u00D5ES DE VENDAS.\n    4- ADICIONAR VENDA CONCLUIDA.\n    0- SAIR.");
    switch (menu) {
        case 1:
            TV.getProduto();
            Notebook.getProduto();
            celular.getProduto();
            crianca.getProduto();
            if (novoProduto.length > 0) {
                for (var i = novoProduto.length - 1; i > 0; i--) {
                    novoProduto[i].getProduto();
                }
            }
            break;
        case 2:
            novoProduto.push(new TRABALHO_1.produtos("", 0, "", 0, 0).setProduto());
            break;
        case 3:
            vendaTV.getvenda();
            vendaCelular.getvenda();
            if (novavenda.length > 0) {
                for (var i = novavenda.length - 1; i > 0; i--) {
                    novavenda[i].getvenda();
                }
            }
            break;
        case 4:
            var escolhaProduto = readline.questionInt("Qual o produto que você deseja vender? (está no padrão da opção 1.)");
            var VendadoProduto = novoProduto[escolhaProduto - 1];
            novavenda.push(new vendas_1.venda(VendadoProduto, "", 0, "", "", false).setvenda());
            break;
        case 0:
            console.log("FECHANDO...");
            break;
        default: console.log("OPÇÃO NÃO RECONHECIDA.");
    }
} while (menu != 0);
