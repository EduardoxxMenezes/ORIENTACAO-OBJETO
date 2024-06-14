"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.monster = exports.guerreiro = void 0;
var guerreiro = /** @class */ (function () {
    function guerreiro(name, type, force, health, heal) {
        this.Nome = name;
        this.tipo = type;
        this.forca = force;
        this.saude = health;
        this.heal = heal;
    }
    guerreiro.prototype.descricao = function () {
        console.log("só mais um cara inutil.");
    };
    guerreiro.prototype.ataque = function (inimigo) {
        inimigo.saude = inimigo.saude - this.forca;
        console.log("MONSTRO recebeu ", this.forca, "de dano!");
    };
    guerreiro.prototype.suicidio = function () {
        this.saude = this.saude - 1000;
        console.log("você se matou.");
    };
    guerreiro.prototype.curar = function () {
        this.saude = this.saude + this.heal;
    };
    return guerreiro;
}());
exports.guerreiro = guerreiro;
var monster = /** @class */ (function () {
    function monster(nome, force, saude) {
        this.nome = nome;
        this.force = force;
        this.saude = saude;
    }
    monster.prototype.descricao = function () {
        console.log("um bixo, tavez faça alguma coisa");
    };
    monster.prototype.ataque = function (inimigo) {
        inimigo.saude = inimigo.saude - this.force;
        console.log("Guerreiro recebeu", this.force, " de dano!");
    };
    return monster;
}());
exports.monster = monster;
