class Gabarito{
    resposta: string[] ;

    constructor(resposta: string[]){
     
        this.resposta = resposta;
    }
} 

export interface Prova {
    gabarito: Gabarito
    
    respostaAluno(resposta: string): void;
    acertos(): number;
    nota(): number;
    maior(outraProva: Prova): number;
}
export class Prova implements Prova{
    gabarito: Gabarito;
    acertos2: boolean[];
   
    
    constructor(gabarito: Gabarito, acertos2: boolean[], ) {
        this.gabarito = gabarito;
        this.acertos2 = acertos2;
       
    }
    
    respostaAluno(resposta: string): void {
        resposta = resposta.toUpperCase()
        let resposta2 = resposta.split(' ')
        for(let i; i < 16; i++){
        if(resposta2[i] == this.gabarito.resposta[i]){
            this.acertos2[i] = true;

        }}

    }
    acertos(): number {
        let acertou = 0;
        for(let i; i < this.acertos2.length; i++){
            if(this.acertos2[i] == true){acertou += 1;}
        }
        return acertou
    }
    nota(): number {
        let notafinal;
        let valor;
        let teste = 0
        for(let i = 0; i < this.acertos2.length; i++){
            teste = i;
            if(i < 11){
                valor = 0.5}}
            if(this.acertos2[teste] == true){
                notafinal += valor;
            }
        
        return notafinal
    }
    maior(outraProva: Prova): number{
        let a = 0;

     if( outraProva.acertos() > this.acertos()){
        a = 1}
    else if(outraProva.acertos() < this.acertos())
    {a = 2}
    else
    {a = -1}
    return a
        
    }
}
let gab1 = new Gabarito(['A','A','A','A','A','A','A','A','A','A','A','A','A','A','A'])
let prov1 = new Prova(gab1,[])
let prov2 = new Prova(gab1,[])
 
prov1.respostaAluno('A B C D E A B C D E A B C D E')
console.log(prov1.acertos())
console.log(prov1.nota())

prov2.respostaAluno('A A A A A A A A A A A A A A A')
console.log(prov2.acertos())
console.log(prov2.nota())

prov1.maior(prov2)




//comparar as respostas do aluno com o gabarito.