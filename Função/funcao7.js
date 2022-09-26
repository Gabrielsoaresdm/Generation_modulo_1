let h, m;

h = prompt("Informe as horas: ")
m = prompt("Informe os minutos: ")

function hora(h1, h2){
    
    if(h >= 12){

        h = h - 12

        return("São: " + h + ":" + m + " P.M")

    }else {

         h = h
         return("São: " + h + ":" + m + " A.M")
    }
}
alert(hora(h, m))