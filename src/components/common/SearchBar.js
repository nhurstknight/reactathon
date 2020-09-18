import React from 'react'
// import axios from 'axios'



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




  render() {
    console.log(this.props)
    const { userInput } = this.props
    return (
      <div className="SearchForm">
        <div className="container">
          <div className="field has-addons">
            <div className="control is-expanded">
              <input
                className="input is-medium"
                type="search"
                placeholder="Filter by name or country"
                value={userInput}
                onChange={this.searchQuery}
              />
            </div>
            <button onClick={() => this.props.onClickHandler(this.state.userInput)}
              className="button is-success is-light is-focused">
              Search
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Searchbar