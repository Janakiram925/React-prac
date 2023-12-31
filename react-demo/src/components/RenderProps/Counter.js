import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }

    increment = () => {
        this.setState((prevState) => {
            return {count: prevState.count + 1}
        })
    }

    render() {
        return (
            <h2>{this.props.render(this.state.count, this.increment)}</h2>
        )
    }
}

export default Counter
