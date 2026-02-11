# Seletores e Filtros

O jQuery é construído em torno da ideia de selecionar elementos HTML (o DOM) de forma rápida e poderosa, usando a sintaxe de seletores CSS que você já conhece.

## 1. O Símbolo `$()` (A Função Seletora)

Tudo no jQuery começa com o símbolo `$()`.

- **Seletor:** O que está dentro dos parênteses é o seletor, que indica qual elemento ou grupo de elementos você quer manipular.
- **Objeto jQuery:** O resultado de uma seleção é um "objeto jQuery", que é uma coleção de elementos sobre os quais você pode aplicar métodos (como `.hide()`, `.css()`, etc.).

### 1.1 Seletores Básicos

Estes são os seletores mais diretos e importantes, que espelham o CSS:

| Tipo de Seletor | Descrição | Exemplo de Uso |
| :--- | :--- | :--- |
| **ID** | Seleciona o elemento único com aquele ID. | `$("#titulo")` |
| **Classe** | Seleciona todos os elementos com aquela classe. | `$(".item-menu")` |
| **Tag** | Seleciona todos os elementos de um tipo específico. | `$("p")` |
| **Múltiplos** | Seleciona elementos que correspondam a `sel1` OU `sel2`. | `$("h1, p")` |

**Exemplo:**
```javascript
$("#meuElemento").css("color", "red"); // Altera a cor do texto para vermelho
```

### 1.2 Seletores de Hierarquia

Permitem selecionar elementos com base em seu relacionamento pai/filho.

| Seletor | Sintaxe | Descrição | Exemplo de Uso |
| :--- | :--- | :--- | :--- |
| **Descendente** | `pai filho` | Seleciona `filho` que está em qualquer nível dentro de `pai`. | `$("#menu a")` |
| **Direto** | `pai > filho` | Seleciona `filho` que é **filho direto** de `pai`. | `$("ul > li")` |

---

## 2. Filtros Essenciais

Filtros são usados para refinar um conjunto de seleção que já foi criado. Eles são adicionados ao final do seletor.

### 2.1 Filtros Posicionais

| Filtro | Descrição | Exemplo de Uso |
| :--- | :--- | :--- |
| **`:first`** | Seleciona o primeiro elemento do conjunto. | `$("li:first")` |
| **`:last`** | Seleciona o último elemento do conjunto. | `$("p:last")` |
| **`:eq(n)`** | Seleciona o elemento no índice *n* (começa em 0). | `$("tr:eq(2)")` (A 3ª linha) |
| **`:odd` / `:even`** | Seleciona elementos com índice ímpar (`:odd`) ou par (`:even`). | `$("li:even")` |

### 2.2 Filtros de Conteúdo e Estado

| Filtro | Descrição | Exemplo de Uso |
| :--- | :--- | :--- |
| **`:contains(texto)`** | Seleciona elementos que contêm o texto específico. | `$("p:contains('aviso')")` |
| **`:visible`** | Seleciona apenas os elementos que estão visíveis. | `$("div:visible")` |
| **`[atributo='valor']`**| Seleciona pela existência/valor de um atributo. | `$("input[type='checkbox']")` |

### 3. Exemplo Prático de Seleção e Filtro

Considere uma lista de tarefas (`<ul>`).

```javascript
$(function() {
    // Esconde o primeiro item da lista de tarefas
    $("li:first").hide(); 
    
    // Adiciona a classe 'completa' ao último item da lista
    $("li:last").addClass("completa");
    
    // Seleciona todos os itens de índice par (0, 2, 4...) e muda o fundo
    $("li:even").css("background-color", "#f0f0f0");
});