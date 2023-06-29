import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }

    increment() {
        // this.state.count = this.state.count + 1;
        // this.setState({
        //     count: this.state.count + 1
        // }, () => {
        //     console.log('modifying this.setState', this.state.count)
        // })

        // if we want to calculate current state based on previous state
        this.setState((previousState, props) => ({
            count: previousState.count + 1
        }))

        console.log('modifying this.state', this.state.count)
    }

    incrementFiveTimes() {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

    render() {
        return(
            <div>
                <div>count - {this.state.count}</div>
                <button onClick = {() => this.incrementFiveTimes()}>Increment</button>
            </div>
           
        )
    }
}

export default Counter