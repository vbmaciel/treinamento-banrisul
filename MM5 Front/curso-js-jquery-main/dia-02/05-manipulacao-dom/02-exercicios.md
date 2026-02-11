# Exercícios: Manipulação do DOM com jQuery

## Exercício 1: Formulários, Conteúdo e Atributos

- Utilize o código HTML base disponível no arquivo [./_assets/01-exercicio1-boilerplate.html](./_assets/01-exercicio1-boilerplate.html).
- Anexe um evento de clique ao botão com o `id="btnSalvar"`.
- Dentro da função de clique:
    - Obtenha o valor do campo de texto com o `id="campoNome"`. Armazene-o em uma variável (`const nome`).
    - Use a variável `nome` para atualizar o conteúdo do `<span>` com o `id="nomeExibido"`.
    - Mude o atributo `alt` da imagem com o `id="imagemPerfil"` para: **"Avatar do Usuário [NOME DIGITADO]"**. (Substitua `[NOME DIGITADO]` pelo valor da variável `nome`).
