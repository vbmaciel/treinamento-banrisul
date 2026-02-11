$(document).ready(function() {    
    $("#form-pedido").submit(function(e) {
        e.preventDefault(); 
        $("#status-envio").text("Pedido interceptado! (Não enviado para o servidor)");
    });

    $("#tipo").change(function() {
        const valorSelecionado = $(this).val();
        $("#status-envio").text(`Seleção alterada para: ${valorSelecionado}`);
    });
});