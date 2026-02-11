# Eventos em JavaScript com jQuery

O jQuery simplifica o gerenciamento de eventos em JavaScript, oferecendo uma sintaxe limpa e eficiente para capturar e manipular interações do usuário. Vamos explorar como trabalhar com eventos em jQuery e as práticas recomendadas.

**Estrutura Básica**

```javascript
$(selector).evento(function() {
    // Ações a serem executadas quando o evento ocorrer
});
```

## 1. Eventos de Clique

| Método jQuery | Descrição | Exemplo de Uso |
| :--- | :--- | :--- |
| **`.click()`** | Captura cliques em qualquer elemento (botões, links, divs, etc.). | `$("#meuBotao").click(function() { alert("Botão clicado!"); });` |

---

## 2. Eventos de Mouse

| Método jQuery | Descrição |
| :--- | :--- |
| **`.mouseenter()`** | Disparado quando o ponteiro entra na área do elemento. |
| **`.mouseleave()`** | Disparado quando o ponteiro sai da área do elemento. |
| **`.hover()`** | Combinação de `mouseenter` (Função 1) e `mouseleave` (Função 2). |

**Exemplo com `.hover()`:**

```javascript
$("#elemento").hover(
    function() { $(this).css("background-color", "yellow"); }, // mouseenter
    function() { $(this).css("background-color", ""); } // mouseleave
);
```

## 3. Eventos de Teclado

| Método jQuery | Descrição | Exemplo de Uso |
| :--- | :--- | :--- |
| **`.keyup()`** | Disparado quando uma tecla é **solta**. | `$("#campoTexto").keyup(function() { console.log("Tecla pressionada: " + $(this).val()); });` |
| **`.keydown()`** | Disparado quando uma tecla é **pressionada** (antes do caractere aparecer). |
| **`.keypress()`** | Disparado enquanto uma tecla é pressionada (para a maioria dos caracteres imprimíveis). |

**Exemplos:**
```javascript
$("#campoTexto").keyup(function() {
    console.log("Tecla pressionada: " + $(this).val());
});
```

## 4. Eventos de Formulário

| Método jQuery | Descrição | Exemplo de Uso |
| :--- | :--- | :--- |
| **`.submit()`** | Captura o envio de um formulário. **Essencial para validação.** | `$("form").submit(function(e) { e.preventDefault(); alert("Formulário enviado!"); });` |
| **`.change()`** | Detecta quando o valor de um campo muda e ele perde o foco (`blur`). | `$("#campoTexto").change(function() { console.log("O valor mudou para: " + $(this).val()); });` |
| **`.focus()`** | O elemento recebe o foco. |
| **`.blur()`** | O elemento perde o foco. |

**Exemplos:**
```javascript
$("form").submit(function(e) {
    e.preventDefault(); // Impede o envio do formulário
    alert("Formulário enviado!");
});

$("#campoTexto").change(function() {
    console.log("O valor mudou para: " + $(this).val());
});
```

## 5. Eventos de Janela

| Método jQuery | Descrição | Exemplo de Uso |
| :--- | :--- | :--- |
| **`.resize()`** | Disparado quando a janela do navegador é redimensionada. | `$(window).resize(function() { console.log("A janela foi redimensionada."); });` |
| **`.load()`** | Executa uma função após o carregamento de um recurso (como uma imagem ou a própria página). | `$(window).load(function() { /* Tudo carregado */ });` |

**Exemplo:**
```javascript
$(window).resize(function() {
    console.log("A janela foi redimensionada.");
});
```

## 6. O Objeto Evento

Em qualquer função de callback, o jQuery injeta um objeto `event` (que muitos desenvolvedores chamam de `e`). Este objeto é essencial para controlar o fluxo e o comportamento padrão.

### 6.1 Prevenindo o Comportamento Padrão e Propagação
- **`preventDefault()`**: Impede o comportamento padrão de um elemento (como o envio de um formulário).
- **`stopPropagation()`**: Interrompe a propagação de um evento na hierarquia do DOM.

**Exemplo:**
```javascript
$("a").click(function(e) {
    e.preventDefault(); // Impede a navegação do link
    alert("Link clicado, mas navegação bloqueada.");
});
```

### 6.2 Referência ao Elemento (`$(this)`)

Dentro do callback, `$(this)` **sempre** se refere ao elemento que disparou o evento, permitindo manipular o elemento sem usar o ID:

```javascript
// Seletor para todos os botões de exclusão
$(".btn-excluir").click(function() {
    // $(this) é o botão clicado. parent().remove() remove o item pai.
    $(this).parent().remove(); 
});
```
