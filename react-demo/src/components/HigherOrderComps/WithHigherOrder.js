import React from 'react'

const WithHigherOrder = (WrappedComponent, incrementNumber) => {
    class NewComponent extends React.Component {

        constructor(props) {
            super(props)
        
            this.state = {
                 count: 0
            }
        }
    
        clickHandler = () => {
            this.setState(prevState => {
                return { count: prevState.count + incrementNumber }
            })
        }
        render() {
            return(
                <WrappedComponent  count = {this.state.count} 
                 incrementCount = {this.clickHandler} 
                 {...this.props}/>
            ) 
            
        }
    }
    return NewComponent
}

export default WithHigherOrder