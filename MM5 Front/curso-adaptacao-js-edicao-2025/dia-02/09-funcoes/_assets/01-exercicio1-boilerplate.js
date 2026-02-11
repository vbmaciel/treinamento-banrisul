// Preço de cada sabor de sorvete (Constantes)
const PRECO_CHOCOLATE = 5.00;
const PRECO_MORANGO = 6.00;
const PRECO_FLOCOS = 4.00;
    
// Exemplo de pedido: 3 Chocolates, 4 Morangos, 1 Flocos
const qtdChocolate = 3; 
const qtdMorango = 4;
const qtdFlocos = 1;

console.log(`Quantos sorvetes de chocolate? ${qtdChocolate}`);
console.log(`Quantos sorvetes de morango? ${qtdMorango}`);
console.log(`Quantos sorvetes de flocos? ${qtdFlocos}`);

// Cálculo do total do pedido
const totalChocolate = qtdChocolate * PRECO_CHOCOLATE;
const totalMorango = qtdMorango * PRECO_MORANGO;
const totalFlocos = qtdFlocos * PRECO_FLOCOS;

let valorTotalPedido = totalChocolate + totalMorango + totalFlocos;

// Aplicação de desconto
const qtdTotalSorvetes = qtdChocolate + qtdMorango + qtdFlocos;
    
let mensagemDesconto = "";

// Lógica 1: Desconto de 10% para mais de 5 sorvetes
if (qtdTotalSorvetes > 5) {
    // Mais do que 5 sorvetes tem desconto de 10%
    const desconto = valorTotalPedido * 0.10;
    valorTotalPedido -= desconto;
    mensagemDesconto = "(Desconto de 10% aplicado por ter mais de 5 sorvetes)";
}

// Lógica 2: Cobertura gratuita para pedidos acima de R$ 20,00
if (valorTotalPedido > 20) {
    // Pedido acima de R$ 20,00 ganha cobertura gratuita
    console.log(`\nTotal do pedido: R$ ${valorTotalPedido.toFixed(2)} e com cobertura gratuita! ${mensagemDesconto}`);
} else {
    console.log(`\nTotal do pedido: R$ ${valorTotalPedido.toFixed(2)}. ${mensagemDesconto}`);
}
