import { Data } from "./atv2";

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
    numerovoo: string;
    data: Data;
    lugare: boolean[]
    constructor(numerovoo: string, data: Data) {
        this.numerovoo = numerovoo;
        this.data = data;
        this.lugare = Array(100).fill(false)
    }
    proximoliver(): number{
        for(let i = 0; i < this.lugare.length; i++){
            if(!this.lugare[i]){
                return i
            }
        }
        return 0
    }
    verifica(cadeira: number): boolean {
        if (cadeira < 0 || cadeira >= this.lugare.length){
            throw new Error("Numero invalido");

        }
        return this.lugare[cadeira]
    }
    ocupa(cadeira: number): boolean {
        if (cadeira < 0 || cadeira >= this.lugare.length){
            throw new Error("Numero invalido");
        }
        if(this.lugare[cadeira]){
            return false;
        }else{return true;}
    }
    vagas(): number {
        return this.lugare.filter(lugar => !lugar).length
    }
    getvoo(): string {
        return `O voo número ${this.numerovoo}`
    }
    getdata(): Data {
        return this.data
    }
    clone(): voo {
        let newvoo = new voo("quatorze", new Data(22, 12, 2004))
        return newvoo
    }
}

let Desgraca = new voo("jefersom",new Data(22,8,2013))
Desgraca.clone()
Desgraca.getdata()
Desgraca.getvoo()
Desgraca.ocupa(24)
Desgraca.proximoliver()
Desgraca.vagas()
Desgraca.verifica(36)