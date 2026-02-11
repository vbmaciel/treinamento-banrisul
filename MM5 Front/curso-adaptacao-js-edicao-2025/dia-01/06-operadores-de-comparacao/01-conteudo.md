# Operadores de Comparação

## 1. Operadores de Comparação Básicos (Sintaxe Comum)

| Operador | Significado | Lógica | Exemplo em JS | Resultado |
| :--- | :--- | :--- | :--- | :--- |
| **`>`** | Maior que | Verifica se o valor da esquerda é estritamente maior. | `10 > 5` | `true` |
| **`<`** | Menor que | Verifica se o valor da esquerda é estritamente menor. | `4 < 7` | `true` |
| **`>=`** | Maior ou igual a | Verifica se é maior ou igual. | `10 >= 10` | `true` |
| **`<=`** | Menor ou igual a | Verifica se é menor ou igual. | `5 <= 10` | `true` |
| **`!=`** | Diferente de (Flexível) | Verifica se os valores são diferentes (ignora o tipo). | `5 != 10` | `true` |

```javascript
let idadeMinima = 18;
let idadeUsuario = 25;

let maiorDeIdade = idadeUsuario >= idadeMinima; // true
let menorQueDez = 5 < 10;                     // true

console.log(maiorDeIdade);
```

## 2. Igualdade em JavaScript

Em JS, temos dois operadores para verificar a igualdade:

### 2.1 Igualdade Flexível `(==)`
Compara apenas o valor, ignorando o tipo de dado.

Problema: Causa coerção de tipo (o JS tenta converter os dados para que eles combinem antes de comparar), o que leva a resultados imprevisíveis.

```javascript
    // Exemplo de Coerção: O JS tenta converter "10" para o número 10
    console.log(10 == "10"); // Resultado: true (Erro lógico!)

    // O JS tenta converter o booleano 'true' para o número 1
    console.log(1 == true);  // Resultado: true (Outro erro lógico!)
```

### 2.2 Igualdade Estrita `(===)`
Compara o valor E o tipo de dado. Garante que a comparação seja feita apenas se os dados forem idênticos em todos os aspectos.

```javascript

// O tipo é diferente (number vs string)
console.log(10 === "10"); // Resultado: false (CORRETO!)

// O tipo é diferente (number vs boolean)
console.log(1 === true);  // Resultado: false (CORRETO!)
```

## 3. Diferença Estrita `(!==)`
De forma correspondente, temos o operador de diferença estrita, que verifica se os valores OU os tipos são diferentes.
| Operador | Lógica | Exemplo em JS | Resultado |
| :--- | :--- | :--- | :--- |
| **`!==`** | Diferente Estrito | Retorna `true` se o valor OU o tipo forem diferentes. | `10 !== "10"` | `true` (Tipos diferentes) |
| **`!=`** | Diferente Flexível | Retorna `true` se o valor for diferente (ignora o tipo). | `10 != "10"` | `false` (Valor é o mesmo) |