import React from 'react'

import PropTypes from 'prop-types'

import { Row, Col, Label } from 'react-bootstrap'

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

        return <div className={"applied"}>
            {appliedFilters.map((selectedFilter) => {
                const {type, value} = selectedFilter

                const filterInfo = this.props.filterDefinitions[type]

                // TODO: Validar aqui com PropTypes?
                const ViewComponent = filterInfo.viewComponent

                return <div className={ "filter" }>
                            <ViewComponent
                                key={ "filter_component_" + (++keyn) }
                                label={ filterInfo.displayName }
                                value={ selectedFilter.value }
                            />
                            <a className={"remove"} onClick={ this.handleRemoveFilter(selectedFilter.key).bind(this)}
                                style={ {cursor: 'pointer'} }>x</a>
                       </div>
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