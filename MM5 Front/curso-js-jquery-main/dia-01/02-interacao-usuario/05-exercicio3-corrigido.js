const imagem1 = document.getElementById('imagem1');
const imagem2 = document.getElementById('imagem2'); 
const botaoTrocar = document.getElementById('trocarImagem');

// Adiciona o listener de evento de clique ao botão
botaoTrocar.addEventListener('click', function () {
    // OBTÉM o valor do atributo 'src' da IMAGEM 2
    const sourceSrc = imagem2.getAttribute('src');

    // DEFINE o valor do atributo 'src' da IMAGEM 1
    imagem1.setAttribute('src', sourceSrc);

    // Opcional: Para feedback visual, trocamos o texto alternativo (alt)
    imagem1.setAttribute('alt', 'Conteúdo da Imagem 2');
});