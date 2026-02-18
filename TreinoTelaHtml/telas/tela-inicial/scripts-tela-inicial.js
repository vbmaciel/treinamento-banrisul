$(document).ready(function() {
    // Carrega a tela inicial
    $(document).on("click", "#criar-cliente", function() {
        $("#acoes").load("telas/tela-criar-cliente/criar-cliente.html");
    });

    // // "Ouve" o clique no botão que está dentro de qualquer tela injetada
    // $(document).on("click", "#listar-cliente", function() {
    //     $("#acoes").load("telas/tela-listar-cliente/listar-cliente.html");
    // });

    $(document).on("click", "#pesquisar", function() {
        $("#acoes").load("telas/tela-pesquisar/pesquisar.html");
    });
});