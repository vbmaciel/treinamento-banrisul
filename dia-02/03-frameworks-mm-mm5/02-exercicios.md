# Exercícios de Frameworks, MM e o MM5

## 1. Expansão do frontend a partir da tela já implementada de Exemplos

Neste exercício, você irá expandir o frontend do projeto **Cliente**, utilizando a tela de **Exemplos** já implementada como "inspiração" para a criação das demais telas da aplicação.

Até este ponto, já temos toda a estrutura de frontend necessária:

- A estrutura base com o arquivo HTML principal e sua estilização e o arquivo JavaScript principal que já tem menu e roteamento funcionais;
- O framework fornecendo utilitários e convenções de criação de arquivos, e também já fornecendo o cliente HTTP para comunicação com o servidor;
- A estrutura de telas completamente criada, e uma das telas (**Exemplos**) já implementada, com listagem, formulário e operações de **GET, POST, PUT e DELETE** para o servidor.

Isso tudo está contido no _boilerplate_ de projeto **Cliente** fornecido na pasta da aula.
<!-- Boilerplate em [./_assets/03-exercicio1-boilerplate-cliente/] -->

A partir disso, utilize a estrutura já existente de frontend para as telas de **Idiomas** e **Categorias** (arquivos HTML, CSS e JavaScript) para implementar as funcionalidades de forma semelhante ao que já está implementado em **Exemplos**, utilizando o máximo possível dos comportamentos de tela, estilização e outras coisas já prontas na tela de **Exemplos**. Ajuste principalmente os campos envolvidos na listagem e no formulário, as rotas de comunicação com o servidor e os identificadores do arquivo HTML e seus usos nos arquivos JavaScript e CSS.

```makefile
ClienteServidor\                          # Pasta da solução
|
├── Cliente\                              # Pasta do projeto Cliente 
|   ├── [...]                             # Outras pastas e arquivos da estrutura omitidos por brevidade
|   |
|   ├── wwwroot\                          # Pasta base de provimento do frontend (a partir dessa pasta o servidor de arquivos estáticos procurará os arquivos solicitados nas requisições)
|   |   ├── [...]                         # Outras pastas e arquivos da estrutura omitidos por brevidade
|   |   |
|   |   ├── telas\                        # Pasta de arquivos das telas do frontend — seguindo a convenção do framework
|   |   │   ├── exemplos\                 # Pasta da tela de exemplos
|   |   │   │   ├── tela-exemplos.html    # Arquivo HTML da tela de exemplos
|   |   │   │   ├── tela-exemplos.css     # Arquivo CSS da tela de exemplos
|   |   │   │   └── tela-exemplos.js      # Arquivo JavaScript e JQuery da tela de exemplos
|   |   │   ├── idiomas\                  # Pasta da tela de idiomas
|   |   │   │   ├── tela-idiomas.html     # Arquivo HTML da tela de idiomas
|   |   │   │   ├── tela-idiomas.css      # Arquivo CSS da tela de idiomas
|   |   │   │   └── tela-idiomas.js       # Arquivo JavaScript e JQuery da tela de idiomas
|   |   │   └── categorias\               # Pasta da tela de categorias
|   |   │       ├── tela-categorias.html  # Arquivo HTML da tela de categorias
|   |   │       ├── tela-categorias.css   # Arquivo CSS da tela de categorias
|   |   │       └── tela-categorias.js    # Arquivo JavaScript e JQuery da tela de categorias
|   |   |
|   |   └── [...]                         # Outras pastas e arquivos da estrutura omitidos por brevidade
|   |
|   └── [...]                             # Outras pastas e arquivos da estrutura omitidos por brevidade
|
└── [...]                                 # Outras pastas e arquivos da estrutura omitidos por brevidade
```

> Nota: Após a implementação das novas telas dentro do frontend (`wwwroot`), certifique-se também de remover a "estrutura legada" — pastas `Telas` e `DTOs` da raíz do projeto **Cliente**, além dos métodos comentados da `Program.cs`.
