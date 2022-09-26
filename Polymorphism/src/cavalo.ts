import { Animal } from "./animal";

export class Cavalo extends Animal{

    constructor(
        especie: string,
        tipo: string,
        idade: number,
        nome: string


        ){
            super(especie, tipo, idade, nome)

        }

    verDados():void{
            console.log(`\nNome: ${this.nome}
Espécie: ${this.especie}
Tipo: ${this.tipo}
Idade: ${this.idade}`)
        }
    emitirSom():void{
        console.log(`\nEmitindo Som.`)

    }


}