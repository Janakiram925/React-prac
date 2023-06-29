import React, { Component } from 'react'
import updatedComponent from './WithHigherOrder'

class ClickCounter extends Component {

    // constructor(props) {
    //     super(props)
    
    //     this.state = {
    //          count: 0
    //     }
    // }

    // clickHandler = () => {
    //     this.setState(prevState => {
    //         return { count: prevState.count + 1 }
    //     })
    // }
    
    render() {
        const { count, incrementCount } = this.props
        return (
            <div>
                <button onClick = {incrementCount}>{this.props.name}clicked {count} times</button>
            </div>
        )
    }
}

export default updatedComponent(ClickCounter, 3)
