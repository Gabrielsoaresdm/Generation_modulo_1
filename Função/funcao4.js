let peso, altura, i;

peso = prompt("Informe seu peso: ");
altura = prompt("Informe sua altura: ");

function imc(p, a){

    i = (p) / (a**2)


if(i < 18.5){
    alert("Seu IMC é: " + i + "\nVocê está classificado como Magro")
}


    return i



}
alert(imc(peso, altura));
