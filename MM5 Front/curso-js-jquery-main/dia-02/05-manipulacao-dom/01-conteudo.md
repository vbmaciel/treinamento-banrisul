# Manipulação Essencial do DOM

Depois de aprender a **selecionar** elementos com o `$` e os filtros, o próximo passo é **manipulá-los**, ou seja, ler seu conteúdo, alterar seu texto ou mudar o valor de seus atributos.

## 1. Conteúdo e Valor

| Método | Uso Principal | Sintaxe (GET) | Sintaxe (SET) |
| :--- | :--- | :--- | :--- |
| **`.text()`** | Obtém/define o **texto puro** de um elemento, ignorando o HTML. | `$(sel).text()` | `$(sel).text("Novo Texto")` |
| **`.html()`** | Obtém/define o **HTML interno** e a marcação estrutural. | `$(sel).html()` | `$(sel).html("<b>Novo HTML</b>")` |
| **`.val()`** | Obtém/define o **valor** de campos de formulário (`<input>`, `<textarea>`). | `$(sel).val()` | `$(sel).val("Valor Preenchido")` |

---

## 2. Estrutura e Posição

Estes métodos manipulam a árvore DOM adicionando ou removendo elementos inteiros.

| Método | Função | Exemplo | Efeito |
| :--- | :--- | :--- | :--- |
| **`.append()`** | Adiciona conteúdo **ao final** do elemento selecionado (dentro). | `$("#lista").append("<li>Fim</li>")` | `<li>Fim</li>` vai para o final do `<ul>`. |
| **`.prepend()`** | Adiciona conteúdo **ao início** do elemento selecionado (dentro). | `$("#lista").prepend("<li>Início</li>")` | `<li>Início</li>` vai para o início do `<ul>`. |
| **`.remove()`** | Remove o elemento selecionado e **todo o seu conteúdo**. | `$("#item").remove()` | O `#item` é completamente apagado da página. |
| **`.empty()`** | Remove o **conteúdo interno**, mas **mantém** o elemento pai. | `$("#container").empty()` | O conteúdo do `#container` é apagado, mas o container permanece. |

---

## 3. Classes e Estilos

Estes métodos são a maneira recomendada de aplicar estilos dinâmicos, deixando o CSS cuidar das regras de estilo.

| Método | Ação | Exemplo |
| :--- | :--- | :--- |
| **`.addClass()`** | Adiciona uma ou mais classes ao elemento. | `$(sel).addClass("ativo")` |
| **`.removeClass()`** | Remove uma ou mais classes do elemento. | `$(sel).removeClass("ativo destaque")` |
| **`.toggleClass()`** | Alterna: Adiciona a classe se não existir, remove se existir. | `$(sel).toggleClass("selecionado")` |
| **`.css()`** | Define estilos CSS *inline* diretamente. (Evitar para múltiplos estilos) | `$(sel).css("color", "red")` |
| **`.css({})`** | Define múltiplos estilos CSS *inline*. | `$(sel).css({"font-size": "16px", "border": "1px solid #ccc"})` |

---

## 4. Atributos (Propriedades HTML)

O método `.attr()` gerencia atributos HTML.

| Método | Ação | Exemplo |
| :--- | :--- | :--- |
| **`.attr()` (GET)** | Retorna o valor de um atributo do primeiro elemento. | `$("#img").attr("src")` |
| **`.attr()` (SET)** | Define o valor de um atributo. | `$("#img").attr("alt", "Nova Desc.")` |
| **`.removeAttr()`** | Remove completamente um atributo do elemento. | `$("#btn").removeAttr("disabled")` |

## 5. Exemplo 
Aqui está um exemplo que demonstra várias formas de manipulação de elementos HTML com jQuery:

**HTML:**
```html
<div id="container">
    <p id="paragrafo">Texto original.</p>
    <input type="text" id="campoNome" value="João">
    <button id="botao">Atualizar</button>
</div>
```

**JavaScript:**
```javascript
$(document).ready(function() {
    $("#botao").click(function() {
        // Alterar texto do parágrafo
        $("#paragrafo").text("Texto atualizado!");

        // Alterar valor do campo de input
        $("#campoNome").val("Maria");

        // Adicionar nova classe ao parágrafo
        $("#paragrafo").addClass("destaque");

        // Alternar exibição do container
        $("#container").toggle();
    });
});
```