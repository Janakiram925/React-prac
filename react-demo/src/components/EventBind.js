import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
        super(props)
        this.state = {
            message: 'hello'
        }

        // this.clickHandler = this.clickHandler.bind(this)
    }

    // clickHandler() {
    //     this.setState({
    //         message: 'good bye'
    //     })
    // }

    clickHandler = () => {
        this.setState({
            message: 'Goodbye!'
        })
    }

    render() {
        return(
            <div>
                <h4>{this.state.message}</h4>
                {/* <button onClick = {this.clickHandler.bind(this)}>click me</button> */}
                {/* <button onClick = {() => this.clickHandler()}>click me</button> */}
                <button onClick = {this.clickHandler}>click me</button>
            </div>
        )
    }
}

export default EventBind