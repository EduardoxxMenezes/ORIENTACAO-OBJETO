import { Game } from "./Jogo"

export class GameLibrary{
    Games: Game[] = []

    AddGame(Game: Game): void{
           this.Games.push(Game)
    }
    RemoveGame(titulo: string): void{
      this.Games = this.Games.filter( games2 => games2.GetName() !== titulo)
             
    }
    ListGames(): string{
        let list = ""
        for(let i = 0; i < this.Games.length; i++ )
            { list += this.Games[i].GetDetails() + "\n"}
        return list
    }
}
