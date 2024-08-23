export interface Data { //interface.
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
    dia: number;// cria o dia.
    mes: number;//cria o mes.
    ano: number;//cria o ano.
    constructor(dia: number, mes: number, ano: number) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
    compara(outradata: Data): string { //mostra a diferença de dias, meses e anos.
        let diferencaDia
        let diferencames
        let diferencaano
        let identificabilidade = false
        let diferencaFinal;

        if (this.dia >= outradata.dia) { //verifica se a data original é maior que a segunda data para não ter numeros negativos. (DIA)
            diferencaDia = this.dia - outradata.dia;
        }
        else { diferencaDia = outradata.dia - this.dia };

        if (this.mes >= outradata.mes) { //verifica se a data original é maior que a segunda data para não ter numeros negativos. (MES)
            diferencames = this.mes - outradata.mes;
        }
        else { diferencames = outradata.mes - this.mes }

        if (this.ano >= outradata.ano) {//verifica se a data original é maior que a segunda data para não ter numeros negativos. (ANO)
            diferencaano = this.ano - outradata.ano;
        }
        else { diferencaano = outradata.ano - this.ano }

        if (diferencaDia == this.dia && diferencaano == this.ano && diferencames == this.mes) { diferencaFinal = `as datas são iguais.` }//verifica se as datas são iguais ou diferentes.
        else {
            diferencaFinal = `DIFERENÇA DE DIAS:  ${diferencaDia} \n DIFERENÇA DE MESES: ${diferencames} \n DIFERENÇA ANO: ${diferencaano} \n SÃO DATAS DIFERENTES.`
        }
        return diferencaFinal;
    }
    getdia(): number { // mostra o dia.
        let dia = this.dia
        return dia;
    }
    getmes(): number { //mostra o mês.
        let mes = this.mes
        return mes;
    }
    getmesExtenso(): string { //fala todos os meses por extenso de uma forma levemente longa.
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
        let ano = this.ano //mostra o ano.
        return ano;

    }
    isbissexto(): boolean { //analisa se o ano é bissexto (se ele for divisivel por 4 e não é divisivel por 100)
        let is = false
        if (this.ano % 4 && this.ano % 100 != 0) {
            is = true
        } else { is = false };
        return is;
    }
    clone(): Data {
        let cone = new Data(this.dia, this.mes, this.ano) //clona todas as informações da data.
        return cone
    }

}