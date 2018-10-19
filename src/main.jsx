import React from 'react'
import { render } from 'react-dom'

import FilterBuilder from './FilterBuilder/FilterBuilder.jsx'

import request from "superagent";


const onConsultorResponsavelSearch = (queryExtraParams) => {
    return (query) => {
        return new Promise((resolve, reject) => {
            request.get('https://localhost:8090/app_dev.php/api/v1/contratos/consultor-responsavel-suggest.json')
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
        type: 'autocomplete',
        displayName: 'Consultor responsável',
        custom: {
            onSearch: onConsultorResponsavelSearch({grupo: 'consultores'})
        }
    },
    comercial_responsavel: {
        type: 'autocomplete',
        displayName: 'Responsável comercial',
        custom: {
            onSearch: onConsultorResponsavelSearch({grupo: 'comercial'})
        }
    },
    produto: {
        type: 'autocomplete',
        displayName: 'Produto contratado',
        custom: {
            onSearch: onProdutoSearch({})
        }
    },
    // consultoria_situacao: {
    //     type: 'radio',
    //     displayName: 'Situação da consultoria',
    //     custom: {
    //         options: {
    //             '1': 'ativa',
    //             '0': 'inativa'
    //         }
    //     }
    // },
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



