import React from 'react'

import { FormGroup, ControlLabel, HelpBlock, FormControl, Row, Col } from 'react-bootstrap'

import { AsyncTypeahead, Highlighter } from 'react-bootstrap-typeahead'

import filterEditPropTypes from './filterEditPropTypes.jsx'


export default class AutoCompleteFilterEditComponent extends React.Component {
    constructor(props) {
        super(props)

        this.handleChange = this.handleChange.bind(this)

        this.state = {
            value: props.value,
            isLoading: false,
            options: []
        }
    }


    handleChange(v) {
        const { onFinishInput } = this.props

        // TODO: implementar multi select
        if ( onFinishInput ) onFinishInput(v[0])
    }

    handleFinishInput(e) {
        const { onFinishInput } = this.props


        if ( e.keyCode == 13 ) {
            if ( onFinishInput ) onFinishInput(this.state.value)
        }
    }

    handleSearch(v) {
        const { custom } = this.props
        const { onSearch } = custom

        let query = {q: v}

        if ( onSearch ) {
            this.setState({isLoading: true})

            onSearch(query).then( (options) => {
                this.setState({options: options, isLoading: false})
                                    },
                () => {
                    this.setState({options: [], isLoading: false})
                }
            )
        }
    }

    render() {
        const { label, value, helptext } = this.props
        const { options, isLoading } = this.state

        return <FormGroup>
                    <AsyncTypeahead options={ options }
                                      labelKey={ option => `${option.text}`}
                                      onSearch={ this.handleSearch.bind(this) }
                                      promptText={ "Nome do consultor"}
                                      isLoading={ isLoading }
                                        onChange={ this.handleChange.bind(this)}
                                        autoFocus
                    />
                    { helptext !== null ? <HelpBlock>{ helptext }</HelpBlock> : null }
        </FormGroup>
    }
}


AutoCompleteFilterEditComponent.propTypes = filterEditPropTypes

