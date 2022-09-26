let numero=0, soma=0, valor=0;

numero = prompt("Digite um número do teclado para fazer a soma: ")

do{
    valor = valor+1
    soma = soma + valor

}while(valor != numero)
alert("A soma de todos os números do teclado até o digitado é: " + soma)