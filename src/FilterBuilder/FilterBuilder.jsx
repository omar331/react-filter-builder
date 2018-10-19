import React from 'react'

import PropTypes from 'prop-types'

import { FormGroup, ControlLabel, FormControl, Row, Col } from 'react-bootstrap'

import FilterAdd from './FilterAdd.jsx'
import FilterList from './FilterList.jsx'

import './style/style.css'

import builtinFilterDefs from '../FilterTypes/builtInFiltersDefs.jsx'

export default class FilterBuilder extends React.Component {
    constructor(props) {
        super(props)


        this.state = {
            selectedFilters: props.selectedFilters,
            availableFilters: this.prepareAvailableFilters(props.availableFilters),

            resetAdd: false
        }
    }



    prepareAvailableFilters(filters) {
        let avFilters = {}
        Object.keys(filters).map( (filterKey) => {
            let filter = filters[filterKey]

            let type = filter.type

            let filterTypeDefs = builtinFilterDefs[type]

            delete filter['type']

            avFilters[filterKey] = Object.assign(filter, filterTypeDefs)
        })

        return avFilters
    }



    handleRemoveFilter(filterKey) {
        const { selectedFilters } = this.state

        delete selectedFilters[filterKey]

        this.setState({selectedFilters, resetAdd: true}, this.handleFiltersChange )
    }

    handleAddFinish( selectedFilter, value ) {
        let { selectedFilters } = this.state

        selectedFilters[selectedFilter.type] = {
                                                    type: selectedFilter.type,
                                                    value
                                                }


// console.log('  selected filters ')

        this.setState({selectedFilters, resetAdd: true}, this.handleFiltersChange )
    }



    handleFiltersChange() {
        const { onFiltersChange } = this.props

        if ( onFiltersChange ) onFiltersChange(this.state.selectedFilters )
    }


    getNotTakenFilters() {
        const { availableFilters, selectedFilters } = this.state

        const selectedKeys = Object.keys(selectedFilters)

        let notTaken =  {}

        Object.keys(availableFilters).map( (avKey) => {
            if ( selectedKeys.indexOf(avKey) == -1 ) {
                notTaken[avKey] = availableFilters[avKey]
            }
        })

        return notTaken
    }


    render() {
        const { selectedFilters, availableFilters, resetAdd } = this.state

        return <div className={ "filter-builder" }>
                    <Row>
                        <Col md={5}>
                            <FilterAdd availableFilters={ this.getNotTakenFilters() }
                                       onFinish={ this.handleAddFinish.bind(this) }
                                       reset={ resetAdd }
                            />
                        </Col>
                        <Col md={7}>
                            <FilterList appliedFilters={selectedFilters}
                                        filterDefinitions={ availableFilters}
                                        onRemoveFilter={ this.handleRemoveFilter.bind(this) }
                            />
                        </Col>
                    </Row>
                </div>

    }
}


FilterBuilder.propTypes = {
    /* Filtros disponíveis */
    availableFilters: PropTypes.object,

    /* Selected filters */
    selectedFilters: PropTypes.object,


    /* Called when filter changes */
    onFiltersChange: PropTypes.func,
}


export { FilterBuilder }

