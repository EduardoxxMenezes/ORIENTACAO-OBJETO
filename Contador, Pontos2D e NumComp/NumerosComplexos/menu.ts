
import { NumeroComplexo } from "./ATV3";

let rl = require('readline-sync')

let menu = true;
let ListaNumeros: NumeroComplexo[] = []
let numero;
while(menu){
    console.log
    (` -----------
          MENU
       -----------
       1- Adicionar Numeros Complexos.
       2- Ver Numero Imaginario.
       3- Ver Numero Real.
       4- Modificar Numero Imaginario.
       5- Modificar Numero Real.
       6- Somar 2 numeros.
       7- Subtrair 2 numeros.
       8- Multiplicar 2 numeros.
       9- Dividir 2 numeros.
       10- Comparar 2 numeros.
       11- Ver Detalhes.
       12- Ver Modulo.
       0- SAIR
    `)
    let Escolha = rl.questionInt("RESPONDA: \n")
    switch(Escolha){
        case 1:
            let NovoImaginario = rl.questionInt("INSIRA O NOVO NUMERO IMAGINARIO.")
            let NovoReal = rl.questionInt("INSIRA O NOVO NUMERO REAL")
        ListaNumeros.push(new NumeroComplexo(NovoImaginario,NovoReal))
        break
        case 2:
            numero = rl.questionInt("INSIRA O NUMERO QUE DESEJA VERIFICAR.")
            if(numero > ListaNumeros.length - 1 || numero < 0){
                console.log("Numero não reconhecido.")
            }else{
                console.log(ListaNumeros[numero].getImaginario())
            }
        break
        case 3:
            numero = rl.questionInt("INSIRA O NUMERO QUE DESEJA VERIFICAR.")
            if(numero > ListaNumeros.length - 1 || numero < 0){
                console.log("Numero não reconhecido.")
            }else{
                console.log(ListaNumeros[numero].getReal())
            }
        break
        case 4:
            numero = rl.questionInt("INSIRA O NUMERO QUE DESEJA VERIFICAR.")
            if(numero > ListaNumeros.length - 1 || numero < 0){
                console.log("Numero não reconhecido.")
            }else{
                ListaNumeros[numero].setImaginario()
           
            }
        break
        case 5:
            numero = rl.questionInt("INSIRA O NUMERO QUE DESEJA VERIFICAR.")
            if(numero > ListaNumeros.length - 1 || numero < 0){
                console.log("Numero não reconhecido.")
            }else{
                ListaNumeros[numero].setReal()
            }
        break
        case 6:
            numero = rl.questionInt("INSIRA O NUMERO QUE DESEJA VERIFICAR.")
            let numero2 = rl.questionInt("INSIRA O SEGUNDO NUMERO QUE DESEJA VERIFICAR.")
            if(numero > ListaNumeros.length - 1 || numero < 0 || numero2 > ListaNumeros.length - 1 || numero2 < 0){
                console.log("Numero não reconhecido.")
            }else{
                let soma = ListaNumeros[numero].Somar(ListaNumeros[numero2])
               
            }
        break
        case 7:
            numero = rl.questionInt("INSIRA O NUMERO QUE DESEJA VERIFICAR.")
            let numero2Menos = rl.questionInt("INSIRA O SEGUNDO NUMERO QUE DESEJA VERIFICAR.")
            if(numero > ListaNumeros.length - 1 || numero < 0 || numero2Menos > ListaNumeros.length - 1 || numero2Menos < 0){
                console.log("Numero não reconhecido.")
            }else{
                console.log(ListaNumeros[numero].Subtrair(ListaNumeros[numero2Menos]))
            }
        break
        case 8:
            numero = rl.questionInt("INSIRA O NUMERO QUE DESEJA VERIFICAR.")
            let numero2Veses = rl.questionInt("INSIRA O SEGUNDO NUMERO QUE DESEJA VERIFICAR.")
            if(numero > ListaNumeros.length - 1 || numero < 0 || numero2Veses > ListaNumeros.length - 1 || numero2Veses < 0){
                console.log("Numero não reconhecido.")
            }else{
                console.log(ListaNumeros[numero].Multiplicar(ListaNumeros[numero2Veses]))
            }
        break
        case 9:
            numero = rl.questionInt("INSIRA O NUMERO QUE DESEJA VERIFICAR.")
            let numero2dividir = rl.questionInt("INSIRA O SEGUNDO NUMERO QUE DESEJA VERIFICAR.")
            if(numero > ListaNumeros.length - 1 || numero < 0 || numero2dividir > ListaNumeros.length - 1 || numero2dividir < 0){
                console.log("Numero não reconhecido.")
            }else{
                console.log(ListaNumeros[numero].Dividir(ListaNumeros[numero2dividir]))
            }
        break
        case 10:
            numero = rl.questionInt("INSIRA O NUMERO QUE DESEJA VERIFICAR.")
            let numero2Comparar = rl.questionInt("INSIRA O SEGUNDO NUMERO QUE DESEJA VERIFICAR.")
            if(numero > ListaNumeros.length - 1 || numero < 0 || numero2Comparar > ListaNumeros.length - 1 || numero2Comparar < 0){
                console.log("Numero não reconhecido.")
            }else{
                if(ListaNumeros[numero].Equals(ListaNumeros[numero2Comparar])){
                    console.log("Os numeros são iguais.")
                }else{ console.log("Os numeros são diferentes.")}
            }
        break
        case 11:
            numero = rl.questionInt("INSIRA O NUMERO QUE DESEJA VERIFICAR.")
            if(numero > ListaNumeros.length - 1 || numero < 0){
                console.log("Numero não reconhecido.")
            }else{
                console.log(ListaNumeros[numero].ToString())
            }
        break
        case 12: 
        numero = rl.questionInt("INSIRA O NUMERO QUE DESEJA VERIFICAR.")
        if(numero > ListaNumeros.length - 1 || numero < 0){
            console.log("Numero não reconhecido.")
        }else{
            console.log(ListaNumeros[numero].modulo())
        }
        break
        case 0:
            menu = false;
            console.log("Fechando...")
        break
        default: 
        console.log("OPÇÃO NÃO RECONHECIDA.")
        break
    }
}