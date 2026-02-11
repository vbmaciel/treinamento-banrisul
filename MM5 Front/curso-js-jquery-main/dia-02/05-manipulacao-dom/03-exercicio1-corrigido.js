$(document).ready(function() {
    // Anexa um evento de clique ao botão Salvar
    $("#btnSalvar").click(function() {
        
        // Obtém o valor do campo de input
        const nome = $("#campoNome").val();
        
        // Trata o caso de campo vazio
        const nomeParaExibir = nome.trim() === "" ? "Visitante" : nome;

        // Atualiza o <span> de exibição
        $("#nomeExibido").text(nomeParaExibir);

        // Atualiza o atributo 'alt' da imagem
        $("#imagemPerfil").attr("alt", `Avatar do Usuário ${nomeParaExibir}`);
    });
    
});