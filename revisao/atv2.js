"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Data = void 0;
var Data = /** @class */ (function () {
    function Data(dia, mes, ano) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
    Data.prototype.compara = function (outradata) {
        var diferencaDia;
        var diferencames;
        var diferencaano;
        var identificabilidade = false;
        if (this.dia == outradata.dia && this.mes == outradata.mes && this.ano == outradata.ano) {
            identificabilidade = true;
        }
        if (this.dia >= outradata.dia) {
            diferencaDia = this.dia - outradata.dia;
        }
        else {
            diferencaDia = outradata.dia - this.dia;
        }
        ;
        if (this.mes >= outradata.mes) {
            diferencames = this.mes - outradata.mes;
        }
        else {
            diferencaDia = outradata.mes - this.mes;
        }
        if (this.ano >= outradata.ano) {
            diferencaano = this.ano - outradata.ano;
        }
        else {
            diferencaano = outradata.ano - this.ano;
        }
        var diferencaFinal = "DIFEREN\u00C7A DE DIAS:  ".concat(diferencaDia, " \n DIFEREN\u00C7A DE MESES: ").concat(diferencames, " \n DIFEREN\u00C7A ANO: ").concat(diferencaano, " \n S\u00C3O DATAS DIFERENTES.");
        return diferencaFinal;
    };
    Data.prototype.getdia = function () {
        var dia = this.dia;
        return dia;
    };
    Data.prototype.getmes = function () {
        var mes = this.mes;
        return mes;
    };
    Data.prototype.getmesExtenso = function () {
        var mes = this.mes;
        var extenso = '';
        switch (mes) {
            case 1:
                extenso = "janeiro";
                break;
            case 2:
                extenso = "fevereiro";
                break;
            case 3:
                extenso = "março";
                break;
            case 4:
                extenso = "abril";
                break;
            case 5:
                extenso = "maio";
                break;
            case 6:
                extenso = "junho";
                break;
            case 7:
                extenso = "julho";
                break;
            case 8:
                extenso = "agosto";
                break;
            case 9:
                extenso = "setembro";
                break;
            case 10:
                extenso = "outubro";
                break;
            case 11:
                extenso = "novembro";
                break;
            case 12:
                extenso = "Dezembro";
                break;
            default: extenso = "NÃO RECONHECIDO.";
        }
        return extenso;
    };
    Data.prototype.getano = function () {
        var ano = this.ano;
        return ano;
    };
    Data.prototype.isbissexto = function () {
        var is = false;
        if (this.ano % 4 && this.ano % 100 != 0) {
            is = true;
        }
        else {
            is = false;
        }
        ;
        return is;
    };
    Data.prototype.clone = function () {
        var cone = new Data(this.dia, this.mes, this.ano);
        return cone;
    };
    return Data;
}());
exports.Data = Data;
var datos = new Data(12, 4, 2008);
console.log(datos.isbissexto());
console.log(datos.clone());
console.log(datos.getmesExtenso());
console.log(datos.getdia());
console.log(datos.getmes());
console.log(datos.getano());
