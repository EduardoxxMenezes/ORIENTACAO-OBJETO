export class contador{
    valor: number;
    constructor(valor: number){
        this.valor = valor;
    }
    zerar(): void{
        this.valor = 0;
        console.log("ZERADO.")
    }
    incrementar(): void{
        this.valor += 1;
        console.log('+1 ADICIONADO.')
    }
    valorAtual(): number{ 
        
        return this.valor}
    }


