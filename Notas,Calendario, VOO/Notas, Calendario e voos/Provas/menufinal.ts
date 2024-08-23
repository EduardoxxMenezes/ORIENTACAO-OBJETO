import { notEqual } from "assert";
import { Prova } from "./ATVFINAL";
import { Gabarito } from "./ATVFINAL";

let rl = require('readline-sync')
export class alunos{
    nome: string;
    idade: number;
    nomeDaMatricula: string;
    constructor(nome: string, idade: number, nomeDaMatricula: string){
        this.nome = nome;
        this.idade = idade;
        this.nomeDaMatricula = nomeDaMatricula;
    }
}


let menu = true;
let gabe = new Gabarito([])
let atividade = new Prova(gabe)

while(menu){
    console.log
    (`
        ESCOLHA
        1- Construir o Gabarito.
        2- Receber As Respostas.
        3- Contabilizar Acertos.
        4- Verificar Nota.
        5- Cadastrar Aluno.
        0- Sair.
    `)
    let escolha = rl.questionInt("ESCOLHA: \n")
    switch(escolha){
        case 1:
            for(let i = 0; i < 16; i++)
            {
                gabe.resposta[i] = rl.question(`Insira a resposta da questao ${i}`)
            }
        break
        case 2:
            for(let i = 0; i < 16; i++)
                {
                    atividade.respostaAluno[i] = rl.question(`Insira sua resposta para a pergunta`)
    
                }
        break
        case 3:
            console.log("Você acertou: ", atividade.acertos(), "questões!")
        break
        case 4:
            console.log(atividade.nota())
        break
        case 5:
            let nome = rl.question("Insira seu nome. \n")
            let idade = rl.questionInt("Insira sua idade. \n")
            let nomeDeMatricula = rl.question("Insira o nome de matricula. \n")
            let alunow = new alunos(nome,idade,nomeDeMatricula)
        break
        case 0:
            menu = false;
        break
        default:
            console.log("Opção não reconhecida.")
        break
    }
}