import React from 'react'

const styling = {
    color: 'red',
    border: 'solid 1px green'
}

function Inline() {

    return (
        <div>
            <h3 style = {styling}>Inline styling example</h3>
        </div>
    )
}

export default Inline
