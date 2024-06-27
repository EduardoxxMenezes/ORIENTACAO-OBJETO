import { read } from "fs"
import { relative } from "path"

const readline = require('readline-sync')

export class produtos{

    nome: string
    precoInicial: number
    marca: string
    precoFinal: number
    quantidadeMax: number
    constructor(nome: string, precoinicial: number, marca: string, precofinal: number, quantidadeMax: number){
        this.nome = nome
        this.precoInicial = precoinicial
        this.marca = marca
        this.precoFinal = precofinal
        this.quantidadeMax
    }
     lucro(): void{
        let precoTotal = this.precoFinal - this.precoInicial
        console.log(`O lucro do produto será: ${precoTotal}`)
     }
     getProduto(): void{
        console.log(`O produto é um ${this.nome}, da marca ${this.marca}, o preço é: ${this.precoFinal} `)
     }
     setProduto(): void{
        this.nome = readline.question("Qual será o produto?")
        this.marca = readline.question("qual será a marca?")
        this.precoFinal = readline.questionInt("Qual o preço do produto?")
        this.precoInicial = readline.questionInt("Qual foi o valor que você comprou o produto inicialmente?")
        this.quantidadeMax = readline.questionInt("Quantos produtos haviam inicialmente no estoque")
     }
}
