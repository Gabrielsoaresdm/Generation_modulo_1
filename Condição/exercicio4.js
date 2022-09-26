let numero

numero = prompt("Escreva um número a ser caracterizado: ")

    if(numero > 0 && numero % 2 == 0){
        alert("O numero " + numero + " é par e positivo.")

    }else if(numero > 0 && numero % 2 == 1){
        alert("O número " + numero + " é impar e positivo.")
    }else if(numero < 0 && numero % 2 ==0){
        alert("O número " + numero + " é par e negativo.")
    }else{
        alert("O número " + numero + " é impar e negativo. ")
    }
