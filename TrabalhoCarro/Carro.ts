import { notEqual } from "assert";
import { read } from "fs";
import { Readline } from "readline/promises";

const rl = require('readline-sync')

export interface CarroInterface{
    Gasolina: number;
    Marca: string;
    KML: number;
    nome: string;
    GetCarro(): void;
    SetCarro(): void;
    Dirigir(distancia: number): void;
    ObterGasolina(): string;
    AdicionarGasolina(): void;
}

export class Carro implements CarroInterface{
    public Gasolina: number //Declarar a gasolina
    public Marca: string    //Declarar a marca
    public KML: number      //Declarar a KM por litro
    public nome: string     //Declara o nome
constructor(Gasolina: number, Marca: string, KML: number, nome: string) //Construir os detalhes.
 {
    this.Gasolina = Gasolina;
    this.Marca = Marca;
    this.KML = KML;
    this.nome = nome;
 }
 public GetCarro(): void{ //Método que explica os detalhes do carro.
    console.log(`O carro é um ${this.nome} da marca ${this.Marca} \n ainda tem ${this.Gasolina} litros de gasolina e consome ${this.KML} litros por kilomêtros.`);
    

 }
  public SetCarro(): void{ //Método que muda os detalhes do carro.
    let NewNome = rl.question("Qual o carro?")
    let NewGasolina = rl.questionInt("Quantos litros de gasolina seu carro tem?")
    let NewMarca = rl.question("Qual a marca de seu carro?")
    let newKML = rl.questionInt("Quantos litros se vão por kilometro?")
    this.Marca = NewMarca
    this.Gasolina = NewGasolina
    this.KML = newKML
 }
 public Dirigir(distancia: number): void{ //Método para diminuir a quantidade de gasolina baseado na distancia.
    let calculo = this.Gasolina - (this.KML / distancia)
    if(calculo < 0){ console.log("Encha o tanque primeiro")}
    else{console.log(`Você andou ${distancia} kilometros, restam ${this.Gasolina} li3tros de gasolina.`)}
    
 }
 ObterGasolina(): string{ //Método que mostra a quantidade de gasolina disponível.
let frase = `o seu carro tem ${this.Gasolina} litros de gasolina restante`
    return frase;

 }
 AdicionarGasolina(): void{ //Método para adicionar gaoslina.
    let ADDGasolina = rl.questionInt("Quantos litros de gasolina deseja adicionar?")
    this.Gasolina = this.Gasolina + ADDGasolina;
 }
}

