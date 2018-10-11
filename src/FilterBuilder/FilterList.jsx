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

    handleRemoveFilter(type) {
        const { onRemoveFilter } = this.props

        return (e) => {
            if ( onRemoveFilter ) onRemoveFilter(type)
        }
    }

    render() {
        const { appliedFilters } = this.state

        let keyn = 0

        return <div className={"applied"}>
            {Object.keys(appliedFilters).map((type) => {
                let selectedFilter = appliedFilters[type]

                const { value} = selectedFilter

                const filterInfo = this.props.filterDefinitions[type]

                // TODO: Validar aqui com PropTypes?
                const ViewComponent = filterInfo.viewComponent

                return <div className={ "filter filter-type-" + type } key={ "filter_view-" + type }>
                            <ViewComponent
                                label={ filterInfo.displayName }
                                value={ value }
                            />
                            <a className={"remove"} onClick={ this.handleRemoveFilter(type).bind(this)}
                                style={ {cursor: 'pointer'} }>x</a>
                       </div>
            })
            }
        </div>
    }
}


FilterList.propTypes = {
    /* Current applied filters */
    appliedFilters: PropTypes.object,

    /* All available filter definitions */
    filterDefinitions: PropTypes.object,

    /* Quando se clica em remover um filtro */
    onRemoveFilter: PropTypes.func,
}