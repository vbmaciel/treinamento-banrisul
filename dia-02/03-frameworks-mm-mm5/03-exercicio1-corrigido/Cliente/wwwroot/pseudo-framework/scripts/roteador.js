const Roteador = {
    telas: {
        mapaTelas: {},
        adicionar: function (nomeTela) {
            Roteador.telas.mapaTelas[nomeTela] = {
                inicializar: null
            };
        },
        registrarInicializador: function (nomeTela, inicializar) {
            const tela = Roteador.telas.mapaTelas[nomeTela];

            if (tela)
                tela.inicializar = inicializar;
        },
        inicializar: function (nomeTela) {
            const tela = Roteador.telas.mapaTelas[nomeTela];

            if (!tela.inicializar)
                console.error('A tela ' + nomeTela + ' não possui uma função inicializar() registrada.');
                
            tela.inicializar();
        }
    },
    cacheDepEstilos: {},
    cacheDepScripts: {},

    carregar: function (nomeTela) {
        const placeholderConteudo = document.getElementById('conteudo');
        
        const tela = Roteador.telas.mapaTelas[nomeTela];
        if (!tela) {
            placeholderConteudo.innerHTML = '<h2>Tela "' + nomeTela + '" não cadastrada no roteador</h2>';

            return;
        }

        let nomeArquivoBase = 'telas/' + nomeTela + '/tela-' + nomeTela;

        let nomeArquivoHtml = nomeArquivoBase + '.html';
        let nomeArquivoCss = nomeArquivoBase + '.css';
        let nomeArquivoJs = nomeArquivoBase + '.js';

        ClienteHttp.arquivos.get(nomeArquivoHtml)
            .then(function (html) {
                placeholderConteudo.innerHTML = html;
                
                Roteador.carregarEstilos(nomeArquivoCss);
                
                Roteador.carregarScripts(nomeArquivoJs, nomeTela);
            })
            .catch(function () {
                placeholderConteudo.innerHTML = '<h2>Falha no carregamento da tela "' + nomeTela + '"</h2>';
            });
    },
    carregarEstilos: function (nomeArquivo) {
        if (Roteador.cacheDepEstilos[nomeArquivo]) 
            return;
        
        ClienteHttp.arquivos.head(nomeArquivo)
            .then(function (encontrado) {
                if (!encontrado)
                    throw new Error();

                const link = document.createElement('link');
                link.rel = 'stylesheet';
                link.href = nomeArquivo;

                link.onload = function () {
                    Roteador.cacheDepEstilos[nomeArquivo] = true;
                };

                document.head.appendChild(link);
            })
            .catch(function () { });
    },
    carregarScripts: function (nomeArquivo, nomeTela) {
        if (Roteador.cacheDepScripts[nomeArquivo])
        {
            Roteador.telas.inicializar(nomeTela);
            
            return;
        }

        ClienteHttp.arquivos.head(nomeArquivo)
             .then(function (encontrado) {
                if (!encontrado)
                    throw new Error();

                const script = document.createElement('script');
                script.src = nomeArquivo;

                script.onload = function () {
                    Roteador.cacheDepScripts[nomeArquivo] = true;

                    Roteador.telas.inicializar(nomeTela);
                }

                document.head.appendChild(script);
            })
            .catch(function () { });
    }
};
