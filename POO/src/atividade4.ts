export class Funcionario{ //atribuindo atributos, características.

        nome: string;
        idade: number; 
        cpf: string;
        tempodeserviço: string;
        tipodetrabalho: string;

    constructor(
        nome: string,
        idade: number, 
        cpf: string,
        tempodeserviço: string,
        tipodetrabalho: string,
    
    ){
        this.nome = nome
        this.idade = idade
        this.cpf = cpf
        this.tipodetrabalho = tipodetrabalho
        this.tempodeserviço = tempodeserviço

    }
        verAtributos(){
            
            console.log(`INFORMAÇÕES PESSOAL DO TRABALHADOR
            \nNome: ${this.nome} 
            \nIdade: ${this.idade}
            \nCPF: ${this.cpf}
            \nTipo de serviço: ${this.tipodetrabalho}
            \nTempo de serviço: ${this.tempodeserviço} `)
        }



}       