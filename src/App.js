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
import CustomersList from './pages/customers/List'
import CustomersEdit from './pages/customers/Edit'
import Register from './pages/customers/Register'
import RickAndMorty from './pages/RickAndMorty'
import Marvel from './pages/Marvel'
import Advice from './pages/Advice'
import Login from './pages/Login'


const App = () => {
  return (
    <>
      <Router>
        <TemplateDefault> 
          <Switch>            
            <Route path="/login">
              <TemplatePage title="Tela de Login" Component={Login} />
            </Route>
            <Route path="/about">
              <TemplatePage title="Sobre" Component={About} />
            </Route>
            <Route path="/advice">
              <TemplatePage title="Ask to Guru" Component={Advice} />
            </Route>
            <Route path="/marvel">
              <TemplatePage title="Characters Marvel" Component={Marvel} />
            </Route>
            <Route path="/rickmorty">
              <TemplatePage title="Characters Rick and Morty" Component={RickAndMorty} />
            </Route>
            <Route path="/customers/edit/:id">
              <TemplatePage title="Editar Cliente" Component={CustomersEdit} />
            </Route>
            <Route path="/customers/add">
              <TemplatePage title="Registro de Clientes" Component={Register} />
            </Route>
            <Route path="/customers">
              <TemplatePage title="Lista de Clientes" Component={CustomersList} />
            </Route>
            <Route path="/">
              <TemplatePage title="Página Inicial" Component={Home}/>
            </Route>
          </Switch>
        </TemplateDefault>
      </Router>


    </>
  )
}

export default App;
