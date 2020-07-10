import React, { useState } from 'react'
import './style.css'

//API Import
import API from '../../Utils/API'

function InputNames(props) {
    const [name, setName] = useState('')

    return (
        <div className="inputDiv">
            <input
                className="nameIn"
                onChange={e => setName(e.target.value)}
            />
            <br />
            <button 
                type="submit"
                onClick={() => props.addName(name)}
            >Submit Name!</button>
        </div>
        
    )
}

export default InputNames