"use strict";
exports.__esModule = true;
exports.Client = void 0;
var Client = /** @class */ (function () {
    function Client(nome, cpf, idade, endereço, cep) {
        this.nome = nome;
        this.cpf = cpf;
        this.idade = idade;
        this.endereço = endereço;
        this.cep = cep;
    }
    Client.prototype.verInformacoes = function () {
        console.log("Seu nome \u00E9: ".concat(this.nome, "\n        \nSeu cpf \u00E9: ").concat(this.cpf, "\n        \nSua idade \u00E9: ").concat(this.idade, "\n        \nSeu endere\u00E7o \u00E9: ").concat(this.endereço, "\n        \nSeu cep \u00E9: ").concat(this.cep));
    };
    return Client;
}());
exports.Client = Client;
