import React from 'react';
import Axios from 'axios';
import styled from 'styled-components'

const SeriesAPI = Axios.create({
  baseURL: 'https://api.themoviedb.org/3/tv/popular?api_key=4099ecc42004f449487b8c6b9095d783&language=en-US&page=1'
})



export const Serie = styled.div`

background-color: #161720;
color: white;
display: flex;
border: 4px solid black;
flex-direction: column;
align-items: center;
`
export const Titserie = styled.div`
border: 4px solid black;
background-color: #161720;
display: flex;
align-items: center;
justify-content: center;
`

export const Img = styled.img`
border: 3px solid black;
width: 20%;
height: 10%;
display: flex;
align-items: center;
`

export default class Series extends React.Component{
    state= {
        movies: []
    }

    addSeries = async () => {
        const resposta = await SeriesAPI.get();
        const api = resposta.data.results.map((item) => {
          return {
            title: item.title,
            overview: item.overview,
            image: `https://image.tmdb.org/t/p/w200/${item.poster_path}`
          };
        });


        this.setState({
          movies: api
        });
      };

      componentDidMount(){
        this.addSeries()
      }

  render(){
    return(
      <>
            <Titserie>
             <h2>GR Series</h2>
            </Titserie>
        {this.state.movies.map((item) => (
           
            <Serie>
                
                <h3>{item.title}</h3>
                <Img src = {item.image} alt = 'Foto'/>
                <p>{item.overview}</p>
            </Serie>
        ) )}
      </>
    )
  }




}