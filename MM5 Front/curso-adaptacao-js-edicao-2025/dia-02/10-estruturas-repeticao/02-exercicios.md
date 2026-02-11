# Exercícios: Estruturas de repetição

## 1. Acumulador de Pontos Aleatórios

Crie um bloco de código JavaScript que simula um jogo de acumulação de pontos, onde o objetivo é atingir uma meta.

1.  **Definição da Meta:** Defina uma constante (`META_PONTOS`) para o número de pontos a ser alcançado (ex: 50 pontos).
2.  **Variáveis de Controle:**
    * `pontuacaoAtual`: Variável para somar os pontos acumulados, começando em 0.
    * `rodadas`: Contador para o número de rodadas jogadas, começando em 0.
3.  **Lógica do Jogo:**
    * Use um laço que continue executando **enquanto** a `pontuacaoAtual` for menor que a `META_PONTOS`.
    * Dentro do laço:
        * **Geração de Pontos:** Gere um número aleatório entre 1 e 10, que será a pontuação da rodada atual. (Use `Math.floor(Math.random() * 10) + 1;`).
        * **Acúmulo:** Adicione os pontos gerados à `pontuacaoAtual`.
        * **Contagem:** Incremente o contador de `rodadas`.
        * **Feedback:** Imprima a pontuação ganha na rodada, a pontuação total atualizada e a meta.
4.  **Finalização:** Após o laço, imprima uma mensagem de sucesso, indicando a `pontuacaoAtual` final e o total de `rodadas` necessárias para atingir a meta.

### Exemplo de execução

```
Rodada 1: Ganhou 8 pontos. Total: 8/50.
Rodada 2: Ganhou 3 pontos. Total: 11/50.
... (continua até atingir ou ultrapassar 50)
Fim do jogo! Meta alcançada em X rodadas. Pontos totais: Y.
```

## 2. Pirâmide do Mario

Inspirado no famoso jogo do encanador, o objetivo é construir uma pirâmide de blocos com o caractere `#`, cuja altura é definida pelo usuário.
- Declare uma variável com a **altura da pirâmide** (um número inteiro entre 1 e 8);
- Utilize **_loops_** para desenhar no console uma pirâmide alinhada à direita.

### Exemplo de execução esperada
```
let alturaPiramide = 5;
```

```markdown
    #
   ##
  ###
 ####
#####
```

> Dica: o uso de loops aninhados (um loop dentro de outro) pode ser útil para controlar espaços e blocos.