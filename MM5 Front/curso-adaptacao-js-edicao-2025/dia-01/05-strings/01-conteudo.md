# Trabalhando com Strings em JavaScript

## 1. Declaração de Strings

Em JS, você tem três formas de delimitar uma string:

| Delimitador | Nome | Exemplo | Uso Comum |
| :--- | :--- | :--- | :--- |
| **Aspas Duplas** | `" "` | `"Olá, mundo!"` | Mais tradicional. |
| **Aspas Simples** | `' '` | `'JavaScript'` | Muito comum e flexível em JS. |
| **Crase** | `` ` `` | `` `Texto interpolado` `` | Usada para interpolação de variáveis. |

```javascript
let nome = "Maria";
let mensagem = 'Bem-vindo(a) ao sistema!';
let descricao;

descricao = "Descrição do produto"; // Atribuição posterior
```

## 2. Concatenando Strings
Concatenar strings significa juntar duas ou mais strings em uma única sequência.

### 2.1 Usando o Operador + (Concatenador)
O operador `+` é o método mais direto (mas tome cuidado com a coerção de tipos, visto anteriormente).
```javascript
    let nome = "João";
    let saudacao = "Olá, " + nome + "!"; 
    // Resultado: "Olá, João!"
```

### 2.2 Interpolação de Strings (Template Literals)
Esta é a forma mais moderna, limpa e preferida em JS. Usa a Crase (`). Permite inserir variáveis ou expressões diretamente dentro da string, usando ${}.
```javascript
    let nome = "João";
    let saudacao = `Olá, ${nome}!`; // Resultado: "Olá, João!"

    // Usando expressões:
    let total = 50 * 2;
    let texto = `O valor final é R$ ${total}.`; // Resultado: "O valor final é R$ 100."
```
## 3. Métodos Essenciais para Manipulação de Strings
| JS (Sintaxe) | Descrição | Exemplo em JS |
| :--- | :--- | :--- |
| **`.length`** | Retorna o comprimento da string (número de caracteres). | `nome.length` |
| **`.toUpperCase()`** | Converte a string para MAIÚSCULAS. | `saudacao.toUpperCase()` |
| **`.toLowerCase()`** | Converte a string para minúsculas. | `saudacao.toLowerCase()` |
| **`.replace()`** | Substitui a primeira ocorrência de uma parte da string por outra. | `saudacao.replace("Olá", "Oi")` |
| **`.trim()`** | Remove espaços em branco do início e do fim. | `texto.trim()` |
| **`.substring()`** | Extrai parte da string. (Posição inicial e final opcional). | `frase.substring(0, 3)` |
| **`.includes()`** | Verifica se a string contém uma sequência específica de caracteres, retornando `true` ou `false`. | `frase.includes("JS")` |

```javascript
    let frase = "  JavaScript é dinâmico!  ";

    // Exemplo de uso:
    let comprimento = frase.length;         // Resultado: 27
    let maiuscula = frase.toUpperCase();    // Resultado: "  JAVASCRIPT É DINÂMICO!  "
    let semEspacos = frase.trim();          // Resultado: "JavaScript é dinâmico!"
    let contem = frase.includes("dinâmico"); // Resultado: true
```

## 4. Quebra de Linha e Caracteres Especiais
| Caractere de Escape | Descrição |
| :--- | :--- |
| **`\n`** | Quebra de Linha |
| **`\t`** | Tabulação (Tab). |