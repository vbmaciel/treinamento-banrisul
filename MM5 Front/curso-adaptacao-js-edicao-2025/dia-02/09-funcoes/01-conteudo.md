# Funções

Funções são o principal mecanismo para organizar e modularizar o código em JavaScript. Elas permitem que você agrupe um bloco de código que executa uma tarefa específica, podendo ser reutilizado em diferentes partes do seu programa.

Em JS, usamos o termo **Função** (em vez de "Método"), mas a lógica é a mesma: elas podem receber dados (parâmetros) e podem ou não retornar um resultado.

---

## 1. Funções Declaradas 

Esta é a forma tradicional e mais próxima da declaração de métodos de outras linguagens.

### 1.1 Estrutura Básica

```javascript
// A palavra-chave 'function' é obrigatória
function NomeFuncao(parametro1, parametro2, ...) { 
    // Corpo da função (bloco de código)
    // ...
    return valor; // Se houver um valor a ser devolvido
}
```

### 1.2 Funções com Retorno (Equivalente ao `int`, `string`, etc.)

Funções que retornam um valor precisam usar a instrução `return` para devolver o dado ao código que a chamou.

```javascript
function Somar(primeiraParcela, segundaParcela) {
    let soma = primeiraParcela + segundaParcela;
    return soma; // Retorna o valor do tipo number
}

// Chamada da função:
let resultado = Somar(10, 5); 
console.log(`O resultado da soma é: ${resultado}`); // Saída: 15
```

### 1.3 Funções Sem Retorno (Equivalente ao `void`)

Funções que apenas executam uma ação (como exibir uma mensagem, alterar um elemento na tela, etc.) e não precisam devolver um resultado explícito.

```javascript
function ExibirMensagem(mensagem) {
    // Apenas executa a ação (imprime no console)
    console.log(mensagem); 
    // Não há 'return'
}

ExibirMensagem("Bem-vindo ao sistema.");
// Não há variável recebendo o valor, apenas a chamada isolada.
```

## 2. Funções de Seta (Arrow Functions)

As **Arrow Functions** são a forma moderna, mais limpa e preferida de escrever funções em JavaScript. A palavra `function` é substituída por uma seta (`=>`) após a lista de parâmetros.

### 2.1 Sintaxe Completa

Usada para funções com múltiplos comandos.

```javascript
const NomeDaFuncao = (param1, param2) => {
    // Código com múltiplas linhas
    let calculo = param1 + param2;
    return calculo;
};
```

### 2.2 Concisão (Retorno Implícito)

Para funções que contêm **apenas uma instrução**, o JavaScript permite omitir as chaves (`{}`) e a palavra-chave `return`. O resultado daquela única expressão será retornado automaticamente.

```javascript
// Retorna (a * b) automaticamente, sem precisar do 'return' explícito
const Multiplicar = (a, b) => a * b; 

let produto = Multiplicar(7, 2); 
console.log(produto); // Saída: 14
```

### 2.3 Parâmetro Único (Ainda Mais Conciso)

Se a função tiver **apenas um parâmetro**, você pode até omitir os parênteses `()` ao redor dele.

```javascript
// Omite os parênteses em volta do 'nome'
const Saudacao = nome => `Olá, ${nome}!`; 

console.log(Saudacao("Alice")); // Saída: Olá, Alice!
```