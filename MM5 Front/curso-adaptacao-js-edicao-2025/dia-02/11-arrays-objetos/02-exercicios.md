# Exercícios: Arrays e Objetos

## 1. Gerenciador de Lista de Tarefas

Crie um bloco de código JavaScript que:
1. Declare uma constante `listaDeTarefas` inicializada com apenas **duas tarefas**:
   * "Comprar ingredientes do jantar"
   * "Responder e-mails pendentes"
2. Imprima o array completo no console para verificar a inicialização.
3. **Adicione** uma terceira tarefa ao final do Array:
   * "Pagar a conta de luz"
4. Imprima o Array `listaDeTarefas` novamente para confirmar a adição.
5. Simule a conclusão da **última tarefa** e armazene a tarefa removida em uma variável chamada `tarefaConcluida`.
6. Imprima a `tarefaConcluida` e, em seguida, imprima o Array `listaDeTarefas` novamente.
7. **Acesse e imprima** a tarefa que está na **primeira posição** (índice 0) do array.
8. Imprima o tamanho atual do array usando a propriedade `.length`.

### Exemplo de Saída Esperada
```
Lista Inicial: [ 'Comprar ingredientes do jantar', 'Responder e-mails pendentes' ]
Lista após Push: [
  'Comprar ingredientes do jantar',
  'Responder e-mails pendentes',
  'Pagar a conta de luz'
]
Tarefa Concluída: Pagar a conta de luz
Lista após Pop: [ 'Comprar ingredientes do jantar', 'Responder e-mails pendentes' ]
Primeira Tarefa (índice 0): Comprar ingredientes do jantar
Tamanho final da lista: 2
```

## 2. Manipulação Básica de Objetos
Crie um bloco de código JavaScript que:
- Crie uma constante `produto` que seja um **Objeto** e atribua as seguintes propriedades:
   * `nome`: Uma string com o nome de um produto.
   * `preco`: Um número.
   * `emEstoque`: Um booleano (`true`).
- Imprima o objeto completo.

- Acesse e imprima o valor da chave `nome` usando a **Notação de Ponto** (`.`).
- Acesse e imprima o valor da chave `preco` usando a **Notação de Colchetes** (`[]`).

Use o mesmo objeto `produto` e demonstre a tipagem dinâmica do JavaScript:
- **Modifique** o `preco` do produto para `3150.00`.
- **Adicione** uma nova propriedade chamada `id` com um valor numérico (`101`).
- Imprima o objeto completo após as modificações.
- Imprima o valor de cada chave no console, com mensagens descritivas, usando a **Notação de Ponto**.

### Exemplo de Saída Esperada
```
Objeto completo:  { nome: 'Laptop Ultra', preco: 3500.5, emEstoque: true }
Objeto completo após modificação:  { nome: 'Laptop Ultra', preco: 3150, emEstoque: true, id: 101 }

Nome do Produto: Laptop Ultra
Preço Atual: 3150.00
Em estoque: true
Id: 101
```