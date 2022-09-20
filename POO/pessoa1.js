"use strict";
// // import { Pessoa } from "./src/pessoa";
// // let pessoa1 = new Pessoa(); //criando um objeto com "new" a partir da classe "Pessoa"
exports.__esModule = true;
// // pessoa1.nome = "Gabriel"; //atribuindo um valor a nossa atribuição "nome" do nosso objeto "pessoa1"
// // pessoa1.cpf = "235.568.343-38";
// // pessoa1.idade = 18;
// // pessoa1.telefone = "(21) 96559-2225";
// // console.log(`O nome da pessoa é: ${pessoa1.nome}`) //atributo "nome" para objeto "pessoa1" e mostrar no console
// import { Contabanco } from "./src/contabanco";
// let conta1 = new Contabanco("Gabriel", "005-4","4002-52", 1000);
// conta1.deposito(1000);
// conta1.verSaldo();
var cliente_1 = require("./src/cliente");
var client1 = new cliente_1.Client("Gabriel Soares", "178.335.532.09", 18, "Rua Gabrielle da Silva Pinto", "23028066");
client1.verInformacoes();
