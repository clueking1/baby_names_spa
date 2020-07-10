import React, { useEffect, useState } from 'react'
import './style.css'

//components' imports
import Title from '../../Components/Title'
import Input from '../../Components/InputNames'
import Name from '../../Components/NameDisplay'

//API imports
import API from '../../Utils/API'

function MainPage(props) {
    const [names, setNames] = useState({})
    useEffect(() => {
        console.log(props.computedMatch.params.id)
        API.namesTables()
        .then(res => {
            setNames(res.data)
        })
    },[])


    return (
        <div className="mainBackground">
            <div className="mainColor">
                <Title />
                <Input />
                <Name names={names}/>
            </div>  
        </div>
    )
}

export default MainPage