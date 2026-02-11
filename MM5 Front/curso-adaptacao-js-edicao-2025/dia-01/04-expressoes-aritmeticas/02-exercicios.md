# Exercícios: Expressões Aritméticas

## Exercício 1: Exploração de Operações Matemáticas
Crie um bloco de código JavaScript que:
- Declara duas variáveis (`num1` e `num2`) com números predefinidos.
- Realiza as cinco operações aritméticas básicas (`+`, `-`, `*`, `/`, `%`) entre esses dois valores.
- Imprime os resultados no console com mensagens descritivas.
- Desafios de Divisão: 
    - Crie um cenário onde `num2` é zero e observe o que o JavaScript retorna.
    - Crie um cenário onde `num1`e `num2` são zero e observe o que o JavaScript retorna.

## Exercício 2: Exploração do operador módulo (`%`) (Desafiador / Opcional)
Crie um bloco de código JavaScript que:
- Declara uma constante (`numero`) com um valor inteiro de **três dígitos** (ex: `472`).
- Extrai cada dígito sequencialmente da unidade à centena, exibindo-os um a um no console;
- Acumule todos os valores somando-os em uma nova variável;
- Exibe ao final a soma dos dígitos;

**Exemplo de Execução Esperada (para o número 472):**
```
Digite um número inteiro de três dígitos: 472

Unidade: 2
Dezena: 7
Centena: 4
Soma dos dígitos: 13
```

> 💡 Dica de JavaScript: Lembre-se que a divisão `/` resulta em um número decimal. Para simular o comportamento de "divisão inteira" (descartar o resto), use a função **`Math.floor()`**.
