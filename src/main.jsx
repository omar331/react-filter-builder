import React from 'react'
import { render } from 'react-dom'

import FilterBuilder from './FilterBuilder/FilterBuilder.jsx'


/* --- Tipos de Filtro --- */
import GenericFilterEditComponent from './FilterTypes/GenericFilterEditComponent.jsx'
import GenericFilterViewComponent from './FilterTypes/GenericFilterViewComponent.jsx'


let availableFilters = {
    consultor: {
        editComponent: GenericFilterEditComponent,
        viewComponent: GenericFilterViewComponent,
        displayName: 'Consultor',
        validate: (value) => { // faz validacao
        },
        custom: {
            autocomplete_url: 'https://autocomplete.consultor.url',
            extraQueryParams: {a: 1, b: 2}
        }
    },
    produto: {
        editComponent: GenericFilterEditComponent,
        viewComponent: GenericFilterViewComponent,
        displayName: 'Produto',
        validate: (value) => { // faz validacao
        },
        custom: {
            autocomplete_url: 'https://autocomplete.produto.url',
            extraQueryParams: {a: 1, b: 2}
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
        editComponent: GenericFilterEditComponent,
        viewComponent: GenericFilterViewComponent,
        displayName: 'Responsável comercial',
        validate: (value) => { // faz validacao
        },
        custom: {
            autocomplete_url: 'https://autocomplete.organizacao.url',
            extraQueryParams: {a: 1, b: 2}
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



