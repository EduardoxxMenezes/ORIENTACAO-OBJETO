let rl = require("readline-sync")
export class Ponto2D {
    X: number;
    Y: number;
    constructor() {
        this.X = 0;
        this.Y = 0;
    }
    getX(): number {
        return this.X;

    }
    setX(): void {
        let NovoX = rl.questionInt("INSIRA O NOVO X.");
        this.X = NovoX;

    }

    setY(): void {
        let NovoY = rl.questionInt("INSIRA O NOVO Y.");
        this.Y = NovoY;
    }

    getY(): number {
        return this.Y;

    }
    equals(outroponto: Ponto2D): boolean {
        //math.sqrt()
        // x² == x**2
        if (this.X == outroponto.X && this.Y == outroponto.Y) {
            return true
        }
        return false
    }

    tostring(): string {
        return `X: ${this.X} \n Y: ${this.Y}`
    }

    distancia(outroponto: Ponto2D): number {
        let Xe = ((outroponto.X - this.X) ** 2 + (outroponto.Y - this.Y) ** 2)
        let R = Math.sqrt(Xe)
        return R;
    }

    clone(): Ponto2D {
        let novoponto = new Ponto2D()
        novoponto.X = this.X;
        novoponto.Y = this.Y;
        return novoponto
    }
}

export class Ponto2DcomCoordenadas extends Ponto2D {
    constructor(X: number, Y: number) {
        super()
        this.X = X;
        this.Y = Y;
    }
    getX(): number {
        return this.X;

    }
    setX(): void {
        let NovoX = rl.questionInt("INSIRA O NOVO X.");
        this.X = NovoX;

    }

    setY(): void {
        let NovoY = rl.questionInt("INSIRA O NOVO Y.");
        this.Y = NovoY;
    }

    getY(): number {
        return this.Y;

    }
    equals(outroponto: Ponto2D): boolean {
        //math.sqrt()
        // x² == x**2
        if (this.X == outroponto.X && this.Y == outroponto.Y) {
            return true
        }
        return false
    }

    tostring(): string {
        return `X: ${this.X} \n Y: ${this.Y}`
    }

    distancia(outroponto: Ponto2D): number {
        let Xe = (this.X - outroponto.X) ** 2 + (this.Y - outroponto.Y) ** 2
        let R = Math.sqrt(Xe)
        return R;
    }

    clone(): Ponto2D {
        let novoponto = new Ponto2D()
        novoponto.X = this.X;
        novoponto.Y = this.Y;
        return novoponto
    }

}

export class alternativoPonto extends Ponto2D {
    constructor(outroPonto: Ponto2D) {
        super()
        this.X = outroPonto.X;
        this.Y = outroPonto.Y;
    }
    getX(): number {
        return this.X;

    }
    setX(): void {
        let NovoX = rl.questionInt("INSIRA O NOVO X.");
        this.X = NovoX;

    }

    setY(): void {
        let NovoY = rl.questionInt("INSIRA O NOVO Y.");
        this.Y = NovoY;
    }

    getY(): number {
        return this.Y;

    }
    equals(outroponto: Ponto2D): boolean {
        //math.sqrt()
        // x² == x**2
        let test = false;
        if (this.X == outroponto.X && this.Y == outroponto.Y) {
            test = true;
        } else { test = false; }
        return test;
    }

    tostring(): string {
        return `X: ${this.X} \n Y: ${this.Y}`
    }

    distancia(outroponto: Ponto2D): number {
        let Xe = (outroponto.X - this.X) ** 2 + (outroponto.Y - this.Y) ** 2
        let R = Math.sqrt(Xe)
        console.log(R)
        console.log(Xe)
        return R;
    }

    clone(): Ponto2D {
        let novoponto = new Ponto2D()
        return novoponto
    }
}

let teste = new Ponto2D()
let teste2 = new Ponto2D()
teste2.setX()
teste2.setY()
teste.setX()
teste.setY()
console.log(teste.getX())
console.log(teste.getY())
console.log(teste.equals(teste2))
console.log(teste.distancia(teste2))
let teste3 = new Ponto2DcomCoordenadas(13, 9);
let teste4 = new alternativoPonto(teste2);
