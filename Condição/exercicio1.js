let pesotomate, excesso, multa;

pesotomate = prompt("Informe o peso da caixa de tomate (multa acima de 50kg): ")

if(pesotomate > 50){
    excesso = pesotomate - 50
    multa = excesso * 4.0
    alert("O excesso é de " + excesso + " kilos." 
    + "\nO valor da multa é de: " + multa + "R$");

}else{
        multa = 0
        excesso = 0
        alert("Não há multas.");
}