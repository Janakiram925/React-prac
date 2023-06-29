import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

class LifeCycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'ram vundavalli'
        }

        console.log('lifecycle A constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifeCycleA getDerivedStateFromProps')
        return null
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('LifeCycleA shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifeCycleA getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate() {
        console.log('LifeCycleA componentDidUpdate')
    }

    componentDidMount() {
        console.log('LifeCycleA componentDidMount')
    }

    changeStateHandler = () => {
        this.setState({
            name: 'changed to ram'
        })
    }

    render() {
        console.log('LifeCycleA render')
        return(
            <div>
                <div>I am in render</div>
                <button onClick = {this.changeStateHandler}>Change state</button>
                <p>{this.state.name}</p>
                <LifeCycleB />
            </div>
            
        )
    }
    
}

export default LifeCycleA