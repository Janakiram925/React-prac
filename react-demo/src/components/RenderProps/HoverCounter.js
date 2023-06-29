import React, { Component } from 'react'

class HoverCounter extends Component {

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
            <span onMouseOver = {increment}>hovered {count} times</span>
        )
    }
}

export default HoverCounter
