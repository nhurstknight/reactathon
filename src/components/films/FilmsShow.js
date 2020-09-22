import React, { Component } from 'react'

import { getSingleFilm } from '../../lib/api'

class FilmShow extends Component {
  state = {
    film: null,
    genres: null
  }

  async componentDidMount() {
    const filmId = this.props.match.params.id
    const response = await getSingleFilm(filmId)
    this.setState({
      film: response.data
    })
    console.log(this.state.film)
    this.fixApiGenres()
  }

  fixApiGenres = () => {
    const myNewArray = []
    let genresString = null
    this.state.film.genres.forEach(genre => {
      myNewArray.push(genre.name)
      genresString = myNewArray.join(', ')
    })
    this.setState({
      genres: genresString
    })
  }


  render() {
    const { film } = this.state
    if ( !film ) {
      return (
        <h1 className="loading-film-index">Loading...</h1>
        // <section>
        //   {/* <h4 className="title is-4 has-text-centered">INVALID ID</h4> */}
        //   <h4 className="title is-4 has-text-centered">Error 404</h4>
        //   <h2 className="title is-4 has-text-centered">Film not found, please try again</h2>
        // </section>
        
      )
    }
    return (
      <section className="section"> 
        <div className="FilmShow container"> 
          <div className="columns"> 
            <div className="column is-half">
              <figure className="Filmshow image">
                <img src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`} alt={`${film.title} poster`}/>
              </figure>
            </div>
            <div className="info column is-half">
              <h3 className="title is-3">
                Title
              </h3>
              <p>{film.title}</p>
              <hr />
              <h4 className="title is-4">
                Genre(s)
              </h4>
              {/* need to convert genre id to text */}
              <p>{this.state.genres}</p> 
              <hr />
              <h4 className="title is-4">
                Release date
              </h4>
              <p>{film.release_date}</p>
              <hr />    
              <h4 className="title is-4">
                Description
              </h4>
              <p>{film.overview}</p>
              <hr />
            </div>
          </div>  
        </div>
      </section>
    )
  }
}

export default FilmShow