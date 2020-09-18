import React from 'react'

// import FilmShow from './common/FilmsShow'
import { getRandomFilm } from '../../lib/api'
import { Redirect } from 'react-router-dom'

class Randomise extends React.Component {
  state = {
    id: null
  }

  generateRandomNumber = () => {
    const random = Math.floor(Math.random() * 1100)
    console.log(random)
    this.setState({
      id: random
    })
  }

  async componentDidMount() {
    this.generateRandomNumber()
    const randomFilmId = this.state.id
    if (this.state.id === Number) {
      const response = await getRandomFilm(randomFilmId)
      console.log(response)
      this.setState({
        id: response.data
      })
    }
  }

  render() {
    if (this.state.id === Number) {
      return (
        <Redirect to={`/films/${this.state.id}`}/>
      ) 
    }
  }
}

export default Randomise
