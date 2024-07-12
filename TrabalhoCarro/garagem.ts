import { Interface } from "readline"
import { Carro } from "./Carro"

let rl = require('readline-sync')

export interface GaragemInterface{
    carro:Carro[]

    ListarCarros(): void;
    AdicionarCarro(carro: Carro): void;
    RemoverCarro(carro3: Carro): void;
}
export class Garagem implements GaragemInterface{
   public carro:Carro[]

    constructor(){
        this.carro = []
    }
    ListarCarros(): void{
        for(let a of this.carro)
        {
            a.GetCarro()
        }
    }

    AdicionarCarro(carro2: Carro): void {
        let a = this.carro.length
        if(a < 10){
        this.carro.push(carro2)}
        else{this.carro.splice(0,1); this.carro.push(carro2)}
    }
    RemoverCarro(carro3: Carro): void {
        let lugar = 0
       for(let a of this.carro)
        {
            if(a == carro3){ this.carro.splice(lugar,1)}
            lugar += 1
        }
    }

}