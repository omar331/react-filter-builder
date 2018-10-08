import React from 'react'

import PropTypes from 'prop-types'

import { FormGroup, ControlLabel, FormControl, Row, Col } from 'react-bootstrap'

import FilterAdd from './FilterAdd.jsx'
import FilterList from './FilterList.jsx'

import './style/style.css'

export default class FilterBuilder extends React.Component {
    constructor(props) {
        super(props)


        this.state = {
            selectedFilters: props.selectedFilters,
            availableFilters: props.availableFilters,

            resetAdd: false
        }
    }

    handleRemoveFilter(filterKey) {
        // TODO: implementar remoção de filtro
        console.log('  -----  Remover filtro key = %s', filterKey)
    }

    handleAddFinish( selectedFilter, value ) {
        let { selectedFilters } = this.state

        selectedFilters.push(
            {
                type: selectedFilter.type,
                key: "filter-" + Math.random(),
                value
            }
        )

        this.setState({selectedFilters, resetAdd: true})
    }


    render() {
        const { selectedFilters, availableFilters, resetAdd } = this.state

        return <div className={ "filter-builder" }>
                    <Row>
                        <Col md={5}>
                            <FilterAdd availableFilters={ availableFilters }
                                       onFinish={ this.handleAddFinish.bind(this) }
                                       reset={ resetAdd }
                            />
                        </Col>
                        <Col md={7}>
                            <FilterList appliedFilters={selectedFilters}
                                        filterDefinitions={ this.props.availableFilters}
                                        onRemoveFilter={ this.handleRemoveFilter.bind(this) }
                            />
                        </Col>
                    </Row>
                </div>

    }


    // TODO: NAO APAGAR USAR QUANDO FOR FAZER O EDITOR DE FILTRO
    // render() {
    //     const { selectedFilters } = this.state
    //
    //     let keyn = 0
    //
    //     return <div>
    //         {selectedFilters.map((selectedFilter) => {
    //             const {type, value} = selectedFilter
    //
    //             const filterInfo = this.props.availableFilters[type]
    //
    //             // TODO: Validar aqui com PropTypes?
    //             const EditFilterComponent = filterInfo.editComponent
    //
    //             return <EditFilterComponent
    //                         key={ "filter_component_" + (++keyn) }
    //                         label={ filterInfo.displayName }
    //                         value={ selectedFilter.value }
    //                         helptext={ "Science bitch! #elenão"}
    //
    //             />
    //         })
    //         }
    //     </div>
    // }
}


FilterBuilder.propTypes = {
    /* Filtros disponíveis */
    availableFilters: PropTypes.object,

    /* Selected filters */
    selectedFilters: PropTypes.array,
}
