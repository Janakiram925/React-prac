import React, { Component } from 'react';

class Message extends Component {

    constructor() {
        super();
        this.state = {
            message: 'using state in message component',
            address: {name: 'rammm', city: 'Bangalore'}
        }
    }
    changeMessage() {
        this.setState({
            message: 'thanks for subscribing',
            address: {name: 'vvv', city:'hyd'}
        })
    }
    render() {
        return(
            <div>
                <h2>{this.state.message}</h2>
                <h2>{this.state.address.name}</h2>
                <button onClick = {() => this.changeMessage()}>subscribe</button>
            </div>
        )
    }

}

export default Message