import React from 'react'
import './myStyle.css'

function Stylesheet(props) {
    const primary = props.primary ? 'primary' : ''
    return(
        <div>
            <h2 className = {`${primary} font-xl`}>hello i am ram</h2>
        </div>
        
    )
}

export default Stylesheet