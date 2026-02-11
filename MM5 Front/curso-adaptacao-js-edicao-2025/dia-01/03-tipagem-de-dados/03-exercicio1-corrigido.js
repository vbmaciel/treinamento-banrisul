const textoNome = "Alice";
console.log(`Variável 'textoNome' é do tipo: ${typeof textoNome}`); 

const idade = 25;
console.log(`Variável 'idade' é do tipo: ${typeof idade}`);  

const estaAtivo = true;
console.log(`Variável 'estaAtivo' é do tipo: ${typeof estaAtivo}`); 

const semValor = null;
console.log(`Variável 'semValor' (null) é do tipo: ${typeof semValor}`);

let indefinido; // Declarada, mas não inicializada
console.log(`Variável 'indefinido' é do tipo: ${typeof indefinido}`);

const usuario = { nome: "Bob", idade: 40 };
console.log(`Variável 'usuario' é do tipo: ${typeof usuario}`); 

const numeros = [1, 5, 9];
console.log(`Variável 'numeros' é do tipo: ${typeof numeros}`)

let valorDinamico = 100;
console.log(`Tipo 1 de 'valorDinamico': ${typeof valorDinamico}`); 

valorDinamico = "Cem";
console.log(`Tipo 2 de 'valorDinamico': ${typeof valorDinamico}`); 

valorDinamico = false;
console.log(`Tipo 3 de 'valorDinamico': ${typeof valorDinamico}`); 