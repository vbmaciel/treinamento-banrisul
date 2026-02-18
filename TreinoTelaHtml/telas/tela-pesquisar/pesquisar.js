$(document).ready(function() {
        console.log("CAIU 1")

    $(document).on('submit', '#formulario-pesquisa', function(event) {
        event.preventDefault();
        console.log("CAIU 2")
        const dadosArray = $(this).serializeArray();
        console.log("NOME: ", dadosArray);
        console.log("NOME: ", dadosArray[0].value);
        const dadosSalvos = JSON.parse(localStorage.getItem('usuarios'));

        console.log("DADOS SALVOS: ", dadosSalvos);
        // 2. Se existir algo salvo, transforma de volta em objeto
        $('#tabela-pesquisa tbody').empty();
        if (dadosSalvos) {
            console.log("Tamanho do alvo:", $('#tabela-dados tbody').length);
                dadosSalvos.forEach(usuario => {
                // const usuario = element;
                console.log("US:", usuario)
                if(usuario.nome != dadosArray[0].value){
                    $("#corpo").html("Nada encontrado")
                }else{
                if(usuario.nome == dadosArray[0].value){
                    console.log(usuario);
                    const novaLinha = `
                    <tr>
                        <td>${usuario.nome}</td>
                        <td>${usuario.idade}</td>
                        <td>${usuario['tipo-conta']}</td>
                        <td>${usuario['valor-depositar']}</td>
                    </tr>`;
                    $('#tabela-pesquisa tbody').append(novaLinha);
                }}
            });
        };
        
    });
});