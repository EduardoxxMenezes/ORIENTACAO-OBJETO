export interface Aluno {
    matricula: number;
    nome: string;
    notaprova1: number;
    notaprova2: number;
    notatrabalho: number;

    media(): number;
    final(): number;
}

export class Aluno implements Aluno {
    matricula: number;
    nome: string;
    notaprova1: number;
    notaprova2: number;
    notatrabalho: number;
    constructor(matricula: number, nome: string, notaprova1: number, notaprova2: number, notatrabalho: number) {
        this.matricula = matricula;
        this.nome = nome;
        this.notaprova1 = notaprova1;
        this.notaprova2 = notaprova2;
        this.notatrabalho = notatrabalho;
    }
    media(): number {
        let media = (this.notaprova1 + this.notaprova2) / 2;
        return media
    }
    final(): number {
        let media = (this.notaprova1 + this.notaprova2 + this.notatrabalho) / 3;
        return media
    }
}
let alunow = new Aluno(1, 'jefersom', 3, 5, 9);
console.log(alunow.media())
console.log(alunow.final)