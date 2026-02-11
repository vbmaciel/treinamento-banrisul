# Introdução ao jQuery

## 1. O que é jQuery?

jQuery é uma **biblioteca de JavaScript** rápida, pequena e rica em recursos. Ela simplificou drasticamente a forma como navegamos e manipulamos o *Document Object Model* (DOM), gerenciamos eventos, realizamos animações e fazemos chamadas AJAX. Seu lema é: **"Write less, do more"** (Escreva menos, faça mais).

## 2. Por que usar jQuery?
- Simplifica operações complexas com poucos comandos.
- Compatibilidade com navegadores antigos.
- Ampla comunidade e plugins.

## 3. Vantagens e Desvantagens do jQuery
**Vantagens**:
- Fácil de aprender e usar.
- Grande compatibilidade com navegadores.
- Reduz o código necessário para tarefas comuns.

**Desvantagens**:
- Algumas funções se tornaram obsoletas com as melhorias do JavaScript moderno (ES6+).
- Pode adicionar peso desnecessário ao projeto se usado em excesso.

---

## 4. Como Incluir o jQuery no Projeto

Para usar o jQuery, você precisa incluir a biblioteca no seu arquivo HTML. A melhor prática é fazer isso usando uma **CDN (Content Delivery Network)**.

### Método Recomendado: Via CDN

A CDN armazena o arquivo em servidores distribuídos globalmente, o que geralmente garante um carregamento mais rápido.

**Onde inserir:** É uma boa prática inserir o script do jQuery no final do seu `<body>`, logo antes da sua própria tag `<script>`, para garantir que o DOM esteja completamente carregado antes que o jQuery comece a manipulá-lo.

```html
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
```

## 5. Sua Primeira Sintaxe: `document.ready()`

O jQuery funciona manipulando elementos HTML. Se tentarmos manipular um elemento antes que ele exista (ou seja, antes que o navegador termine de carregar o DOM), o código falhará.

O método `$(document).ready()` garante que **todo o seu código jQuery só será executado depois** que a página estiver completamente pronta.

### 5.1 Sintaxe 

```javascript
$(document).ready(function() {
    // Seu código jQuery vai aqui
    document.write("jQuery está funcionando!");
});
```

### 5.2 Exemplo completo
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Setup jQuery</title>
</head>
<body>
    <h1>Meu Primeiro Projeto jQuery</h1>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

    <script>
        // Verificando se o jQuery foi carregado
        $(document).ready(function () {
            console.log("jQuery está funcionando!");
        });
    </script>
</body>
```