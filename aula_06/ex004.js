var nome = prompt("Qual seu nome: ")
document.write(
  `Olá <strong>${nome}</strong>! Seu nome tem ${nome.length} letras.<br>`
) // Escrever na tela
document.write(`Seu nome em maisculas é ${nome.toUpperCase()}<br>`)
document.write(`Seu nome em minusculas é ${nome.toLowerCase()}`)

var n1 = 1543.5
alert(n1.toFixed(2)) // Colocar 2 casas decimais
alert(n1.toFixed(2).replace(".", ",")) // Mudar de . para ,
alert(n1.toLocaleString("pt-BR", { style: "currency", currency: "EUR" })) // Para aparecer simbolo de euro
alert(n1.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }))
alert(n1.toLocaleString("pt-BR", { style: "currency", currency: "USD" }))
