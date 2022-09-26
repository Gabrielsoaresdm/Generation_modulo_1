export class Produto{    //atribuindo (celular)

            nome: string;
            tela: number;
            GB: number;
            cor: string;

    constructor(

        nome: string,
        tela: number,
        GB: number,
        cor: string,

    ){
        this.nome = nome
        this.tela = tela
        this.GB = GB
        this.cor = cor

    }
        verCaracteristicas(){
            console.log(`A marca do celular é: ${this.nome}
            \n A tela do celular é de: ${this.tela}
            \n O número de GB do celular é de: ${this.GB}
            \n A cor do celular é: ${this.cor}`)
        }

        
}