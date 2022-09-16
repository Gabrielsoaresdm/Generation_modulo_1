let horastrab, salario, excesso, salarioexc, total

horastrab = prompt("Informe quantas horas você trabalhou: ")

    salario =  horastrab * 10
    salario = 500
    excesso = (horastrab - 50) * 20
    total = parseInt(excesso) + parseInt(salario)
    

if(horastrab > 50){

alert("Seu salário total é de: " + parseInt(total) + "\nSeu salário excedente é de: " + excesso)
}else{
    alert("Seu salário total é de: " + salario)
}