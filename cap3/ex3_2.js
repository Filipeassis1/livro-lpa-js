const prompt = require("prompt-sync")();

let veiculo = prompt('Veiculo: ')
let preco = Number(prompt('Preco $: '))

let entrada = preco * .50;
let parcela = entrada / 12;

console.log(`Promocao: ${veiculo}`)
console.log(`Entrada de: ${entrada.toFixed(2)}`)
console.log(`Parcelas de: ${parcela.toFixed(2)}`)