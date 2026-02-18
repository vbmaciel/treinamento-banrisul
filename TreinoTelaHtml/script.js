// $(document).ready(function() {
//     $("#conteudo-principal").load("tela-login.html");
    
//     $("#entrar").click(function() {
//         $("#conteudo-principal").load("tela-inicial.html");
//         // $("#tela-login").hide();
//         // $("#tela-inicial").show();
//         console.log("CLICOU")
//     })

//     $("#sair").click(function() {
//         $("#conteudo-principal").load("tela-login.html");
//         // $("#tela-inicial").hide();
//         // $("#tela-login").show();
//     })
// });

$(document).ready(function() {
    // Carrega a tela inicial
    $("#conteudo-principal").load("telas/tela-login/tela-login.html");

    // "Ouve" o clique no botão que está dentro de qualquer tela injetada
    $(document).on("click", "#entrar", function() {
        $("#conteudo-principal").load("telas/tela-inicial/tela-inicial.html");
    });

    $(document).on("click", "#sair", function() {
        $("#conteudo-principal").load("telas/tela-login/tela-login.html");
    });
});