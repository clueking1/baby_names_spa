import React, { useState } from 'react'
import './style.css'

//API Import
import API from '../../Utils/API'

function InputNames() {
    const [name, setName] = useState('')

    function submit() {
        API.newName({
            name : name
        })
    }

    return (
        <div className="inputDiv">
            <input
                className="nameIn"
                onChange={e => setName(e.target.value)}
            />
            <br />
            <button 
                type="submit"
                onClick={() => submit()}
            >Submit Name!</button>
        </div>
        
    )
}

export default InputNames