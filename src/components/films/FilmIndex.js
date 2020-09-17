import React from 'react'


import { getAllFilms } from '../../lib/api'

class FilmIndex extends React.Component {
  state = {
    films: null
  }

  async componentDidMount() {
    //get all films
    const response = await this.getAllFilms()
    console.log(response)
    // if console.log works, switch on below function to setState

    //add them to state
    // this.setState({
    //   films: response.data
    // })
  }

  render() {
    return null
  }
}

export default FilmIndex