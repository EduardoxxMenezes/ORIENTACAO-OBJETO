let rl = require('readline-sync')

import { Console } from "console";
import { Game } from "./Jogo";
import {VideoGame} from "./Jogo";
import { BoardGames } from "./Jogo";
import { GameLibrary } from "./biblioteca";

const library = new GameLibrary()

let Shrek_Sim =new VideoGame("Shrek_Simulator","Aventura",18,"Todas as plataformas")
let Chess = new BoardGames("Xadrez","estratégia",16,2)
let sla = new BoardGames("sla","sla",12,12)
library.AddGame(Shrek_Sim)
library.AddGame(Chess)
library.AddGame(sla)
console.log(library.ListGames())

console.log("Xadrez")
library.RemoveGame("Xadrez")
console.log(library.ListGames())


