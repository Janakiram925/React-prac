import React, { Component } from 'react';

class ClassClick extends Component {
    
    handleClassClick() {
        console.log('in class click');
    }

    render() {
        return (
            <div>
                <button onClick = {this.handleClassClick}>click me</button>
            </div>
        )
    }
}

export default ClassClick