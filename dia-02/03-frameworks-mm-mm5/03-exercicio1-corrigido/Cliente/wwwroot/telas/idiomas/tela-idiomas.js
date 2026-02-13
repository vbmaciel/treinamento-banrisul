(function () {
    const NOME_TELA = 'idiomas';

    Roteador.telas.registrarInicializador(NOME_TELA, inicializar);

    function inicializar() {
        // Aqui será colocado o código necessário para a inicialização adequada dos recursos da tela de exemplos
        console.log('Tela ' + NOME_TELA + ' inicializada!');
    }

    /*
     * Aqui seguirá o código específico da tela de exemplos
    */
})();
