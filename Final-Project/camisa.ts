import { Roupa } from "./projeto";

export class Camisa extends Roupa{

    constructor(marca: string, cor: string, tamanho: string, preco: number){
        super(marca, cor, tamanho, preco)


    }
    dadosCamisa(){
        console.log(`Informações de camisa:
        \nMarca: ${this.marca}
Cor: ${this.cor}
Tamanho: ${this.tamanho}
Preço: ${this.preco}`)
    }

}
