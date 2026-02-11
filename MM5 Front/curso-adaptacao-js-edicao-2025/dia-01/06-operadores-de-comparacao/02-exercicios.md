# Exercícios: Operadores de comparação

## 1. Exploração de resultados booleanos
- Armazenande dois números em variáveis numéricas;
- Realize todas as comparações básicas entre esses dois valores:
    - num1 `>` num2
    - num1 `<` num2
    - num1 `==` num2
    - num1 `!=` num2
    - num1 `>=` num2
    - num1 `<=` num2
- Exiba os resultados de todas as operações no console, com mensagens descritivas.

### Exemplo de execução esperada
```
10 > 7 → true
10 < 7 → false
10 == 7 → false
10 != 7 → true
10 >= 7 → true
10 <= 7 → false
```

## 2. Exploração de diferenças entre igualdade flexível e estrita
- Declare uma variável `numString` com o valor **string** `"10"`.
- Declare uma variável `numNumber` com o valor **number** `10`.
- Compare as duas variáveis usando:
    - numString `==` numNumber
    - numString `===` numNumber
    - numString `!=` numNumber
    - numString `!==` numNumber
- Exiba os resultados de todas as operações no console, com mensagens descritivas.

### Exemplo de execução esperada
```
"10" == 10 → true
"10" === 10 → false
"10" != 10 → false
"10" !== 10 → true
```

## 3. Teste de senha
- Crie uma variável chamada `senhaUsuario` e atribua um valor a ela
- Compare o valor da variável com uma senha armazenada em uma constante `senha` (use o texto que quiser. Ex.: "TRE1N4MENT0_MM");
- Exiba o resultado de senha digitada válida ou inválida através de `true` ou `false` no console.

### Exemplos de execução esperada
```
Senha válida? false
```
```
Senha válida? true
```