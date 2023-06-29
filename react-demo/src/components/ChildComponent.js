import React from 'react'

function ChildComponent(props) {
    return(
       <button onClick = {() => props.MessageFromParent('child')}>greet parent</button>
    )
}

export default ChildComponent