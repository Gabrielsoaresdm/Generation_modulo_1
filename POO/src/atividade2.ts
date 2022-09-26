export class Aviao{

        painel: string;
        cabine: string;
        assentos: number;
        asas: string;      

    constructor(

        painel: string,
        cabine: string,
        assentos: number,
        asas: string, 

    ){
        this.painel = painel;
        this.cabine = cabine;
        this.assentos = assentos;
        this.asas = asas;
    }
    verAtribuições(){
            console.log(`Painel: ${this.painel} 
            \nCabine: ${this.cabine}
            \nAssento: ${this.assentos}
            \nAsas: ${this.asas}`)
    }

}