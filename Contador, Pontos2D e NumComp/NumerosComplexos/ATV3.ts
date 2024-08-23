let rl = require('readline-sync')


export class NumeroComplexo {
    Imaginario: number;
    Real: number;
    constructor(Imaginario: number, Real: number) {
        this.Imaginario = Imaginario;
        this.Real = Real;
    }
    getImaginario(): string {
        return `Imaginario: ${this.Imaginario}i`
    }
    getReal(): number {
        return this.Real;
    }
    setImaginario(): void {
        let NovoImaginario = rl.questionInt("INSIRA O NOVO NUMERO")
        this.Imaginario = NovoImaginario;

    }
    setReal(): void {
        let NovoReal = rl.questionInt("INSIRA O NOVO NUMERO REAL")
        this.Real = NovoReal;
    }

    Somar(outroNumero: NumeroComplexo): void {
        let parteReal = this.Real + outroNumero.Real;
        let parteImaginario = this.Imaginario + outroNumero.Imaginario;
        console.log(parteReal)
        console.log(parteImaginario)
        let soma = new NumeroComplexo(0,0);
        soma.Real = parteReal;
        soma.Imaginario = parteImaginario;
        console.log(soma)
    }
    Subtrair(outroNumero: NumeroComplexo): string {

        let parteReal = this.Real - outroNumero.Real;
        let parteImaginario = this.Imaginario - outroNumero.Imaginario;
        let subtracao = new NumeroComplexo(parteImaginario, parteReal);
        return subtracao.ToString();
    }
    Multiplicar(outroNumero: NumeroComplexo): string {
        let parteReal = this.Real * outroNumero.Real - this.Imaginario * outroNumero.Imaginario;
        let parteImaginario = this.Real * outroNumero.Imaginario + this.Imaginario * outroNumero.Real;
        let multiplicacao = new NumeroComplexo(parteImaginario, parteReal);
        return multiplicacao.ToString();
    }
    Dividir(outroNumero: NumeroComplexo): string {

        let denominador = outroNumero.Real ** 2 + outroNumero.Imaginario ** 2;
        if (denominador === 0) {
            return "Divisão por zero não permitida.";
        }
        let parteReal = (this.Real * outroNumero.Real + this.Imaginario * outroNumero.Imaginario) / denominador;
        let parteImaginario = (this.Imaginario * outroNumero.Real - this.Real * outroNumero.Imaginario) / denominador;
        let divisao = new NumeroComplexo(parteImaginario, parteReal);
        return divisao.ToString();
    }

    Equals(outroNumero: NumeroComplexo): Boolean {
        let teste = false
        if (this.Real + this.Imaginario == outroNumero.Real + outroNumero.Imaginario) {
            teste = true;
        } else {
            teste = false;
        }

        return teste;
    }

    ToString(): string {
        return `Parte Real: ${this.Real} \nParte Imaginária: ${this.Imaginario}i`;
    }
    modulo(): number {
        return (Math.abs(this.Real), Math.abs(this.Imaginario))
    }

}

let teste1 = new NumeroComplexo(5,2)
let teste2 = new NumeroComplexo(8,2)
teste1.Somar(teste2)