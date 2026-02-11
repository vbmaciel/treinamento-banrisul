# Tipagem de dados

O JavaScript é uma linguagem de **tipagem dinâmica**, o que significa que **não é necessário declarar o tipo** de uma variável no momento da criação.  
O tipo é definido automaticamente com base no valor atribuído — e pode até mudar durante a execução do código.

## 1. Tipos Primitivos

Os **tipos primitivos** são os tipos básicos de dados em JavaScript. Eles armazenam valores simples.

| Tipo | Exemplo | Descrição |
|------|----------|-----------|
| **`string`** | `"Olá, mundo!"` ou `'JavaScript'` | Representa textos entre aspas simples ou duplas. |
| **`number`** | `10`, `3.14`, `-42` | Representa números inteiros e decimais. |
| **`boolean`** | `true`, `false` | Representa valores lógicos (verdadeiro ou falso). |
| **`null`** | `null` | Representa a ausência intencional de um valor. |
| **`undefined`** | `undefined` | Indica que uma variável foi declarada, mas não possui valor. |

---

## 2. Tipos Complexos

Além dos tipos primitivos, o JavaScript possui **estruturas de dados compostas**, usadas para armazenar coleções ou informações mais complexas.

| Tipo | Exemplo | Descrição |
|------|----------|-----------|
| **`object`** | `{ nome: "Ana", idade: 25 }` | Estrutura com pares de chave e valor. |
| **`array`** | `[10, 20, 30]` | Lista ordenada de valores. |

---

## 3. Tipagem Dinâmica em Ação

No JavaScript, o tipo de uma variável pode mudar conforme o valor atribuído.  
Isso é útil, mas requer cuidado para evitar erros de lógica.

```javascript
let valor = 42;       // tipo: number
valor = "Quarenta e dois"; // tipo: string
```
> Dica: É importante manter consistência nos tipos utilizados, mesmo que o JavaScript permita trocá-los.

## 4. O Operador `typeof`

O operador `typeof` é uma ferramenta JavaScript que permite **identificar o tipo de dado** que um valor ou uma variável está armazenando em um determinado momento.

Como o JavaScript tem **tipagem dinâmica** (o tipo pode mudar), o `typeof` é crucial para:
1.  **Verificação:** Garantir que uma variável é do tipo esperado (ex: se é um `number` antes de realizar um cálculo).
2.  **Debugging:** Identificar o tipo exato de um valor durante o desenvolvimento.

### Sintaxe e Uso

A sintaxe é simples: `typeof (valor ou variável)`. O resultado é sempre uma string em letras minúsculas (`"string"`, `"number"`, `"boolean"`, etc.).

```javascript
let idade = 30;
console.log(typeof idade); // Saída: "number"

let nome = "João";
console.log(typeof nome); // Saída: "string"
```