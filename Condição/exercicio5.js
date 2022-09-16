let indice

indice = prompt("Informe o índice de poluição entre as indústrias de 3 grupos: ")

if(indice >= 0.05 && indice <= 0.29){

    alert("O índice de poluição está nos parâmetros.")

}else if(indice >= 0.3 && indice <= 0.4 ){
    alert("Suspensão das atividades das indústrias do grupo 1.")
}else if(indice >= 0.4 && indice <= 0.5){
    alert("Suspensão das atividades das indústrias do grupo 1 e 2.")

}else{
    alert("suspesão das atividades de todos os grupos.")
}