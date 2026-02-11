# Expressões Lógicas

## 1. Operadores Lógicos em JavaScript

Expressões lógicas são construídas usando os seguintes operadores, que sempre retornam um valor booleano (`true` ou `false`).

| Operador | Nome | Lógica |
| :--- | :--- | :--- |
| `&&` | E Lógico (AND) | Retorna `true` apenas se **TODAS** as condições forem verdadeiras. |
| `\|\|` | OU Lógico (OR) | Retorna `true` se **PELO MENOS UMA** das condições for verdadeira. |
| `!` | NÃO Lógico (NOT) | Inverte o valor booleano da condição ou variável. |

---

### 1.1 Operador `&&` (E Lógico)

O operador `&&` exige que a **condição da esquerda E a condição da direita** sejam verdadeiras.

```javascript
let idade = 20;
let temHabilitacao = true;

// Acesso permitido SE (idade é >= 18) E (temHabilitacao é true)
let podeDirigir = idade >= 18 && temHabilitacao === true; 
// Resultado: true
```

### 1.2 Operador `||` (OU Lógico)

O operador `||` retorna `true` se pelo menos uma das condições for verdadeira.

```javascript
let temIngresso = false;
let nomeNaListaVip = true;

// Acesso liberado SE (temIngresso é true) OU (nomeNaListaVip é true)
let acessoLiberado = temIngresso || nomeNaListaVip; 
// Resultado: true
```

### 1.3 Operador `!` (NÃO Lógico)

O operador `!` é usado para inverter o valor booleano de uma variável ou expressão.

```javascript
let usuarioBloqueado = false; 

// Inverte o valor da variável:
let podeAcessar = !usuarioBloqueado; 
// Resultado: true

// Invertendo uma condição diretamente:
// Se (Não (10 é maior que 20))
let resultado = !(10 > 20); // !(false)
// Resultado: true
```