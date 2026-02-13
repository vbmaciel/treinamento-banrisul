document.addEventListener('DOMContentLoaded', inicializar);

const MAPA_TELAS = {
    exemplos: 'exemplos',
    idiomas: 'idiomas',
    categorias: 'categorias'
};

function inicializar() {
    Roteador.telas.adicionar(MAPA_TELAS['exemplos']);
    Roteador.telas.adicionar(MAPA_TELAS['idiomas']);
    Roteador.telas.adicionar(MAPA_TELAS['categorias']);

    mapearAcaoBotoes();
}

function mapearAcaoBotoes() {
    document
        .getElementById('btn-exemplos')
        .addEventListener('click', montarTelaExemplos);

    document
        .getElementById('btn-idiomas')
        .addEventListener('click', montarTelaIdiomas);

    document
        .getElementById('btn-categorias')
        .addEventListener('click', montarTelaCategorias);
}

function montarTelaExemplos() {
    Roteador.carregar(MAPA_TELAS['exemplos']);
}

function montarTelaIdiomas() {
    Roteador.carregar(MAPA_TELAS['idiomas']);
}

function montarTelaCategorias() {
    Roteador.carregar(MAPA_TELAS['categorias']);
}
