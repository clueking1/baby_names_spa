import React, {useState, useEffect} from 'react'
import { BrowserRouter as Router, Switch } from "react-router-dom";

//Pages' imports
import MainPage from './Pages/MainPage'

//npm imports
import randomstring from 'randomstring'


function App() {
    const [string, setString] = useState('')
    
    useEffect(() => {
        let random = randomstring.generate({
            length: 12,
            charset: 'alphanumeric'
          });
        setString(random)
    },[])
    return (
        <Router>
            <div className="appWrap">
                <Switch>
                    <MainPage path='/' component={string}/>
                </Switch>
            </div>
        </Router>
    )
}

export default App