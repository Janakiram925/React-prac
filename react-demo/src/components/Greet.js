// functional class

import React from 'react';

const greet = (props) => {
    console.log('gg', props.children)
    const {name, heroName} = props
    return (
        <div>
            <h2>Hello {name} aka {heroName}</h2>
            {props.children}
        </div>
        
    )
}

export default greet;