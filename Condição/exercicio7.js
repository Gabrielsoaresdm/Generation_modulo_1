let area, base, altura

base = prompt("Informe o valor da base de do triângulo para calcular a área: ")
altura = prompt("Informe o valor da altura de do triângulo para calcular a área: ")

if(base < 0 && altura < 0){
    alert("Os valores são inválidos para o cálculo da área.")

}else{
    area = (base * altura) / 2
    alert("A área do triângulo é: " + area)
}