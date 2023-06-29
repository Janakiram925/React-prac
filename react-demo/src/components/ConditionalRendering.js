import React, { Component } from 'react'

class ConditionalRendering extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }

    render() {

        return this.state.isLoggedIn && <div>welcome Ram</div>

        // return(
        //     this.state.isLoggedIn ? <div>welcome Ram</div> : <div>welcome guest</div>
        // )

        // let message
        // if (this.state.isLoggedIn) {
        //     message = <div>welcome Ram</div>
        // } else {
        //     message =  <div>welcome guest</div>
        // }
        // return message
      
            // if(this.state.isLoggedIn) {
            //    return <div>welcome Ram</div>
            // } else {
            //     return <div>welcome guest</div>
            // }
    }
}

export default ConditionalRendering