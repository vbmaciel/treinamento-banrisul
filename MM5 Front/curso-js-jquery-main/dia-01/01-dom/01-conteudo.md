# O Document Object Model (DOM)

O **DOM (Document Object Model)** é a interface que permite aos scripts, como JavaScript ou jQuery, interagir e manipular a estrutura HTML de uma página web. O DOM transforma a página em uma **árvore de objetos**, onde cada elemento HTML é representado como um **nó** que pode ser acessado e modificado.

## 1. Conceito Central do DOM

| Conceito | Descrição |
| :--- | :--- |
| **Árvore de Objetos** | Representação hierárquica (pai, filho, irmão) da estrutura HTML. |
| **Nó (Node)** | Cada componente da página (elemento, texto, atributo ou comentário) é um nó. |
| **Interatividade** | O DOM permite: 1. Alterar o conteúdo e atributos; 2. Adicionar/remover elementos; 3. Reagir a eventos. |

---

## 2. Objetos DOM Principais (Hierarquia)

Estes são os objetos globais que o JavaScript utiliza para interagir com o navegador e o documento.

| Objeto | Representação | Exemplo de Uso |
| :--- | :--- | :--- |
| **`Window`** | A janela do navegador (o objeto global). | `window.open("url", "_blank");` |
| **`Document`** | O documento HTML carregado na janela. | `document.title = "Novo Título";` |
| **`Element`** | Uma tag HTML específica (e.g., `<div>`, `<p>`). | `var div = document.createElement("div");` |
| **`Node`** | O tipo mais genérico; o pai de todos os itens na árvore. | `paragrafo.nodeName; // Exibe a tag do nó` |
| **`Event`** | Ocorre durante a interação (cliques, digitação). | `elemento.addEventListener("click", function() { /* ... */ });` |

---

## 3. Principais Métodos de Manipulação 

### 3.1 Selecionando Elementos

| Método | Retorno | Seletor |
| :--- | :--- | :--- |
| `document.getElementById(id)` | Um único elemento. | `document.getElementById("meuID")` |
| `document.querySelector(seletor)` | O **primeiro** elemento que corresponde ao seletor CSS. | `document.querySelector(".minha-classe")` |
| `document.querySelectorAll(seletor)` | Uma lista (NodeList) de todos os elementos correspondentes. | `document.querySelectorAll("p.ativo")` |

### 3.2 Manipulando Conteúdo e Estrutura

| Propriedade / Método | Propósito | Exemplo |
| :--- | :--- | :--- |
| **`.textContent`** | Define ou obtém o texto puro (seguro) de um elemento. | `elemento.textContent = "Novo Texto";` |
| **`.innerHTML`** | Define ou obtém o HTML interno (inclui tags). | `elemento.innerHTML = "<strong>Novo</strong>";` |
| **`.setAttribute(n, v)`** | Define o valor de um atributo (ex: `href`, `class`). | `img.setAttribute("alt", "Descrição");` |
| **`.appendChild(filho)`** | Adiciona um nó filho ao final do elemento. | `document.body.appendChild(div);` |

