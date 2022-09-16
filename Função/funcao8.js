let n1, n2;

n1 = prompt("Informe um número para o cálculo: ")
n2 = prompt("Informe um outro número para o cálculo: ")

function calculo(a, b){

    soma = parseInt(a) + parseInt(b)
    sub = parseInt(a) - parseInt(b)
    mult = parseInt(a) * parseInt(b)
    div = parseInt(a) / parseInt(b)
    
   
   

    return(a + " + " + b + " = " + soma + "\n" + 
    a + " - " + b + " = " + sub + "\n" + 
    a + " * " + b + " = " + mult + "\n" +
    a + " / " + b + " = " + div)
}
console.log(calculo(n1, n2))