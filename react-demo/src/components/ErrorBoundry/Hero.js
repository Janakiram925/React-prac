import React from 'react'

function Hero({heroName}) { 
    if(heroName === 'jocker') {
        throw new Error('not a hero')
    }
    return (
       <h2>{heroName}</h2>
    )
}

export default Hero
