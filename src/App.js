import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import TemplateDefault from './templates/Default'

import Home from './pages/Home'
import About from './pages/About'
import Customers from './pages/Customers'
import Characters from './pages/Characters'



const App = () => {
  return (
    <>
      <TemplateDefault>
        <Router>
          <Switch>            
            <Route path="/about">
              <About />
            </Route>
            <Route path="/characters">
              <Characters />
            </Route>
            <Route path="/customers">
              <Customers />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </TemplateDefault>


    </>
  )
}

export default App;
