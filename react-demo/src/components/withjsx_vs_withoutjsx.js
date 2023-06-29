import React from 'react';

//Jsx
const Hello = () => {
    // return (
    //     <div>
    //         <h1>example with jsx</h1>
    //     </div>
    // )

    // without jsx

    return React.createElement('div', 
    null, 
    React.createElement('h1', {className: 'hello'}, 'example without jsx'))
}

export default Hello