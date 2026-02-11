# Estruturas Condicionais

Condicionais são as estruturas que permitem que seu código tome decisões. Em JavaScript, usamos as estruturas lógicas `if`, `else if`, `else` e `switch` para alterar o fluxo de execução do programa com base no resultado de expressões booleanas.

---

## 1. A Estrutura Básica `if`

A estrutura `if` verifica se uma condição é verdadeira. Se a expressão dentro dos parênteses `()` retornar `true`, o bloco de código dentro das chaves (`{}`) será executado.

### Sintaxe

```javascript
if (condicao) {
    // Código a ser executado se a condição for verdadeira
}
```

### Exemplo: 

```javascript
let idade = 18;

if (idade >= 18) {
    console.log("Você é maior de idade.");
}
```

## 2. A Estrutura `else`

O comando `else` é usado para definir um bloco de código alternativo, que será executado **somente** quando a condição do `if` for **falsa**.

### Sintaxe

```javascript
if (condicao) {
    // Código se a condição for verdadeira
} else {
    // Código se a condição não for verdadeira
}
```

### Exemplo
```javascript
let idade = 16;

if (idade >= 18) {
    console.log("Você é maior de idade.");
} else {
    console.log("Você é menor de idade.");
}
```

## 3. Múltiplas Condições: `else if`

A estrutura `else if` permite testar várias condições em sequência. O programa executa o bloco de código da **primeira** condição que retornar `true` e ignora as restantes.

### Sintaxe

```javascript
if (condicao1) {
    // Bloco 1
} else if (condicao2) {
    // Bloco 2
} else {
    // Bloco 3 (se nenhuma for verdadeira)
}
```

### Exemplo 
```javascript
let nota = 85;

if (nota >= 90) {
    console.log("Nota A");
} else if (nota >= 80) {
    console.log("Nota B"); // Esta é a condição verdadeira
} else if (nota >= 70) {
    console.log("Nota C"); // Esta será ignorada
} else {
    console.log("Nota abaixo de C");
}
```

## 4. O Operador Ternário

O Operador Ternário é uma forma sintaticamente concisa de escrever um `if/else` simples em uma única linha. É muito comum em JS. Se a condição for verdadeira, atribua o primeiro valor. Caso contrário, atribua o segundo.

### Sintaxe

```javascript
condicao ? valor_se_true : valor_se_false;
```

### Exemplo

```javascript
let idade = 20;

// Se (idade >= 18) ? use o texto "Maior" : senão use o texto "Menor"
let status = idade >= 18 ? "Maior de idade" : "Menor de idade"; 

console.log(status); // Saída: "Maior de idade"
```

## 5. A Estrutura `switch` (Múltipla Escolha)

O `switch` é usado como uma alternativa mais limpa ao encadeamento longo de `if...else if` quando você está testando uma única variável contra vários valores discretos.

### Sintaxe

```javascript
switch (variavel) {
    case valor1:
        // Código se variavel === valor1
        break; // Obrigatório para sair do switch
    case valor2:
        // Código se variavel === valor2
        break;
    default:
        // Código se nenhum caso for correspondido
        break;
}
```

### Exemplo:
```javascript
let diaDaSemana = 3;

switch (diaDaSemana) {
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda-feira");
        break;
    case 3:
        console.log("Terça-feira");
        break; // Executado
    default:
        console.log("Dia inválido");
        break;
}
```