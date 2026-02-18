$(document).ready(function() {
    $(document).on("click", "#listar-cliente", function(event) {
        event.preventDefault();
        $("#acoes").load("telas/tela-listar-cliente/listar-cliente.html", function(){

        const dadosSalvos = JSON.parse(localStorage.getItem('usuarios'));

        console.log("DADOS SALVOS: ", dadosSalvos);
        // 2. Se existir algo salvo, transforma de volta em objeto
        if (dadosSalvos) {
            console.log("Tamanho do alvo:", $('#tabela-dados tbody').length);
                dadosSalvos.forEach(usuario => {
                // const usuario = element;
                console.log(usuario);
                const novaLinha = `
                <tr>
                    <td>${usuario.nome}</td>
                    <td>${usuario.idade}</td>
                    <td>${usuario['tipo-conta']}</td>
                    <td>${usuario['valor-depositar']}</td>
                </tr>`;
                $('#tabela-dados tbody').append(novaLinha);
            });
        };
    });
});
});