import React, { Component } from 'react'
import InputRef from './InputRef'

class FocusInput extends Component {

    constructor(props) {
        super(props)

        this.componentRef = React.createRef();
    
    }

    focusInput = () => {
        this.componentRef.current.clickHandler()
    }
    

    render() {
        return(
            <div>
                <InputRef ref = {this.componentRef}/>
                <button onClick = {this.focusInput}>focus input</button>
            </div>
        )
    }
}

export default FocusInput