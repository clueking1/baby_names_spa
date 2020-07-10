import React from 'react'
import './style.css'

function NameDisplay(props) {
    let mapIt = props.names
    console.log(props.names)
    return (
        <div className="nameDiv">
        {mapIt.map(t => (
            <p className="name">{t.name}</p>
         ))} 
        </div>
    )
}

export default NameDisplay