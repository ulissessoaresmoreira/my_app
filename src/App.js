import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import TemplateDefault from './templates/Default'
import TemplatePage from './templates/TemplatePage'

import Home from './pages/Home'
import About from './pages/About'
import Customers from './pages/Customers'
import RickAndMorty from './pages/RickAndMorty'
import Marvel from './pages/Marvel'


const App = () => {
  return (
    <>
        <TemplateDefault>
      <Router>
          <Switch>            
            <Route path="/about">
              <TemplatePage title="Sobre" Component={About} />
            </Route>
            <Route path="/marvel">
              <TemplatePage title="Characters Marvel" Component={Marvel} />
            </Route>
            <Route path="/rickmorty">
              <TemplatePage title="Characters Rick and Morty" Component={RickAndMorty} />
            </Route>
            <Route path="/customers">
              <TemplatePage title="Clientes" Component={Customers} />
            </Route>
            <Route path="/">
              <TemplatePage title="Página Inicial" Component={Home}/>
            </Route>
          </Switch>
      </Router>
        </TemplateDefault>


    </>
  )
}

export default App;
