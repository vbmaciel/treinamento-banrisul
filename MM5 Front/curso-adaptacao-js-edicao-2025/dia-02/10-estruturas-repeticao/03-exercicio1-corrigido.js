// 1. Definição da Meta
const META_PONTOS = 10;
console.log(`Meta a ser alcançada: ${META_PONTOS} pontos.`);
console.log("----------------------------");

// 2. Variáveis de Controle
let pontuacaoAtual = 0;
let rodadas = 0;

// 3. Lógica do Jogo (loop while)
while (pontuacaoAtual < META_PONTOS) {
    // 3a. Incrementa o contador de rodadas
    rodadas++;

    // 3b. Geração de Pontos (aleatório entre 1 e 10)
    const pontosRodada = Math.floor(Math.random() * 10) + 1;

    // 3c. Acúmulo de Pontos
    pontuacaoAtual += pontosRodada;

    // 3d. Feedback
    console.log(`Rodada ${rodadas}: Ganhou ${pontosRodada} pontos.`);
    console.log(`\tPontuação Total: ${pontuacaoAtual} / ${META_PONTOS}.`);
}

// 4. Finalização
console.log("\n----------------------------");
console.log(`Fim do jogo! Meta alcançada em ${rodadas} rodadas. Pontos totais: ${pontuacaoAtual}`);
