import React, { Component } from 'react'

class LifeCycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'ram vundavalli'
        }

        console.log('lifecycleB constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifeCycleB getDerivedStateFromProps')
        return null
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('LifeCycleB shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifeCycleB getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate() {
        console.log('LifeCycleB componentDidUpdate')
    }

    componentDidMount() {
        console.log('LifeCycleB componentDidMount')
    }

    render() {
        console.log('LifeCycleB render')
        return(
            <div>
                I am in render
            </div>
        )
    }
    
}

export default LifeCycleB