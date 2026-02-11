# Estruturas de Repetição 

As estruturas de repetição (ou *loops*) são fundamentais para executar um bloco de código várias vezes. 

As três estruturas clássicas são:
* `for`
* `while`
* `do...while`

---

## 1. A Estrutura `for`

O `for` é ideal quando você sabe exatamente quantas vezes a repetição deve ocorrer. Sua sintaxe é a mesma, composta por três partes: inicialização, condição e incremento/decremento.

### Sintaxe

```javascript
for (inicializacao; condicao; incremento/decremento) {
    // Código a ser executado enquanto a condição for verdadeira
}
```

### Exemplo
```javascript
// Exemplo: Imprimindo números de 0 a 9
for (let i = 0; i < 10; i++) {
    console.log(`O valor de i é: ${i}`);
}
```

## 2. A Estrutura `while`

O `while` é usado quando você não sabe o número exato de repetições e precisa continuar o loop enquanto uma condição for verdadeira.

### Sintaxe
```javascript
while (condicao) {
    // Código a ser executado (pode nunca ser executado)
}
```

### Exemplo
```javascript
// Exemplo: Processando dados até que o status mude
let processamentoConcluido = false;
let tentativas = 0;

while (processamentoConcluido === false && tentativas < 5) {
    console.log("Tentando processar...");
    tentativas++;
    
    // Simulação de uma função que processa e retorna true/false
    processamentoConcluido = ProcessarDados(); 
}
```

## 3. A Estrutura `do...while`

O `do...while` garante que o bloco de código seja executado **pelo menos uma vez**, porque a condição é verificada **somente ao final** da iteração.

### Sintaxe 

```javascript
// Sintaxe:
do {
    // Código a ser executado (executa pelo menos uma vez)
} while (condicao); // Ponto e vírgula final é obrigatório no do...while
```

### Exemplo
```javascript
// Exemplo: Sempre pedir uma entrada ao usuário, pelo menos uma vez
let senha;
do {
    // Simula a captura de senha
    senha = prompt("Digite sua senha (mínimo 6 caracteres):"); 
} while (senha.length < 6);

console.log("Senha válida.");
```

## 4. Estruturas de Repetição Modernas em JS

O JavaScript moderno oferece estruturas mais limpas e otimizadas para trabalhar com coleções de dados (como arrays e objetos).

### 4.1 `for...of`: 
Usado para iterar sobre os **valores** de coleções iteráveis (como Arrays ou Strings). É muito mais limpo do que o `for` tradicional para essa finalidade.
```javascript
const frutas = ["Maçã", "Banana", "Uva"];
for (const fruta of frutas) {
    console.log(fruta); // Imprime: Maçã, Banana, Uva
}
```

### 4.2 `forEach` (Método de Array):
É o método mais comum para percorrer arrays. Ele executa uma função de *callback* para cada elemento do array.
```javascript
const numeros = [1, 2, 3];
numeros.forEach(function(n) {
    console.log(n * 2); // Imprime: 2, 4, 6
});
 ```

 > Uma função *callback* é simplesmente uma função que é **passada como argumento** para outra função. Ela é projetada para ser executada ("chamada de volta") em um momento posterior, geralmente pela função que a recebeu (neste caso, o `forEach` chama a função para cada item do array).