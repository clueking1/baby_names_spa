import React from 'react'
import './style.css'

//components' imports
import Title from '../../Components/Title'
import Input from '../../Components/InputNames'
import Name from '../../Components/NameDisplay'

function MainPage(props) {
    console.log(props)
    props.computedMatch.url = `/${props.rando}`
    props.computedMatch.path = `/${props.rando}`
    props.location.pathname = `/${props.rando}`
    return (
        <div className="mainBackground">
            <div className="mainColor">
                <Title />
                <Input />
                <Name />
            </div>  
        </div>
    )
}

export default MainPage