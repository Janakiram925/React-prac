import React from 'react'

const Person = ({personDetails}) =>  {

    return(
        <div>
            <h2>
            I am {personDetails.name} with id {personDetails.id} skill {personDetails.skill}
            </h2>
        </div>
    )
}

export default Person