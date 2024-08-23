import { Data } from "../Calendario/atv2";

export interface voo {
    numerovoo: string;
    Data: Data;
    lugare: boolean[]

    proximoliver(): number;
    verifica(cadeira: number): boolean;
    ocupa(cadeira: number): boolean;
    vagas(): number;
    getvoo(): string;
    getdata(): Data;
    clone(): voo;
}

export class voo implements voo {
    numerovoo: string; //o numero do voo
    data: Data; //a data do voo
    lugare: boolean[] //uma lista de lugares.
    constructor(numerovoo: string, data: Data) {
        this.numerovoo = numerovoo;
        this.data = data;
        this.lugare = Array(100).fill(false) //preenche com FALSE(indicando que estão vazios.)
    }
    proximoliver(): number{
        let a
        let tested = false;
        for(let i = 0; i < this.lugare.length; i++){ //esta testando todas as cadeiras, quando encontrar uma com o valor TRUE(ocupada) ela vai marcar e vai retornar.
            if(this.lugare[i] && tested == false){
                a = i;
                tested = true;
            }
        }
    return a;
    }
    verifica(cadeira: number): boolean {
        if (cadeira < 0 || cadeira >= this.lugare.length){ //se a cadeira for menor que 0 ou maior que 100 ela vai relatar problema.
            throw new Error("Numero invalido");

        }
    
        return this.lugare[cadeira] //vai verificar se a cadeira é TRUE (ocupada) ou FALSE(vazia)
    }
    ocupa(cadeira: number): boolean {
        if (cadeira < 0 || cadeira >= this.lugare.length){ //novamente testa se a cadeira é real.
            throw new Error("Numero invalido");
        }
        if(this.lugare[cadeira]){
            return false;
        }else{return true;}
    }
    vagas(): number {
        return this.lugare.filter(lugar => !lugar).length //mostra a quantidades de cadeiras totais no avião.
    }
    getvoo(): string {
        return `O voo é do número ${this.numerovoo}` //mostra o número do voo.
    }
    getdata(): Data {
        return this.data //mostra a data do voo
    }
    clone(): voo {
        let newvoo = new voo("quatorze", new Data(22, 12, 2004))//clona as informações de voo.
        return newvoo
    }
}

let Desgraca = new voo("fabiano",new Data(22,8,2013))
Desgraca.clone()
Desgraca.getdata()
Desgraca.getvoo()
Desgraca.ocupa(24)
Desgraca.proximoliver()
Desgraca.vagas()
Desgraca.verifica(36)//testes.