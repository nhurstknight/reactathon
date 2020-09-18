import React from 'react'

import { getAllFilms } from '../../lib/api'
import FilmCard from './FilmCard'
import Searchbar from '../common/SearchBar'

import { searchFunction } from '../../lib/api'


class FilmIndex extends React.Component {
  state = {
    films: null,
    // totalPages: null,
    currentPage: 1
  }

  async componentDidMount() {

    const response = await getAllFilms(this.state.currentPage)
    console.log('getAllFilms', response)
    this.setState({
      films: response.data.results,
      currentPage: response.data.page
      // totalPages: response.data.totalPages
    })
  }

  
  async displayNewResults () {
    const response = await getAllFilms(this.state.currentPage)
    this.setState({
      films: response.data.results
    })
  }
  
  
  handleNextPage = () => {
    const plusOne = this.state.currentPage + 1
    console.log(plusOne, 'next page clicked')
    this.setState({ 
      currentPage: plusOne
    }, () => this.displayNewResults())
  }

  handlePreviousPage = () => {
    const minusOne = this.state.currentPage - 1
    console.log(minusOne, 'previous page clicked')
    this.setState({ 
      currentPage: minusOne
    }, () => this.displayNewResults())
  }


  //sort improrts
  onClickHandler = async(userInput) => {
    console.log(this.state.userInput)
    const response = await searchFunction(userInput)
    console.log(response)
    console.log(this.state.films)
    this.setState({
      films: response.data.results
    })
  } 


  render() {
    const { films } = this.state
    console.log(films)
    if ( !this.state.films ) return null
    return (
      <div className="section">
        <Searchbar onClickHandler={this.onClickHandler}/>
        <div className="container">
          <div className="columns is-multiline">
            {films && films.map(film => (
              <FilmCard key={film.id} {...film} />
            )) }
          </div>
        </div>
        <nav className="pagination" role="navigation" aria-label="pagination">
          <button onClick={this.handlePreviousPage} className="pagination-previous">Previous page</button>
          <button onClick={this.handleNextPage} className="pagination-next">Next page</button>
          <ul className="pagination-list">
            <li>
              <button className="pagination-link is-current" aria-label={this.state.currentPage} aria-current="page">{this.state.currentPage}</button>
            </li>
          </ul> 
        </nav>
      </div>
    )
  }
}

export default FilmIndex