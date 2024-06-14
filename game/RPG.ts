export class guerreiro{

    Nome: string 
    tipo: string 
    forca: number 
    saude: number 
    heal: number
    constructor(name: string, type: string, force: number, health: number, heal:number)
    {
this.Nome = name
this.tipo = type
this.forca = force
this.saude = health
this.heal = heal
    }
    descricao(): void{
        console.log("só mais um cara inutil.")
    }
    ataque(inimigo): void{
        inimigo.saude = inimigo.saude - this.forca
        console.log("MONSTRO recebeu ", this.forca, "de dano!")
    }
    suicidio(): void{
        this.saude = this.saude - 1000
        console.log("você se matou.")
    }
    curar(): void{
        this.saude = this.saude + this.heal
    }
}
export class monster{

    nome: string
    force: number
    saude: number
    constructor(nome: string, force: number, saude: number)
    {
        this.nome = nome
        this.force = force
        this.saude = saude
    }
    descricao(): void{
        console.log("um bixo, tavez faça alguma coisa")
    }
    ataque(inimigo): void{
        inimigo.saude = inimigo.saude - this.force
        console.log("Guerreiro recebeu", this.force, " de dano!")
    }
}