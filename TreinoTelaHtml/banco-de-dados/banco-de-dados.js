$(document).ready(function() {
    $(document).on('submit', '#formulario', function(event) {
        event.preventDefault();

        var listaClientes = []
        const dadosArray = $(this).serializeArray();

        dadosArray.campo
        // Converte para um objeto simples { nome: "valor", email: "valor" }
        const objetoDados = {};
        $.each(dadosArray, function(_, campo) {
            objetoDados[campo.name] = campo.value;
        });


        listaClientes.push(objetoDados);
        console.log("Dados formatados:", objetoDados);

        console.log(listaClientes);
        let lista = JSON.parse(localStorage.getItem('usuarios')) || [];

        lista.push(objetoDados);

        localStorage.setItem('usuarios', JSON.stringify(lista));
        // Para limpar o formulário após o envio:
        //this.reset(); 
        const dadosSalvos = localStorage.getItem('usuarios');

        // 2. Se existir algo salvo, transforma de volta em objeto
        if (dadosSalvos) {
            const usuario = JSON.parse(dadosSalvos);
            console.log(usuario);
        };
    });
});