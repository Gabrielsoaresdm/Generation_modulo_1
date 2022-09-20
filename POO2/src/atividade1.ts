export class Patinete{  //atribuindo atributos

        tamanho: string;
        cor: string;
        roda: string;
        freio: string;
        velocidade: string;
        estado: string;

    constructor(
        tamanho: string,
        cor: string,
        roda: string,
        freio: string,
        velocidade: string,
        estado: string,
    ){
        this.tamanho = tamanho;
        this.cor = cor;
        this.roda = roda;
        this.freio = freio;
        this.velocidade = velocidade;
        this.estado = estado;
    }
        verAtributos(){
                console.log(`CARACTERÍSTICAS DO PATINETE
                \nTamanho: ${this.tamanho}
                \nCor: ${this.cor}
                \nRoda: ${this.roda}
                \nFreio: ${this.freio}
                \nVelocidade: ${this.velocidade}
                \nCondição de uso: ${this.estado}`)
            
        }




}