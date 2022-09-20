"use strict";
exports.__esModule = true;
exports.Aviao = void 0;
var Aviao = /** @class */ (function () {
    function Aviao(painel, cabine, assentos, asas) {
        this.painel = painel;
        this.cabine = cabine;
        this.assentos = assentos;
        this.asas = asas;
    }
    Aviao.prototype.verAtribuições = function () {
        console.log("Painel: ".concat(this.painel, " \n            \nCabine: ").concat(this.cabine, "\n            \nAssento: ").concat(this.assentos, "\n            \nAsas: ").concat(this.asas));
    };
    return Aviao;
}());
exports.Aviao = Aviao;
