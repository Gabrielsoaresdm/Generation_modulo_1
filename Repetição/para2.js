let numero=0, resultado=0;



    for(numero = 1; numero <=500; numero++){
        if(numero % 3 == 0 && numero % 2 != 0){
            resultado = resultado + numero
            
        }
    }
    alert("A soma de todos os números ímpares multiplos de 3 menores que 500 é: " + resultado)