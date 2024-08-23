class Livro{
Título: String
Autor: String
anoPublicacao: Number



constructor(Título: string, Autor: String, anoPublicacao: Number){
    this.Título = Título
    this.Autor = Autor
    this.anoPublicacao = anoPublicacao
}

obterDetalhes(): void{
    console.log(`${this.Título}, ${this.Autor}, ${this.anoPublicacao}`)}
}

let Book:Livro = new Livro ("Shrek!", "William Steig", 1990)

Book.obterDetalhes()