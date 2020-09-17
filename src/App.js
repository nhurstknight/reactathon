import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Navbar from './components/common/Navbar'
import Home from './components/common/Home'
import Footer from './components/common/Footer'

import FilmIndex from './components/films/FilmIndex'
import FilmShow from './components/films/FilmsShow'
import Randomise from './components/films/Randomise'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/films/:id" component={FilmShow}/>
        <Route path="/films" component={FilmIndex}/>
        <Route path="/randomise" component={Randomise}/>
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

export default App

