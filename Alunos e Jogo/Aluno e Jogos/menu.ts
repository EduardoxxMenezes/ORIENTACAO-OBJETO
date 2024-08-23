let rl = require('readline-sync')

import { Game } from "./Jogo";
import {VideoGame} from "./Jogo";
import { BoardGames } from "./Jogo";
import { GameLibrary } from "./biblioteca";
let Readlines = require('readline-sync')


let Menu

let Biblioteca1 = new GameLibrary();

let Tabuleiro = [new BoardGames("","",0,0)]
let TabuleiroFull = Tabuleiro.length - 1

let Virtual = [new VideoGame("","",0,"")]
let VirtualFull = Virtual.length - 1


let game1 

do{
     Menu = Readlines.questionInt("--------------------------------------- \nMENU\n 1.Adicionar jogo virtual \n2.Adicionar jogo de tabuleiro\n3.Listar Jogos \n4.Remover Jogos \n 0. Sair.")

switch(Menu){
    case 1: 
    Tabuleiro.push(new BoardGames("","",0,0))
    Tabuleiro[TabuleiroFull].SetDetails()
    Biblioteca1.AddGame(Tabuleiro[TabuleiroFull]) 
    break

    case 2:
    Virtual.push(new VideoGame("","",0,""))
    Virtual[VirtualFull].SetDetails()
    Biblioteca1.AddGame(Tabuleiro[TabuleiroFull])
    break

    case 3: 
    for(let i = 0; i < Biblioteca1.Games.length - 1; i ++)
    console.log(Biblioteca1.ListGames())
    break

    case 4:
    let name: string = Readlines.question("Qual o nome do jogo?")
    Biblioteca1.RemoveGame(name)
    Biblioteca1.ListGames()
    break
    case 0:
    console.log("FECHANDO...")
    break
    default:
    console.log("Comando não reconhecido")
    break
}
}while(Menu != 0)
