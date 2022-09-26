let celsius, fahrenheit;

celsius = prompt("Informe a temperatura em Celsius para converter para Fahrenheit: ");

function temp(c){

    fahrenheit = parseFloat(c) * parseFloat(1.8) + parseInt(32)

    return fahrenheit
}
alert(temp(celsius));
