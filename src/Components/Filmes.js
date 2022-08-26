import React from 'react'
import Axios from 'axios'
import styled from 'styled-components'



export const Movies = styled.div`

background-color: #161720;
color: white;
`

export const H2 = styled.h2`
display: flex;
align-items: center;
justify-content: center;

`

export const Diiv = styled.div`
display: flex;
border: 4px solid black;
flex-direction: column;
align-items: center;
`
export const Img = styled.img`
width: 20%;
height: 10%;
display: flex;
align-items: center;
border: 3px solid black;
`

const FilmesAPI = Axios.create({
  baseURL: `https://api.themoviedb.org/3/movie/popular?api_key=4099ecc42004f449487b8c6b9095d783&language=pt-BR&page=1`
})

export default class Filmes extends React.Component{
    state= {
        movies: []
    }

    addFilmes = async () => {
        const resposta = await FilmesAPI.get();
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
        this.addFilmes()
      }

  render(){
    return(
      <Movies>
        <H2>GR Filmes</H2>
        {this.state.movies.map((item) => (
            <Diiv>
                <h3>{item.title}</h3>
                <Img src = {item.image} alt = 'Foto'/>
                <p>{item.overview}</p>
            </Diiv>
        ) )}
      </Movies>
    )
  }


}