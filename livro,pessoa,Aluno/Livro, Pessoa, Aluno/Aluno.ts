var rl = require('readline-sync')

class alunos{
    nome: string
    notas:Array<number>
    constructor(nome: string)
    {
        this.nome = nome
        this.notas = []
    }
    notes():void{
        let nota1= rl.questionInt("Insira a primeira nota")
        let nota2= rl.questionInt("Insira a segunda nota")
        let nota3= rl.questionInt("Insira a ultima nota")
        this.notas.push(nota1)
        this.notas.push(nota2)
        this.notas.push(nota3)
    }
    calcularMedia():void{
        let media = (this.notas[0] + this.notas[1] + this.notas[2])/ 3
        console.log(`SUAS NOTAS SÃO ${this.notas[0]}, ${this.notas[1]} e ${this.notas[2]} e a média é: ${media}`)
        
    }
}
let aluno = rl.question("Como se chama?")
let alunoNovo = new alunos(aluno)
alunoNovo.notes()
alunoNovo.calcularMedia()