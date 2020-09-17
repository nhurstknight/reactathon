import React from 'react'
import { Link, withRouter } from 'react-router-dom'

// import { searchFunction } from '../../lib/api'
import Searchbar from '../common/SearchBar'
// import Randomise from '../common/Randomise'

const Navbar = () => {

  return (
    // <div>1</div>
    <nav className="navbar is-dark">
      <div className="Navbar container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">Home</Link>
          <Link to="/films" className="navbar-item">Film Index</Link>
          <Link to="/randomise" className="navbar-item">Randomise</Link>
        </div>
      </div>
      <Searchbar />
      {/* <Randomise /> */}
    </nav>
  )
}

export default withRouter(Navbar)
// Navbar
