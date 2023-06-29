import React, { Component } from 'react'
import PureComp from './PureComp'
import RegComponent from './RegComponent'

class ParentComponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name: 'ram vundavalli'
        }
    }

    componentDidMount() {
        setInterval( () => {
            this.setState({
                name: 'ram vundavalli'
            })
        }, 2000)
    }
    

    render() {
        console.log('parent')
        return(
            <div>
                parent component
                <RegComponent  name = {this.state.name}/>
                <PureComp name = {this.state.name}/>
            </div>
            
        )
    }
}

export default ParentComponent