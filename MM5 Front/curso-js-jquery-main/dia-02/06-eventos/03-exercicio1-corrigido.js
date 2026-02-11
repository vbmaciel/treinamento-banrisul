$(document).ready(function() {    
    $("#caixa-hover").hover(
        // Função 1: mouseenter (O mouse entra)
        function() {
            $(this).css("background-color", "#add8e6"); 
            $(this).text("Você está dentro!");
        },
        // Função 2: mouseleave (O mouse sai)
        function() {
            $(this).css("background-color", "#f0f0f0");
            $(this).text("Passe o mouse aqui");
        }
    );

    $("#campo-feedback").keyup(function() {
        // Obtém o valor do campo e seu comprimento
        const valorDigitado = $(this).val();
        const contagem = valorDigitado.length;

        // Atualiza o <span> com a contagem de caracteres
        $("#contador").text(contagem);
    });
    
});