import React from 'react'
import {useHistory} from 'react-router-dom'
import './style.css'

//components' imports
import Title from '../../Components/Title'

//npm imports 
import randomstring from 'randomstring'


function MainPage() {
    let history = useHistory()
    
    let random = randomstring.generate({
        length: 12,
        charset: 'alphanumeric'
      });
    
    history.push(`/${random}`)

    return (
        <div className="mainBackground">
            <div className="mainColor">
                <Title />

            </div>  
        </div>
    )
}

export default MainPage