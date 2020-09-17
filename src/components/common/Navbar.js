import React from 'react'
import { Link, withRouter } from 'react-router-dom'


const Navbar = () => {

  return (
    // <div>1</div>
    <nav className="navbar is-dark">
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">Home</Link>
          <Link to="/cheeses" className="navbar-item">Film Index</Link>
        </div>
      </div>
    </nav>
  )
}

export default withRouter(Navbar)
// Navbar
