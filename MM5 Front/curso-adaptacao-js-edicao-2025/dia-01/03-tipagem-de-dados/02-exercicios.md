# Exercício: Tipagem de dados

O objetivo deste exercício é praticar a identificação dos tipos de dados primitivos e complexos e demonstrar o comportamento da tipagem dinâmica do JavaScript.

## 1. Identificação de Tipos e typeof

Crie um bloco de código JavaScript que:

1. Declare e inicialize as seguintes variáveis e, em seguida, imprima o tipo de cada uma usando o operador `typeof`:

   * `textoNome`: Uma string com seu nome (`"Alice"`).
   * `idade`: Um número inteiro (`25`).
   * `estaAtivo`: Um valor booleano (`true`).
   * `semValor`: Atribua o valor `null`.
   * `indefinido`: Declare a variável, mas **não atribua valor** (`let indefinido;`).
   * `usuario`: um **Objeto** com as chaves `nome` e `idade`.
   * `numeros`: um **Array** de 3 números.
2. Declare uma variável `valorDinamico` e atribua a ela um **número** (`100`). Imprima o `typeof valorDinamico`.
3. Reatribua a `valorDinamico` uma **string** (`"Cem"`). Imprima o `typeof valorDinamico` novamente.
4. Reatribua a `valorDinamico` um valor **booleano** (`false`). Imprima o `typeof valorDinamico` pela terceira vez.

### Exemplo de Saída Esperada (Trecho Final)
```
Variável 'textoNome' é do tipo: string
Variável 'idade' é do tipo: number
Variável 'estaAtivo' é do tipo: boolean
Variável 'semValor' (null) é do tipo: object
Variável 'indefinido' é do tipo: undefined
Variável 'usuario' é do tipo: object
Variável 'numeros' é do tipo: object
Tipo 1 de 'valorDinamico': number
Tipo 2 de 'valorDinamico': string
Tipo 3 de 'valorDinamico': boolean
```