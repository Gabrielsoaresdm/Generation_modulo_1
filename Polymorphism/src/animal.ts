export abstract class Animal{
        especie: string;
        tipo: string;
        idade: number;
        nome: string;

    constructor(
        especie: string,
        tipo: string,
        idade: number,
        nome: string
    ){
        this.especie = especie
        this.tipo = tipo
        this.idade = idade
        this.nome = nome
    }

        dorme():void{ console.log(`Dormindo.`)
        }
        caca():void{console.log(`Caçando.`)
        }
        corre():void{console.log(`Correndo.`)
        }
        

}