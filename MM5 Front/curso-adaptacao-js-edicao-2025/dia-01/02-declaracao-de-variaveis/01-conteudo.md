# Declaração de Variáveis

## 1. `const`: A Declaração de Constantes

O comando `const` é usado para declarar uma **constante**, um valor que **não deve mudar** após sua atribuição inicial.

| Conceito | Regra Lógica | Exemplo |
| :--- | :--- | :--- |
| **Atribuição** | **Obrigatória na declaração.** Deve ser definida imediatamente. | `const NOME = "Curso JS";` |
| **Reatribuição** | **Não permitida.** Tentar mudar o valor causa um erro. | `NOME = "Outro";` $\rightarrow$ **Erro!** |

```javascript
// Exemplo 1: Uso correto para valores fixos
const URL_PADRAO = "[http://api.site.com](http://api.site.com)";

// Exemplo 2: O valor não pode ser alterado
const TOTAL_PRODUTOS = 5; 
// TOTAL_PRODUTOS = 6; // Isso causaria um ERRO no console.
```

## 2. `let`: A Declaração de Variáveis
O comando `let` é usado para declarar variáveis flexíveis, ou seja, que podem ter seu valor reatribuído (modificado) durante a execução do código.

| Conceito | Regra Lógica | Exemplo |
| :--- | :--- | :--- |
| **Atribuição** | **Opcional na declaração.** Pode ser declarada sem valor inicial (ficando como `undefined`). | `let idade;` |
| **Reatribuição** | **Permitida.** O valor pode ser alterado livremente. | `idade = 30; idade = 31;` |

```javascript
let pontuacao = 0; // Inicia com 0

// O valor é reatribuído ao longo da execução
pontuacao = pontuacao + 10;
console.log("Nova pontuação:", pontuacao); // Saída: 10
```

## 3. `var`: O Passado do JavaScript
O comando `var` foi o único método de declaração de variáveis no JavaScript antes de 2015. Embora ainda funcione, ele possui problemas lógicos que let e const corrigiram. Por possuir Escopo de Função (ou global) e permitir que a variável "vaze" para fora de blocos, facilita erros e bugs complexos.

## 4. Escopo
O Escopo define a "região" do código onde uma variável pode ser acessada. `let` e `const` introduziram o crucial Escopo de Bloco.

### Escopo de Bloco ({})
Uma variável declarada com `let` ou `const` só existe dentro do bloco de código ({ }) onde foi definida.

```javascript
let nomeCompleto = "João Silva"; // Variável de escopo global (acessível em todo o arquivo)

if (true) {
    const SAUDACAO = "Olá, ";
    let nomeCurto = "João"; // Variável local do bloco IF

    console.log(SAUDACAO + nomeCurto); // OK
}

// console.log(nomeCurto); 
// ERRO! 'nomeCurto' não existe aqui, pois está fora do bloco IF.

console.log(nomeCompleto); // OK, variável global ainda acessível
```