# Interação com o Usuário em JavaScript

Esta aula foca nas formas nativas (JavaScript Puro) de interagir com o usuário, desde caixas de diálogo básicas até a captura de eventos, reforçando a base antes de migrar para a sintaxe do jQuery.

## 1. Alertas, Confirmações e Prompts (Caixas de Diálogo)

Estes são os métodos mais básicos de interação no navegador.

| Método | Finalidade | Retorno |
| :--- | :--- | :--- |
| **`alert()`** | Exibir uma mensagem informativa simples. | `undefined` |
| **`confirm()`** | Pedir confirmação (OK ou Cancelar). | `true` (OK) ou `false` (Cancelar) |
| **`prompt()`** | Solicitar uma entrada de texto ao usuário. | `string` (valor digitado) ou `null` |

### Exemplos

#### `alert()` - Exibição de Mensagem
```javascript
alert("Operação concluída com sucesso!");
```

#### `confirm()` - Confirmação de Ação
```javascript
let deveDeletar = confirm("Tem certeza que deseja deletar este item?");

if (deveDeletar) {
    console.log("Usuário confirmou a exclusão.");
} else {
    console.log("Usuário cancelou a exclusão.");
}
```

#### `prompt()` - Captura de entrada
```javascript
let idadeTexto = prompt("Por favor, digite sua idade:", "18"); // '18' é o valor padrão

if (idadeTexto !== null) {
    let idade = parseInt(idadeTexto);
    alert("Você informou ter " + idade + " anos.");
} else {
    alert("Nenhuma idade foi informada.");
}
```

## 2. Captura de Eventos em JavaScript Puro

O JavaScript reage às ações do usuário através de eventos.

### 2.1 Listeners de Evento

O método moderno (`addEventListener`) é o padrão para anexar funções de resposta (listeners) a eventos.

```javascript
document.getElementById("botao").addEventListener("click", function() {
    alert("Botão clicado via Listener!");
});
```

### 2.2 Eventos Mais Comuns

| Evento (String em `addEventListener`) | Categoria | Descrição |
| :--- | :--- | :--- |
| **`click`** | Mouse | Ocorre quando o elemento é clicado (o mais comum). |
| **`dblclick`** | Mouse | Ocorre quando o elemento é clicado duas vezes rapidamente. |
| **`mouseenter`** | Mouse | Ocorre quando o cursor entra na área do elemento. |
| **`mouseleave`** | Mouse | Ocorre quando o cursor sai da área do elemento. |
| **`change`** | Formulário/Input | Ocorre quando o valor de um elemento (`<input>`, `<select>`, `<textarea>`) é alterado e perde o foco. |
| **`submit`** | Formulário | Ocorre quando um formulário é submetido (ao clicar em `<button type="submit">`). |
| **`focus`** | Formulário/Input | Ocorre quando um elemento (input) recebe o foco. |
| **`blur`** | Formulário/Input | Ocorre quando um elemento (input) perde o foco. |
| **`keydown`** | Teclado | Ocorre quando uma tecla é pressionada. |
| **`keyup`** | Teclado | Ocorre quando uma tecla é solta (útil para capturar o valor final do campo). |

---

## 3. Interação com o Usuário em Formulários (JS Puro)

A manipulação de formulários é uma das tarefas mais importantes do JavaScript, pois permite coletar dados os usuários e validar antes que sejam enviados ao servidor.

### 3.1 Eventos Essenciais de Formulário

| Evento | Onde Usar | Descrição |
| :--- | :--- | :--- |
| **`submit`** | No elemento `<form>`. | Captura a tentativa de envio do formulário. **Essencial para validação.** |
| **`change`** | Em campos de entrada (`<input>`, `<select>`). | Ocorre quando o valor do campo muda e o campo perde o foco. |
| **`focus`** | Em campos de entrada. | Ocorre quando o usuário clica ou tabula para dentro do campo. |
| **`blur`** | Em campos de entrada. | Ocorre quando o campo perde o foco (o usuário sai dele). |

### 3.2 Prevenção de Envio com `submit`

O evento `submit` é crucial porque permite inspecionar os dados do formulário e, se houver erros, **impedir** que o navegador os envie, mantendo o usuário na página para correção.

Para impedir o envio, é necessário usar o método `preventDefault()` no objeto `event` que é passado para a função de resposta.

#### Exemplo Prático (Validação de Campo Vazio):

Imagine o HTML: `<form id="cadastro"><input type="text" id="email"></form>`

```javascript
// 1. Seleciona o formulário
const formCadastro = document.getElementById('cadastro');

// 2. Anexa o listener de 'submit'
formCadastro.addEventListener('submit', function(event) {
    
    // Pega o valor do campo
    const emailInput = document.getElementById('email');
    
    // Lógica de validação
    if (emailInput.value === "") {
        
        // 3. IMPEDE o envio do formulário (ação padrão)
        event.preventDefault(); 
        
        alert("O campo de e-mail é obrigatório!");
    } else {
        // Se a validação passar, o formulário é enviado (ação padrão não é impedida).
        alert("Formulário válido! Enviando dados...");
    }
});