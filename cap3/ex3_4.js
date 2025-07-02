const prompt = require('prompt-sync')();

let kgRacao = Number(prompt('informe quantos kg de racao: '))

let consumo = Number(prompt('consumo diario (gr): '))


const pesoGr = kgRacao * 1000

let duracao = Math.floor(pesoGr / consumo);

let sobra = pesoGr % duracao;

console.log(`Duracao: ${duracao} dias`)
console.log(`Sobra: ${sobra}gr`)

