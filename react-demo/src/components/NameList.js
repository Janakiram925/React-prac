import React from 'react'
import Person from './Person'

function NameList() {
    // const names = ['ram', 'janaki', 'vundavalli']
    const persons = [
        {
            name: 'ram',
            id: 1,
            skill: 'javascript'
        },
        {
            name: 'shiva',
            id: 2,
            skill: 'react'
        },
        {
            name: 'mahesh',
            id: 3,
            skill: 'angular'
        }
    ]
    const namesList = persons.map(person => <Person key = {person.id} personDetails = {person} />)

    return <div>{namesList}</div>
}

export default NameList