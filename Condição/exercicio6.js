let idade;

idade = prompt("Informe sua idade para classificação de nadador: ");


if(idade < 5){
    alert("Você é muito jovem para competir. ")
} else if(idade >= 5 && idade <= 7){
    alert("Você está classificado na categoria Infantil A.")
} else if(idade >= 8 && idade <= 11){
    alert("Você está classificado na categoria Infantil B.")
} else if(idade >=12 && idade <= 13){
    alert("Você está classificado na categoria Juvenil A.")
} else if(idade >= 14 && idade <= 17){
    alert("Você está classificado na categoria Juvenil B.")
}else{
    alert("Você está classificado na categoria Adulto. ")
};

