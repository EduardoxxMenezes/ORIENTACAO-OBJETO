
export abstract class game{
   private name: string
   private genre: string
   private ageClass: number
    constructor(name: string, genre: string, ageClass: number){
        this.name = name
        this.genre = genre
        this.ageClass = ageClass
    }
    public getName(): string{
        return this.name
    }
    public getGenre(): string{
        return this.genre
    }
    public getAgeClass(): number{
        return this.ageClass
    }

    public abstract getDetails(): string;
}



export class videoGame extends game{
    private plat: string
    constructor(name: string, genre: string, ageClass: number, plat: string){
        super(name,genre,ageClass)
        this.plat = plat
    }
   public  getDetails(): string {
        let eletronicDetails = `Nome do jogo: ${this.getName()} \n gênero: ${this.getGenre()} \n classificação etária: ${this.getAgeClass()} \n plataforma: ${this.plat} `
        return eletronicDetails
    }
}

export class boardgames extends game{
    private playerNum: number
    constructor(name: string, genre: string, ageClass: number, playerNum: number){
        super(name,genre,ageClass)
        this.playerNum = playerNum
    }
   public getDetails(): string {
        let boardDetails =  `Nome do jogo: ${this.getName()} \n gênero: ${this.getGenre()} \n classificação etária: ${this.getAgeClass()} \n número de jogadores: ${this.playerNum} `
        return boardDetails
    }
}


let a = new videoGame("","",0,"")