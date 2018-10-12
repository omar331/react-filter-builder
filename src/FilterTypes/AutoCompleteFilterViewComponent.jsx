import React from 'react'

import filterViewPropTypes from './filterViewPropTypes'

const component = class extends React.Component {
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
        const {label, value, helptext} = this.props
        return <span><b>{label}</b> {value.text}</span>
    }
}


component.propTypes = filterViewPropTypes

export default component

