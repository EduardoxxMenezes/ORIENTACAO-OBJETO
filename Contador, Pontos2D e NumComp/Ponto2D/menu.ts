import { listenerCount } from "process";
import { Ponto2D, Ponto2DcomCoordenadas } from "./ATV2";
let rl = require('readline-sync')

let menu = true;
let ListaPontos: Ponto2D[] = []
while(menu){
    console.log
    (` ----------
        | MENU |
       ----------
       1- Adicionar Ponto.
       2- Ver X.
       3- Ver Y.
       4- Modificar X.
       5- Modificar Y.
       6- Verificar se 2 pontos são iguais.
       7- Ver coordenadas exatas.
       8- Ver a distância entre 2 Pontos.
       9- Clonar um ponto.
       0-
    `)
    let Escolha = rl.questionInt("RESPOSTA: \n")
    switch(Escolha){
        case 1:  //criar novo ponto.
        let NovoX = rl.questionInt("INSIRA O VALOR DE X. \n")
        let NovoY = rl.questionInt("INSIRA O VALOR DE Y. \n")
        ListaPontos.push(new Ponto2DcomCoordenadas(NovoX,NovoY))
        console.log("NOVO PONTO CRIADO. \n")
        break

        case 2:
            let numeroX = rl.questionInt("Insira o ponto que deseja verificar.")
            if(numeroX > ListaPontos.length - 1 || numeroX < 0)
            {
                console.log("Ponto não econtrado.")
            }else
            {
            console.log(ListaPontos[numeroX].getX())
            }
        break
        case 3:
            let numeroY = rl.questionInt("Insira o ponto que deseja verificar.")
            if(numeroY > ListaPontos.length - 1 || numeroY < 0)
            {
                console.log("Ponto não econtrado.")
            }else
            {
            console.log(ListaPontos[numeroY].getY())
            }
        break
        case 4:
            let numeroSetX = rl.questionInt("Insira o ponto que deseja verificar.")
            if(numeroSetX > ListaPontos.length - 1 || numeroSetX < 0)
            {
                console.log("Ponto não econtrado.")
            }else
            {
            ListaPontos[numeroSetX].setX()
            }

        break
        case 5:
            let numeroSetY = rl.questionInt("Insira o ponto que deseja verificar.")
            if(numeroSetY > ListaPontos.length - 1 || numeroSetY < 0)
            {
                console.log("Ponto não econtrado.")
            }else
            {
            ListaPontos[numeroSetY].setY()
            }
        break
        case 6:
            let numeroIgual1 = rl.questionInt("Insira o ponto que deseja verificar.")
            let numeroIgual2 = rl.questionInt("Insira o segundo ponto que deseja verificar.")
            if(numeroIgual1 > ListaPontos.length - 1 || numeroIgual1 < 0 || numeroIgual2 > ListaPontos.length - 1 || numeroIgual2 < 0)
            {
                console.log("Pontos não econtrados.")
            }else
            {
          if(ListaPontos[numeroIgual1].equals(numeroIgual2)){
            console.log("Os pontos são iguais.")
              }else{
                console.log("Os pontos são diferentes");
              }
            }
        break
        case 7:
            let numeroString = rl.questionInt("Insira o ponto que deseja verificar.")
            if(numeroString > ListaPontos.length - 1 || numeroString < 0)
            {
                console.log("Ponto não econtrado.")
            }else
            {
            console.log(ListaPontos[numeroString].tostring())
            }
        break
        case 8:
            let numeroComparar1 = rl.questionInt("Insira o ponto que deseja verificar.")
            let numeroComparar2 = rl.questionInt("Insira o segundo ponto que deseja verificar.")
            if(numeroComparar1 > ListaPontos.length - 1 || numeroComparar1 < 0 || numeroComparar2 > ListaPontos.length - 1 || numeroComparar2 < 0)
            {
                console.log("Pontos não econtrados.")
            }else
            {
            console.log(`A distância entre os dois pontos é de: ${  ListaPontos[numeroComparar1].distancia(ListaPontos[numeroComparar2])}`)}
        break
        case 9:
            let numeroClone = rl.questionInt("Insira o ponto que deseja verificar.")
            if(numeroClone > ListaPontos.length - 1 || numeroClone < 0)
            {
                console.log("Ponto não econtrado.")
            }else
            {
            ListaPontos.push(ListaPontos[numeroClone].clone())
            }
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