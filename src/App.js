import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Filmes from './Components/Filmes'
import Homepage from "./Components/Homepage"
import Series from "./Components/Series"
import Error from "./Components/ErrorPage"

export default class App extends React.Component{
  
  render(){
    return(
      <Router>
        <h1>GR Prime</h1>
        <label>Alguma preferencia? </label>
        <input/>

        
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>

          <li>
            <Link to="/Series">Séries</Link>
          </li>

          <li>
            <Link to="/Filmes">Filmes</Link>
          </li>
        </ul>
        
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/Series" element={<Series/>}/>
          <Route path="/Filmes" element={<Filmes/>}/>
          <Route path="*" element={<Error/>}/>
        </Routes>
      </Router>
    )
  }


}