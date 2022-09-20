"use strict";
exports.__esModule = true;
exports.Contabanco = void 0;
var Contabanco = /** @class */ (function () {
    function Contabanco(//validando as informações para utilizar.parâmetros do constructor
    titular, agencia, conta, saldo) {
        this.titular = titular;
        this.agencia = agencia;
        this.conta = conta;
        this.saldo = saldo;
    }
    Contabanco.prototype.verSaldo = function () {
        console.log("O saldo da sua conta \u00E9 ".concat(this.saldo));
    };
    Contabanco.prototype.sacarSaldo = function (valor) {
        if (valor > 0 && valor <= this.saldo) {
            this.saldo -= valor; // é a mesma coisa que "saldo = salado - valor"
            console.log("Saque de R$ ".concat(valor, " realizado com sucesso"));
        }
        else {
            console.log("Saque de R$ ".concat(valor, " imposs\u00EDvel de ser realizado"));
        }
    };
    Contabanco.prototype.deposito = function (valor) {
        if (valor > 0) {
            this.saldo += valor;
            console.log("Deposito de R$ ".concat(valor, " realizado com sucesso"));
        }
        else {
            console.log("Deposito de R$ ".concat(valor, " imposs\u00EDvel de ser realizado"));
        }
    };
    return Contabanco;
}());
exports.Contabanco = Contabanco;
