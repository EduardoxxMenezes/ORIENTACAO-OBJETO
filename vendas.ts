const readline = require('readline-sync')
import { read } from "fs"
import { produtos } from "./TRABALHO"

export class venda{
    produto: produtos
    data: string
    quantidadeVendida: number
    cliente: string
    Pagamento: string
    parcelado: boolean

    constructor(produto: produtos, data: string, quantidadeVendida: number, cliente: string, pagamento: string, parcelado: boolean ){
        this.data = data
        this.quantidadeVendida =quantidadeVendida
        this.cliente = cliente
        this.Pagamento = pagamento
        this.parcelado = parcelado
    }
    getvenda(): void{
        console.log(`O valor do  ${this.produto.nome}, foi: ${this.produto.precoFinal}, vendido em ${this.data}, foram vendidos ${this.quantidadeVendida}, e restam: ${this.produto.quantidadeMax - this.quantidadeVendida} disponiveis.`)
    }
    setvenda(): void{
        this.produto.setProduto()
        this.data = readline.question("Qual a data que ele foi vendido?")
        this.quantidadeVendida = readline.questionInt("Qual a quantidade já vendida?")
        this.parcelado = readline.question("Foi comprado parcelado?")
        this.Pagamento = readline.question("O cliente pagou em crédito ou débito?")
        this.cliente = readline.question("Qual o nome do cliente?")
    }
    desconto(): void{
        let disc = (readline("Qual a porcentagem de desconto?") / 100 )
        let discFinal = disc* this.produto.precoFinal
        console.log(`O valor final do produto com ${disc}% de disconto será de ${discFinal}`)
    }
    Total(): void{
     let quanTotal = this.produto.precoFinal * this.quantidadeVendida
        console.log(`O valor total de ${this.quantidadeVendida} do produto: ${this.produto}, será: ${quanTotal}`)
    }
}