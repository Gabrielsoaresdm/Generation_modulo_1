import { Roupa } from "./projeto";
export class Bermuda extends Roupa{
        constructor(marca: string, cor: string, tamanho: string, preco: number){
            super(marca, cor, tamanho, preco)
        }
        verBermuda(){console.log(`\nInformações de bermuda:
        \nMarca: ${this.marca}
Cor: ${this.cor}
Tamanho: ${this.tamanho}
Preço: ${this.preco}`)}
        

}