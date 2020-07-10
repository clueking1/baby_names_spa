import React, {useState, useEffect} from 'react'
import { BrowserRouter as Router, Switch, useHistory } from "react-router-dom";

//Pages' imports
import MainPage from './Pages/MainPage'
import LoadPage from './Pages/LoadPage'
//npm imports
import randomstring from 'randomstring'

//API imports
import API from './Utils/API'


function App(props) {
    const [string, setString] = useState('')
    const history = useHistory()
    // useEffect(() => {
    //     let random = randomstring.generate({
    //         length: 12,
    //         charset: 'alphanumeric'
    //       });
    //     setString(random)
    // },[])
    let random = randomstring.generate({
        length: 12,
        charset: 'alphanumeric'
      });
      console.log(props)
    return (
        <Router>
            <div className="appWrap">
                
                <Switch>
                    <LoadPage exact path='/' />
                </Switch>
                <Switch>
                    <MainPage exact path='/:id' />
                </Switch>
            </div>
        </Router>
    )
}

export default App