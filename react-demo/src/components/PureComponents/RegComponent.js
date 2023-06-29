import React, { Component } from 'react'

class RegComponent extends Component {
    render() {
        console.log('regular component')
        return(
            <div>regular Component {this.props.name}</div>
        )
    }


}

export default RegComponent