import React from 'react'

import { FormGroup, ControlLabel, HelpBlock, Radio, Row, Col } from 'react-bootstrap'

import filterEditPropTypes from './filterEditPropTypes.jsx'

export default class RadioSelectEditComponent extends React.Component {
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
        this.setState({value: e.target.value}, () => this.handleFinishInput() )
    }

    handleFinishInput() {
        const { onFinishInput } = this.props

        if ( onFinishInput ) onFinishInput(this.state.value)
    }

    render() {
        const { custom } = this.props

        let { options } = custom

        let i = 0
        return <div>
                <FormGroup>
                    { Object.keys(options).map( (key) => {
                        i++

                        return <Radio name="options"
                                      value={key} inline
                                      key={"key"}
                                      onChange={ this.handleChange.bind(this) }
                                      inputRef={ (ref) => this.inputRef = ref }
                        >
                            {options[key]}
                        </Radio>
                    })}
                </FormGroup>
        </div>
    }
}


RadioSelectEditComponent.propTypes = filterEditPropTypes

