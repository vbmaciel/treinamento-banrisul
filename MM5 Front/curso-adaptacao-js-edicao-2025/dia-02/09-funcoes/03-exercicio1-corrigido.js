// Preço de cada sabor de sorvete (Constantes)
const PRECO_CHOCOLATE = 5.00;
const PRECO_MORANGO = 6.00;
const PRECO_FLOCOS = 4.00;

// Simula a entrada do usuário, retornando o valor fixo do boilerplate
function obterQuantidadeSorvetes(sabor) {
    let quantidade = 0;
    
    // Valores de simulação para replicar o pedido original (3, 4, 1)
    if (sabor === "chocolate") {
        quantidade = 3;
    } else if (sabor === "morango") {
        quantidade = 4;
    } else if (sabor === "flocos") {
        quantidade = 1;
    }
    
    console.log(`Quantos sorvetes de ${sabor}? ${quantidade}`);
    return quantidade;
}

// Calcula subtotais por sabor de sorvete
function calcularSubtotal(quantidade, preco) {
    return quantidade * preco;
}

// Soma os subtotais para obter o total do pedido
function calcularTotal(subtotalChocolate, subtotalMorango, subtotalFlocos) {
    return subtotalChocolate + subtotalMorango + subtotalFlocos;
}

/**
 * Aplica o desconto de 10% se o total de sorvetes for > 5.
 */
function aplicarDesconto(total, totalSorvetes) {
    if (totalSorvetes > 5) {
        total -= total / 10;
    }

    return total;
}

// Verifica se o pedido é elegível para a promoção de cobertura gratuita (total > R$ 20,00)
function temCoberturaGratuita(total) {
    return total > 20;
}

// Exibe o resumo final do pedido (impressão de resultados)
function exibirResumo(total, coberturaGratuita) {
    if (coberturaGratuita) {
        console.log(`\nTotal do pedido: R$ ${total.toFixed(2)} e com cobertura gratuita!`);
    } else {
        console.log(`\nTotal do pedido: R$ ${total.toFixed(2)}.`);
    }
}


// --- LÓGICA PRINCIPAL (EXECUÇÃO NO ESCOPO GLOBAL) ---

// 1. Obtenção das quantidades
// Exemplo de pedido: 3 Chocolates, 4 Morangos, 1 Flocos
const qtdChocolate = 3; 
const qtdMorango = 4;
const qtdFlocos = 1;

// 2. Cálculo dos Subtotais
const totalChocolate = calcularSubtotal(qtdChocolate, PRECO_CHOCOLATE);
const totalMorango = calcularSubtotal(qtdMorango, PRECO_MORANGO);
const totalFlocos = calcularSubtotal(qtdFlocos, PRECO_FLOCOS);

// 3. Cálculo do Total Bruto
let totalPedido = calcularTotal(totalChocolate, totalMorango, totalFlocos);

// 4. Preparação para Desconto
const qtdTotalSorvetes = qtdChocolate + qtdMorango + qtdFlocos;

// 5. Aplicação de Desconto
totalPedido = aplicarDesconto(totalPedido, qtdTotalSorvetes);

// 6. Verificação de Cobertura Gratuita
const coberturaGratuita = temCoberturaGratuita(totalPedido);

// 7. Impressão do Resumo
exibirResumo(totalPedido, coberturaGratuita);
