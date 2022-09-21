export class Pessoadois{
    nome: string;
    cpf: string;
    rg: string;
    cidade: string;


        constructor(
            
            nome: string,
            cpf: string,
            rg: string,
            cidade: string,
      
      ) { 
            this.nome = nome;
            this.cpf = cpf;
            this.rg = rg;
            this.cidade = cidade;
        }

            verDados(){
                console.log(`O nome da pessoa é: ${this.nome}
                \nO CPF é: ${this.cpf}
                \nO RG é: ${this.rg}
                \nO nome da cidade é: ${this.cidade} `);

            }

}