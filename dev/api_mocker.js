var apiMocker = function(endpoints ) {
    return function (mocker, httpClient) {
        var myMocker = mocker(httpClient);
        console.log("Entrou no mocker");


        myMocker.post(endpoints['testeeeeeee'], function (req) {

            console.log("estamos dentro do post")

            return {
                body: {
                    data: [
                            {
                                id: 1,
                                chave: 'xxaxaxaxaxaxaxaxaxaxaxaxaxaxaxaxa',
                                urlAceite: 'http://url-aceite-convite/111xaxaxaxaxaxaxaxaxa',
                                criadoEm: '2017-03-12',
                                criadoPor: 'Omar Alves',
                                organizacao: 'Templum',
                                produto: 'ISO 9001',
                                enviadoPara: {
                                    nome: 'Jose Alves',
                                    email: 'jalves@abcystems.com.br'
                                },
                                aceite: {
                                    empresa: 'ABC Systems',
                                    contratoId: 123112,
                                    url: "http://url-raiox.evolutto/121211"
                                }
                            },
                            {
                                id: 2,
                                chave: 'xxaxaxaxaxaxaxaxaxaxaxaxaxaxaxaxa',
                                urlAceite: 'http://url-aceite-convite/222xaxaxaxaxaxaxaxaxa',
                                criadoEm: '2017-03-12',
                                criadoPor: 'Omar Alves',
                                organizacao: 'Templum',
                                produto: 'PBQP-H',
                                enviadoPara: {
                                    nome: 'Jose Alves',
                                    email: 'jalves@abcystems.com.br'
                                },
                                aceite: {
                                    empresa: 'ABC Systems',
                                    contratoId: 123112,
                                    url: "http://url-raiox.evolutto/121211"
                                }
                            },
                            {
                                id: 3,
                                chave: 'xxaxaxaxaxaxaxaxaxaxaxaxaxaxaxaxa',
                                urlAceite: 'http://url-aceite-convite/333xaxaxaxaxaxaxaxaxa',
                                criadoEm: '2017-03-12',
                                criadoPor: 'Omar Alves',
                                organizacao: 'Templum',
                                produto: 'SGI',
                                enviadoPara: {
                                    nome: 'Jose Alves',
                                    email: 'jalves@abcystems.com.br',
                                },
                                aceite: {}
                            },

                    ]
                }
            }
                ;
        });
    }
}
