export interface Data {
    dia: number;
    mes: number;
    ano: number;
    compara(outradata: Data): string;
    getdia(): number;
    getmes(): number;
    getmesExtenso(): string;
    getano(): number;
    isbissexto(): boolean;
    clone(): Data;
}

export class Data implements Data {
    dia: number;
    mes: number;
    ano: number;
    constructor(dia: number, mes: number, ano: number) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
    compara(outradata: Data): string {
        let diferencaDia
        let diferencames
        let diferencaano
        let identificabilidade = false

        if (this.dia == outradata.dia && this.mes == outradata.mes && this.ano == outradata.ano) {
            identificabilidade = true
        }

        if (this.dia >= outradata.dia) {
            diferencaDia = this.dia - outradata.dia;
        }
        else { diferencaDia = outradata.dia - this.dia };

        if (this.mes >= outradata.mes) {
            diferencames = this.mes - outradata.mes;
        }
        else { diferencaDia = outradata.mes - this.mes }
        if (this.ano >= outradata.ano) {
            diferencaano = this.ano - outradata.ano;
        }
        else { diferencaano = outradata.ano - this.ano }

        let diferencaFinal = `DIFERENÇA DE DIAS:  ${diferencaDia} \n DIFERENÇA DE MESES: ${diferencames} \n DIFERENÇA ANO: ${diferencaano} \n SÃO DATAS DIFERENTES.`
        return diferencaFinal;
    }
    getdia(): number {
        let dia = this.dia
        return dia;
    }
    getmes(): number {
        let mes = this.mes
        return mes;
    }
    getmesExtenso(): string {
        let mes = this.mes
        let extenso = ''
        switch (mes) {
            case 1: extenso = "janeiro"
                break
            case 2: extenso = "fevereiro"
                break
            case 3: extenso = "março"
                break
            case 4: extenso = "abril"
                break
            case 5: extenso = "maio"
                break
            case 6: extenso = "junho"
                break
            case 7: extenso = "julho"
                break
            case 8: extenso = "agosto"
                break
            case 9: extenso = "setembro"
                break
            case 10: extenso = "outubro"
                break
            case 11: extenso = "novembro"
                break
            case 12: extenso = "Dezembro"
                break
            default: extenso = "NÃO RECONHECIDO."
        }
        return extenso;
    }
    getano(): number {
        let ano = this.ano
        return ano;

    }
    isbissexto(): boolean {
        let is = false
        if (this.ano % 4 && this.ano % 100 != 0) {
            is = true
        } else { is = false };
        return is;
    }
    clone(): Data {
        let cone = new Data(this.dia, this.mes, this.ano)
        return cone
    }

}

let datos = new Data(12, 4, 2008)

console.log(datos.isbissexto())
console.log(datos.clone())
console.log(datos.getmesExtenso())
console.log(datos.getdia())
console.log(datos.getmes())
console.log(datos.getano())
