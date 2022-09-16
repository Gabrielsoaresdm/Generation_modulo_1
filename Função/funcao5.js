// 1 - Faça um programa que recebe três números do usuário, e identifica o 
// maior através de uma função e o 
// menor número através de outra função.

let n1, n2, n3, maior, menor;

n1 = prompt("Informe um número: ");
n2 = prompt("Informe outro um número: ");
n3 = prompt("Informe outro um número: ");

function maiornumero(x1,x2,x3){

    if(n1 > n2 & n1 > n3){
        maior = n1
    }else if(n2 > n1 & n2 > n3){
        maior = n2
    }else if(n3 > n1 & n3 > n2){
        maior = n3
    }

    return ("O maior número é : " + maior)
}
alert(maiornumero(n1,n2,n3))

function menornumero(y1, y2, y3){

    if (n1 < n2 & n1 < n3){
        menor = n1
    }else if (n2 < n1 & n2 < n2){
        menor = n2
    }else {
        menor = n3
    }
        return ("O menor número é: " + menor)
}
alert(menornumero(n1,n2,n3))