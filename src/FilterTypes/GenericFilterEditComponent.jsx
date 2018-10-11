import React from 'react'

import { FormGroup, ControlLabel, HelpBlock, FormControl, Row, Col } from 'react-bootstrap'

import filterEditPropTypes from './FilterEditPropTypes.jsx'

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


GenericFilterEditComponent.propTypes = filterEditPropTypes

