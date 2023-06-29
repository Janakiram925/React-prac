import React, { Component } from 'react'
import ChildCompnent from './ChildComponent'


class ParentComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            message: 'hello i am parent'
        }
        this.parentMessage = this.parentMessage.bind(this)
    }

    parentMessage(childMessage) {
        alert(`hello ${this.state.message} from ${childMessage}`)
    }

    render() {
        return(
            <ChildCompnent MessageFromParent = {this.parentMessage}/>
        )
    }
}

export default ParentComponent