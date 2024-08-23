class people{
    name: string
    age: number
    constructor(name: string, age: number)
    {
        this.name = name
        this.age = age
    }
     sayHello(): void{}
}
class crianca extends people{

    sayHello(): void {console.log(`Hello Little one, ${this.name}, its your birthday, isn't it? ${this.age}, years old, well... congratulations!`)}
}
class adulto extends people{
    sayHello(): void {console.log(`Hello! ${this.name}, it is a great day isn't it? you are ${this.age} years old, am i right?`)}
}
class idoso extends people{
    sayHello(): void {console.log(`hello, ${this.name}, good morning, today youre completing${this.age}... im sorry. `)}
}
let human = new people("edisom",18)
let kid = new crianca("larriso", 9)
let medium = new adulto("fabiano", 54)
let velho = new idoso("sla",193)


human.sayHello()
kid.sayHello()
medium.sayHello()
velho.sayHello()

class livro
{
    titulo: string
    ano:  number
    autor: string
    constructor(titulo: string, ano: number, autor: string)
    { 
    this.titulo = titulo
    this.ano = ano
    this.autor = autor
    }
    obterDetalhes(): void{
        console.log(`TITULO: ${this.titulo}, AUTOR: ${this.autor}, ANO: ${this.ano}`)
    }
}

let livrinho = new livro ("as aventuras magicas de joaninha e suas amigas 2: uma nova aventura, de novo!", 1992, "Katiano Ferbeus")
livrinho.obterDetalhes()