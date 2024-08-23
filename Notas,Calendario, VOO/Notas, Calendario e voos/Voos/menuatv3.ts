import { voo } from "./atv3";
import { Data } from "../atividade2/atv2";

let rl = require('readline-sync');
let menu = true;
let datas = new Data(11,9,2001)
let NovoVôo = new voo('1A 79',datas)
let ocupados = 0;
export class passageiro{
    nome: string
    cpf: string
    idade: number
    constructor(nome: string, cpf: string, idade: number)
    {
        this.nome = nome;
        this.idade = idade;
        this.cpf = cpf;
    }
}
while (menu){
    console.log
    (`
        ESCOLHA:
        1- Cadastrar passageiro;
        2- Verificar Próxima Cadeira Livre;
        3- Verificar cadeira;
        4- Ocupar Cadeira;
        5- Verificar Vagas;
        6- Verificar Vôo;
        7- Verificar Data Do Vôo;
        0- Sair;

    `)
    let escolha = rl.questionInt("ESCOLHA: \n")
        switch(escolha){
            case 1: //está criando o usuario.
            let nome: string = rl.question("Insira seu nome completo: \n");
            let idade: number = rl.questionInt("Insira sua idade");
            let cpf: string = rl.question("Insira seu CPF");

           let passageirers = new passageiro(nome,cpf,idade);
            break
            case 2: //verificando se há cadeiras livres.
                console.log("foi")
               if(NovoVôo.proximoliver() == 0) //caso não tenha cadeiras livres
                {
                    console.log("Não há cadeiras livres.")
                }else
                {
                    console.log(`o próximo lugar ocupado é o número : ${NovoVôo.proximoliver()}`) //caso tenha cadeiras livres ele irá mostrar o próximo lugar que está sendo ocupado.
                }
            break
            case 3: //vai verificar se uma cadeira especifica está ocupada
                let cadeira = rl.questionInt("Insira o número da cadeira. \n")
                if(NovoVôo.verifica(cadeira) == true)
                {
                    console.log("A cadeira está ocupada.")
                }else
                {
                    console.log("A cadeira está livre.")
                }
            break
            case 4:
                let cadeira2 = rl.questionInt("Insira o número da cadeira. \n")
                if(NovoVôo.ocupa(cadeira2) == false){ //verificando se a cadeira está ocupada.
                    console.log("Este assento não pode ser ocupado.")
                }else
                {
                    console.log("assento ocupado com sucesso.") //ocupando a cadeira.
                    ocupados += 1;
                }
            break
            case 5: //mostrando o total de vagas disponiveis no voo
                console.log("Há ",NovoVôo.vagas() - ocupados," Vagas disponiveis neste vôo")
            break
            case 6: //mostra as informações do voo.
                console.log(NovoVôo.getvoo())
            break
            case 7: // mostra a data do voo.
                    console.log(NovoVôo.getdata())
            break
            case 0: //fecha o loop.
                console.log("Fechando...")
                menu = false;
            break
            default:
                console.log("Opção não reconhecida.")
            break
        }
}

