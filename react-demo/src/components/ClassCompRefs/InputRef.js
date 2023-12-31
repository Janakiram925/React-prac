import React, { Component } from 'react'

class InputRef extends Component {

    constructor(props) {
        super(props)

        this.inputRef = React.createRef();
    
    }

    clickHandler = () => {
        this.inputRef.current.focus()
    }
    

    render() {
        return(
            <div>
                <input type = "text" ref = {this.inputRef}/>
            </div>
        )
    }
}

export default InputRef