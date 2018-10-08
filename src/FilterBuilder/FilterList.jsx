import React from 'react'

import PropTypes from 'prop-types'

import { Row, Col, Badge } from 'react-bootstrap'

export default class FilterList extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            appliedFilters: props.appliedFilters
        }
    }

    handleRemoveFilter(key) {
        const { onRemoveFilter } = this.props

        return (e) => {
            if ( onRemoveFilter ) onRemoveFilter(key)
        }
    }

    render() {
        const { appliedFilters } = this.state

        let keyn = 0

        return <div className={"fb-list"}>
            <h4>Filtros já aplicados</h4>


            {appliedFilters.map((selectedFilter) => {
                const {type, value} = selectedFilter

                const filterInfo = this.props.filterDefinitions[type]

                // TODO: Validar aqui com PropTypes?
                const ViewComponent = filterInfo.viewComponent

                return <Row key={ 'filter_key-' + selectedFilter.key }>
                            <Col md={10}>
                                <ViewComponent
                                    key={ "filter_component_" + (++keyn) }
                                    label={ filterInfo.displayName }
                                    value={ selectedFilter.value }
                                />
                            </Col>
                            <Col md={2}>
                                <Badge
                                    onClick={ this.handleRemoveFilter(selectedFilter.key).bind(this)}
                                    style={ {cursor: 'pointer'} }

                                >x</Badge>
                            </Col>
                    </Row>
            })
            }
        </div>
    }
}


FilterList.propTypes = {
    /* Current applied filters */
    appliedFilters: PropTypes.array,

    /* All available filter definitions */
    filterDefinitions: PropTypes.object,

    /* Quando se clica em remover um filtro */
    onRemoveFilter: PropTypes.func,
}