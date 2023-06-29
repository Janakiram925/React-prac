import React, { Component } from 'react'
import updatedComponent from './WithHigherOrder'

class HoverCounter extends Component {

    // constructor(props) {
    //     super(props)
    
    //     this.state = {
    //          count: 0
    //     }
    // }

    // hoverHandler = () => {
    //     this.setState(prevState => {
    //         return {count: prevState.count + 1 }
    //     })
    // }
    
    render() {
        const { count, incrementCount } = this.props
        return (
            <span onMouseOver = {incrementCount}>hovered {count} times</span>
        )
    }
}

export default updatedComponent(HoverCounter, 5)
