import React, { Component } from 'react'
import { UserConsumer } from './UserContext'

class ComponentF extends Component {
    render() {
        return (
            <>
            <div>a</div>
                <div>b</div>
                <div>c</div>
            <UserConsumer>
                {
                    (value) => {
                      return  <h2>hello {value}</h2>
                    }
                }
            </UserConsumer>
            </>
        )
    }
}

export default ComponentF
