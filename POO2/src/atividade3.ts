export class Paciente{

        Nome: string;
        Idade: number;
        DataChecagem: string;
        DataInternação: string;
        peso: number;
        altura: number;

    constructor(

        Nome: string,
        Idade: number,
        DataChecagem: string,
        DataInternação: string,
        peso: number,
        altura: number,


    ){
        this.Nome = Nome
        this.Idade = Idade
        this.DataChecagem = DataChecagem
        this.DataInternação = DataInternação
        this.peso = peso
        this.altura = altura
    }
        verAtributos(){
            console.log(`DADOS DO PACIENTE
            \nNome: ${this.Nome}
            \nIdade: ${this.Idade}
            \nPeso: ${this.peso}
            \nAltura: ${this.altura}
            \nData de checagem: ${this.DataChecagem}
            \nData de Internação: ${this.DataInternação}`)
        }
        
}