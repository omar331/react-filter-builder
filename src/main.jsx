import React from 'react'
import { render } from 'react-dom'

import FilterBuilder from './FilterBuilder/FilterBuilder.jsx'

/* --- Tipos de Filtro --- */
import GenericFilterEditComponent from './FilterTypes/GenericFilterEditComponent.jsx'
import GenericFilterViewComponent from './FilterTypes/GenericFilterViewComponent.jsx'

import AutoCompleteFilterEditComponent from './FilterTypes/AutoCompleteFilterEditComponent.jsx'
import AutoCompleteFilterViewComponent from './FilterTypes/AutoCompleteFilterViewComponent.jsx'
import request from "superagent";


const onUsuarioSearch = (queryExtraParams) => {
    return (query) => {
        return new Promise((resolve, reject) => {
            request.get('https://localhost:8090/app_dev.php/api/v1/contratos/usuarios-suggest.json')
                .query( Object.assign(queryExtraParams, query) )
                .end((err, res) => {

                    let options = []

                    if (err === null) {
                        options = res.body.suggestions
                    }

                    resolve(options)
                })
        })
    }
}


const onProdutoSearch = (queryExtraParams) => {
    return (query) => {
        return new Promise((resolve, reject) => {
            request.get('https://localhost:8090/app_dev.php/api/v1/contratos/produtos-suggest.json')
                .query( Object.assign(queryExtraParams, query) )
                .end((err, res) => {

                    let options = []

                    if (err === null) {
                        options = res.body.suggestions
                    }

                    resolve(options)
                })
        })
    }
}



let availableFilters = {
    consultor: {
        editComponent: AutoCompleteFilterEditComponent,
        viewComponent: AutoCompleteFilterViewComponent,
        displayName: 'Consultor',
        validate: (value) => { // faz validacao
        },
        custom: {
            onSearch: onUsuarioSearch({grupo: 'consultores'})
        }
    },
    produto: {
        editComponent: AutoCompleteFilterEditComponent,
        viewComponent: AutoCompleteFilterViewComponent,
        displayName: 'Produto que vc quer',
        validate: (value) => { // faz validacao
        },
        custom: {
            onSearch: onProdutoSearch({})
        }
    },
    organizacao: {
        editComponent: GenericFilterEditComponent,
        viewComponent: GenericFilterViewComponent,
        displayName: 'Organização',
        validate: (value) => { // faz validacao
        },
        custom: {
            autocomplete_url: 'https://autocomplete.organizacao.url',
            extraQueryParams: {a: 1, b: 2}
        }
    },
    comercial_responsavel: {
        editComponent: AutoCompleteFilterEditComponent,
        viewComponent: AutoCompleteFilterViewComponent,
        displayName: 'Responsável comercial',
        validate: (value) => { // faz validacao
        },
        custom: {
            onSearch: onUsuarioSearch({grupo: 'comercial'})
        }
    },
    vigencia_contrato: {
        editComponent: GenericFilterEditComponent,
        viewComponent: GenericFilterViewComponent,
        displayName: 'Periodo de vigência de contrato',
        validate: (value) => { // faz validacao
        },
        custom: {
            autocomplete_url: 'https://autocomplete.produto.url',
            extraQueryParams: {a: 1, b: 2}
        }
    },
    cidade: {
        editComponent: GenericFilterEditComponent,
        viewComponent: GenericFilterViewComponent,
        displayName: 'Cidade',
        validate: (value) => { // faz validacao
        },
        custom: {
            autocomplete_url: 'https://autocomplete.produto.url',
            extraQueryParams: {a: 1, b: 2}
        }
    },
    consultoria_ativa: {
        editComponent: GenericFilterEditComponent,
        viewComponent: GenericFilterViewComponent,
        displayName: 'Consultoria ativa',
        validate: (value) => { // faz validacao
        },
        custom: {
            autocomplete_url: 'https://autocomplete.produto.url',
            extraQueryParams: {a: 1, b: 2}
        }
    },


}


// let currentFilters = [
//     {
//         // cada filtro recebe uma chave única
//         key: '111',
//         type: 'consultor',
//         value: 'Ariane Ferreira'
//     },
//     {
//         key: '222',
//         type: 'comercial_responsavel',
//         value: 'Adair Mendes'
//     },
//     {
//         key: '333',
//         type: 'vigencia_contrato',
//         value: ['2018-01-01', '2018-12-31']
//     },
// ]
let currentFilters = [
]

render(
    <div>
        <h3>Filter Builder Dev Enviroment</h3>

        <p>
            Você verá o que é uma busca rápida e flexível.
        </p>

        <br />

        <FilterBuilder
            availableFilters={ availableFilters }
            selectedFilters={ currentFilters }
        />

    </div>,
    document.getElementById('app')
);



