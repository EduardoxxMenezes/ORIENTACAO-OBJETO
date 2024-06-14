"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RPG_1 = require("./RPG");
var RPG_2 = require("./RPG");
var rl = require('readline-sync');
var warrior = new RPG_1.guerreiro("pieces", "warriors", 20, 100, 50);
var monstro = new RPG_2.monster("destroyer", 30, 200);
do {
    if (monstro.saude < 0) {
        console.log("VOCÊ GANHOU.");
    }
    else {
        var escolha = rl.question("1. ATACAR. \n 2. DESCRIÇÃO \n 3. CURAR \n 4.SUICIDIO");
        if (escolha == 1) {
            console.log("você atacou!");
            warrior.ataque(monstro);
            console.log("o monstro atacou!");
            monstro.ataque(warrior);
            console.log("VIDA TOTAL:", warrior.saude, " VIDA TOTAL INIMIGO", monstro.saude);
        }
        else if (escolha == 2) {
            warrior.descricao();
            console.log("o monstro atacou!");
            monstro.ataque(warrior);
            console.log("VIDA TOTAL:", warrior.saude, " VIDA TOTAL INIMIGO", monstro.saude);
        }
        else if (escolha == 3) {
            warrior.curar();
            console.log("o monstro atacou!");
            monstro.ataque(warrior);
            console.log("VIDA TOTAL:", warrior.saude, " VIDA TOTAL INIMIGO", monstro.saude);
        }
        else if (escolha == 4) {
            warrior.suicidio();
            console.log("FIM DE JOGO");
        }
    }
} while (warrior.saude > 0);
if (warrior.saude > 0) {
    console.log("VOCÊ GANHOU!");
}
else {
    console.log("VOCÊ FALHOU ");
}
