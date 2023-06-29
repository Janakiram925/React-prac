import React, { Component } from 'react'

class ClickCounter extends Component {

    // constructor(props) {
    //     super(props)
    
    //     this.state = {
    //          count: 0
    //     }
    // }

    // increment = () => {
    //     this.setState((prevState) => {
    //         return {count: prevState.count + 1}
    //     })
    // }
    
    render() {
        var { count, increment } = this.props
        return (
            <button onClick = {increment}>click {count} times</button>
        )
    }
}

export default ClickCounter
