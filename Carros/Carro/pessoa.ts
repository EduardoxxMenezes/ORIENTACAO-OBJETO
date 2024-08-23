let rl = require('readline-sync')
export interface PessoaInterface{ //a interface para facilitar escrever o código
    Nome: string;
    Sobrenome: string;
    Nome_Do_Pai: string;
    Nome_Da_Mae: string;
    Numero_RG: number;
    Numero_CPF: number;
    Nascimento: number;
    senha_do_cartao_de_credito: number;
    GetPessoa(): void;
    SetPessoa(): void;
}

export class Pessoa implements PessoaInterface{
    public Nome: string;
    public Sobrenome: string;
    public Nome_Do_Pai: string;
    public Nome_Da_Mae: string;
    public Numero_CPF: number;
    public Numero_RG: number;
    public Nascimento: number
    public senha_do_cartao_de_credito: number; //Declarei todos os detalhes.
    constructor(Nome: string, sobrenome: string, Nome_Do_Pai: string, Nome_Da_Mae: string, CPF: number, rg: number, nascimento: number, senha: number)
    {
        this.Nome = Nome;
        this.Sobrenome = sobrenome;
        this.Nome_Do_Pai = Nome_Do_Pai;
        this.Nome_Da_Mae = Nome_Da_Mae;
        this.Numero_CPF = CPF;
        this.Numero_RG = rg;
        this.Nascimento = nascimento;
        this.senha_do_cartao_de_credito = senha//OFICIALIZEI TODOS OS DETALHES.
    }
    GetPessoa(): void { //Criei um método para ver o cliente.
        console.log(`Cliente: ${this.Nome} \n sobrenome: ${this.Sobrenome} \n Nome do pai: ${this.Nome_Do_Pai} \n nome da mãe: ${this.Nome_Da_Mae} \n RG: ${this.Numero_RG} \n CPF: ${this.Numero_CPF} \n Nascimento: ${this.Nascimento} \n SENHA DO CARTÃO ${this.senha_do_cartao_de_credito}`)
         
    }
    SetPessoa(): void { //Criei
        let NewIdade = rl.question("INSIRA SUA IDADE (Menores de idade devem inserir o nome de seus responsaveis legais.): \n")
        let NewNome = rl.question("INSIRA SEU NOME: \n")
        let NewSobrenome = rl.question("INSIRA SEU SOBRE NOME: \n")

        let NewPai = rl.question("INSIRA O NOME DE SEU PAI: \n")
        let NewMae = rl.question("INSIRA O NOME DE SUA MÃE: \n")

        let NewRG = rl.question("INSIRA SEU CPF: \n")
        let NewCPF = rl.question("INSIRA SEU RG: \n")
        let NewSenha = rl.question("INSIRA A SENHA DE SEU CARTÃO DE CRÉDITO: \n")

        this.Nome = NewNome;
        this.Sobrenome = NewSobrenome;
        this.Nascimento = NewIdade;
        this.Nome_Da_Mae = NewMae;
        this.Nome_Do_Pai = NewPai;
        this.Numero_CPF = NewCPF;

    }
    VerificaIdade(): void{
        if((this.Nascimento - 2024) < 18){console.log(`Seus responsaveis legais são: ${this.Nome_Da_Mae}, ${this.Nome_Do_Pai}`)}else{console.log("Você não precisa de seus responsaveis legais.")}
    }
}