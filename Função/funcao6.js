let taxa, custo, soma;

custo = prompt("Informe o valor de custo do produto para implementar a taxa de imposto: ")
taxa = prompt("Informe o valor da taxa de imposto que deseja implementar no preço de custo do produto: ")

function somaimposto(c, t){

    soma = parseFloat(taxa/100) * parseFloat(custo) + parseFloat(custo)

    return ("O imposto sobre o produto é de: " + soma)
}
alert(somaimposto(custo, taxa))