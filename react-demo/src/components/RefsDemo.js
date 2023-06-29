import React, { Component } from 'react'

class RefsDemo extends Component {

    constructor(props) {
        super(props)

        this.inputRef = React.createRef()
    
    }

    //if we want to focus on input field
    componentDidMount() {
        this.inputRef.current.focus()
    }
    
    //getting value of the field using ref
    clickHandler = () => {
        alert(this.inputRef.current.value)
    }

    render() {
        return(
            <div>
                <input type = "text" ref = {this.inputRef}/>
                <button onClick = {this.clickHandler}>click</button>
            </div>
        )
    }
}

export default RefsDemo