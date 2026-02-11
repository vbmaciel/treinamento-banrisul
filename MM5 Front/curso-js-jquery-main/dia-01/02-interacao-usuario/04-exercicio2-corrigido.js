// 1. Seleciona os elementos necessários
const inputTitulo = document.getElementById('tituloInput');
const botaoAtualizar = document.getElementById('atualizarTitulo');
const containerMensagem = document.getElementById('mensagem');

// 2. Anexa o listener de evento ao botão
botaoAtualizar.addEventListener('click', function () {

    const novoTitulo = inputTitulo.value;

    if (novoTitulo) {
        // Atualiza o título da página 
        document.title = novoTitulo;

        // Cria dinamicamente o parágrafo de mensagem
        const novoParagrafo = document.createElement('p');
        novoParagrafo.textContent = `Título atualizado para: ${novoTitulo}`;

        // Adiciona o novo parágrafo ao container
        document.body.appendChild(novoParagrafo);
    } else {
        alert('Por favor, digite um título válido.');
    }
});