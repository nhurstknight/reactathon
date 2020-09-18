import React, { Component } from 'react'

import { getSingleFilm } from '../../lib/api'

class FilmShow extends Component {
  state = {
    film: null,
    genres: null
  }

  async componentDidMount() {
    console.log('mounting')
    // make a request for the single cheese
    const filmId = this.props.match.params.id
    const response = await getSingleFilm(filmId)
    console.log(response)
    this.setState({
      film: response.data
    })
    this.fixApiGenres()
  }

  fixApiGenres = () => {
    const myNewArray = []
    this.state.film.genres.forEach(genre => {
      myNewArray.push(genre.name)
      console.log(myNewArray)
    })
    this.setState({
      genres: myNewArray
    })
  }
  
  // mapGenres = () => {
  //   const myNewArray = []
  //   this.state.film.genres.forEach(genre => {
  //     myNewArray.push(genre.name)
  //     console.log(myNewArray)
  //   })
  //   this.setState({
  //     genres: myNewArray
  //   })
  // }


  render() {
    const { film } = this.state
    if ( !film ) {return (
      <h4 className="title is-4 has-text-centered">
      INVALID ID
      </h4>
    )
    }
    return (
      <section className="section"> 
        <div className="container"> 
          <div className="columns"> 
            <div className="column is-half">
              <figure className="image">
                <img src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`} alt={`${film.title} poster`}/>
              </figure>
            </div>
            <div className="column is-half">
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
                Description
              </h4>
              <p>{film.overview}</p>
              <hr />
              <h4 className="title is-4">
                Release date
              </h4>
              <p>{film.release_date}</p>
              <hr />    
            </div>
          </div>  
        </div>
      </section>
    )
  }
}

export default FilmShow