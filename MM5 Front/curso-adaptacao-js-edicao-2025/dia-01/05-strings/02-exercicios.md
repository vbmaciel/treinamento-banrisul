# Exercícios: Strings

- Declara duas variáveis (`nome` e `sobrenome`) com valores de teste (ex: "john" e "doe").
- Exibe o nome completo do usuário usando **interpolação de strings**, incluindo o nome e o sobrenome.
- **Manipula as strings** para imprimir outras variações:
    1. Exibe uma mensagem contendo apenas as iniciais, em formato maíusculo, do nome e sobrenome, e também a contagem total de caracteres contidos em ambos.
    **Exemplo:** Para `john doe`, a impressão esperada é `Iniciais e contagem: J.D. (7)`.
    2. **Cria um Nome Secreto** com base na divisão das strings:
        - O Nome Secreto é composto pela **Primeira metade do nome** + **Segunda metade do sobrenome**. 
        - Regra geral: caso o número de caracteres das strings de nome e/ou sobrenome sejam ímpares, incluir o caractere extra;
        - **Exemplo:** Para `john doe`, a impressão esperada é `Nome secreto: jooe`. (Primeira metade de "john" é "jo"; Segunda metade de "doe" é "oe").

   * **Dica:** O método `Math.ceil()` em conjunto com `.length` e `.slice()` é útil aqui.