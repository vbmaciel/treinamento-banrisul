# Arrays e Objetos

Em JavaScript, embora existam estruturas mais avançadas, o foco principal é dado a duas estruturas nativas e dinâmicas: o **Array** (para listas ordenadas) e o **Objeto** (para coleções de pares chave-valor, como dicionários).

---

## 1. Arrays em JavaScript

Um Array é uma estrutura de dados de **tamanho dinâmico** e **não tipada** (pode conter diferentes tipos de dados), usada para armazenar uma coleção ordenada de elementos.

### 1.1 Criação e Acesso

Arrays são criados usando colchetes `[]`;

```javascript
// 1. Array de tamanho dinâmico (não precisa declarar o tamanho)
const frutas = ["Maçã", "Banana", "Uva"]; // Array de 3 elementos

// 2. Acesso por Índice
let primeiraFruta = frutas[0]; // Saída: "Maçã"
let ultimaFruta = frutas[2];  // Saída: "Uva"

// 3. Arrays não tipados (pode misturar tipos de dados)
const dadosDiversos = [10, "Texto", true, { id: 1 }];
```

### 1.2 Propriedade e Modificação

Arrays em JS são coleções dinâmicas, permitindo fácil modificação e expansão.

| Propriedade/Método | Descrição | Exemplo |
| :--- | :--- | :--- |
| `.length` | Retorna o número de elementos no array. | `frutas.length` // 3 |
| `.push()` | Adiciona um elemento **ao final** do array. | `frutas.push("Laranja");` |
| `.pop()` | Remove o último elemento e o retorna. | `frutas.pop();` |
| **Tamanho** | Pode ser alterado a qualquer momento. | `frutas[10] = "Abacaxi";` |

---

## 2. Matrizes e Estruturas Multidimensionais

É possível criar estruturas multidimensionais (Matrizes, Tensores, etc.) usando **Arrays aninhados** (arrays dentro de arrays).

###  2.1 Exemplo de Matriz 2D (Tabela)

Uma matriz é um Array onde cada elemento interno também é um Array (linha e coluna).

```javascript
// Matriz 3x3: Linhas e Colunas
const matriz = [
    [1, 2, 3],  // Linha 0
    [4, 5, 6],  // Linha 1
    [7, 8, 9]   // Linha 2
];

// Acessando o elemento na Linha 1, Coluna 2 (valor 6):
let elemento = matriz[1][2]; // [Linha][Coluna]
console.log(elemento); // Saída: 6
```

## 3. Objects

Em JS, o **Objeto** (`{}`) é a estrutura nativa que corresponde a uma coleção de pares **chave-valor** não ordenada.

### 3.1 Criação e Acesso

As chaves são sempre strings (ou convertidas para strings).

```javascript
// Criação de um Objeto
const usuario = {
    nome: "Alice",        // Chave: 'nome', Valor: 'Alice'
    idade: 30,            // Chave: 'idade', Valor: 30
    cidade: "São Paulo"
};

// Acesso 1: Notação de Ponto (Preferida quando a chave é conhecida)
console.log(usuario.nome);   // Saída: "Alice"

// Acesso 2: Notação de Colchetes (Necessária se a chave for variável ou contiver espaços)
let chave = "cidade";
console.log(usuario[chave]); // Saída: "São Paulo"
```

### 3.2 Adicionar/Modificar

Objetos são dinâmicos e permitem que você adicione ou mude propriedades a qualquer momento.

```javascript
// Adicionar uma nova chave:
usuario.email = "alice@mail.com"; 

// Modificar uma chave existente:
usuario.idade = 31;
```