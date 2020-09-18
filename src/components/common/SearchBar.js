import React from 'react'

import { searchFunction } from '../../lib/api'

class Searchbar extends React.Component {
  state = {
    userInput: ''
  }

  searchQuery = event => {
    const search = event.target.value
    this.setState({
      userInput: search
    })
  }

  onClickHandler = () => {
    searchFunction(this.state.userInput)
  }

  render() {
    const { userInput } = this.props
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