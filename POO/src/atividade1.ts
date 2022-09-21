export class Client {              //atribuindo a classe
     nome: string;
     cpf: string;
     idade: number;
     endereço: string;
     cep: string;

constructor(

     nome: string,
     cpf: string,
     idade: number,
     endereço: string,
     cep: string,
    

){
     this.nome = nome
     this.cpf = cpf
     this.idade = idade
     this. endereço = endereço
     this.cep = cep

}
    verInformacoes(){
        console.log(`Seu nome é: ${this.nome}
        \nSeu cpf é: ${this.cpf}
        \nSua idade é: ${this.idade}
        \nSeu endereço é: ${this.endereço}
        \nSeu cep é: ${this.cep}`)
    }
     
}