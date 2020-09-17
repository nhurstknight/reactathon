import React from 'react'
// import { Link, withRouter } from 'react-router-dom'


const Navbar = () => {

  const handleLogout = () => {
    logout()
  }

  return (
    <nav className="navbar is-dark">
      <div className="container">
        <div className="navbar-brand">
      </div>
    </nav>
  )
}

export default withRouter(Navbar)