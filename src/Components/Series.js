import React from 'react';
import Axios from 'axios';

const SeriesAPI = Axios.create({
  baseURL: 'https://api.themoviedb.org/3/tv/popular?api_key=4099ecc42004f449487b8c6b9095d783&language=en-US&page=1'
})

export default class Series extends React.Component{
    state= {
        movies: []
    }

    addFilmes = async () => {
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
        this.addFilmes()
      }

  render(){
    return(
      <>
        <h2>GR Series</h2>
        {this.state.movies.map((item) => (
            <div>
                <h3>{item.title}</h3>
                <img src = {item.image} alt = 'Foto'/>
                <p>{item.overview}</p>
            </div>
        ) )}
      </>
    )
  }




}