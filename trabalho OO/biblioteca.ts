import { game } from "./Jogo"

export class gameLibrary{
    games: game[]
    constructor(){
    }

    addGame(game: game): void{
        this.games.push()
    }
    removeGame(titulo: string): void{
        for(let i = this.games.length; i > 0; i-- )
            { if(this.games[i].getName() == titulo)
                {this.games.splice(i,1)}
            }
    }
    listGames(): string{
        let list = ""
        for(let i = this.games.length; i > 0; i-- )
            { list +=this.games[i] + " \n \n"}
        return list
    }
}