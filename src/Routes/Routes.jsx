import '../App.css';
import React from 'react';
import Characters from '../Pages/StarWarsCharacteres'
import Main from '../Pages/Main'
import NotFound from '../Pages/NotFound'
import Menu from '../Components/Menu'
import ReadPlanet from '../Components/ReadPlanet'
import ReadPerson from '../Components/ReadPerson'
import Planets from '../Pages/StarWarsPlanets';
import Login from '../Pages/Login'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Signin from './../Pages/Signin';

function App() {
  return (
    <Router>
      <Menu/>
      <Routes>
        <Route path='/personajes' element={<Characters/>}/>
        <Route path='/planetas' element={<Planets/>}/>
        <Route path='/' element={<Main/>}/>
        <Route path='/planet/:id' element={<ReadPlanet/>}/>
        <Route path='/person/:id' element={<ReadPerson/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </Router>
  )
  
}

export default App;
