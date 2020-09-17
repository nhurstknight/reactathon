import React from 'react'

import { getAllFilms } from '../../lib/api'
import FilmCard from './FilmCard'

class FilmIndex extends React.Component {
  state = {
    films: null
  }

  async componentDidMount() {
    console.log('did mount')
    //get all films
    const response = await getAllFilms()
    console.log(response)
    // if console.log works, switch on below function to setState
    //add them to state
    this.setState({
      films: response.data.results
    })
  }

  render() {
    console.log(this.state.films)
    if ( !this.state.films ) return null
    return (
      <div className="section">
        <div className="container">
          <div className="columns is-multiline">
            { this.state.films.map(film => (
              <FilmCard key={film.id} {...film} />
            )) }
          </div>
        </div>
      </div>
    )
  }
}

export default FilmIndex