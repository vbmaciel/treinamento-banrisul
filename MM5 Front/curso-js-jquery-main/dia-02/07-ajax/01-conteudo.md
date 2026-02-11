# AJAX

**AJAX** (Asynchronous JavaScript and XML) é a técnica de comunicação assíncrona com o servidor. O jQuery simplifica drasticamente essa complexa tarefa através de métodos concisos.

O principal objetivo do AJAX é **buscar dados** (como um novo comentário ou lista de produtos) ou **enviar dados** (como um formulário) em segundo plano, sem forçar o recarregamento total da página, o que melhora muito a experiência do usuário.

## 1. O Método Universal: `$.ajax()`

O `$.ajax()` é o método central do jQuery, permitindo controle total sobre a requisição (tipo, URL, dados, etc.). Todos os outros métodos AJAX do jQuery são apenas atalhos para ele.

### Sintaxe Básica

```javascript
$.ajax({
    url: 'url_do_servidor.php', // A URL de destino
    method: 'GET', // ou 'POST', 'PUT', 'DELETE'
    data: { // Dados a serem enviados ao servidor (opcional)
        id: 1,
        usuario: 'joao'
    },
    success: function(resposta) {
        // Função a ser executada em caso de SUCESSO (código 200)
        $('#resultado').html(resposta);
    },
    error: function(xhr, status, error) {
        // Função a ser executada em caso de ERRO
        console.error("Erro na requisição: " + status + " - " + error);
        alert("Ocorreu um erro ao carregar os dados.");
    }
});
```

## 2. Métodos Simplificados (Atalhos)

Para tarefas mais comuns, o jQuery oferece atalhos que são mais rápidos de escrever.

### 2.1 Buscando Dados (GET)

Use `$.get()` quando você só precisa buscar dados do servidor.

```javascript
$.get('api/produtos.json', function(dados) {
    // 'dados' é a resposta do servidor.
    // Se a resposta for JSON, o jQuery a converte automaticamente.
    dados.forEach(function(produto) {
        $('#lista').append(`<li>${produto.nome} - R$${produto.preco}</li>`);
    });
});
```

### 2.2 Enviando Dados (POST)

Use `$.post()` para enviar dados (como um formulário) para que o servidor os salve.

```javascript
$('#formComentario').submit(function(e) {
    e.preventDefault(); // Impede o envio padrão do formulário
    
    // Captura os dados do formulário
    let dadosForm = $(this).serialize(); 

    $.post('api/salvar_comentario.php', dadosForm, function(resposta) {
        alert("Comentário salvo com sucesso!");
        $('#formComentario')[0].reset(); // Limpa o formulário
    });
});
```

> Nota: O método `.serialize()` do jQuery converte automaticamente todos os campos de um formulário em uma string pronta para envio via AJAX.

## 3. Lidando com JSON

Na web moderna, a maioria das APIs e serviços troca dados usando o formato JSON. O jQuery é excelente nisso.

### 3.1 `$.getJSON()`

Este método é um atalho especializado para buscar dados **JSON** e garantir que sejam interpretados corretamente.

```javascript
$.getJSON('api/dados_usuario.json', function(dados) {
    console.log("Nome do usuário: " + dados.nome);
    console.log("Status: " + dados.status);

    $('#boasVindas').text('Olá, ' + dados.nome + '!');
});
```

## 4. O Objeto `Deferred` e o `.done()`, `.fail()`

Em vez de usar as funções `success` e `error` dentro do `$.ajax()`, a forma moderna (e mais flexível) de lidar com requisições é usando as promessas (Promises) do jQuery, representadas pelos métodos `.done()` (sucesso) e `.fail()` (erro):

```javascript
let requisicao = $.ajax({
    url: 'api/dados.json',
    method: 'GET'
});

requisicao.done(function(dados) {
    // Executado quando a requisição é bem-sucedida (Success)
    console.log("Dados carregados:", dados);
});

requisicao.fail(function() {
    // Executado quando ocorre um erro na requisição (Error)
    alert("Não foi possível conectar ao servidor.");
});
```
