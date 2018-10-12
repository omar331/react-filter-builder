import React from 'react'
import PropTypes from 'prop-types'

import {Row, Col, Badge} from 'react-bootstrap'

import { Typeahead } from 'react-bootstrap-typeahead'

export default class FilterAdd extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            availableFilters: props.availableFilters,

            // Filtro selecionado atualmente
            selectedFilter: null
        }
    }

    componentWillReceiveProps(nextProps) {
        if ( nextProps.reset === true ) {
            this.setState({selectedFilter: null, availableFilters: nextProps.availableFilters})
        }
    }


    getFilterOptions() {
        let filters = []

        let availableFilters = this.state.availableFilters

        for( let type in  availableFilters) {
            let filter = availableFilters[type]
            filter["type"] = type

            filters.push( filter )
        }


        return filters
    }

    render() {
        return <div>
                    <h4>Adicionar filtro</h4>

                    <div>
                            { this.renderFilterSelector() }
                            { this.renderSelectedFilterEdit() }
                    </div>
        </div>
    }


    renderFilterSelector() {
        const { selectedFilter } = this.state

        if ( selectedFilter === null ) {
            return <Typeahead options={ this.getFilterOptions() }
                       labelKey={ option => `${option.displayName}`}
                       onChange={ this.handleChange.bind(this) }
                        placeholder={ "Escolha o que deseja filtrar"}
                        autoFocus
            />
        }

        return <div>{selectedFilter.displayName}</div>
    }



    renderSelectedFilterEdit() {
        const { selectedFilter } = this.state

        if ( selectedFilter === null ) return null

        const EditComponent = selectedFilter.editComponent

        // Custom fields
        let custom = selectedFilter.hasOwnProperty('custom') ? selectedFilter.custom : {}

        return <EditComponent
                    onFinishInput={ this.handleFinishEnterValue.bind(this)}
                    custom={ custom }
                />
    }


    handleFinishEnterValue(filterValue) {
        const { onFinish } = this.props

        if ( onFinish ) onFinish(this.state.selectedFilter, filterValue )
    }


    handleChange(selected) {
        this.setState({selectedFilter: selected[0]})
    }

}


FilterAdd.propTypes = {
    /* Filtros disponíveis */
    availableFilters: PropTypes.object,

    /* Invocado quando se conclui a adição do filtro */
    onFinish: PropTypes.func,
}


