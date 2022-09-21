import { Animal } from "./animal";

export class Cachorro extends Animal{


    constructor(

        especie: string,
        tipo: string,
        idade: number,
        nome: string



        ){
            super(especie, tipo, idade, nome)

        }

    verDados():void{
        console.log(`Nome: ${this.nome}
        \nEspécie: ${this.especie}
        \nTipo: ${this.tipo}
        \nIdade: ${this.idade}`)
    }
    emitirSom():void{
        console.log(`Emitindo Som.`)
    }corre():void{
        console.log(`Correndo.`)
    }
}