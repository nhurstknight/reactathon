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
    this.setState({ 
      currentPage: plusOne
    }, () => this.displayNewResults())
  }

  handlePreviousPage = () => {
    const minusOne = this.state.currentPage - 1
    this.setState({ 
      currentPage: minusOne
    }, () => this.displayNewResults())
  }


  //sort improrts
  onClickHandler = async(userInput) => {
    const response = await searchFunction(userInput)
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
        <nav className="pagination is-centered" role="navigation" aria-label="pagination">
          {/* <a class="pagination-previous">Previous</a>
          <a class="pagination-next">Next page</a> */}
          <button onClick={this.handlePreviousPage} className="pagination-previous">Previous page</button>
          <button onClick={this.handleNextPage} className="pagination-next">Next page</button>
          <ul className="pagination-list">
            {/* <li><a class="pagination-link" aria-label="Goto page 1">1</a></li>
            <li><span class="pagination-ellipsis">&hellip;</span></li>
            <li><a class="pagination-link" aria-label="Goto page 45">45</a></li> */}
            {/* <li><a class="pagination-link is-current" aria-label="Page 46" aria-current="page">46</a></li> */}
            <li className="pagination-link is-current" aria-label={this.state.currentPage} aria-current="page">{this.state.currentPage}</li>
            {/* <li><a class="pagination-link" aria-label="Goto page 47">47</a></li>
            <li><span class="pagination-ellipsis">&hellip;</span></li>
            <li><a class="pagination-link" aria-label="Goto page 86">86</a></li> */}
          </ul>
        </nav>
      </div>
    )
  }
}

export default FilmIndex