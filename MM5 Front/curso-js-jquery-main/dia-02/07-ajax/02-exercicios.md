# Exercício: AJAX

- Utilize o código HTML base disponível no arquivo [./_assets/01-exercicio1-boilerplate.html](./_assets/01-exercicio1-boilerplate.html). Os estilos já estão definidos, portanto é importante que você siga corretamente as instruções de como estruturar a página.

- Você deverá usar a URL base `https://jsonplaceholder.typicode.com`.

---

## 1. Funções de suporte

1.  **`showFeedback(message, type)`:** Crie uma função para exibir mensagens de sucesso ou erro no elemento `<div id="feedback">`. A função deve fazer o elemento aparecer, exibir a mensagem e depois desaparecer após 3 segundos. 
    - `message` é o texto que deverá ser exibido;
    - `type` deve indicar `success` ou `error`.
    - Caso `type` tenha o valor `success`, a cor de fundo deve ser `#e6ffe6` e a do texto `#007e00`. Caso contrário, a cor de fundo deve ser `#ffdddd` e do texto `#dc3545`.
2.  **`resetForm()`:** Crie uma função para limpar os campos do formulário e reverter o botão `btnSubmitPost` para o estado "Criar Post".
    - Para isso, remova a classe `btn-update`, adicione a classe `btn-create` e altere o texto para `Criar Post`
3. Anexe o evento **`.click()`** ao botão `#btnReset` e chame a função `resetForm()`.

---

## 2. Leitura e Listagem

- Ao iniciar, chame uma função que usa **`$.get()`** para buscar os 10 primeiros posts (`/posts?_limit=10`).
- Caso a requisição retorne um erro, adicione na div um parágrafo com o texto "Erro ao carregar posts."
- Essa função deve ser chamada ao carregar a página.
- Crie uma função `renderPosts(posts)` que crie dinamicamente os elementos HTML e adicione na `<div id="posts-list">`. Cada item da lista deve ter botões para as ações de CRUD.
    - Limpe a `<div id="posts-list">`.
    - Para cada post, injete a seguinte estrutura HTML usando `.append():`
    ```html
    <div class="post-item" data-id="${post.id}">
        <div class="post-title">${post.id}. ${post.title}</div>
            <p>${post.body.substring(0, 100)}...</p>
            <button class="btn-action btn-edit" data-id="${post.id}">Editar</button>
            <button class="btn-action btn-delete" data-id="${post.id}">Excluir</button>
            <button class="btn-action btn-view-comments" data-id="${post.id}">Ver Comentários</button>
        </div>
    </div>
    ```
    

## 3. Cadastro

- Ao enviar o formulário `<form id="post-form">`, colete os valores informados nos campos e chame a função de cadastro.
- Crie uma função `createPost(postData)`, que usa `$.post()` para cadastrar o novo post.
- A função `showFeedback(message, type)` deve ser chamada para exibir o feedback ao usuário.
- Em caso de sucesso, chame `resetForm()` e `fetchPosts()`.
> Observação: a API apenas simula o cadastro, não salvando de verdade os dados enviados.

---

## 4. Edição
### 4.1 Preencher o formulário com os dados do post selecionado
-  Use o método **`.on('click', '.btn-edit', ...)`** em `#posts-list`.
-  Use **`$.get()`** para buscar as informações completas do post clicado.
-  Preencha os campos `#postTitle` e `#postBody` usando **`.val()`** com os dados do post.
-  Preencha o campo oculto `#postId`.
-  Altere o botão`btnSubmitPost` para o modo **Atualizar**:
    - Remova a classe `btn-create`
    - Adicione a classe `btn-update`
    - Altere o texto para `Atualizar Post`

### 4.2 Atualizar dados
- Altere a função chamada ao submeter o formulário `<form id="post-form">` para lidar com edições. 
- Se o formulário estiver em modo de edição (com o campo `#postId` preenchido), use **`$.ajax()`** com o método **`PUT`** para enviar os dados atualizados à API.
- A função `showFeedback(message, type)` deve ser chamada para exibir o feedback ao usuário.

---

## 5. Excluir post

-  Use o método **`.on('click', '.btn-delete', ...)`** em `#posts-list`.
-  Use **`confirm()`** para pedir confirmação ao usuário.
-  Se confirmado, use **`$.ajax()`** com `method: 'DELETE'` para enviar a requisição.
-  No sucesso, use o ID capturado para remover o elemento visualmente do DOM (`.remove()`).
-  A função `showFeedback(message, type)` deve ser chamada para exibir o feedback ao usuário.
-  Dentro de `#comments-display`, insira um parágrafo com o texto "Comentários limpos após a exclusão.".


## 6. Visualizar comentários

-  Use o método **`.on('click', '.btn-view-comments', ...)`** em `#posts-list`.
-  Use **`$.get()`** para buscar os comentários do post (`/posts/{id}/comments`).
-  Limpe o `<div id="comments-display">`.
- Para cada comentário, injete a seguinte estrutura HTML:
```html
<div class="comment-item">
    <strong>De: {comment.email}</strong>
    <p>{comment.body}</p>
</div>
```