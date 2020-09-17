import React from 'react'

import { getAllFilms } from '../../lib/api'
import FilmCard from './FilmCard'

class FilmIndex extends React.Component {
  state = {
    films: null,
    currentPage: 1,
    totalPages: null,
    onePage: 1
  }

  async componentDidMount() {
    //get all films
    const response = await getAllFilms(this.state.page)
    console.log(response)
    // if console.log works, switch on below function to setState
    //add them to state
    this.setState({
      films: response.data.results,
      page: response.data.page,
      totalPages: response.data.totalPages
    })
  }

  refreshPage = () => {
    
  }

  handleNextPage = () => {
    const plusOne = this.state.currentPage + this.state.onePage
    this.setState({
      currentPage: plusOne
    })
  }

  handlePreviousPage = () => {
    const minusOne = this.state.currentPage - this.state.onePage
    this.setState({
      currentPage: minusOne
    })
  }


  //class method getfilms

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
        <nav class="pagination" role="navigation" aria-label="pagination">
          <a onClick={this.handlePreviousPage} class="pagination-previous">Previous</a>
          <a onClick={this.handleNextPage} class="pagination-next">Next page</a>
          <ul class="pagination-list">
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
              <a class="pagination-link is-current" aria-label={this.state.page} aria-current="page">{this.state.page}</a>
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