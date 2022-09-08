let precocusto, valorvenda, acrescimo

precocusto = prompt("Informe o preço de custo do produto: ")
acrescimo = prompt("Informe o acrescimo em porcentagem em cima do preço de custo do produto: ")

valorvenda =  parseInt(precocusto) + precocusto * acrescimo/100
alert("O valor de venda é: " + valorvenda)

