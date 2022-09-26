export class ContaBancaria{

    Nome: string;
    Idade: string;
    Cpf: string;
    NumeroConta: string;
    Agencia: string;
    TipoBanco: string;

constructor(
    Nome: string,
    Idade: string,
    Cpf: string,
    NumeroConta: string,
    Agencia: string,
    TipoBanco: string,
){
    this.Nome = Nome
    this.Idade = Idade;
    this.Cpf = Cpf;
    this.NumeroConta = NumeroConta;
    this.Agencia = Agencia;
    this.TipoBanco = TipoBanco;
}
    verAtributos(){
        console.log(`INFORMAÇÕES DA CONTA BANCÁRIA
        \nNome: ${this.Nome}
        \nIdade: ${this.Idade}
        \nCPF: ${this.Cpf}
        \nNumero da Conta: ${this.NumeroConta}
        \nAgência: ${this.Agencia}
        \nNome do Banco: ${this.TipoBanco}`)
    }




}