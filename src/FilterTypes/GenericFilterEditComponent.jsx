import React from 'react'

import PropTypes from 'prop-types'

import { FormGroup, ControlLabel, HelpBlock, FormControl, Row, Col } from 'react-bootstrap'

export default class GenericFilterEditComponent extends React.Component {
    constructor(props) {
        super(props)

        this.handleChange = this.handleChange.bind(this)


        this.state = {
            value: props.value
        }
    }

    componentDidMount() {
        this.inputRef.focus()
    }


    handleChange(e) {
        this.setState({value: e.target.value})
    }

    handleFinishInput(e) {
        const { onFinishInput } = this.props


        if ( e.keyCode == 13 ) {
            if ( onFinishInput ) onFinishInput(this.state.value)
        }
    }

    render() {
        const { label, value, helptext } = this.props
        return <FormGroup>
            <FormControl type={'text'}
                         value={ value }
                         onChange={ this.handleChange }
                         inputRef={ (ref) => { this.inputRef = ref } }
                         onKeyDown={ this.handleFinishInput.bind(this) }

            />
            { helptext !== null ? <HelpBlock>{ helptext }</HelpBlock> : null }
        </FormGroup>
    }
}


GenericFilterEditComponent.propTypes = {
    // Label
    label: PropTypes.string,

    // Texto de ajuda
    helptext: PropTypes.string,

    // Valor
    // TODO: definir o tipo corretamente
    value: PropTypes.any,

    // Invocado quando é finalizada a entrada do valor
    onFinishInput: PropTypes.func,
}