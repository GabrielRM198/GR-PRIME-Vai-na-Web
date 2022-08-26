import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Filmes from './Components/Filmes'
import Homepage from "./Components/Homepage"
import Series from "./Components/Series"
import Error from "./Components/ErrorPage"
import styled from 'styled-components'


export const Dive = styled.div`
color: white;
background-color: #161720;
width: 100%;


`
export const Input = styled.input`
border-radius: 10px;
height: 30%;
margin-right: 30px;
padding: 5px;
border: none;
`


export const Div = styled.div`

display: flex;
align-items: center;
justify-content: space-between;
`



export const Nav = styled.nav`
display: flex;
list-style: none;
color: white;
text-decoration: none;
`
export const P = styled.p`

margin: 10px;

list-style: none;
text-decoration: none;
color: white;
`



export default class App extends React.Component{
  

  render(){
    return(
      <Dive>
        <Router>
          <Div>
            <h1>GR PRIME</h1>
            <Input placeholder='Alguma preferencia?'/>
          </Div>
            
            <Nav>
              <P>
                <Link to="/">Inicio</Link>
              </P>

              <P>
                <Link to="/Series">Séries</Link>
              </P>

              <P>
                <Link to="/Filmes">Filmes</Link>
              </P>
            </Nav>
            
            <Routes>
              <Route path="/" element={<Homepage/>}/>
              <Route path="/Series" element={<Series/>}/>
              <Route path="/Filmes" element={<Filmes/>}/>
              <Route path="*" element={<Error/>}/>
            </Routes>
        </Router>
      </Dive>
    )
  }


}