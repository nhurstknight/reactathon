import React from 'react'
import { Link, withRouter } from 'react-router-dom'

// import { searchFunction } from '../../lib/api'
import Searchbar from '../common/SearchBar'

const Navbar = () => {

  return (
    // <div>1</div>
    <nav className="navbar is-dark">
      <div className="Navbar container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">Home</Link>
          <Link to="/films" className="navbar-item">Film Index</Link>
        </div>
      </div>
      <Searchbar />
    </nav>
  )
}

export default withRouter(Navbar)
// Navbar
