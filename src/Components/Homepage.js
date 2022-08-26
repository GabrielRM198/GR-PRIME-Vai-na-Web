import React from 'react'
import styled from 'styled-components'
import Filmes from './Filmes'
import Series from './Series'





export const Home = styled.div`
background-color: #161720;
height: 1000px;
`




export default class Homepage extends React.Component{
    render(){
        return(
            <Home>  
                <Filmes/>
                <Series/>
            </Home>
        )
    }
}