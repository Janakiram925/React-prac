import React, { Component } from 'react'

class Form extends Component {

    constructor(){
        super()

        this.state = {
            username: '',
            topic: 'react'
        }
    }

    formHandler = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handleTopicChange = event => {
        this.setState({
            topic: event.target.value
        })
    }

    handleSubmit = event => {
        alert(`${this.state.username} ${this.state.topic}`)
        event.preventDefault()
    }

    render() {
        return(
            <form onSubmit = {this.handleSubmit}>
                <div>
                <label>Username: </label> 
                <input type = "text" 
                value = {this.state.username}
                onChange = {this.formHandler}    
                />
            </div>
            <div>
                <label>topic: </label>
                <select value = {this.state.topic} onChange= {this.handleTopicChange}>
                    <option value = 'angular'>Angular</option>
                    <option value = 'react'>React</option>
                    <option value = 'script'>Script</option>
                </select>
            </div>
            <button type = "submit">submit</button>
            </form>
            
        )
    }

}

export default Form