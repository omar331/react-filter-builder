import React from 'react'

import PropTypes from 'prop-types'

import { FormGroup, ControlLabel, HelpBlock, FormControl, Row, Col } from 'react-bootstrap'

export default class GenericFilterViewComponent extends React.Component {
    constructor(props) {
        super(props)

        this.handleChange = this.handleChange.bind(this)


        this.state = {
            value: props.value
        }
    }

    handleChange(e) {
        this.setState({value: e.target.value})
    }

    render() {
        const { label, value, helptext } = this.props
        return <Row style={ {marginBottom: '1em'} }>
                    <Col md={12}>
                        <b>{ label }</b><br />
                        { value }
                    </Col>
            </Row>
    }
}


GenericFilterViewComponent.propTypes = {
    // Label
    label: PropTypes.string,

    // Valor
    // TODO: definir o tipo corretamente
    value: PropTypes.any,
}