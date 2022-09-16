let habitantes, mediafilho, filho, qtdfilho = 0, salario, qtdsalario=0, mediasalario, msalario=0, S100=0, percent=0;


for(habitantes = 1; habitantes <= 20 ; habitantes++){
    
    salario = prompt("Informe quanto você recebe: ");
    filho = prompt("Informe quantos filhos você tem: ");
    
    qtdsalario = parseFloat(qtdsalario) + parseFloat(salario);
    qtdfilho = parseInt(qtdfilho) + parseInt(filho);
    
    if(msalario < salario){
        msalario = parseFloat(salario);
    }
    if(salario <= 100){
            parseFloat(S100++);
    }
    
}
mediafilho = parseInt(qtdfilho) / 20;
mediasalario = parseFloat(qtdsalario) / 20;
percent = parseFloat(S100) / 20 * 100;


alert("A média de filho é: " + parseInt(mediafilho) + "\nA média salarial é: " + parseFloat(mediasalario) 
+ "\nMaior salário: " + msalario
+ "\nPercentual de pessoas com salário até R$100,00: " + percent + "%");


