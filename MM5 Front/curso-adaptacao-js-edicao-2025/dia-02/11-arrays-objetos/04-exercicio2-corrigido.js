// 1. Criação do Objeto 'produto'
const produto = {
    nome: "Laptop Ultra",
    preco: 3500.50,
    emEstoque: true
};

// 2. Imprime o objeto completo
console.log("Objeto completo:", produto);

// 3. Modifica uma chave existente
produto.preco = 3150.00;

// 4. Adiciona uma nova propriedade
produto.id = 101;

// 5. Imprime o objeto completo após as modificações
console.log("Objeto completo após modificação:", produto);

// 6. Imprime o valor de cada chave
console.log(`\nNome do Produto: ${produto.nome}`);
console.log(`Preço Atual: ${produto.preco.toFixed(2)}`); 
console.log(`Em estoque: ${produto.emEstoque}`); 
console.log(`Id: ${produto.id}`); 
