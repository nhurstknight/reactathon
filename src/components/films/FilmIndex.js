import React from 'react'

import { getAllFilms } from '../../lib/api'
import FilmCard from './FilmCard'

class FilmIndex extends React.Component {
  state = {
    films: null,
    totalPages: null,
    currentPage: 1
  }

  async componentDidMount() {
    console.log('DID MOUNT')
    //get all films
    const response = await getAllFilms(this.state.currentPage)
    console.log('getAllFilms', response)
    // if console.log works, switch on below function to setState
    //add them to state
    this.setState({
      films: response.data.results,
      currentPage: response.data.page,
      totalPages: response.data.totalPages
    })
  }
  
  async displayNewResults () {
    const response = await getAllFilms(this.state.currentPage)
    this.setState({
      films: response.data.results,
      currentPage: response.data.page,
      totalPages: response.data.totalPages
    })
  }
  
  
  handleNextPage = () => {
    const plusOne = this.state.currentPage + 1
    console.log(plusOne, 'next page clicked')
    this.setState({
      currentPage: plusOne
    })
    // the below makes the setState fail
    this.displayNewResults()
  }

  handlePreviousPage = () => {
    const minusOne = this.state.currentPage - 1
    console.log(minusOne, 'previous page clicked')
    this.setState({
      currentPage: minusOne
    })
    // the below makes the setState fail
    // this.displayNewResults()
  }

  render() {
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
        <nav className="pagination" role="navigation" aria-label="pagination">
          <button onClick={this.handlePreviousPage} className="pagination-previous">Previous page</button>
          <button onClick={this.handleNextPage} className="pagination-next">Next page</button>
          <ul className="pagination-list">
            {/* <li>
              <a class="pagination-link" aria-label="Goto page 1">1</a>
            </li>
            <li>
              <span class="pagination-ellipsis">&hellip;</span>
            </li>
            <li>
              <a class="pagination-link" aria-label="Goto page 45">45</a>
            </li> */}
            <li>
              <button className="pagination-link is-current" aria-label={this.state.currentPage} aria-current="page">{this.state.currentPage}</button>
            </li>
            {/* <li>
              <a class="pagination-link" aria-label="Goto page 4">47</a>
            </li>
            <li>
              <span class="pagination-ellipsis">&hellip;</span>
            </li>
            <li>
              <a class="pagination-link" aria-label="Goto page 86">86</a>
            </li>*/}
          </ul> 
        </nav>
      </div>
      
    )
  }
}

export default FilmIndex