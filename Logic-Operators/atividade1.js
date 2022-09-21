let idade, anos, meses, dia;
anos = prompt("Informe sua idade em anos: " )
meses = prompt("Informe sua idade em meses: ")
dias = prompt("Informe sua idade em dias: ")

idade = parseInt(365 * anos) + parseInt(meses * 30) + parseInt(dias)

alert("Você tem " + idade + " dias de vidas. ")
