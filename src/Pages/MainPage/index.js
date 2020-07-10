import React from 'react'
import './style.css'

//components' imports
import Title from '../../Components/Title'
import Input from '../../Components/InputNames'

function MainPage() {
    return (
        <div className="mainBackground">
            <div className="mainColor">
                <Title />
                <Input />
            </div>  
        </div>
    )
}

export default MainPage