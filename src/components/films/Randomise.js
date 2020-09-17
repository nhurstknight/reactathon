import React from 'react'

// import FilmShow from './common/FilmsShow'
import getRandomFilm from '../../lib/api'
import { Link } from 'react-router-dom'

class Randomise extends React.Component {
  state = {
    id: 824
  }

  generateRandomNumber = () => {
    const random = Math.floor(Math.random() * 11)
    console.log(random)

    // const compChoice = this.choices[random]

    // const result = this.setState({ playerChoice: choice })

    // this.setState({ playerChoice: choice, compChoice, result })
  }

  async componentDidMount() {
    this.generateRandomNumber()
    console.log('mounting')
    // make a request for the single cheese
    const randomFilmId = this.state.id
    const response = await getRandomFilm(randomFilmId)
    console.log(response)
    this.setState({
      id: response.data
    })
    // this.fixApiGenres()
  }

  render() {
    
    return (
      <Link to={`/films/${this.state.id}`}> </Link>
    ) 
  }
}

export default Randomise

      // <div class="container">
      //   <Link to={`/films/${id}`}>
      //   <div class="notification">
      //     This container is <strong>centered</strong> on desktop.
      //     <button class="button is-large is-fullwidth">Large</button>
      //   </div>
      //   </Link>
      // </div>

    // <FilmShow />
    // button
    // random film link
    // generate a FilmShow page