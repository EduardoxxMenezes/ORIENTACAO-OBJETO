import { SlowBuffer } from "buffer";
import { Aluno } from "./atv1";
import { error } from "console";
import { NOMEM } from "dns";
let reader = require('readline-sync')
let menu: boolean = true;
let AlunoExiste = false;
let alunoNovo = new Aluno(0, '', 0, 0, 0);

function inserirNotas(matricula: number, nome: string): Aluno {
    let prova1 = reader.questionInt("Insira a nota da prova1: ")
    let prova2 = reader.questionInt("Insira a nota da prova2: ")
    let trabalho = reader.questionInt("Insira a nota do trabalho: ")
    let alunoNovo = new Aluno(matricula, nome, prova1, prova2, trabalho);
    return alunoNovo;
}

while (menu) {
    console.log(`
        -------------------------------
        1- Cadastrar Nome e Matrícula (ALUNOS)
        2- Cadastrar Notas (PROFESSORES)
        3- Verificar Médias das Provas(ALUNOS)
        4- Verificar Média Final (ALUNOS)
        -------------------------------
        `)
    let option = reader.questionInt("ESCOLHA: ")
    switch (option) {
        case 1:
            let nomeAluno = reader.question("inserir o nome do aluno.")
            let matriculAluno = reader.questionInt(" N° da matricula.")
            alunoNovo = inserirNotas(matriculAluno, nomeAluno);
            AlunoExiste = true;
            break
        case 2: if (!AlunoExiste) {
            throw new error("ALUNO INEXISTENTE")
        } else {
            alunoNovo = inserirNotas(matriculAluno, nomeAluno);
        }
            break
        case 3: if (AlunoExiste) {
            console.log(alunoNovo.media())
        } else { throw new error("USUARIO INEXISTENTE") }
        case 4:
            if (AlunoExiste) {
                alunoNovo.final()
            } else { throw new error("USUARIO INEXISTENTE") }
            break
        case 0:
            menu = false
            process.exit()
            break
        default: console.log("OPÇÃO NÃO RECONHECIDA.")
    }
}

