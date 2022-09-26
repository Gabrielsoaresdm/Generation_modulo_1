export abstract class Roupa{
    marca: string;
    cor: string;
    tamanho: string;
    preco: number;


    constructor(marca: string, cor: string, tamanho: string, preco: number){

        this.marca = marca;
        this.cor = cor;
        this.tamanho = tamanho;
        this.preco = preco;

    }
    

}