import React from 'react'
import './style.css'

function InputNames() {
    return (
        <div className="inputDiv">
            <input
                className="nameIn"
            />
            <br />
            <button 
                type="submit"
            >Submit Name!</button>
        </div>
        
    )
}

export default InputNames