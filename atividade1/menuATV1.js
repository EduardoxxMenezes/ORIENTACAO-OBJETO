"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var atv1_1 = require("./atv1");
var console_1 = require("console");
var reader = require('readline-sync');
var menu = true;
var AlunoExiste = false;
var alunoNovo = new atv1_1.Aluno(0, '', 0, 0, 0);
function inserirNotas(matricula, nome) {
    var prova1 = reader.questionInt("Insira a nota da prova1: ");
    var prova2 = reader.questionInt("Insira a nota da prova2: ");
    var trabalho = reader.questionInt("Insira a nota do trabalho: ");
    var alunoNovo = new atv1_1.Aluno(matricula, nome, prova1, prova2, trabalho);
    return alunoNovo;
}
while (menu) {
    console.log("\n        -------------------------------\n        1- Cadastrar Nome e Matr\u00EDcula (ALUNOS)\n        2- Cadastrar Notas (PROFESSORES)\n        3- Verificar M\u00E9dias das Provas(ALUNOS)\n        4- Verificar M\u00E9dia Final (ALUNOS)\n        -------------------------------\n        ");
    var option = reader.questionInt("ESCOLHA: ");
    switch (option) {
        case 1:
            var nomeAluno = reader.question("inserir o nome do aluno.");
            var matriculAluno = reader.questionInt(" N° da matricula.");
            alunoNovo = inserirNotas(matriculAluno, nomeAluno);
            AlunoExiste = true;
            break;
        case 2:
            if (!AlunoExiste) {
                throw new console_1.error("ALUNO INEXISTENTE");
            }
            else {
                alunoNovo = inserirNotas(matriculAluno, nomeAluno);
            }
            break;
        case 3: if (AlunoExiste) {
            console.log(alunoNovo.media());
        }
        else {
            throw new console_1.error("USUARIO INEXISTENTE");
        }
        case 4:
            if (AlunoExiste) {
                alunoNovo.final();
            }
            else {
                throw new console_1.error("USUARIO INEXISTENTE");
            }
            break;
        case 0:
            menu = false;
            process.exit();
            break;
        default: console.log("OPÇÃO NÃO RECONHECIDA.");
    }
}
