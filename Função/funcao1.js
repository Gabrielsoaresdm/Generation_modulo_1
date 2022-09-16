
let numero, porcentagem, resultado;


numero = prompt("Informe um número para calcular a porcentagem: ");
porcentagem = prompt("Informe o valor da porcentagem: ");

function percent(n, p){

    resultado = parseInt(n) * (parseInt(p)/100)

    return (p + "%" + " de " + n + " é: " + resultado)
}
alert(percent(numero, porcentagem));