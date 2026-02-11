const numero = 472;
let soma = 0;

const unidade = numero % 10;
console.log("Unidade: " + unidade);
soma += unidade;

const dezena = Math.floor(numero / 10) % 10;
console.log("Dezena: " + dezena);
soma += dezena;

const centena = Math.floor(numero / 100) % 10;
console.log("Centena: " + centena);
soma += centena;

console.log("Soma dos dígitos: " + soma);