export class Contabanco {
        titular: string; //atributos da classe
        agencia: string;
        conta: string;
        saldo: number;
        
    constructor(            //validando as informações para utilizar.parâmetros do constructor
        titular: string,
        agencia: string,
        conta: string,
        saldo: number,
    ){
        this.titular = titular
        this.agencia = agencia
        this.conta = conta
        this.saldo = saldo
    }
    
    verSaldo(){     //metodos
        console.log(`O saldo da sua conta é ${this.saldo}`)
    }   

    sacarSaldo(valor: number){      //"valor" parametro do  método= nao precisa ser declarada
        if(valor > 0 && valor <= this.saldo){
            this.saldo -= valor // é a mesma coisa que "saldo = salado - valor"
            console.log(`Saque de R$ ${valor} realizado com sucesso`)
        }else{
            console.log(`Saque de R$ ${valor} impossível de ser realizado`)
        }
        }

    deposito(valor: number){
        
        if(valor>0){
            this.saldo += valor
            console.log(`Deposito de R$ ${valor} realizado com sucesso`)
        }else{
            console.log(`Deposito de R$ ${valor} impossível de ser realizado`)
        }



    }

    





}







