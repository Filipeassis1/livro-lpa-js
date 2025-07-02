// ler salario e tempo de empresa

const prompt = require('prompt-sync')();

const salario = Number(prompt('Seu salario: '))
let anoDeEmpresa = Number(prompt('Anos de empresa: '))


let quadrenio = Math.floor( anoDeEmpresa / 4) ;

let acrescimo = salario * quadrenio / 100; 

console.log(`voce tem ${anoDeEmpresa} anos de empresa, com um salario base de ${salario}`);
console.log(`voce ficou ${quadrenio} quadrenios na empresa, e o seu salario sera de ${salario + acrescimo}`)