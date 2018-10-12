import React from 'react'
import { render } from 'react-dom'

import FilterBuilder from './FilterBuilder/FilterBuilder.jsx'

/* --- Tipos de Filtro --- */
import GenericFilterEditComponent from './FilterTypes/GenericFilterEditComponent.jsx'
import GenericFilterViewComponent from './FilterTypes/GenericFilterViewComponent.jsx'

import AutoCompleteFilterEditComponent from './FilterTypes/AutoCompleteFilterEditComponent.jsx'
import AutoCompleteFilterViewComponent from './FilterTypes/AutoCompleteFilterViewComponent.jsx'


import RadioSelectEditComponent from './FilterTypes/RadioSelectEditComponent.jsx'
import RadioViewComponent from './FilterTypes/RadioViewComponent.jsx'

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
    consultor_responsavel: {
        editComponent: AutoCompleteFilterEditComponent,
        viewComponent: AutoCompleteFilterViewComponent,
        displayName: 'Consultor responsável',
        custom: {
            onSearch: onUsuarioSearch({grupo: 'consultores'})
        }
    },
    comercial_responsavel: {
        editComponent: AutoCompleteFilterEditComponent,
        viewComponent: AutoCompleteFilterViewComponent,
        displayName: 'Responsável comercial',
        custom: {
            onSearch: onUsuarioSearch({grupo: 'comercial'})
        }
    },
    produto: {
        editComponent: AutoCompleteFilterEditComponent,
        viewComponent: AutoCompleteFilterViewComponent,
        displayName: 'Produto contratado',
        custom: {
            onSearch: onProdutoSearch({})
        }
    },
    consultoria_situacao: {
        editComponent: RadioSelectEditComponent,
        viewComponent: RadioViewComponent,
        displayName: 'Situação da consultoria',
        custom: {
            options: {
                '1': 'ativa',
                '0': 'inativa'
            }
        }
    },
}


let currentFilters = {}

render(
    <div>
        <h3>Construtor de filtros</h3>

        <p>
            Você verá o que é uma busca rápida e flexível.
        </p>

        <br />

        <FilterBuilder
            availableFilters={ availableFilters }
            selectedFilters={ currentFilters }
            onFiltersChange={ (filters) => { console.log(' filters = %o', filters)} }
        />

    </div>,
    document.getElementById('app')
);



