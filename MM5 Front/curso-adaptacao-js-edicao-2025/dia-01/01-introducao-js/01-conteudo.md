# Introdução

## 1. O que é JavaScript?
JavaScript é a linguagem de programação que torna a web interativa. É o que permite que um site faça coisas:

- Responder ao clique de um botão.
- Validar dados em um formulário.
- Carregar novas informações sem recarregar a página (como em um feed de rede social).

Resumo rápido:
- HTML → estrutura
- CSS → aparência
- JavaScript → comportamento

## 2. Onde o JavaScript é executado?

O JS pode rodar em dois ambientes principais:

### 2.1 No Navegador (Client-Side)
O ambiente padrão para manipular páginas web (DOM).

---

### 2.2 Com Node.js (Server-Side/Terminal)

Para executar scripts fora do navegador, como em servidores, automações ou para rodar exercícios diretamente no seu terminal.

#### Como Rodar no Terminal (Node.js):
Para executar o arquivo JavaScript sem depender do navegador, o processo é o seguinte:
- Salvar: Salve o código em um arquivo com a extensão `.js` (ex: `script.js`).
- Acessar: Abra seu Terminal ou Prompt de Comando e navegue até o diretório onde você salvou o arquivo.
- Executar: Use o comando `node` seguido do nome do arquivo.
```
node script.js
```

O resultado do seu código (`console.log`, por exemplo) será impresso diretamente no Terminal.

---

## 3. Como adicionar JavaScript a uma página?

Para que o JavaScript funcione em uma página web, é preciso conectá-lo ao HTML. Existem três formas principais de fazer isso:

### 3.1 Código interno (na própria página)

O código JavaScript pode ser escrito diretamente dentro do arquivo HTML, dentro da tag `<script>`.

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Exemplo JS Interno</title>
</head>
<body>
  <h1>Bem-vindo!</h1>

  <script>
    alert("Olá! Este alerta vem do JavaScript dentro do HTML.");
  </script>
</body>
</html>
```

### 3.2 Código externo (arquivo separado)

Crie um arquivo `.js` separado e conecte-o ao HTML usando o atributo `src`.

No HTML:
```html
<script src="script.js"></script>
```

No arquivo script.js:
```javascript
alert("Este alerta vem de um arquivo externo!");
```

### 3.3 Código inline (direto no elemento HTML)

É possível adicionar código JavaScript diretamente em um elemento, usando atributos como `onclick`, `onchange`, etc.

```html
<button onclick="alert('Você clicou no botão!')">Clique aqui</button>
```
