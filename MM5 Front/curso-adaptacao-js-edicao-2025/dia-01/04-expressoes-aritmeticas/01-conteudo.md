# Expressões Aritméticas e Operadores

## 1. O que são Expressões Aritméticas?

Em JS, usamos os operadores aritméticos para somar, subtrair, multiplicar, dividir, e calcular o resto de uma divisão.

### 1.1 Principais Operadores

| Operador | Nome | Descrição Lógica | Exemplo em JS | Resultado |
| :--- | :--- | :--- | :--- | :--- |
| **`+`** | Adição | Soma dois valores. | `let res = 5 + 3;` | `8` |
| **`-`** | Subtração | Subtrai um valor de outro. | `let res = 10 - 4;` | `6` |
| **`*`** | Multiplicação | Multiplica dois valores. | `let res = 6 * 3;` | `18` |
| **`/`** | Divisão | Divide um valor pelo outro. | `let res = 10 / 3;` | `3.3333...` |
| **`%`** | Módulo | Retorna o resto da divisão. | `let resto = 10 % 3;` | `1` |

> Em JS, **não há divisão inteira automática**. A divisão (`/`) sempre retorna um número decimal (`number`) se o resultado não for exato, mesmo que ambos os operandos sejam inteiros.

### 1.2 Ordem de Precedência

A ordem das operações segue a matemática tradicional:

1.  Parênteses `()`
2.  Multiplicação (`*`), Divisão (`/`), Módulo (`%`)
3.  Adição (`+`), Subtração (`-`)

```javascript
let resultado1 = 5 + 3 * 2;  // 3 * 2 = 6, depois 5 + 6. Resultado: 11
let resultado2 = (5 + 3) * 2; // (5 + 3) = 8, depois 8 * 2. Resultado: 16
```

## 2. Operadores de Atribuição

Podemos combinar operadores aritméticos com o operador de atribuição (`=`) para simplificar o código.

**Lógica:** São atalhos sintáticos que reduzem a repetição do nome da variável.

| Operador | Significado | Exemplo Simplificado | Exemplo Completo | Resultado |
| :--- | :--- | :--- | :--- | :--- |
| **`+=`** | Adição e atribuição | `numero += 3;` | `numero = numero + 3;` | `8` (se `numero` era 5) |
| **`-=`** | Subtração e atribuição | `numero -= 2;` | `numero = numero - 2;` | `6` (se `numero` era 8) |
| **`*=`** | Multiplicação e atribuição | `numero *= 4;` | `numero = numero * 4;` | `24` (se `numero` era 6) |
| **`/=`** | Divisão e atribuição | `numero /= 6;` | `numero = numero / 6;` | `4` (se `numero` era 24) |
| **`%=`** | Módulo e atribuição | `numero %= 3;` | `numero = numero % 3;` | `1` (se `numero` era 4) |

---

## 3. Incremento e Decremento (Contadores)

Operadores úteis para somar ou subtrair 1 de uma variável (geralmente usada em laços).

| Operador | Significado | Exemplo | Resultado |
| :--- | :--- | :--- | :--- |
| **`++`** | Incremento | `numero++;` | Adiciona 1 à variável. |
| **`--`** | Decremento | `numero--;` | Subtrai 1 da variável. |

```javascript
let contador = 5;
contador++; // contador agora é 6
contador--; // contador agora volta a ser 5
```

## 4. Cuidado com a Tipagem Dinâmica

Em JS, a tipagem dinâmica pode levar a resultados inesperados, especialmente com o operador `+`.

### 4.1. Coerção com o Operador `+`

Quando o operador `+` encontra uma `string`, ele automaticamente trata os outros valores (mesmo que sejam `number` ou `boolean`) como `string` e realiza uma **concatenação** (união de textos) em vez de uma adição matemática.

```javascript
let a = 10;          // number
let b = "20";        // string
let c = a + b;       // Concatenação, não soma!

console.log(c);      // Saída: "1020" (string)
console.log(typeof c); // Saída: string
```