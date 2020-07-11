import React from 'react'
import { BrowserRouter as Router, Switch } from "react-router-dom";

//Pages' imports
import MainPage from './Pages/MainPage'
import LoadPage from './Pages/LoadPage'




function App() {

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