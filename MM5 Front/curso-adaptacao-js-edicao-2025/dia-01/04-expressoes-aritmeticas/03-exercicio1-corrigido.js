let num1 = 10;
let num2 = 5;

const soma = num1 + num2;
console.log("Soma: " + num1 + " + " + num2 + " = " + soma);

const subtracao = num1 - num2;
console.log("Subtração: " + num1 + " - " + num2 + " = " + subtracao);

const multiplicacao = num1 * num2;
console.log("Multiplicação: " + num1 + " * " + num2 + " = " + multiplicacao);

const divisao = num1 / num2;
console.log("Divisão: " + num1 + " / " + num2 + " = " + divisao);

const resto = num1 % num2;
console.log("Resto (Módulo): " + num1 + " % " + num2 + " = " + resto);

num2 = 0;
const resultadoDivisaoPorZero = num1 / num2;
console.log("Divisão por Zero: " + num1 + " / " + 0 + " = " + resultadoDivisaoPorZero);

num1 = 0;
const resultadoZeroPorZero = num1 / num2;
console.log("Divisão Zero por Zero: " + 0 + " / " + num1 + " = " + resultadoZeroPorZero);

