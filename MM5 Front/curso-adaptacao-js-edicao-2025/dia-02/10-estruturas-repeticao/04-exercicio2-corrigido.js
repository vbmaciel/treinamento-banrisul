let alturaPiramide = 8; 

// 2. Validação da altura
if (alturaPiramide < 1 || alturaPiramide > 8) {
    console.log("Altura inválida. Deve ser entre 1 e 8.");
    return;
}

// 3. Construção da pirâmide linha a linha
for (let i = 0; i < alturaPiramide; i++) {
    let linha = "";
    let linhaAtual = i + 1;
    
    // Este laço adiciona os espaços na frente
    let numeroEspacos = alturaPiramide - linhaAtual;
    for (let j = 0; j < numeroEspacos; j++) {
        linha += " ";
    }

    // Este laço adiciona os blocos #
    let numeroBlocos = linhaAtual;
    for (let j = 0; j < numeroBlocos; j++) {
        linha += "#";
    }

    console.log(linha);
}