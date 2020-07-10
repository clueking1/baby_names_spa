import React, { useEffect, useState } from 'react'
import './style.css'

//components' imports
import Title from '../../Components/Title'
import Input from '../../Components/InputNames'
import Name from '../../Components/NameDisplay'

//API imports
import API from '../../Utils/API'

function MainPage(props) {
    const [names, setNames] = useState()
    const [toggle, setToggle] = useState(false)
    useEffect(() => {
        //console.log(props.computedMatch.params.id)
        API.namesTables({
            table: props.computedMatch.params.id
        })
        .then(res => {
            setNames(res.data)
        })
    },[toggle])

    function addName(name) {
        if (name.length === 0) {
            alert('Input can not be empty!')
            return
        }
        
        let trimName = name.trim()
        let lowerCase = trimName.toLowerCase()
        let formattedName = lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1)
     
    
        if (props.computedMatch.params.id.length !== 12) {
            alert('url id must be 12 characters!')
            return
         } else if (trimName.match(/\d/g) !== null) {
            alert('Names may not have numbers!')
            return 
         } else if (trimName.split(" ").length - 1 >= 2) {
            alert('Names may not have more that two spaces!')
            return 
         }
        //if (props.computedMatch.params.id)
         API.newNameTable({
            name: formattedName,
            table : props.computedMatch.params.id
         })
         .then(() => {
            setToggle(!toggle)
         })
    }
    return (
        <div className="mainBackground">
            <div className="mainColor">
                <Title />
                <Input addName = {addName}/>
                {names !== undefined ?<Name names={names}/>:undefined}
            </div>  
        </div>
    )
}

export default MainPage