const ClienteHttp = {
    arquivos: { 
        requisitar: function (verbo, rota) {
            return fetch(rota, { method: verbo, cache: 'no-store' })
                .then(function (response) {
                    if (verbo === 'HEAD')
                        return response.ok;
                    
                    if (!response.ok)
                        throw new Error(response.status + ' - ' + response.statusText);
                    
                    return response.text();
                })
                .catch(function (excecao) {
                    console.error('Ocorreu um erro na requisição para "' + rota + '": ' + excecao);

                    throw excecao;
                });
        },

        head: function (rota) {
            return ClienteHttp.arquivos.requisitar('HEAD', rota);
        },

        get: function (rota) {
            return ClienteHttp.arquivos.requisitar('GET', rota);
        }
    },
    api: {
        caminho: '',
        configurar: function (porta) {
            ClienteHttp.api.caminho = 'http://localhost:' + porta;
        },

        requisitar: function (verbo, rota, corpo) {
            let url = ClienteHttp.api.caminho + rota;
            
            return fetch(url,
                {
                    method: verbo,
                    headers: { 'Content-Type': 'application/json' },
                    body: corpo ? JSON.stringify(corpo) : null
                }
            )
                .then(function (response) {
                    if (!response.ok)
                        throw new Error(response.status + ' - ' + response.statusText);
                    
                    return response.json();
                })
                .then(function (wrapper) {
                    if (!wrapper.Sucesso)
                        throw wrapper;

                    return wrapper.Dados;
                })
                .catch(function (excecao) {
                    console.error('Ocorreu um erro na requisição para "' + url + '": ' + excecao);

                    throw excecao;
                });
        },

        get: function (rota) {
            return ClienteHttp.api.requisitar('GET', rota);
        },

        post: function (rota, corpo) {
            return ClienteHttp.api.requisitar('POST', rota, corpo);
        },

        put: function (rota, corpo) {
            return ClienteHttp.api.requisitar('PUT', rota, corpo);
        },

        delete: function (rota) {
            return ClienteHttp.api.requisitar('DELETE', rota);
        }
    }
};
