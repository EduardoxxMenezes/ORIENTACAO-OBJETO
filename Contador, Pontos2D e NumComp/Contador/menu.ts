import {contador} from "./ATV1";
let rl = require('readline-sync')

let menu = true;
let Contado = new contador(0);

 while(menu){
    console.log
    (` -----------
       |  MENU! |
       -----------
       1- Zerar.
       2- Incrementar.
       3- Verificar.
       0- Sair.
    `)
    let Opcao = rl.questionInt("REPOSTA: \n")
    switch(Opcao){
        case 1:
            Contado.zerar()
        break
        case 2:
            Contado.incrementar()
        break
        case 3:
            console.log(Contado.valorAtual())
        break
        case 0:
            menu = false;
            console.log("FECHANDO...")
        break
        default:
            console.log("OPÇÃO NÃO RECONHECIDA.")
        break
    }

 }