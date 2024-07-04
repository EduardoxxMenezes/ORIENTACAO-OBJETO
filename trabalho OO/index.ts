

import { game } from "./Jogo";
import {videoGame} from "./Jogo";
import { boardgames } from "./Jogo";
import { gameLibrary } from "./biblioteca";

const library = new gameLibrary()

let Shrek_Sim =new videoGame("Shrek_Simulator","Aventura",18,"Todas as plataformas")
library.addGame(Shrek_Sim)
library.listGames()
let Chess = new boardgames("Xadrez","estratégia",16,2)
library.addGame(Chess)
library.listGames()
library.removeGame("Xadrez")


//MENU//

