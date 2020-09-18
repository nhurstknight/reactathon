import React from 'react'
import { Link, withRouter } from 'react-router-dom'

const Navbar = () => {

  return (
    <nav className="navbar is-dark">
      <div className="Navbar container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">Home</Link>
          <Link to="/films" className="navbar-item">Film Index</Link>
          <Link to="/randomise" className="navbar-item">Randomise</Link>
        </div>
      </div>
    </nav>
  )
}

export default withRouter(Navbar)