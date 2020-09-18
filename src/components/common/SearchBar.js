import React from 'react'

import { searchFunction } from '../../lib/api'

class Searchbar extends React.Component {
  state = {
    userInput: '',
    films: null
  }

  searchQuery = event => {
    const search = event.target.value
    this.setState({
      userInput: search
    })
    console.log(this.state.userInput)
  }

  onClickHandler () {
    console.log(this.state.userInput)
    // const response = searchFunction(this.state.userInput)
    // console.log(response)
    // console.log(this.state.films)
    // this.setState({ response })
    // this.setState({
    //   films: response
    // })
  }


  render() {
    const { userInput } = this.props
    // if ( !this.state.films ) return null
    return (
      <div className="Searchbar-wrapper">
        <div className="Seachbar control">
        
          <input 
            className="Searchbar input is-primary" 
            type="text" 
            placeholder="Search..." 
            // <i class="fa fa-search" aria-hidden="true"></i>
            value={userInput}
            onChange={this.searchQuery} />
          <button onClick={this.onClickHandler}
            className="button is-success is-light is-focused">
            Search
          </button>
          {/* <div className="buttons">
            
          </div> */}
        </div>
      </div>
      
    )
  }
}

export default Searchbar