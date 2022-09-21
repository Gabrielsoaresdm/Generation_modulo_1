let idade, dias, meses, anos;

idade = prompt("Informe sua idade em dias: " )

anos = parseInt(idade / 365)
meses = parseFloat(anos % 365) / parseInt(30)
dias = parseFloat(idade % 365) % parseInt(30)

alert("Você tem " + anos + " anos de idade, " + meses + " meses e " + dias + " dias.")