let rl = require('readline-sync')


export abstract class Game{
   private Name: string
   private Genre: string
   private AgeClass: number
    constructor(name: string, genre: string, ageClass: number){
        this.Name = name
        this.Genre = genre
        this.AgeClass = ageClass
    }
    public GetName(): string{
        return this.Name
    }
    public SetName(): string{
        let name2 = rl.question("Qual e o nome do jogo? \n")
        return name2
    }
    public GetGenre(): string{
        return this.Genre
    }
    public SetGenre(): string{
        let Genre2 = rl.question("Qual é o genero do jogo \n")
        return Genre2
    }
    public GetAgeClass(): number{
        return this.AgeClass
    }
    public SetAgeClass(): string{
        let Age2 = rl.question("Qual e a classe indicativa do jogo? \n")
        return Age2
    }

    public abstract GetDetails(): string;
    public abstract SetDetails(): void;
}



export class VideoGame extends Game{
    private Plat: string
    constructor(Name: string, Genre: string, AgeClass: number, Plat: string){
        super(Name,Genre,AgeClass)
        this.Plat = Plat
    }
   public  GetDetails(): string {
        let eletronicDetails = `Nome do jogo: ${this.GetName()} \n gênero: ${this.GetGenre()} \n classificação etária: ${this.GetAgeClass()} \n plataforma: ${this.Plat} `
        return eletronicDetails
    }
     public SetDetails(): void {
        this.SetName()
        this.SetGenre()
        this.SetAgeClass()

    }
}

export class BoardGames extends Game{
    private playerNum: number
    constructor(name: string, genre: string, ageClass: number, playerNum: number){
        super(name,genre,ageClass)
        this.playerNum = playerNum
    }
   public GetDetails(): string{
        let boardDetails =  `Nome do jogo: ${this.GetName()} \n gênero: ${this.GetGenre()} \n classificação etária: ${this.GetAgeClass()} \n número de jogadores: ${this.playerNum}  \n`
        return boardDetails
    }
    public SetDetails(): void {
        this.SetName()
        this.SetGenre()
        this.SetAgeClass()

    }
}


let a = new VideoGame("","",0,"")